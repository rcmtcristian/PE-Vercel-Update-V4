const HomeLogosSection = () => {
  const logos = [
    "logo-aws.png",
    "logo-bowie.png",
    "logo-github.png",
    "logo-google.png",
    "logo-ibm.svg",
    "logo-mlh.png",
    "logo-planetscale.png",
    "logo-postman.svg",
    "logo-redhat.png",
    "logo-sabio.png",
  ];

  return (
    <div className="w-full px-4 py-12 bg-[#D4E4E3]">
      <div className="w-full mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C4A3E] mb-2">
            We've raised over <span className="text-[#2C4A3E]">$160,000</span>{" "}
            with employee volunteering
          </h2>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center flex-shrink-0 px-8"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="object-contain w-auto h-16 md:h-20"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center flex-shrink-0 px-8"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="object-contain w-auto h-16 md:h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HomeLogosSection;
