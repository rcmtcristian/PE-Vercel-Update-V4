import { HomeFooter } from "../Home/HomeFooter";
import ResponsiveHeroSection from "../Home/HomeHero/ResponsiveHeroSection";
import HomeInfoSection from "../Home/Info/HomeInfoSection";
import HomeImpactSection from "../Home/Impact/HomeInpactSection";
import HomeLogosSection from "../Home/Logos/HomeLogosSection";
import Stats from "../Home/HomeStats";
import HomeCtaSection from "../Home/HomeCta/HomeCtaSection";

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
      <HomeImpactSection></HomeImpactSection>
      <HomeLogosSection></HomeLogosSection>

      <Stats></Stats>

      <HomeCtaSection></HomeCtaSection>

      <HomeFooter className="!w-desktop-breakpoint-base"></HomeFooter>
    </div>
  );
};
