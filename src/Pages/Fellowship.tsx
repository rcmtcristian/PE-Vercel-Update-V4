import CallToActionBanner from "@/components/CallToActionBanner";
import { MainButton } from "@/components/MainButton";
import { SectionHeader } from "@/components/SectionHeader";
import ApplicationSection from "@/Fellowship/Application";
import Problems from "@/Fellowship/problems";
import ApplicationInformationSection from "@/Fellowship/Roots";
import Testimonials from "@/Fellowship/Testimonials";
import HomeFooter from "@/Home/HomeFooter";
import { cn } from "@/lib/utils";
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



      <div className="w-full max-w-[1440px] mx-auto px-4 md:pl-[134px]">
        <SectionHeader title="Our Mission" borderColor="bg-legislative-blue" />
        {/* Organization Overview */}
        <div className="w-full py-16 px-4 sm:px-8 lg:px-[135px]">
          <div className="relative flex flex-col items-start justify-start gap-6 max-w-[800px]">
            <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subtitle-font-family text-subtitle-font-size font-subtitle-font-weight">
              Welcome to the village! Unlock coding in 12 weeks.{" "}
            </div>
            <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight py-9">
              Our mission is to be the bridge between your bootcamp syllabus and
              your first role within a team for software engineers from
              non-traditional backgrounds. Within 12 weeks, we teach you how to
              work in a software team and help you ship one of the most relevant
              portfolios across AI, microservices architecture, and security.
              <br />
              <br />
              Development fellows can choose between 2 specialty paths: <br />
            </div>
            <ul className="py-5">
              <li>Development security operations (DevSecOps) architecture </li>
              <li>Full-stack web development</li>
            </ul>
          </div>
          <MainButton />
          <Testimonials />
          <div className="flex flex-col gap-4 mt-6 max-w-[800px]">
            <div className="flex flex-col gap-2">
              <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                Technical Workshops Led by Industry Experts{" "}
              </div>
              <div className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                The nature of software is ever changing and the network you gain
                your knowledge from is what helps you stand out. Through our
                workshop events, fellows can attend live demos that feature
                exclusive best practices with the engineers who are building our
                platforms. Our fellows end up ramping up faster in software team
                workflows than their peers.
              </div>
            </div>
          </div>

          <img
            className="shrink-0 w-desktop-column-width-base-col-08 h-[276px] relative my-9"
            style={{ objectFit: "contain" }}
            src="skills-graph1.png"
          />
          <div className="flex flex-col gap-4 mt-6 max-w-[800px]">
            <div className="flex flex-col gap-2">
              <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                Understand problem solving during hands-on Pair Hours.{" "}
              </div>
              <div className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                Fellows will be gaining mid-level career skills such as automations, infrastructure to managing code quality by working on our open source software. By contributing to an app that already has an active user base, you'll learn how to effectively manage user feedback, collaborate with cross-functional teams, and embrace remote-first work. We co-create tech with  grassroots orgs to increase biodiversity and lower carbon emissions.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6 max-w-[800px]">
            <div className="flex flex-col gap-2">
              <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                Build your digital presence through Content Lab. Become job ready.{" "}
              </div>
              <div className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                Fellows set themselves apart with a digital brand curated by their mentors, who provide relevant and current dialogue about what it means to showcase a comprehensive overview of a fellow's experience, skills, and achievements. We focus on building a portfolio through social media training, resume review, and mock interviews. Ultimately you'll write a blog or speak at a conference to get your story out there on every developer and career platform.
              </div>
            </div>
          </div>
          <SectionHeader title="Application Information" borderColor="bg-legislative-blue" className={cn(
            " left-[-8.5vw] right-[-100vw]",
            "h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] xl:h-[3px]",

          )} />
          <ApplicationSection />
          <div className="w-full mt-16 max-w-[800px]">
            <div className="relative flex items-center self-stretch justify-start text-left text-color-palette-primary-black font-subtitle-font-family text-subtitle-font-size font-subtitle-font-weight">
              Frequently asked questions{" "}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-6 max-w-[800px]">
            <div className="flex flex-col gap-2">
              <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                Is the program free?{" "}
              </div>
              <div className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                Completely free, no costs are associated!
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6 max-w-[800px]">
            <div className="flex flex-col gap-2">
              <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                What prior experience do you expect from your fellows?{" "}
              </div>
              <div className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                Most people will have a bootcamp or experience tinkering around with html or a database and 1-2 instances of a group project. No prior experience needed working with APIs, Tests, Security, or AI.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6 max-w-[800px]">
            <div className="flex flex-col gap-2">
              <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                Is having an outside full-time job okay?
              </div>
              <div className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                The nature of software is ever changing and the network you gain
                Many fellows do, its up to you to assess what kind of learning environment you need and communication. If you're an async learner, this works out well since all sessions are recorded and mentors can be found for quick questions while you're debugging.
              </div>
            </div>
          </div>

        </div>


      </div>
      <CallToActionBanner title={"Join our fellowship program today!"} buttonLabel="Apply to be a Fellow" />
      <HomeFooter />
    </div>
  );
};
