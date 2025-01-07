export interface IArrowDropDownProps {
  className?: string;
}

export const ArrowDropDown = ({
  className,
  ...props
}: IArrowDropDownProps): JSX.Element => {
  return (
    <img
      className={"shrink-0 w-3 h-3 relative overflow-visible " + className}
      src="arrow-drop-down.svg"
    />
  );
};
