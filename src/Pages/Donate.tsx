import WhereFundsGo from "@/components/Donations/WhereFundsGo";
import { MainButton } from "@/components/MainButton";
import { SectionHeader } from "@/components/SectionHeader";
import HomeFooter from "@/Home/HomeFooter";
import { cn } from "@/lib/utils";

export interface DonateProps {
  className?: string;
}

export const Donate = ({ className, ...props }: DonateProps): JSX.Element => {
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
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <SectionHeader
          title={"Donate to Us"}
          className={cn(
            "left-[-1.9vw] right-[-100vw]"
            // "h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] xl:h-[3px]",
          )}
        />
        <div className="max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[110px] py-8 sm:py-12 md:py-16 flex flex-col gap-6 sm:gap-8 items-start self-stretch">
          <p className="w-full text-sm text-left font-body-font-family sm:text-base md:text-lg lg:text-body-font-size font-body-font-weight sm:w-3/4 md:w-2/3 lg:w-desktop-column-width-base-col-07">
            We are currently receiving monetary donations through DonorBox. We
            appreciate any and all contributions!
          </p>
        </div>

        <WhereFundsGo />

        <MainButton className="mb-10 sm:mb-12 md:mb-16 sm:ml-32 md:ml-32 " />
      </div>
      <HomeFooter />
    </div>
  );
};
