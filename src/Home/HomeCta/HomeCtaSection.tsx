// import { MainButton } from '../../components/MainButton';

import { MainButton } from "../../components/MainButton";

const HomeCtaSection = () => {
  return (
    <div className="relative w-full h-[475px] md:h-[500px] lg:h-[550px] overflow-hidden">
      {/* Background Image */}
      <img
        src="img-5807-edited-10.png"
        alt="Build the Future Together"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="w-full max-w-4xl">
          <h2 className="mb-8 text-2xl text-color-palette-primary-white font-title-font-family md:text-3xl lg:text-4xl font-title-font-weight">
            Let's Build the Future Together
          </h2>

          <div className="flex justify-center">
            <MainButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCtaSection;
