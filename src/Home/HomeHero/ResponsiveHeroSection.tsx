import React, { useState, useEffect } from "react";
import { MainButton } from "../../components/MainButton";

// const AnimatedText: React.FC<{ startFrame: string; className?: string }> = ({
//   startFrame,
//   className,
// }) => {
//   const [activeVariant, setActiveVariant] = useState(0);
//   const baseText = "We're building a community of technologists who care about";
//   const variants = [
//     "collective action",
//     "diverse communities",
//     "shared vision",
//     "sustainable solutions",
//   ];

//   return (
//     <div
//       className={`text-color-palette-primary-white text-center text-lg md:text-xl md:text-4xl [text-wrap:balance] bg-clip-text  ${className}`}
//     >
//       {baseText}{" "}
//       <span
//         key={activeVariant}
//         className="text-pe-gold-2 inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden"
//       >
//         <ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
//           {variants.map((variant) => (
//             <li key={variant}>{variant}</li>
//           ))}
//           <li aria-hidden="true">{variants[0]}</li>
//         </ul>
//       </span>
//     </div>
//   );
// };

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
        <h1 className="max-w-3xl -mt-8 text-3xl font-bold text-pe-gold-2 md:text-6xl title-font-family">
          Code for the Planet
        </h1>

        {/* <div className="w-full max-w-lg">
          <AnimatedText startFrame="1" className="w-full" />
        </div> */}
        <h1 className="max-w-3xl -mt-8 text-3xl font-bold text-white">
          We’re creating a community of technologists who build for the planet
        </h1>

        <MainButton />
      </div>
    </div>
  );
};

export default ResponsiveHeroSection;
