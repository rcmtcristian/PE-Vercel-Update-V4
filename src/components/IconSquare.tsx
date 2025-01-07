// import { Earth } from "../Earth/Earth";

import { Earth } from "lucide-react";

export interface IIconSquareProps {
  iconGlyphs?: JSX.Element;
  className?: string;
}

export const IconSquare = ({
  iconGlyphs = <Earth className="!shrink-0" />,
  className,
  ...props
}: IIconSquareProps): JSX.Element => {
  return (
    <div
      className={
        "bg-color-palette-brand-green-pe-green-4 rounded-lg flex flex-row gap-0 items-center justify-center w-20 h-20 relative overflow-hidden " +
        className
      }
    >
      {iconGlyphs}
    </div>
  );
};
