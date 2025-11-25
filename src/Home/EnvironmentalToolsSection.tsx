import React from "react";

const EnvironmentalToolsSection = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      ),
      title: "Climate Monitoring",
      description:
        "We use AI-powered sensors to monitor soil moisture, air temperature, and weather for reforestation.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      ),
      title: "Data-Driven Insights",
      description:
        "Our platform uses sensor data to give continuous insights into environmental conditions, such as drought and flood risks.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
        </svg>
      ),
      title: "Geospatial Stories",
      description:
        "We generate unified spatial maps and advanced data visualizations that support planning and funding for conservation efforts.",
    },
  ];

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('river-trees.png')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 mx-auto md:py-24">
        {/* Title Section */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0b44c] mb-4">
            Our Tools Benefit Environmental Partners
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-white md:text-2xl">
            We collaborate with conservationists across the United States,
            India, and Brazil
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#2C5F7F] rounded-2xl p-8 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 text-[#f0b44c]">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-white/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalToolsSection;
