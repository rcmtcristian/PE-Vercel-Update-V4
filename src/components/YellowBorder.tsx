export interface YellowBoderProps {
  description?: string;
  subheader?: string;
  header?: string;
  showGraphic?: boolean;
  graphicType?: "icon" | "big-image" | "small-image";
  className?: string;
  imageSrc?: string;
  link?: string;
  linkIcon?: string;
  textAlign?: "center" | "left";
}

export const YellowBorder = ({
  description = "Description paragraph",
  subheader = "",
  header = "Header",
  showGraphic = true,
  graphicType = "big-image",
  className = "",
  imageSrc = "image0.png",
  link,
  linkIcon,
  textAlign = "center",
  ...props
}: YellowBoderProps): JSX.Element => {
  const variantsClassName = `graphic-type-${graphicType}`;
  const alignClass = textAlign === "center" ? "text-center" : "text-left";

  return (
    <div
      className={`flex flex-col items-center justify-start w-full space-y-4 ${className} ${variantsClassName}`}
    >
      {showGraphic && (
        <div className="w-full max-w-md aspect-square overflow-hidden rounded-[40px] border-[5px] border-solid border-pe-gold-4">
          <img
            className="w-full h-full object-cover rounded-[36px] border-[10px] border-solid border-pe-gold-3"
            src={imageSrc}
            alt={header}
          />
        </div>
      )}

      <div className={`w-full ${alignClass}`}>
        <h3
          className={`mb-2 text-color-palette-primary-black font-header-font-family text-header-font-size font-header-font-weight ${alignClass}`}
        >
          {header}
        </h3>

        {subheader && (
          <h4
            className={`mb-2 text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight ${alignClass}`}
          >
            {subheader}
          </h4>
        )}

        <p
          className={`${alignClass}text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight`}
        >
          {description}
        </p>

        {link && (
          <a
            href={link}
            className="flex items-center justify-center mt-4 text-color-palette-secondary-pe-grey-1 hover:text-color-palette-primary-black"
          >
            {linkIcon && (
              <img src={linkIcon} alt="Link Icon" className="w-5 h-5 mr-2" />
            )}
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};
