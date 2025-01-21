import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";
import { MainButton } from "@/components/MainButton";

const HowToSection = () => {
  return (
    <div className="relative flex flex-col items-center self-stretch justify-start px-4 py-8 sm:py-12 md:py-16 sm:px-6 md:px-8 lg:px-11">
      <div className="relative flex flex-col items-start justify-start w-full max-w-[1200px]">
        <p className="text-left font-body-font-family text-sm sm:text-base md:text-lg lg:text-xl font-body-font-weight max-w-[800px] mb-6 sm:mb-8 md:mb-10  lg:ml-16">
          Support open source software by sponsoring one of our events as a
          co-partner. Whether you are interested in a speaking opportunity or
          hosting an activity, we will work with your team to plan logistics and
          send out follow-up surveys.
        </p>

        <MainButton className="mb-10 sm:mb-12 md:mb-16 lg:ml-16" />

        <h1 className="text-left sm:text-center text-color-palette-primary-black font-title-font-family text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-title-font-weight max-w-[800px] w-full mb-8 sm:mb-10 md:mb-12 lg:ml-16 lg:text-left">
          We're a 501(c)(3) that works with your giving platform.
        </h1>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 lg:ml-10">
          <CardInfoGraphicTypeIcon
            description="We translate requests from sustainability projects to open source tasks for fellows to build their portfolio with."
            className="w-full"
          />
          <CardInfoGraphicTypeIcon
            description="Companies sponsor remote volunteering to mentor fellows and match giving programs."
            className="w-full"
          />
          <CardInfoGraphicTypeIcon
            description="We integrate into your organization's toolsets and workflows for skill-based volunteering that can up-skill employees."
            className="w-full"
          />
          <CardInfoGraphicTypeIcon
            description="We evaluate your organization's impact on mobilizing local resources and survey volunteers for overall employee satisfaction."
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToSection;
