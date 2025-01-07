export interface YellowBoderProps {
  description?: string;
  subheader?: string;
  header?: string;
  showGraphic?: boolean;
  graphicType?: "icon" | "big-image" | "small-image";
  className?: string;
  imageSrc?: string;
}

export const YellowBorder = ({
  description = "Description paragraph",
  subheader = "",
  header = "Header",
  showGraphic = true,
  graphicType = "big-image",
  className = "",
  imageSrc = "image0.png",
  ...props
}: YellowBoderProps): JSX.Element => {
  const variantsClassName = `graphic-type-${graphicType}`;

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

      <div className="w-full text-center">
        <h3 className="mb-2 text-color-palette-primary-black font-header-font-family text-header-font-size font-header-font-weight">
          {header}
        </h3>

        {subheader && (
          <h4 className="mb-2 text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
            {subheader}
          </h4>
        )}

        <p className="text-left text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
          {description}
        </p>
      </div>
    </div>
  );
};
