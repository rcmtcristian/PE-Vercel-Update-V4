import React, { useState, useEffect } from "react";
import { MainButton } from "../../components/MainButton";

const AnimatedText: React.FC<{ startFrame: string; className?: string }> = ({
  startFrame,
  className,
}) => {
  const [activeVariant, setActiveVariant] = useState(0);
  const baseText = "We’re building a community of technologists who care about";
  const variants = [
    "collective action",
    "diverse communities",
    "shared vision",
    "sustainable solutions",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveVariant((prev) => (prev + 1) % variants.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`text-color-palette-primary-white text-center text-lg md:text-xl ${className}`}
    >
      {baseText}{" "}
      <span
        key={activeVariant} // Triggers re-mounting for animation
        className="inline-block animate-slide-up text-pe-gold-2"
      >
        {variants[activeVariant]}
      </span>
    </div>
  );
};

const ResponsiveHeroSection = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[850px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full"
          src="img-7849-10.png"
          alt="Hero Background"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(252, 255, 255, 0.00) 0%, rgba(86, 105, 109, 0.50) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container relative flex flex-col items-center justify-center h-full px-4 mx-auto space-y-6 text-center md:space-y-8">
        <h1 className="max-w-3xl -mt-8 text-3xl font-bold text-white md:text-6xl title-font-family">
          Our Future Starts with Us
        </h1>

        <div className="w-full max-w-lg">
          <AnimatedText startFrame="1" className="w-full" />
        </div>

        <MainButton
          label="Learn More"
          className="!w-desktop-column-width-base-col-03"
        />
      </div>
    </div>
  );
};

export default ResponsiveHeroSection;
