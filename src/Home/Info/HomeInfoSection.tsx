import React from "react";

const HomeInfoSection = () => {
  const cards = [
    {
      image: "brasil-hack-mentor.jpg",
      title: "Developer Engagement",
      description:
        "Students level up their skills by hacking on real-world projects and launching their career with us.",
    },
    {
      image: "brasil-hack-presentation.png",
      title: "Company Volunteering",
      description:
        "Companies can sponsor hackathons or an AI Day with us to showcase their platform and tools in action.",
    },
    {
      image: "nature-cleanup.jpeg",
      title: "Environmental Progress",
      description:
        "We ship data and AI tools that help our conservation partners accelerate reforestation and land restoration.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start w-full px-4 py-16 bg-[#D4E4E3]">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-12 text-3xl font-bold text-center text-[#3D5A4F] md:text-5xl">
          Let's Reforest 30 Million Acres with Hackathons
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden shadow-sm rounded-3xl"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden md:h-56">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 bg-[#C8DDD9]">
                <h3 className="mb-3 text-xl font-bold text-[#2C4A3E]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#2C4A3E] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeInfoSection;
