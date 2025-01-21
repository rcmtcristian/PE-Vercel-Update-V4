import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";

const HowToSection = () => {
  return (
    <div className="relative flex flex-row items-center self-stretch justify-start py-16 pl-11">
      <div className="relative flex flex-col items-center justify-start w-full px-4 max-w-desktop-column-width-base-col-08">
        <h1 className="text-center text-color-palette-primary-black font-title-font-family text-title-font-size font-title-font-weight max-w-desktop-column-width-base-col-06">
          We're a 501(c)(3) that works with your giving platform.
        </h1>

        <div className="flex flex-col items-start self-stretch justify-between px-4 mt-12 space-y-8 md:flex-row md:px-8 md:space-y-0 md:space-x-4">
          <CardInfoGraphicTypeIcon
            // header="Applications Open"
            // subheader="August 1st-30th"
            description="We translate requests from sustainability projects to open source tasks for fellows to build their portfolio with."
            className="flex-1"
          ></CardInfoGraphicTypeIcon>
          <CardInfoGraphicTypeIcon
            // header="Fellows Notified"
            // subheader="September 2nd"
            description="Companies sponsor remote volunteering to mentor fellows and match giving programs."
            className="flex-1"
          ></CardInfoGraphicTypeIcon>
          <CardInfoGraphicTypeIcon
            // header="Program Begins"
            // subheader="September 17 to December 9"
            description="We integrate into your organization's toolsets and workflows for skill-based volunteering that can up-skill employees."
            className="flex-1"
          ></CardInfoGraphicTypeIcon>
          <CardInfoGraphicTypeIcon
            // header="Program Begins"
            // subheader="September 17 to December 9"
            description="We evaluate your organization's impact on mobilizing local resources and survey volunteers for overall employee satisfaction."
            className="flex-1"
          ></CardInfoGraphicTypeIcon>
        </div>
      </div>
    </div>
  );
};

export default HowToSection;
