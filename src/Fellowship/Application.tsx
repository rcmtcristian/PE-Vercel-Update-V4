import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";
import { MainButton } from "@/components/MainButton";
import { SectionHeader } from "@/components/SectionHeader";

const ApplicationSection = () => {
  return (
    <div >


      <div className="relative flex flex-row items-start py-16">

        <div className="relative flex flex-col items-start justify-start">
          <h1 className="text-color-palette-primary-black font-title-font-family text-subheader-font-size font-title-font-weight">
            How do I apply for the fellowship?
          </h1>
          {/* 
          <p className="mt-4 text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
            We are a group of technologists mentoring the next generation of
            early career developers to hack on climate solutions across
            Sustainable Development Goals set by the United Nations.
          </p> */}

          <div className="flex flex-row items-start mt-12 py-8 space-x-4">
            <CardInfoGraphicTypeIcon
              header="Company Volunteering"
              subheader="August 1st-30th"
              description="We carefully review all applications considering passion for collaboration, sustainability, and curiosity. We prioritize those with non-traditional backgrounds in tech. A portfolio is helpful, even if it's a single-page app."
              className="flex-1"
            />
            <CardInfoGraphicTypeIcon
              header="Fellowship Program"
              subheader="September 2nd"
              description="Selected fellows will be confirmed through their coding repository, calendar, and Slack invitation. We provide tooling like Codespaces, AI for code, and Postman for APIs, which will be reviewed during the program orientation."
              className="flex-1"
            />
            <CardInfoGraphicTypeIcon
              header="Nature Conservation"
              subheader="September 17 to December 9"
              description="The 12-week fellowship requires a weekly commitment of 3 to 5 hours. Mentors are available via scheduled Zoom hours and asynchronously through GitHub and Slack. Fellows earn credentialed badges upon completion."
              className="flex-1"
            />
          </div>
          <div className="w-full flex justify-center mt-8">
            <MainButton />
          </div>
        </div>
      </div>
    </div>

  );
};

export default ApplicationSection;
