import { useState } from "react";
import { MainButton } from "../../components/MainButton";

type NewsletterChoice = "hackathons" | "sponsor_env" | "company_volunteering";

const NewsletterSection = () => {
  const [selectedInterest, setSelectedInterest] = useState<
    NewsletterChoice | ""
  >("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const interests: { label: string; value: NewsletterChoice }[] = [
    { label: "Attending hackathons", value: "hackathons" },
    { label: "Sponsoring environmental projects", value: "sponsor_env" },
    { label: "Company Volunteering", value: "company_volunteering" },
  ];

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
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          choice: selectedInterest,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you for subscribing!",
      });

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
          <div>
            <p className="text-base md:text-lg text-[#2C4A3E] font-medium mb-4">
              What type of updates are you interested in?
            </p>
            <div className="space-y-3">
              {interests.map((interest) => (
                <label
                  key={interest.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input
                      type="radio"
                      name="interest"
                      value={interest.value}
                      checked={selectedInterest === interest.value}
                      onChange={(e) =>
                        setSelectedInterest(e.target.value as NewsletterChoice)
                      }
                      className="appearance-none w-5 h-5 border-2 border-[#3D5A4F] rounded-full cursor-pointer checked:border-[#3D5A4F] focus:ring-2 focus:ring-[#3D5A4F]/30"
                    />
                    {selectedInterest === interest.value && (
                      <div className="absolute w-3 h-3 bg-[#3D5A4F] rounded-full pointer-events-none"></div>
                    )}
                  </div>

                  <span className="text-sm md:text-base text-[#2C4A3E] group-hover:text-[#3D5A4F]">
                    {interest.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

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
