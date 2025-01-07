export interface IWarningProps {
  className?: string;
}

export const Warning = ({
  className,
  ...props
}: IWarningProps): JSX.Element => {
  return (
    <img
      className={
        "shrink-0 w-spacing-base-8-2 h-spacing-base-8-2 relative overflow-visible " +
        className
      }
      src="warning.svg"
    />
  );
};
