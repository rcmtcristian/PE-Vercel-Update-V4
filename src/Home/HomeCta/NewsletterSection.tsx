import React, { useState } from "react";
import { MainButton } from "../../components/MainButton";

const NewsletterSection = () => {
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  //  Portal ID and Form GUID
  const HUBSPOT_PORTAL_ID = "YOUR_PORTAL_ID";
  const HUBSPOT_FORM_GUID = "YOUR_FORM_GUID";

  const interests = [
    "Attending hackathons",
    "Sponsoring environmental projects",
    "Company Volunteering",
  ];

  // Get HubSpot tracking cookie for visitor tracking
  const getCookie = (name: string): string | null => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() || null;
    }
    return null;
  };

  const handleSubmit = async () => {
    if (!email || !selectedInterest) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your email and select an interest.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Prepare HubSpot submission data
      const submissionData = {
        submittedAt: Date.now(),
        fields: [
          {
            name: "email",
            value: email,
          },
          {
            name: "newsletter_interest", // Single select custom property
            value: selectedInterest,
          },
        ],
        context: {
          hutk: getCookie("hubspotutk"), // HubSpot tracking cookie
          pageUri: window.location.href,
          pageName: document.title,
        },
        legalConsentOptions: {
          consent: {
            consentToProcess: true,
            text: "I agree to receive communications from Climate Joy",
            communications: [
              {
                value: true,
                subscriptionTypeId: 999, // Replace with your subscription type ID
                text: "I agree to receive marketing emails",
              },
            ],
          },
        },
      };

      // Submit to HubSpot Forms API
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const result = await response.json();

      setSubmitStatus({
        type: "success",
        message: result.inlineMessage || "Thank you for subscribing!",
      });

      // Reset form
      setEmail("");
      setSelectedInterest("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full px-4 py-12 md:py-16 bg-[#D4E4E3]">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#2C4A3E] mb-6 md:mb-8">
          Join Our Newsletter for Climate Joy
        </h2>

        <div className="space-y-6">
          {/* Radio Options */}
          <div>
            <p className="text-base md:text-lg text-[#2C4A3E] font-medium mb-4">
              What type of updates are you interested in?
            </p>
            <div className="space-y-3">
              {interests.map((interest) => (
                <label
                  key={interest}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="radio"
                      name="interest"
                      value={interest}
                      checked={selectedInterest === interest}
                      onChange={(e) => setSelectedInterest(e.target.value)}
                      className="appearance-none w-5 h-5 border-2 border-[#3D5A4F] rounded-full cursor-pointer checked:border-[#3D5A4F] focus:ring-2 focus:ring-[#3D5A4F]/30"
                    />
                    {selectedInterest === interest && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#3D5A4F] rounded-full"></div>
                    )}
                  </div>
                  <span className="text-sm md:text-base text-[#2C4A3E] group-hover:text-[#3D5A4F]">
                    {interest}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Email Input and Button */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
              className="flex-1 w-full px-5 py-3 rounded-md border border-[#3D5A4F]/20 bg-white focus:border-[#3D5A4F] focus:outline-none focus:ring-2 focus:ring-[#3D5A4F]/20 text-[#2C4A3E] placeholder:text-[#3D5A4F]/40 text-sm md:text-base disabled:opacity-50"
            />
            <div onClick={handleSubmit}>
              <MainButton
                label={isSubmitting ? "Submitting..." : "Get Involved"}
                type="submit"
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`p-4 rounded-md text-center ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
