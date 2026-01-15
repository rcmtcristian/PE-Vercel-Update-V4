import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));

type NewsletterChoice = "hackathons" | "sponsor_env" | "company_volunteering";

const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN!;
const IS_MOCK = process.env.MOCK_HUBSPOT === "true";

const LIST_IDS: Record<NewsletterChoice, string> = {
  hackathons: process.env.HUBSPOT_LIST_HACKATHONS || "mock-123",
  sponsor_env: process.env.HUBSPOT_LIST_VOLUNTEERS || "mock-456",
  company_volunteering: process.env.HUBSPOT_LIST_CLIMATE_DMS || "mock-789",
};

const COHORT_LABELS: Record<NewsletterChoice, string> = {
  hackathons: "OSS Mentorship", // was "AOSS mentorship" - use "Hackathon" if that fits better
  sponsor_env: "ERG Leaders", // was "ERG leaders" - capital L
  company_volunteering: "Advisors", // was "advisors" - capital A
};

async function hubspotRequest(path: string, init: RequestInit) {
  if (IS_MOCK) {
    console.log("[MOCK] HubSpot request:", path);
    if (path.includes("/crm/v3/objects/contacts")) {
      return { id: "12345", properties: { email: "test@example.com" } };
    }
    return { success: true };
  }

  const res = await fetch(`https://api.hubapi.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });

  if (!res.ok) {
    const errorText = await res.text().catch(() => "");
    throw new Error(`HubSpot API error (${res.status}): ${errorText}`);
  }
  return res.json();
}

async function createOrUpdateContact(email: string, cohortLabel: string) {
  const contactData = await hubspotRequest("/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({
      properties: { email, cohort_label: cohortLabel },
    }),
  });
  return { id: contactData.id, email: contactData.properties.email };
}

async function addContactToList(listId: string, email: string) {
  return hubspotRequest(`/contacts/v1/lists/${listId}/add`, {
    method: "POST",
    body: JSON.stringify({ emails: [email] }),
  });
}

app.post("/api/newsletter-signup", async (req, res) => {
  try {
    const { email, choice } = req.body as {
      email: string;
      choice: NewsletterChoice;
    };

    if (!email || !choice) {
      return res.status(400).json({ error: "Missing email or choice" });
    }

    console.log(`Processing signup: ${email} → ${choice}`);

    const cohortLabel = COHORT_LABELS[choice];
    const listId = LIST_IDS[choice];

    const contact = await createOrUpdateContact(email, cohortLabel);
    console.log(`Contact created: ${contact.id}`);

    if (choice === "hackathons") {
      try {
        await addContactToList(listId, contact.email);
        console.log(`Added to hackathons list`);
      } catch (err) {
        console.warn("Hackathons list add failed, using fallback", err);
      }
    } else {
      await addContactToList(listId, contact.email);
      console.log(`Added to ${choice} list`);
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    res.status(500).json({ error: "Failed to process signup" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
