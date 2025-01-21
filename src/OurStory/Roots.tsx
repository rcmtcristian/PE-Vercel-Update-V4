import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";

const HeroSection = () => {
  return (
    <div className="relative flex flex-row items-center justify-center py-8 md:py-16 bg-pe-gold-5">
      <div className="relative flex flex-col items-center justify-start w-full px-4 md:px-0 md:w-desktop-column-width-base-col-08">
        <h1 className="text-center text-color-palette-primary-black font-title-font-family text-title-font-size font-title-font-weight w-full md:w-desktop-column-width-base-col-06">
          Sustain Clouds from the Root
        </h1>

        <p className="mt-4 text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight w-full md:w-desktop-column-width-base-col-06">
          We are a group of technologists mentoring the next generation of early
          career developers to hack on climate solutions across Sustainable
          Development Goals set by the United Nations.
        </p>

        <div className="flex flex-col md:flex-row items-start self-stretch justify-between mt-8 md:mt-12 space-y-6 md:space-y-0 md:space-x-4 px-4 md:px-8">
          <CardInfoGraphicTypeIcon
            header="Company Volunteering"
            subheader="August 1st-30th"
            description="We carefully review all applications considering passion for collaboration, sustainability, and curiosity. We prioritize those with non-traditional backgrounds in tech. A portfolio is helpful, even if it's a single-page app."
            className="w-full md:flex-1"
          />
          <CardInfoGraphicTypeIcon
            header="Fellowship Program"
            subheader="September 2nd"
            description="Selected fellows will be confirmed through their coding repository, calendar, and Slack invitation. We provide tooling like Codespaces, AI for code, and Postman for APIs, which will be reviewed during the program orientation."
            className="w-full md:flex-1"
          />
          <CardInfoGraphicTypeIcon
            header="Nature Conservation"
            subheader="September 17 to December 9"
            description="The 12-week fellowship requires a weekly commitment of 3 to 5 hours. Mentors are available via scheduled Zoom hours and asynchronously through GitHub and Slack. Fellows earn credentialed badges upon completion."
            className="w-full md:flex-1"
          />
        </div>
      </div>
    </div>
  );
};


export default HeroSection;
