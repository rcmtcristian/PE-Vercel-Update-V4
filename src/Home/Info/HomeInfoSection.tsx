import { GreenBorder } from "../../components/GreenBorder";

const HomeInfoSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full px-4 py-16 bg-pe-gold-5">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-2xl font-bold text-center text-color-palette-primary-black font-title-font-family md:text-4xl">
          We Connect Potential with Action
        </div>

        <div className="relative w-full h-auto md:h-[800px]">
          {/* Changes the aspect ratio of the main image as well */}
          <div className="relative w-full h-full max-h-[800px] aspect-[16/9]">

            <GreenBorder
              primaryColor="legislative-blue"
              secondaryColor="pe-gold-2"
              className="w-full h-full max-h-[800px] aspect-[16/9] "
              src="Header-Image.png"
            />
          </div>


        </div>
      </div>
    </div>
  );
};

export default HomeInfoSection;
