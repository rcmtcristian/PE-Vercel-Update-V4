import React from "react";
import { MetricsNumber } from "../components/Stats"; // Adjust import path as needed

const HowWeImpact = () => {
  return (
    <div className="w-full py-12">
      <div className="w-full max-w-full">
        <h2 className="mb-8 text-xl text-color-palette-primary-black font-title-font-family md:text-2xl lg:text-3xl font-title-font-weight">
          What happens every week?
        </h2>


        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <MetricsNumber number="2,245,000" label="Hey" className="w-full" />
          <MetricsNumber number="84" className="w-full" />
          <MetricsNumber number="103" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HowWeImpact;
