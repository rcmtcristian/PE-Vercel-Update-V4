import { SectionHeader } from "@/components/SectionHeader";
import HomeFooter from "@/Home/HomeFooter";
import { cn } from "@/lib/utils";
import Ecosystems from "@/OurStory/Ecosystems";
import OurStoryStats from "@/OurStory/OurStoryStats";
import HeroSection from "@/OurStory/Roots";
import Teams from "@/OurStory/Teams";

export interface OurStoryProps {
  className?: string;
}

export const OurStory = ({
  className,
  ...props
}: OurStoryProps): JSX.Element => {
  return (
    <div
      className={`
        bg-color-palette-primary-white 
        flex flex-col 
        items-center 
        justify-start 
        relative 
        overflow-hidden 
        ${className}
      `}
    >
      <HeroSection />

      <div className="w-full max-w-[1440px] mx-auto px-4 md:pl-[134px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[134px]">
          <SectionHeader
            title="Our Mission"
            borderColor="bg-legislative-blue"
            className={cn(
              " left-[-7.9vw] right-[-100vw]"
              // "h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] xl:h-[3px]",
            )}
          />
          {/* Organization Overview */}
          <div className="flex flex-col items-start self-stretch gap-8 py-8 md:py-16">
            <p className="text-[#000000] text-left font-body-font-family text-body-font-size font-body-font-weight">
              Program Earth is a 501(c)(3) nonprofit that champions the next
              generation of developers to build talent, foster networks, and
              expand industry commitment to holistic climate solutions. We
              innovate environmental stewardship and corporate sustainability
              through our flagship fellowship program, hackathons, and mentor
              volunteering, supporting tech behind climate projects that empower
              locally while having global impact.
            </p>
            <OurStoryStats />
          </div>
        </div>

        {/* Details Section: Origin and Approach */}
        <Ecosystems />

        {/* Team Section */}
        <SectionHeader
          title={"Advisory Board"}
          className={cn(" left-[0.5vw] right-[-100vw]")}
        />
        <Teams />
      </div>
      <HomeFooter />
    </div>
  );
};
