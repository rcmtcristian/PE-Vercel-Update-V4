import { MainButton } from "@/components/MainButton";
import { SectionHeader } from "@/components/SectionHeader";
import ApplicationSection from "@/Fellowship/Application";
import Problems from "@/Fellowship/problems";
import ApplicationInformationSection from "@/Fellowship/Roots";
import Testimonials from "@/Fellowship/Testimonials";
import HomeFooter from "@/Home/HomeFooter";
import OurStoryStats from "@/OurStory/OurStoryStats";



export interface FellowshipProps {
  className?: string;
}

export const Fellowship = ({
  className,
  ...props
}: FellowshipProps): JSX.Element => {
  return (
    <div
      className={`bg-color-palette-primary-white flex flex-col gap-0 items-center justify-start relative overflow-hidden ${className}`}
    >
      {/* Hero Section: Mission and Vision */}

      {/* Organization Overview */}
      <SectionHeader title="Our Mission" borderColor="bg-legislative-blue" />
      <div className="w-full py-16 px-4 sm:px-8 lg:px-[135px]">
        <div className="relative flex flex-col items-start justify-start gap-6 w-full sm:w-[90%] lg:w-[80%]">
          <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subtitle-font-family text-subtitle-font-size font-subtitle-font-weight">
            Welcome to the village! Unlock coding in 12 weeks.{" "}
          </div>
          <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight py-9">
            Our mission is to be the bridge between your bootcamp syllabus
            and your first role within a team for software engineers from
            non-traditional backgrounds. Within 12 weeks, we teach you how
            to work in a software team and help you ship one of the most
            relevant portfolios across AI, microservices architecture, and
            security.
            <br />
            <br />
            Development fellows can choose between 2 specialty paths:{" "}
            <br />

          </div>
          <ul className="py-5">
            <li>
              Development security operations (DevSecOps) architecture{" "}
            </li>
            <li>Full-stack web development</li>
          </ul>
        </div>
        <MainButton />
        <Testimonials />
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col gap-2">
            <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
              Technical Workshops Led by Industry Experts            </div>
            <div className="text-color-palette-primary-black text-left font-body-font-family text-body-font-size font-body-font-weight">
              The nature of software is ever changing and the network you gain your knowledge from is what helps you stand out. Through our workshop events, fellows can attend live demos that feature exclusive best practices with the engineers who are building our platforms. Our fellows end up ramping up faster in software team workflows than their peers.
            </div>
          </div>

        </div>

        <img
          className="shrink-0 w-desktop-column-width-base-col-08 h-[276px] relative my-9"
          style={{ objectFit: "cover" }}
          src="skills-graph1.png"
        />
        <ApplicationSection />
        <div className="w-full mt-16">
          <div className="relative flex items-center self-stretch justify-start text-left text-color-palette-primary-black font-subtitle-font-family text-subtitle-font-size font-subtitle-font-weight">
            Need more information?{" "}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl px-[135px] py-16 flex flex-col gap-8 items-start self-stretch">
        <p className="text-[#000000] text-left font-body-font-family text-body-font-size font-body-font-weight w-desktop-column-width-base-col-07">
          Program Earth is a 501(c)(3) nonprofit that champions the next
          generation of developers to build talent, foster networks, and expand
          industry commitment to holistic climate solutions. We innovate
          environmental stewardship and corporate sustainability through our
          flagship fellowship program, hackathons, and mentor volunteering,
          supporting tech behind climate projects that empower locally while
          having global impact.
        </p>

      </div>
      {/* Details Section: Origin and Approach */}
      <Problems />
      <Testimonials />
      <OurStoryStats />
      <SectionHeader title="Application Information" borderColor="bg-legislative-blue" />
      <ApplicationInformationSection />
      <Problems />
      <HomeFooter />
    </div>
  );
};
