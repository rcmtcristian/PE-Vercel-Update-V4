import { CallToActionBanner } from "@/components/CallToActionBanner";
import { EventCard } from "@/components/EventCard";
import Events from "@/components/Events";
import { MainButton } from "@/components/MainButton";
import { SectionHeader } from "@/components/SectionHeader";
import HomeFooter from "@/Home/HomeFooter";
import { cn } from "@/lib/utils";
import GenerationsHeroSection from "@/Volunteer/NextGeneration";
import Testimonials from "@/Volunteer/Testimonials";
import VolunteerStats from "@/Volunteer/VolunteerStats";

export interface VolunteerProps {
  className?: string;
}

export const Volunteer = ({
  className,
  ...props
}: VolunteerProps): JSX.Element => {
  return (
    <div
      className={`bg-color-palette-primary-white flex flex-col gap-0 items-center justify-start relative overflow-hidden ${className}`}
    >
      {/* <div className="w-full max-w-[1440px] mx-auto px-4 md:pl-[134px]"> */}
      {/* Hero Section: Mission and Vision */}
      <GenerationsHeroSection />
      <SectionHeader
        title={"Upcoming Events"}
        className={cn(
          " left-[-21.9vw] right-[-100vw]"
          // "h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] xl:h-[3px]",
        )}
      />

      <div className="w-full py-16">
        <div className="relative flex flex-col items-start justify-start gap-6 mx-auto w-full sm:w-[90%] md:w-[80%]">
          <div className="pl-40 text-left text-color-palette-primary-black font-subtitle-font-family text-subtitle-font-size font-subtitle-font-weight">
            Pair Hours{" "}
          </div>
          <EventCard
            description="Walk through prompt engineering such as to create better wikis, inline comments, and readMes for better collaboration."
            eventName="Documentation with AI"
            timeSpan="12 PM - 1 PM EST (1 hour)"
            className="!self-stretch !shrink-0"
          />
          <EventCard
            description="Help navigate set up of API integrations across Auth0 and Twilio for a NodeJS app and implement as part of login functions."
            eventName="Building API integrations"
            className="!self-stretch !shrink-0"
          />

          <div className="w-full py-16 px-4 sm:px-8 lg:px-[135px]">
            <div className="relative flex flex-col items-start justify-start gap-6 w-full sm:w-[90%] lg:w-[80%]">
              <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subtitle-font-family text-subtitle-font-size font-subtitle-font-weight">
                One hour can help someone break into the tech industry.{" "}
              </div>
              <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                Open source mentors provide student fellows first-hand open
                source experience through working on ProgramEarth's projects via
                pair hours, career-related and technical workshops, and content
                labs.
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col gap-2">
                <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                  Do you want to foster tech for good and build a community?
                </div>
                <div className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                  We see many trailblazers, including first-generation students,
                  single parents, and career changers. Fellows often cite
                  workshops as their first exposure to industry practices, with
                  hands-on pair hours providing valuable interview experience.
                </div>
              </div>

              <div className="flex flex-wrap justify-start gap-4 mt-4">
                <div className="flex w-full sm:w-[200px] h-[200px] relative">
                  <img
                    className="self-stretch flex-1 object-cover"
                    src="image0-3.png"
                    alt="Volunteer"
                  />
                </div>
                <div className="flex w-full sm:w-[200px] h-[200px] relative">
                  <img
                    className="self-stretch flex-1 object-cover"
                    src="image-3.png"
                    alt="Volunteer"
                  />
                </div>
                <div className="flex w-full sm:w-[200px] h-[200px] relative">
                  <img
                    className="self-stretch flex-1 object-cover"
                    src="image2-3.png"
                    alt="Volunteer"
                  />
                </div>

                <MainButton
                  label="View Our Badges"
                  className="!w-desktop-column-width-base-col-03"
                ></MainButton>
              </div>
            </div>

            <Events />

            <Testimonials />
            <VolunteerStats />

            <SectionHeader
              title={"Contact Us"}
              className={cn(" left-[-9.0vw] right-[-100vw]")}
            />
            <div className="w-full mt-16">
              <span className="relative flex items-center self-stretch justify-start text-left text-color-palette-primary-black font-subtitle-font-family text-subtitle-font-size font-subtitle-font-weight">
                Need more information?
              </span>
              <address>
                Contact us at <a href="mailto:team@programearth.org">team@programearth.org</a> with any additional questions
              </address>
            </div>
          </div>
        </div>
        <CallToActionBanner
          title="Volunteer with us today!"
          buttonLabel="Let's Collaborate"
          backgroundColor="bg-open-source-green"
          onButtonClick={() => {
            // Handle button click
            console.log("Button clicked");
          }}
        />
        <HomeFooter />
      </div>
    </div>
    // </div >
  );
};
