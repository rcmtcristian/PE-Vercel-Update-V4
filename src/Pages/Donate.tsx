import WhereFundsGo from "@/components/Donations/WhereFundsGo";
import { MainButton } from "@/components/MainButton";
import HomeFooter from "@/Home/HomeFooter";


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
      <div className="max-w-screen-xl px-[135px] py-16 flex flex-col gap-8 items-start self-stretch">
        <p className="text-[#000000] text-left font-body-font-family text-body-font-size font-body-font-weight w-desktop-column-width-base-col-07">
          We are currently receiving monetary donations through DonorBox. We
          appreciate any and all contributions!
        </p>

      </div>



      <WhereFundsGo />

      <MainButton />


      <HomeFooter className="!w-desktop-breakpoint-base" />
    </div>
  );
};
