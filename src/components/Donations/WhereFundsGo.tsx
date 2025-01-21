import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";


const WhereFundsGo = () => {
  return (
    <div className="relative flex flex-row items-center self-stretch justify-center py-16">
      <div className="relative flex flex-col items-start justify-start w-full max-w-desktop-column-width-base-col-08 px-4">
        <h1 className="text-color-palette-primary-black text-subtitle-font-size font-title-font-weight max-w-desktop-column-width-base-col-06 pl-24" >
          What do your funds go towards?
        </h1>

        <div className="flex flex-col md:flex-row items-start self-stretch justify-between px-4 md:px-8 mt-12 space-y-8 md:space-y-0 md:space-x-4  ">
          <CardInfoGraphicTypeIcon
            showGraphic={false}
            header="General Donations"
            description="Individuals in your company can add us to their ERG give list."
            className="flex-1"
          />
          <CardInfoGraphicTypeIcon
            header="Fellowship Program"
            showGraphic={false}
            description="Support the future of open source by sponsoring fellows in our program."
            className="flex-1"
          />
          <CardInfoGraphicTypeIcon
            header="Events"
            showGraphic={false}
            description="We invite speakers to give talks at our hackathons and events."
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default WhereFundsGo;