import { GreenBorder } from "../../components/GreenBorder";

const HomeInfoSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-start w-full px-4 py-16 bg-pe-gold-5">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-2xl font-bold text-center text-color-palette-primary-black font-title-font-family md:text-4xl">
          We Connect Potential with Action
        </div>

        <div className="relative w-full h-auto md:h-[625px]">
          <div className="relative w-full h-full overflow-hidden">
            <GreenBorder
              primaryColor="legislative-blue"
              secondaryColor="pe-gold-2"
              className="w-full h-[300px] md:h-[625px] object-cover rounded-lg"
              src="Header-Image.png"
            />
          </div>

          <div className="absolute right-0 hidden transform  translate-x-1/2 md:block bottom-20">
            <div className="relative w-[197px] h-[110px]">
              {/* <div className="absolute w-full h-full border border-solid rounded bg-color-palette-brand-green-pe-green-5 border-color-palette-brand-green-pe-green-5"></div>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-center text-color-palette-primary-black font-title-font-family">
                You
              </div> */}
            </div>
          </div>

          {/* Mobile version of "You" block */}
          <div className="flex justify-center w-full mt-4 md:hidden">
            <div className="p-4 text-center border rounded bg-color-palette-brand-green-pe-green-5">
              <span className="font-bold text-color-palette-primary-black">
                You
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfoSection;
