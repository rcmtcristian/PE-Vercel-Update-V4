import { Earth } from "lucide-react";
import { IconSquare } from "./IconSquare";

export interface ICardInfoGraphicTypeIconProps {
  description?: string;
  subheader?: string;
  header?: string;
  showGraphic?: boolean;
  graphicType?: "icon" | "big-image" | "small-image";
  icon?: React.ReactNode;
  className?: string;
}

export const CardInfoGraphicTypeIcon = ({
  description = "Description paragraph",
  subheader = "",
  header = "",
  showGraphic = true,
  graphicType = "icon",
  icon = <Earth className="!shrink-0" />,
  className,
  ...props
}: ICardInfoGraphicTypeIconProps): JSX.Element => {
  const variantsClassName = "graphic-type-" + graphicType;

  return (
    <div
      className={`
        flex 
        flex-col 
        gap-4 
        items-center
        justify-start 
        self-stretch 
        shrink-0 
        relative 
        ${className} 
        ${variantsClassName}
      `}
    >
      {showGraphic && (
        <IconSquare
          iconGlyphs={icon as React.ReactElement}
          className="!shrink-0"
        />
      )}

      <div className="flex flex-col items-start self-stretch space-y-2  pl-16" >
        <h3 className="text-color-palette-primary-black font-header-font-family text-header-font-size font-header-font-weight">
          {header}
        </h3>

        {subheader && (
          <h4 className="text-color-palette-primary-black font-subheader-font-family text-subheader-font-size font-subheader-font-weight">
            {subheader}
          </h4>
        )}

        {description && (
          <p className="text-color-palette-primary-black font-body-font-family text-body-font-size font-body-font-weight">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}