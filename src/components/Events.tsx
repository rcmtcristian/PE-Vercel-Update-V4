import { MainButton } from "./MainButton";

const Events = () => {
  return (
    <div className="bg-color-palette-brand-green-pe-green-5 rounded-[50px] border-solid border-color-palette-brand-green-pe-green border-8 p-6 sm:p-8 mt-8 flex flex-col gap-6 sm:gap-8 items-start justify-start w-full lg:w-[90%] xl:w-[100%]">
      <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subtitle-font-family text-base sm:text-lg lg:text-2xl font-subtitle-font-weight">
        What volunteer events are available?
      </div>
      <div className="relative flex flex-col sm:flex-row items-start justify-start gap-6 sm:gap-8 w-full">
        <div className="flex flex-col items-start justify-start gap-4 w-full sm:w-[100%] lg:w-[48%]">
          <div className="text-left text-color-palette-primary-black font-header-font-family text-base sm:text-lg lg:text-2xl font-header-font-weight">
            Wednesday Pair Hours
          </div>
          <div className="text-left text-color-palette-primary-black font-body-font-family text-sm sm:text-base lg:text-lg font-body-font-weight leading-relaxed">
            Get on a mob zoom and help fellows navigate copilot to break down and debug tasks for full-stack functions and architecture like microservices and automations within a stack across Vue, PostgresSQL, and APIs such as Twilio, Stripe, and Auth0. Engineers, Architects, and Security folks strongly encouraged.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 w-full sm:w-[100%] lg:w-[48%]">
          <div className="text-left text-color-palette-primary-black font-header-font-family text-base sm:text-lg lg:text-2xl font-header-font-weight">
            Career Advice Hours
          </div>
          <div className="text-left text-color-palette-primary-black font-body-font-family text-sm sm:text-base lg:text-lg font-body-font-weight leading-relaxed">
            Help fellows build their brand. Look over blogs, LinkedIns, resumes, or mock interviews. Recruiters, DevRel, and Marketing folks strongly encouraged.
          </div>
        </div>
      </div>
      <MainButton
        label="View Full Calendar"
        className="w-full sm:w-auto lg:w-[30%]"
      />
    </div>
  );
};

export default Events;
