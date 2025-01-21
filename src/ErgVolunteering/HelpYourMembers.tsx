
import { SectionHeader } from "@/components/SectionHeader";

const HelpYourMembers: React.FC = () => {
  return (
    <>
      <SectionHeader title="Our Change Thesis: Build HelpYourMembers" />
      <div className="px-4 md:px-[135px] py-8 md:py-16 flex flex-col md:flex-row gap-8 items-start self-stretch">
        <div className="flex flex-col items-start justify-start gap-8 w-full md:w-desktop-column-width-base-col-06">
          <h2 className="mb-2 text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
            Fellowships
          </h2>
          <p className="text-color-palette-primary-black text-left font-body-font-family text-body-font-size font-body-font-weight">
            Our events serve as an opportunity for your members to lead and
            participate in cross-functional collaboration. By meeting people
            across organizations, it can expand potential promotion pathways.
            We believe in the power of a strong network in changing the lives
            of underrepresented groups in tech.
          </p>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Mobilize your volunteering events to save you time</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Members practice leadership with skill based events</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Generate reports on sustainability impact</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HelpYourMembers;