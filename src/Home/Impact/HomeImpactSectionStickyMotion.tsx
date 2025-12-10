import React, { useState, useEffect, useRef } from "react";
import {
  useTransform,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import { useLenis } from "lenis/react";

interface Section {
  id: string;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  image: string;
  extraContent?: React.ReactNode;
}

const HomeImpactSectionStickyMotion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const scrollYProgress = useMotionValue(0);
  const lenis = useLenis();
  const lockTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Transform scroll progress to active index
  const sectionProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, sections.length - 1]
  );

  // Control Lenis based on scroll lock state
  useEffect(() => {
    if (!lenis) return;

    if (isScrollLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isScrollLocked, lenis]);

  // Detect when section enters viewport and lock scroll with delay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay locking by 300ms to allow natural scroll into section
            lockTimeoutRef.current = setTimeout(() => {
              setIsScrollLocked(true);
            }, 300);
          } else {
            // Clear timeout if user scrolls away before lock activates
            if (lockTimeoutRef.current) {
              clearTimeout(lockTimeoutRef.current);
            }

            if (!entry.isIntersecting && activeIndex === 0) {
              setIsScrollLocked(false);
            }
          }
        });
      },
      {
        threshold: 0.6, // Increased from 0.5 to delay trigger point
        rootMargin: "-10% 0px -10% 0px", // Add margin to delay intersection
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (lockTimeoutRef.current) {
        clearTimeout(lockTimeoutRef.current);
      }
    };
  }, [activeIndex]);

  // Handle wheel events to control internal scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isScrollLocked || !scrollContainerRef.current) return;

      e.preventDefault();
      e.stopPropagation();

      const container = scrollContainerRef.current;
      const delta = e.deltaY;
      const currentScroll = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;

      // Smooth increment scrolling
      const newScroll = currentScroll + delta;

      container.scrollTop = newScroll;

      // Increased buffer from 10 to 50px for delayed unlock
      const unlockBuffer = 50;

      // Check if at the last card and scrolling down
      // Add delay by checking if user has scrolled past threshold multiple times
      if (
        activeIndex === sections.length - 1 &&
        delta > 0 &&
        currentScroll >= maxScroll - unlockBuffer
      ) {
        // Delay unlock by 200ms to ensure user really wants to leave
        setTimeout(() => {
          if (
            scrollContainerRef.current &&
            scrollContainerRef.current.scrollTop >= maxScroll - unlockBuffer
          ) {
            setIsScrollLocked(false);
          }
        }, 200);
      }

      // Check if at first card and scrolling up
      if (activeIndex === 0 && delta < 0 && currentScroll <= unlockBuffer) {
        setTimeout(() => {
          if (
            scrollContainerRef.current &&
            scrollContainerRef.current.scrollTop <= unlockBuffer
          ) {
            setIsScrollLocked(false);
          }
        }, 200);
      }
    };

    const container = containerRef.current;
    if (container && isScrollLocked) {
      container.addEventListener("wheel", handleWheel, {
        passive: false,
        capture: true,
      });
      return () => container.removeEventListener("wheel", handleWheel, true);
    }
  }, [isScrollLocked, activeIndex, sections.length]);

  // Track scroll progress within the container
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const scrollTop = scrollContainerRef.current.scrollTop;
      const scrollHeight =
        scrollContainerRef.current.scrollHeight -
        scrollContainerRef.current.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      scrollYProgress.set(progress);

      const newIndex = Math.min(
        Math.floor(progress * sections.length),
        sections.length - 1
      );

      setActiveIndex(newIndex);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [sections.length, scrollYProgress]);

  // Listen to scroll progress changes
  useMotionValueEvent(sectionProgress, "change", (latest) => {
    console.log("Scroll progress:", latest);
  });

  const activeSection = sections[activeIndex];

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#D4E4E3] relative"
      data-lenis-prevent={isScrollLocked}
    >
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sticky Navigation Sidebar */}
          <div className="lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
            <nav className="flex flex-row gap-4 lg:flex-col">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    if (!scrollContainerRef.current) return;

                    const targetScroll =
                      (index / sections.length) *
                      (scrollContainerRef.current.scrollHeight -
                        scrollContainerRef.current.clientHeight);

                    scrollContainerRef.current.scrollTo({
                      top: targetScroll,
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
            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="absolute inset-0 overflow-y-scroll opacity-0 pointer-events-auto"
              style={{ height: "600px" }}
            >
              <div style={{ height: `${sections.length * 100}vh` }} />
            </div>

            {/* Visible fixed content */}
            <motion.div
              className="sticky top-24"
              style={{ opacity: useTransform(scrollYProgress, [0, 1], [1, 1]) }}
            >
              <div className="bg-[#C8DDD9] rounded-3xl overflow-hidden shadow-lg transition-all duration-400">
                {/* Image */}
                <div className="w-full h-64 overflow-hidden md:h-80">
                  <motion.img
                    src={activeSection.image}
                    alt={activeSection.title}
                    className="object-cover w-full h-full"
                    key={activeSection.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-[#2C4A3E] mb-4"
                    key={`title-${activeSection.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {activeSection.title}: {activeSection.subtitle}
                  </motion.h3>

                  <motion.h4
                    className="text-xl font-bold text-[#3D5A4F] mb-4"
                    key={`heading-${activeSection.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {activeSection.heading}
                  </motion.h4>

                  <motion.p
                    className="text-[#2C4A3E] leading-relaxed mb-6"
                    key={`desc-${activeSection.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {activeSection.description}
                  </motion.p>

                  {activeSection.extraContent && (
                    <motion.div
                      key={`extra-${activeSection.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {activeSection.extraContent}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {sections.map((_, index) => (
                  <motion.div
                    key={index}
                    className="h-2 rounded-full bg-[#3D5A4F]/30"
                    style={{
                      width: index === activeIndex ? 32 : 8,
                    }}
                    animate={{
                      backgroundColor:
                        index === activeIndex
                          ? "#3D5A4F"
                          : "rgba(61, 90, 79, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>

              {/* Scroll hint */}
              {/* {isScrollLocked && activeIndex < sections.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-4 text-[#3D5A4F] text-sm"
                >
                  Scroll to see more ({activeIndex + 1}/{sections.length})
                </motion.div> */}
              {/* )} */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImpactSectionStickyMotion;
