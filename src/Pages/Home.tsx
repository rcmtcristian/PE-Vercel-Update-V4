import { HomeFooter } from "../Home/HomeFooter";
import ResponsiveHeroSection from "../Home/HomeHero/ResponsiveHeroSection";
import HomeInfoSection from "../Home/Info/HomeInfoSection";
import HomeLogosSection from "../Home/Logos/HomeLogosSection";
import Stats from "../Home/HomeStats";
import HomeImpactSectionStickylenis from "@/Home/Impact/HomeImpactSectionStickyMotion";
import EnvironmentalToolsSection from "@/Home/EnvironmentalToolsSection";
import NewsletterSection from "@/Home/HomeCta/NewsletterSection";
import SmoothScrolling from "@/SmoothScrolling";
// import HomeImpactSectionSticky from "@/Home/Impact/HomeImpactSectionSticky";
import MotionTest from "@/Home/Impact/MotionTest";
// import HomeImpactSectionStickyWhole from "@/Home/Impact/HomeImpactSectionStickyWhole";

export interface HomeProps {
  className?: string;
}

export const Home = ({ className, ...props }: HomeProps): JSX.Element => {
  return (
    <SmoothScrolling>
      <div
        className={
          "bg-color-palette-primary-white flex flex-col gap-0 items-center justify-start relative overflow-clip  " +
          className
        }
      >
        <ResponsiveHeroSection></ResponsiveHeroSection>
        <HomeInfoSection></HomeInfoSection>

        <HomeLogosSection></HomeLogosSection>
        <Stats></Stats>

        {/* <HomeImpactSection></HomeImpactSection> */}
        {/* <HomeImpactSectionSticky></HomeImpactSectionSticky> */}
        <HomeImpactSectionStickylenis></HomeImpactSectionStickylenis>

        {/* <HomeImpactSectionStickyWhole></HomeImpactSectionStickyWhole> */}
        <EnvironmentalToolsSection></EnvironmentalToolsSection>

        {/* <HomeCtaSection></HomeCtaSection> */}
        <NewsletterSection></NewsletterSection>

        {/* <HomeFooter />
        <MotionTest></MotionTest> */}
      </div>
    </SmoothScrolling>
  );
};
