import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";
import { MainButton } from "@/components/MainButton";
import { SectionHeader } from "@/components/SectionHeader";

const ApplicationSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-5 md:py-6 lg:py-8">
      <div className="py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-color-palette-primary-black font-title-font-family text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-title-font-weight">
            How do I apply for the fellowship?
          </h1>

          <div className="flex flex-col sm:flex-row items-start mt-6 sm:mt-8 md:mt-10 lg:mt-12 py-4 sm:py-6 md:py-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <CardInfoGraphicTypeIcon
              header="Company Volunteering"
              subheader="August 1st-30th"
              description="We carefully review all applications considering passion for collaboration, sustainability, and curiosity. We prioritize those with non-traditional backgrounds in tech. A portfolio is helpful, even if it's a single-page app."
              className="w-full sm:w-1/3"
            />
            <CardInfoGraphicTypeIcon
              header="Fellowship Program"
              subheader="September 2nd"
              description="Selected fellows will be confirmed through their coding repository, calendar, and Slack invitation. We provide tooling like Codespaces, AI for code, and Postman for APIs, which will be reviewed during the program orientation."
              className="w-full sm:w-1/3"
            />
            <CardInfoGraphicTypeIcon
              header="Nature Conservation"
              subheader="September 17 to December 9"
              description="The 12-week fellowship requires a weekly commitment of 3 to 5 hours. Mentors are available via scheduled Zoom hours and asynchronously through GitHub and Slack. Fellows earn credentialed badges upon completion."
              className="w-full sm:w-1/3"
            />
          </div>
          <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <MainButton label="Join" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSection;
