// import { BorderBlue } from "./ImageBorderSize12PxColorThemeLegislativeBlue";
import { BorderBlue } from "./BorderBlue";
import { MainButton } from "./MainButton";
import { SecondaryButton } from "./SecondaryButton";
export interface ProfileBoxProps {
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

export const ProfileBox = ({
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
}: ProfileBoxProps): JSX.Element => {
  const variantsClassName = "pic-size-" + picSize;

  return (
    <div
      className={`
        flex flex-col 
        gap-4 md:gap-spacing-base-8-05 
        items-start justify-start 
        w-full md:w-desktop-column-width-base-col-03
        min-w-[280px] max-w-full
        p-4 md:p-0
        relative
        ${className} 
        ${variantsClassName}
      `}
    >
      <div className="flex items-start justify-center w-full">
        <BorderBlue
          className="w-full md:!w-desktop-column-width-base-col-02 aspect-square md:!h-desktop-column-width-base-col-02"
          src={imageSrc}
        />
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-2 px-2 md:gap-0 md:px-spacing-base-8-05">
        <h2 className="w-full min-h-[2em] text-[#000000] text-center font-header-font-family text-header-font-size font-header-font-weight overflow-hidden text-ellipsis">
          {header}
        </h2>
        <div className="w-full min-h-[2em] text-[#000000] text-center font-subheader-font-family text-subheader-font-size font-subheader-font-weight overflow-hidden text-ellipsis">
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
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4 mt-2 md:gap-6">
          {showLink1 && websiteUrl && (
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <SecondaryButton
                label="Website"
                type="text"
                className="hover:underline"
              />
            </a>
          )}
          {showLink2 && linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
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
