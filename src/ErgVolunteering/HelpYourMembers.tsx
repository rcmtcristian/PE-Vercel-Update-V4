
import { SectionHeader } from "@/components/SectionHeader";

const HelpYourMembers: React.FC = () => {
  return (
    <>
      <SectionHeader title="Our Change Thesis: Build HelpYourMembers" />
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[135px] py-6 sm:py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row gap-6 sm:gap-8 items-start self-stretch">
        <div className="flex flex-col items-start justify-start gap-6 sm:gap-8 w-full lg:w-2/3 xl:w-desktop-column-width-base-col-06">
          <h2 className="mb-2 sm:mb-3 md:mb-4 text-left text-color-palette-primary-black font-subheader-font-family text-xl sm:text-2xl md:text-3xl lg:text-subheader-font-size font-subheader-font-weight">
            Fellowships
          </h2>
          <p className="text-color-palette-primary-black text-left font-body-font-family text-sm sm:text-base md:text-lg lg:text-body-font-size font-body-font-weight">
            Our events serve as an opportunity for your members to lead and
            participate in cross-functional collaboration. By meeting people
            across organizations, it can expand potential promotion pathways.
            We believe in the power of a strong network in changing the lives
            of underrepresented groups in tech.
          </p>

          <ul className="space-y-2 sm:space-y-3 md:space-y-4">
            <li className="flex items-start">
              <span className="mr-2 text-sm sm:text-base md:text-lg lg:text-body-font-size">•</span>
              <span className="text-sm sm:text-base md:text-lg lg:text-body-font-size">Mobilize your volunteering events to save you time</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-sm sm:text-base md:text-lg lg:text-body-font-size">•</span>
              <span className="text-sm sm:text-base md:text-lg lg:text-body-font-size">Members practice leadership with skill based events</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-sm sm:text-base md:text-lg lg:text-body-font-size">•</span>
              <span className="text-sm sm:text-base md:text-lg lg:text-body-font-size">Generate reports on sustainability impact</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};


export default HelpYourMembers;