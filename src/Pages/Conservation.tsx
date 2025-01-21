import ConservationStats from "@/Conservation/ConservationStats";
import { HomeFooter } from "../Home/HomeFooter";
import { YellowBorder } from "@/components/YellowBorder";
import { SectionHeader } from "@/components/SectionHeader";
import { MainButton } from "@/components/MainButton";
import { CallToActionBanner } from "@/components/CallToActionBanner";
import { cn } from "@/lib/utils";

export interface ConservationProps {
  className?: string;
}

export const Conservation = ({
  className,
  ...props
}: ConservationProps): JSX.Element => {
  return (
    <div
      className={
        "bg-color-palette-primary-white flex flex-col items-center justify-start relative overflow-hidden " +
        className
      }
    >


      <SectionHeader
        title={"Sustainability Projects"}
        className={cn(
          "left-[-19.1vw] right-[-100vw]",
          // "h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] xl:h-[3px]",
        )}
      />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col items-start self-stretch justify-start gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col items-start justify-start w-full gap-4 sm:gap-5 md:gap-6 mx-auto max-w-7xl">
            <div className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl text-left text-color-palette-primary-black font-subtitle-font-family font-subtitle-font-weight">
              How do we create an impact?
            </div>
            <div className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-left text-color-palette-primary-black font-body-font-family font-body-font-weight relative flex flex-col items-start justify-start gap-4 sm:gap-5 md:gap-6 max-w-[800px]">
              Our mentors and fellows work on open source environmental projects
              that are restoring endangered species and natural resources like
              land, water, and forests. With our partners, we help organizations
              lower their carbon impact.
            </div>

            <ConservationStats />

            <div className="w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left text-color-palette-primary-black font-header-font-family font-header-font-weight">
              Our goal: Return 304 Million hectares of land to conservation
              efforts
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 md:gap-6 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3 py-5 sm:py-6 md:py-7">
            <YellowBorder
              header="Indigenous Led"
              description="86% of the world's biodiversity is protected by Indigenous communities. We are guided by their knowledge and vision for whole ecosystems impact such as rematriation and permaculture."
              graphicType="big-image"
              className="w-full"
            />
            <YellowBorder
              header="Protect Biodiversity"
              description="We prioritize projects that are fostering biodiversity as the UN supports that it is our most effective and efficient strategy to stabilize climate change."
              graphicType="big-image"
              className="w-full"
            />
            <YellowBorder
              header="Lower Carbon Emissions"
              description="Our biodiversity projects restore and replenish flora and fauna as a way to decarbonize their consumption."
              graphicType="big-image"
              className="w-full"
            />
            <YellowBorder
              header="Education Opportunities"
              description="Fellows experience collaboration within cross geo teams as they build platforms for climatetech initiatives with the same security and compliance as Enterprise tech workflows. Fellows have a 10% higher chance of landing roles through this DevSecOps curriculum."
              graphicType="big-image"
              className="w-full"
            />
            <YellowBorder
              header="Food Sustainability"
              description="We are bringing back Indigenous plants in collaboration with land trusts that are good for the environment and can also withstand the changing conditions of drought, flooding, wildfires, while replenishing nutrients and minerals to the land."
              graphicType="big-image"
              className="w-full"
            />
            <YellowBorder
              header="Rehabilitate Nature"
              description="The data we facilitate help land trusts make cases for the resources needed to remove invasive species that are drying up creeks and making land arable. By replenishing Indigenous species, we also protect against loss of land through erosion and wild fires."
              graphicType="big-image"
              className="w-full"
            />
          </div>
          {/* <SectionHeader />
          <div className="pr-[135px] pl-[135px] flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
            <div className="relative flex items-center justify-start text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight w-desktop-column-width-base-col-06">
              Our open source software supports projects with many indigenous
              groups and non-profit organizations. Click the map below to view
              them.
            </div>
            <a
              href="https://www.pampam.city/p/UkWE9ftI1EbJXZPlNXKC"
              target="_blank"
            >
              <img
                className="w-full h-auto max-w-full"
                src="tribes-map-10.png"
                alt="Tribes Map"
              />
            </a>
          </div> */}
        </div>


      </div>

      <CallToActionBanner
        title="Do you want to partner with us?"
        buttonLabel="Let's Collaborate"
        onButtonClick={() => {
          // Handle button click
          console.log("Button clicked");
        }}
      />
      <HomeFooter />
    </div>
  );
};
