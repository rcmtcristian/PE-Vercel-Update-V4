import React, { useState } from "react";
import { MainButton } from "../../components/MainButton";

const NewsletterSection = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [email, setEmail] = useState("");

  const interests = [
    "Attending hackathons",
    "Sponsoring environmental projects",
    "Company Volunteering",
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = () => {
    console.log("Email:", email, "Interests:", selectedInterests);
    // Handle form submission
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
                      checked={selectedInterests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                      className="appearance-none w-5 h-5 border-2 border-[#3D5A4F] rounded-full cursor-pointer checked:border-[#3D5A4F] focus:ring-2 focus:ring-[#3D5A4F]/30"
                    />
                    {selectedInterests.includes(interest) && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 w-3 h-3 bg-[#3D5A4F] rounded-full"></div>
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
              className="flex-1 w-full px-5 py-3 rounded-md border border-[#3D5A4F]/20 bg-white focus:border-[#3D5A4F] focus:outline-none focus:ring-2 focus:ring-[#3D5A4F]/20 text-[#2C4A3E] placeholder:text-[#3D5A4F]/40 text-sm md:text-base"
            />
            <div onClick={handleSubmit}>
              <MainButton label="Get Involved" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
