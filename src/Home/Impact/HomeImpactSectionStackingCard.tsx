"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    title: "Students",
    subtitle: "Projects with Real Impact for Your Career",
    heading:
      "80% of our hackathon participants secure tech roles within 3 months of completing a project",
    description:
      "Start your story in tech by building projects where you can make a real impact in your community. Our mission is to be the bridge to your next role in the tech industry. Our hackathons offer opportunities to learn directly from industry experts who have years of experience and deep knowledge.",
    src: "students-image.jpg",
    color: "#62266b",
    textColor: "#ffffff",
    extraContent: (
      <div className="mt-3 lg:mt-4 xl:mt-6">
        <p className="mb-2 font-semibold text-xs lg:text-sm xl:text-base">
          Build one of the most relevant portfolios across:
        </p>
        <ul className="space-y-1">
          <li className="flex items-start gap-2 text-xs lg:text-sm xl:text-base">
            <span className="mt-1">🤖</span>
            <span>AI</span>
          </li>
          <li className="flex items-start gap-2 text-xs lg:text-sm xl:text-base">
            <span className="mt-1">⚙️</span>
            <span>Microservices architecture</span>
          </li>
          <li className="flex items-start gap-2 text-xs lg:text-sm xl:text-base">
            <span className="mt-1">🔒</span>
            <span>Security for active users</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Companies",
    subtitle: "Build Your Give Back Strategy",
    heading:
      "1 hackathon = $600-$2,000 donation credits with your giving platform",
    description:
      "Our hack events-in-a-box easily integrates with your Volunteerism and Sustainability Programs. We have already supported organizations with raising more than $160,000 through hackathons.",
    src: "companies-image.png",
    color: "#eaa03e",
    textColor: "#252F67",
    extraContent: (
      <div className="grid grid-cols-2 gap-2 lg:gap-3 xl:gap-4 mt-3 lg:mt-4 xl:mt-6 ">
        <img
          src="benevity-logo.png"
          alt="Benevity"
          className="object-contain h-5 lg:h-6 xl:h-8"
        />
        <img
          src="yourcause-logo.png"
          alt="YourCause"
          className="object-contain h-5 lg:h-6 xl:h-8"
        />
        <img
          src="brightfunds-logo.svg"
          alt="BrightFunds"
          className="object-contain h-5 lg:h-6 xl:h-8"
        />
        <img
          src="charityengine-logo.png"
          alt="CharityEngine"
          className="object-contain h-5 lg:h-6 xl:h-8"
        />
      </div>
    ),
  },
  {
    title: "Environmental Partners",
    subtitle: "Benefit from Custom Tools for Land Restoration",
    heading:
      "Our goal is to reforest 30 million acres of land by 2030 in the United States, India, and Brazil",
    description:
      "Most conservation projects take 5-7 years to start seeing success. Our hacks can change this. We translate technological needs from current conservation projects into meaningful open-source data and AI tools that accelerate reforestation and land restoration. Through our hackathons, we support our environmental partners' efforts to protect forests, waterways, and biodiversity.",
    src: "environmental-partners-image.png",
    color: "#bc3627",
    textColor: "#ffffff",
  },
];

export default function StackingCards(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main ref={container} className="bg-[#D4E4E3]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              src={project.src}
              title={project.title}
              subtitle={project.subtitle}
              heading={project.heading}
              color={project.color}
              textColor={project.textColor}
              description={project.description}
              extraContent={project.extraContent}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  src: string;
  color: string;
  textColor: string;
  extraContent?: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  subtitle,
  heading,
  description,
  src,
  color,
  textColor,
  extraContent,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          color: textColor,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] min-h-[500px] h-auto lg:h-[650px] xl:h-[600px] w-full md:w-[85%] lg:w-[75%] xl:w-[70%] rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 xl:p-10 origin-top overflow-hidden"
      >
        <div className="text-center mb-3 md:mb-4 lg:mb-5 xl:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight">
            {title}: {subtitle}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row h-full gap-4 md:gap-5 lg:gap-6 xl:gap-10 overflow-y-auto md:overflow-visible">
          <div className="w-full md:w-[45%] lg:w-[45%] xl:w-[40%] flex flex-col gap-2 md:gap-3 lg:gap-3 xl:gap-4 overflow-y-auto">
            <h3 className="text-base md:text-lg lg:text-lg xl:text-2xl font-bold leading-tight">
              {heading}
            </h3>
            <p className="text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed opacity-90">
              {description}
            </p>
            {extraContent && <div>{extraContent}</div>}
          </div>

          <div className="relative w-full md:w-[55%] lg:w-[55%] xl:w-[60%] h-48 md:h-full rounded-lg overflow-hidden flex-shrink-0">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
