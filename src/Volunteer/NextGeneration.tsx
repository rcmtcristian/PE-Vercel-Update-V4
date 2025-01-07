import { CardInfoGraphicTypeIcon } from "@/components/CardInfoGraphicTypeIcon";
import { MainButton } from "@/components/MainButton";

const GenerationsHeroSection = () => {
  return (
    <div className="relative flex flex-row items-center justify-center py-16 bg-pe-gold-5">
      <div className="relative flex flex-col items-center justify-center w-full max-w-[80%] lg:max-w-[60%] text-center">
        <h1 className="text-color-palette-primary-black font-title-font-family text-title-font-size font-title-font-weight">
          Mentor the Next Generation
        </h1>

        <p className="mt-4 text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight leading-relaxed">
          Meet fellows across timezones, backgrounds, and unique pathways that make their perspective important to tech. Exchange best practices with other mentors across the industry. You can influence the future of technology.
        </p>

        <MainButton label="Sign Up" className="mt-6" />
      </div>
    </div>
  );
};

export default GenerationsHeroSection;
