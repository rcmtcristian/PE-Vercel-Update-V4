import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";

const ApplicationInformationSection = () => {
  return (
    <div className="relative flex flex-row items-center self-stretch justify-center py-16 ">
      <div className="relative flex flex-col items-center justify-start w-desktop-column-width-base-col-08">
        <h1 className="text-center text-color-palette-primary-black font-title-font-family text-title-font-size font-title-font-weight w-desktop-column-width-base-col-06">
          How do I apply for the fellowship?
        </h1>



        <div className="flex flex-row items-start self-stretch justify-between px-8 mt-12 space-x-4">
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
      </div>
    </div>
  );
};

export default ApplicationInformationSection;
