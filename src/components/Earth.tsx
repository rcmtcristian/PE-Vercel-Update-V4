export interface IEarthProps {
  className?: string;
}

export const Earth = ({ className, ...props }: IEarthProps): JSX.Element => {
  return (
    <img
      className={"shrink-0 w-8 h-8 relative overflow-visible " + className}
      src="earth.svg"
    />
  );
};
