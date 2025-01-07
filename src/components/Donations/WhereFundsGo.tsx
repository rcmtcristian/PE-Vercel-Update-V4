import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";

const WhereFundsGo = () => {
  return (
    <div className="relative flex flex-row items-center self-stretch justify-center py-16 ">
      <div className="relative flex flex-col items-center justify-start w-full max-w-desktop-column-width-base-col-08 px-4">
        <h1 className="text-center text-color-palette-primary-black font-title-font-family text-title-font-size font-title-font-weight max-w-desktop-column-width-base-col-06">
          What do your funds go towards?
        </h1>


        <div className="flex flex-col md:flex-row items-start self-stretch justify-between px-4 md:px-8 mt-12 space-y-8 md:space-y-0 md:space-x-4">
          <CardInfoGraphicTypeIcon
            showGraphic={false}
            header="General Donations"
            // subheader="August 1st-30th"
            description="Individuals in your company can add
us to their ERG give list."
            className="flex-1"
          ></CardInfoGraphicTypeIcon>
          <CardInfoGraphicTypeIcon
            header="Fellowship Program"
            showGraphic={false}
            // subheader="September 2nd"
            description="Support the future of open source by
sponsoring fellows in our program."
            className="flex-1"
          ></CardInfoGraphicTypeIcon>
          <CardInfoGraphicTypeIcon
            header="Events"
            showGraphic={false}
            // subheader="September 17 to December 9"
            description="We invite speakers to give talks at our
hackathons and events."
            className="flex-1"
          ></CardInfoGraphicTypeIcon>


        </div>
      </div>
    </div>
  );
};

export default WhereFundsGo;
