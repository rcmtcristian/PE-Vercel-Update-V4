import type { VercelRequest, VercelResponse } from "@vercel/node";

type NewsletterChoice = "hackathons" | "sponsor_env" | "company_volunteering";

const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN!;

const LIST_IDS: Record<NewsletterChoice, string> = {
  hackathons: process.env.HUBSPOT_LIST_HACKATHONS!,
  sponsor_env: process.env.HUBSPOT_LIST_VOLUNTEERS!,
  company_volunteering: process.env.HUBSPOT_LIST_CLIMATE_DMS!,
};

const COHORT_LABELS: Record<NewsletterChoice, string> = {
  hackathons: "OSS Mentorship",
  sponsor_env: "ERG Leaders",
  company_volunteering: "Advisors",
};

async function hubspotRequest(path: string, init: RequestInit) {
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, choice } = req.body as {
      email: string;
      choice: NewsletterChoice;
    };

    if (!email || !choice) {
      return res.status(400).json({ error: "Missing email or choice" });
    }

    const cohortLabel = COHORT_LABELS[choice];
    const listId = LIST_IDS[choice];

    const contact = await createOrUpdateContact(email, cohortLabel);

    if (choice === "hackathons") {
      try {
        await addContactToList(listId, contact.email);
      } catch (err) {
        console.warn("Hackathons list add failed, using fallback", err);
      }
    } else {
      await addContactToList(listId, contact.email);
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    res.status(500).json({ error: "Failed to process signup" });
  }
}
