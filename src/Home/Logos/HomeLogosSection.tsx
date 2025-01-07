import React from "react";
import { MainButton } from "../../components/MainButton";
// import { MainButton } from "../../components/MainButton";

const HomeLogosSection = () => {
  const logos = [
    "logo-image0.png",
    "logo-image1.png",
    "logo-image2.png",
    "logo-image3.png",
  ];

  return (
    <div className="w-full px-4 py-12 bg-color-palette-brand-green-pe-green-5">
      <div className="w-full max-w-full px-4 md:px-8 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-xl text-color-palette-primary-black font-title-font-family md:text-2xl lg:text-3xl font-title-font-weight">
            We Support Employee Resource Groups
          </h2>

          <p className="mb-8 text-lg text-color-palette-primary-black font-subtitle-font-family md:text-xl font-subtitle-font-weight">
            <span className="text-gray-700">We've raised </span>
            <span className="font-bold text-open-source-green">$66,000+</span>
            <span className="text-gray-700"> with volunteers from</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-12 md:grid-cols-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="object-contain w-full max-h-48"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <MainButton label="Volunteer with Us" className="w-full max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default HomeLogosSection;
