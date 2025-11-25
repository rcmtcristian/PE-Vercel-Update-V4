import { HomeFooter } from "../Home/HomeFooter";
import ResponsiveHeroSection from "../Home/HomeHero/ResponsiveHeroSection";
import HomeInfoSection from "../Home/Info/HomeInfoSection";
import HomeLogosSection from "../Home/Logos/HomeLogosSection";
import Stats from "../Home/HomeStats";
import HomeCtaSection from "../Home/HomeCta/HomeCtaSection";
import HomeImpactSectionSticky from "@/Home/Impact/HomeImpactSectionSticky";

export interface HomeProps {
  className?: string;
}

export const Home = ({ className, ...props }: HomeProps): JSX.Element => {
  return (
    <div
      className={
        "bg-color-palette-primary-white flex flex-col gap-0 items-center justify-start relative overflow-hidden " +
        className
      }
    >
      <ResponsiveHeroSection></ResponsiveHeroSection>
      <HomeInfoSection></HomeInfoSection>
      <HomeLogosSection></HomeLogosSection>
      <Stats></Stats>

      {/* <HomeImpactSection></HomeImpactSection> */}
      <HomeImpactSectionSticky></HomeImpactSectionSticky>

      <HomeCtaSection></HomeCtaSection>

      <HomeFooter />
    </div>
  );
};
