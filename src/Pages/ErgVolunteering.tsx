import CallToActionBanner from "@/components/CallToActionBanner";
import { MainButton } from "@/components/MainButton";
import { SectionHeader } from "@/components/SectionHeader";
import ErgVolunteeringStats from "@/ErgVolunteering/ErgVolunteeringStats";
import HelpYourMembers from "@/ErgVolunteering/HelpYourMembers";
import HowTo from "@/ErgVolunteering/HowTo";
import HomeFooter from "@/Home/HomeFooter";
import Ecosystems from "@/OurStory/Ecosystems";
import OurStoryStats from "@/OurStory/OurStoryStats";
import HeroSection from "@/OurStory/Roots";
import Teams from "@/OurStory/Teams";
import { CallToAction } from "@mui/icons-material";

export interface ErgVolunteeringProps {
  className?: string;
}

export const ErgVolunteering = ({
  className,
  ...props
}: ErgVolunteeringProps): JSX.Element => {
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
      {/* Hero Section: Mission and Vision */}
      <div className="max-w-screen-xl px-[135px] py-16 flex flex-col gap-8 items-start self-stretch">
        <p className="text-[#000000] text-left font-body-font-family text-body-font-size font-body-font-weight w-desktop-column-width-base-col-07">
          Support open source software by sponsoring one of our events as a
          co-partner. Whether you are interested in a speaking opportunity or
          hosting an activity, we will work with your team to plan logistics and
          send out follow-up surveys.
        </p>

        <MainButton />
      </div>
      <HowTo />

      {/* Organization Overview */}

      <div className="max-w-screen-xl px-[135px] py-16 flex flex-col gap-8 items-start self-stretch">
        <p className="text-[#000000] text-left font-body-font-family text-body-font-size font-body-font-weight w-desktop-column-width-base-col-07">
          Support open source software by sponsoring one of our events as a
          co-partner. Whether you are interested in a speaking opportunity or
          hosting an activity, we will work with your team to plan logistics and
          send out follow-up surveys.
        </p>
      </div>
      {/* Details Section: Origin and Approach */}
      <HelpYourMembers />

      {/* Team Section */}
      <ErgVolunteeringStats />
      <CallToActionBanner
        title={"Volunteer with us Today!"}
        buttonLabel={"Sign Up"}
        backgroundColor="bg-legislative-blue"
        // onButtonClick={() => {
        //   window.location.href = "/volunteer";
        // }}
      />
      <HomeFooter className="!w-desktop-breakpoint-base" />
    </div>
  );
};
