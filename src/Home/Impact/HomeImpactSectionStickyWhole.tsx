import React, { useState, useEffect, useRef } from "react";

interface Section {
  id: string;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  image: string;
  extraContent?: React.ReactNode;
}

const HomeImpactSectionStickyWhole = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  const sections: Section[] = [
    {
      id: "students",
      title: "Students",
      subtitle: "Projects with Real Impact for Your Career",
      heading:
        "80% of our hackathon participants secure tech roles within 3 months of completing a project",
      description:
        "Start your story in tech by building projects where you can make a real impact in your community. Our mission is to be the bridge to your next role in the tech industry. Our hackathons offer opportunities to learn directly from industry experts who have years of experience and deep knowledge.",
      image: "students-image.jpg",
      extraContent: (
        <div className="mt-6">
          <p className="mb-3 font-semibold text-[#2C4A3E]">
            Build one of the most relevant portfolios across:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-[#2C4A3E]">
              <span className="text-[#3D5A4F] mt-1">🤖</span>
              <span>AI</span>
            </li>
            <li className="flex items-start gap-2 text-[#2C4A3E]">
              <span className="text-[#3D5A4F] mt-1">⚙️</span>
              <span>Microservices architecture</span>
            </li>
            <li className="flex items-start gap-2 text-[#2C4A3E]">
              <span className="text-[#3D5A4F] mt-1">🔒</span>
              <span>Security for active users</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "companies",
      title: "Companies",
      subtitle: "Build Your Give Back Strategy",
      heading:
        "1 hackathon = $600-$2,000 donation credits with your giving platform",
      description:
        "Our hack events-in-a-box easily integrates with your Volunteerism and Sustainability Programs. We have already supported organizations with raising more than $160,000 through hackathons.",
      image: "companies-image.png",
      extraContent: (
        <div className="grid grid-cols-2 gap-4 mt-6">
          <img
            src="benevity-logo.png"
            alt="Benevity"
            className="object-contain h-8"
          />
          <img
            src="yourcause-logo.png"
            alt="YourCause"
            className="object-contain h-8"
          />
          <img
            src="brightfunds-logo.svg"
            alt="BrightFunds"
            className="object-contain h-8"
          />
          <img
            src="charityengine-logo.png"
            alt="CharityEngine"
            className="object-contain h-8"
          />
        </div>
      ),
    },
    {
      id: "environmental-partners",
      title: "Environmental Partners",
      subtitle: "Benefit from Custom Tools for Land Restoration",
      heading:
        "Our goal is to reforest 30 million acres of land by 2030 in the United States, India, and Brazil",
      description:
        "Most conservation projects take 5-7 years to start seeing success. Our hacks can change this. We translate technological needs from current conservation projects into meaningful open-source data and AI tools that accelerate reforestation and land restoration. Through our hackathons, we support our environmental partners' efforts to protect forests, waterways, and biodiversity.",
      image: "environmental-partners-image.png",
    },
  ];

  // Lock/unlock body scroll based on completion
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isScrollLocked]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const scrollTop = scrollContainerRef.current.scrollTop;
      const sectionHeight = window.innerHeight;
      const newIndex = Math.min(
        Math.floor(scrollTop / sectionHeight),
        sections.length - 1
      );

      setActiveIndex(newIndex);

      // Unlock scroll when user reaches the last card
      if (newIndex === sections.length - 1) {
        setIsScrollLocked(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [sections.length]);

  // Prevent wheel events from escaping the container
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || !isScrollLocked) return;

      const scrollContainer = scrollContainerRef.current;
      const isAtTop = scrollContainer.scrollTop === 0;
      const isAtBottom =
        Math.abs(
          scrollContainer.scrollHeight -
            scrollContainer.clientHeight -
            scrollContainer.scrollTop
        ) < 1;

      // If trying to scroll up at top or down at bottom, prevent default
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [isScrollLocked]);

  const activeSection = sections[activeIndex];

  return (
    <div ref={containerRef} className="w-full bg-[#D4E4E3] relative">
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sticky Navigation Sidebar */}
          <div className="lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
            <nav className="flex flex-row gap-4 lg:flex-col">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollContainerRef.current?.scrollTo({
                      top: index * window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                  className={`text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#C8DDD9] border-l-4 border-[#3D5A4F] text-[#2C4A3E] font-bold"
                      : "bg-transparent text-[#3D5A4F] hover:bg-[#C8DDD9]/50"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Fixed Content Area with Scroll Detection */}
          <div className="relative lg:w-3/4">
            {/* Hidden scroll container */}
            <div
              ref={scrollContainerRef}
              className="absolute inset-0 overflow-y-scroll opacity-0 pointer-events-auto"
              style={{ height: "600px" }}
            >
              <div style={{ height: `${sections.length * 100}vh` }} />
            </div>

            {/* Visible fixed content */}
            <div className="sticky top-24">
              <div className="bg-[#C8DDD9] rounded-3xl overflow-hidden shadow-lg transition-all duration-400">
                {/* Image */}
                <div className="w-full h-64 overflow-hidden md:h-80">
                  <img
                    src={activeSection.image}
                    alt={activeSection.title}
                    className="object-cover w-full h-full transition-opacity duration-400"
                    key={activeSection.id}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2C4A3E] mb-4 transition-all duration-400">
                    {activeSection.title}: {activeSection.subtitle}
                  </h3>

                  <h4 className="text-xl font-bold text-[#3D5A4F] mb-4 transition-all duration-400">
                    {activeSection.heading}
                  </h4>

                  <p className="text-[#2C4A3E] leading-relaxed mb-6 transition-all duration-400">
                    {activeSection.description}
                  </p>

                  {activeSection.extraContent && (
                    <div className="transition-all duration-400">
                      {activeSection.extraContent}
                    </div>
                  )}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-[#3D5A4F]"
                        : "w-2 bg-[#3D5A4F]/30"
                    }`}
                  />
                ))}
              </div>

              {/* Scroll lock indicator */}
              {isScrollLocked && (
                <div className="text-center mt-4 text-sm text-[#3D5A4F]">
                  Scroll through all cards to continue
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImpactSectionStickyWhole;
