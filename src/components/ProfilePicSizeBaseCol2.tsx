// import { BorderBlue } from "./ImageBorderSize12PxColorThemeLegislativeBlue";
import { BorderBlue } from "./BorderBlue";
import { MainButton } from "./MainButton";
import { SecondaryButton } from "./SecondaryButton";
export interface IProfilePicSizeBaseCol2Props {
  header?: string;
  subheader?: string;
  subheaderUrl?: string;
  showLink1?: boolean;
  showLink2?: boolean;
  websiteUrl?: string;
  linkedinUrl?: string;
  picSize?: "base-col-2" | "base-col-3";
  className?: string;
  imageSrc?: string;
}

export const ProfilePicSizeBaseCol2 = ({
  header = "Name",
  subheader = "Organization",
  subheaderUrl = "",
  showLink1 = true,
  showLink2 = true,
  websiteUrl = "",
  linkedinUrl = "",
  picSize = "base-col-2",
  className,
  imageSrc = "/image0.png",
  ...props
}: IProfilePicSizeBaseCol2Props): JSX.Element => {
  const variantsClassName = "pic-size-" + picSize;

  return (
    <div
      className={
        "flex flex-col gap-spacing-base-8-05 items-center justify-start shrink-0 w-desktop-column-width-base-col-03 relative overflow-hidden " +
        className +
        " " +
        variantsClassName
      }
    >
      <BorderBlue
        borderSize="12-px"
        className="!w-desktop-column-width-base-col-02 !h-desktop-column-width-base-col-02"
        src={imageSrc}
      ></BorderBlue>
      <div className="relative flex flex-col items-start self-stretch justify-start gap-0 pr-spacing-base-8-05 pl-spacing-base-8-05 shrink-0">
        <div className="text-[#000000] text-center font-header-font-family text-header-font-size font-header-font-weight relative self-stretch flex items-center justify-center">
          {header}
        </div>
        <div className="text-[#000000] text-center font-subheader-font-family text-subheader-font-size font-subheader-font-weight relative self-stretch flex items-center justify-center">
          {subheaderUrl ? (
            <a
              href={subheaderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {subheader}
            </a>
          ) : (
            subheader
          )}
        </div>
        <div className="relative flex flex-row items-start self-stretch justify-center gap-6 shrink-0">
          {showLink1 && websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SecondaryButton
                label="Website"
                type="text"
                className="hover:underline"
              />
            </a>
          )}
          {showLink2 && linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SecondaryButton
                label="LinkedIn"
                type="text"
                className="hover:underline"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
