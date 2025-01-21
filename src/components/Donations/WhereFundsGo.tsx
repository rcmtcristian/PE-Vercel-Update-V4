import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";


const WhereFundsGo = () => {
  return (
    <div className="relative flex flex-row items-center self-stretch justify-center py-8 sm:py-12 md:py-16">
      <div className="relative flex flex-col items-start justify-start w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-color-palette-primary-black text-xl sm:text-2xl md:text-3xl lg:text-subtitle-font-size font-title-font-weight max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-desktop-column-width-base-col-06 pl-0 sm:pl-4 md:pl-8 lg:pl-24 mb-6 sm:mb-8 md:mb-12">
          What do your funds go towards?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          <CardInfoGraphicTypeIcon
            showGraphic={false}
            header="General Donations"
            description="Individuals in your company can add us to their ERG give list."
            className="w-full"
          />
          <CardInfoGraphicTypeIcon
            header="Fellowship Program"
            showGraphic={false}
            description="Support the future of open source by sponsoring fellows in our program."
            className="w-full"
          />
          <CardInfoGraphicTypeIcon
            header="Events"
            showGraphic={false}
            description="We invite speakers to give talks at our hackathons and events."
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereFundsGo;