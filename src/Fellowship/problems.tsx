
import { YellowBorder } from "@/components/YellowBorder";
import { SectionHeader } from "@/components/SectionHeader";

const Problems: React.FC = () => {
  return (
    <>
      <SectionHeader title="Our Change Thesis: Build Problems" />
      <div className="max-w-screen-xl px-[135px] py-16 flex flex-row gap-8 items-start self-stretch">
        <div className="flex flex-col items-start justify-start gap-8 w-desktop-column-width-base-col-06">
          {/* <p className="text-color-palette-primary-black text-left font-body-font-family text-body-font-size font-body-font-weight w-[597px]">
            ProgramEarth emerged as a response to accelerate carbon capture
            through reforestation. The United Nations highlights that restoring
            and returning 50% of natural areas to conservation is one of the
            most effective ways to reduce our carbon footprint.
            <br />
            <br />
            As children of land stewards, we combine deep earth connections with
            technology. ProgramEarth is a global, interdisciplinary initiative
            with a singular goal: to harness technology, Indigenous ecological
            knowledge, and community-driven action to create a comprehensive,
            executable plan for planetary restoration—practical, scalable, and
            accessible to everyone from corporations to local communities.
          </p> */}

          {/* Key Focus Areas */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="mb-2 text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                Company Volunteering
              </h2>
              <p className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                With data center CO₂ levels up 30%, sustainability must be
                integrated into every workflow. We provide a playbook for
                companies to offset their carbon footprint through fellowship
                volunteering events, with impact trackable via a conservation
                dashboard to meet ESG goals.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                Fellowships
              </h2>
              <p className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                Our software and research fellowships blend environmental
                stewardship with developer workflows, training emerging
                technologists to support impactful nature conservation projects
                and prepare them to excel in top tech companies by mastering
                large team and user base management.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-left text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
                Nature-based Conservation
              </h2>
              <p className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
                We translate projects from Indigenous communities, who steward
                over 80% of the world's natural resources through reforestation
                and wetland preservation, playing a crucial role in carbon
                sequestration and reducing our global carbon footprint.


                ProgramEarth emerged as a response to accelerate carbon capture
                through reforestation. The United Nations highlights that restoring
                and returning 50% of natural areas to conservation is one of the
                most effective ways to reduce our carbon footprint.
                <br />
                <br />
                As children of land stewards, we combine deep earth connections with
                technology. ProgramEarth is a global, interdisciplinary initiative
                with a singular goal: to harness technology, Indigenous ecological
                knowledge, and community-driven action to create a comprehensive,
                executable plan for planetary restoration—practical, scalable, and
                accessible to everyone from corporations to local communities.
              </p>
            </div>
          </div>
        </div>

        {/* <YellowBorder className="!w-desktop-column-width-base-col-04 !h-[521px]" /> */}
      </div>
    </>
  );
};

export default Problems;