import WhereFundsGo from "@/components/Donations/WhereFundsGo";
import { MainButton } from "@/components/MainButton";
import { SectionHeader } from "@/components/SectionHeader";
import HomeFooter from "@/Home/HomeFooter";
import { cn } from "@/lib/utils";


export interface DonateProps {
  className?: string;
}

export const Donate = ({
  className,
  ...props
}: DonateProps): JSX.Element => {
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
      <div className="w-full max-w-[1440px] mx-auto px-4 md:pl-[134px]">
        <SectionHeader
          title={"Donate to Us"}
          className={cn(
            " left-[-1.9vw] right-[-100vw]"
            // "h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] xl:h-[3px]",
          )}
        />
        <div className="max-w-screen-xl px-[110px] py-16 flex flex-col gap-8 items-start self-stretch">
          <p className=" text-left font-body-font-family text-body-font-size font-body-font-weight w-desktop-column-width-base-col-07">
            We are currently receiving monetary donations through DonorBox. We
            appreciate any and all contributions!
          </p>

        </div>



        <WhereFundsGo />

        <MainButton className="ml-28" />



      </div>
      <HomeFooter />
    </div>

  );
};
