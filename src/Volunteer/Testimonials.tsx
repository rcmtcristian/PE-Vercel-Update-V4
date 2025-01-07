import React from "react";
import { MetricsNumber } from "../components/Stats"; // Adjust import path as needed
import Statement from "@/components/Statement";

const Testimonials = () => {
  return (
    <div className="w-full px-4 py-12">
      <div className="w-full max-w-full px-4 md:px-8 lg:px-16">
        {/* <h2 className="mb-8 text-xl text-color-palette-primary-black font-title-font-family md:text-2xl lg:text-3xl font-title-font-weight">
          How do we create an impact?
        </h2> */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Statement number="Testimonial" label="1 Hour" />
          <Statement number="Testimonial" label="1 Hour" />
          <Statement number="Testimonial" label="1 Hour" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
