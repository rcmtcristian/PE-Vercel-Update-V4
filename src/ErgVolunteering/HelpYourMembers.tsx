
import { SectionHeader } from "@/components/SectionHeader";

const HelpYourMembers: React.FC = () => {
  return (
    <>
      <SectionHeader title="Our Change Thesis: Build HelpYourMembers" />
      <div className="max-w-screen-xl px-[135px] py-16 flex flex-row gap-8 items-start self-stretch">
        <div className="flex flex-col items-start justify-start gap-8 w-desktop-column-width-base-col-06">
          <h2 className="mb-2 text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
            Fellowships
          </h2>
          <p className="text-color-palette-primary-black text-left font-body-font-family text-body-font-size font-body-font-weight w-[597px]">
            Our events serve as an opportunity for your members to lead and
            participate in cross-functional collaboration. By meeting people
            across organizations, it can expand potential promotion pathways.
            We believe in the power of a strong network in changing the lives
            of underrepresented groups in tech..


          </p>

          <ul>
            <li>• Mobilize your volunteering events to save you time</li>
            <li>• Members practice leadership with skill based events</li>
            <li>• Generate reports on sustainability impact</li>
          </ul>

        </div>

      </div>
    </>
  );
};

export default HelpYourMembers;