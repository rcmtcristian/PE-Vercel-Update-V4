import { YellowBorder } from "../../components/YellowBorder";
import { MainButton } from "../../components/MainButton";
// import { YellowBorder} from "../../YellowBorder/YellowBorder";

import React from "react";
// import YellowBorderfrom './YellowBorder';
// import MainButton from './MainButton';

const HomeImpactSection = () => {
  return (
    <div className="relative w-full px-4 py-12 bg-legislative-blue-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-xl text-center text-color-palette-primary-black font-title-font-family md:text-2xl lg:text-3xl font-title-font-weight">
          You Can Make an Impact Today
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Company Volunteering Card */}
          <div className="flex flex-col">
            <YellowBorder
              header="Company Volunteering"
              subheader=""
              description="Develop your skills as an industry leader by guiding our early career fellows with their journey into the tech industry. From resume reviews and mock interviews to paired programming and technical workshops, our mentorship program has events where mentors can demonstrate their experience and coach fellows with improving their skills. Our volunteers span across the industry including AWS, Google, Microsoft, and more."
              graphicType="big-image"
              className="flex-grow"
              imageSrc="/claymation-mentorship-square.webp"
            />
            <div className="flex justify-center mt-4">
              <MainButton label="Sign Up Today" className="w-full max-w-xs" />
            </div>
          </div>

          {/* Early Career Fellowship Card */}
          <div className="flex flex-col">
            <YellowBorder
              header="Early Career Fellowship"
              subheader=""
              description="Build the bridge between your technical education and industry development practices. Join our free 10 week fellowship program to work on data-driven software projects and gain experience in DevSecOps and full-stack web development. Everyone is welcome to apply with priority given to underrepresented groups. Our fellows graduate as competitive candidates who are hired by companies such as Adobe, IBM, Microsoft, and more."
              graphicType="big-image"
              className="flex-grow"
              imageSrc="/claymation-fellowship-square.webp"
            />
            <div className="flex justify-center mt-4">
              <MainButton
                label="View Our Fellowship"
                className="w-full max-w-xs"
              />
            </div>
          </div>

          {/* Conservation Projects Card */}
          <div className="flex flex-col">
            <YellowBorder
              header="Conservation Projects"
              subheader=""
              description="Our mentors and fellows work on open source software that support nature conservation, biodiversity, and sustainability projects. From restoring natural resources to lowering the carbon footprint, we partner with nature-based organizations to create direct impact for their communities via technology."
              graphicType="big-image"
              className="flex-grow"
              imageSrc="/claymation-nature-square copy.webp"
            />
            <div className="flex justify-center mt-4">
              <MainButton label="Learn More" className="w-full max-w-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImpactSection;
