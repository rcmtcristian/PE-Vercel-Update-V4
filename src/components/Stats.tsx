export interface IMetricsNumberProps {
  className?: string;
  number?: number | string;
  label?: string;
  numberClassName?: string;
  labelClassName?: string;
}

export const MetricsNumber = ({
  className = "",
  number = "40",
  label = "Countries participating",
  numberClassName = "",
  labelClassName = "",
  ...props
}: IMetricsNumberProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col gap-2 items-start justify-start w-full max-w-[200px] ${className}`}
    >
      <div
        className={`text-color-palette-primary-black text-left font-subtitle-font-family text-subtitle-font-size font-subtitle-font-weight w-full ${numberClassName}`}
      >
        {number}
      </div>

      <div className="bg-legislative-blue rounded-[50px] shrink-0 w-6 h-0.5 my-2"></div>

      <div
        className={`text-color-palette-primary-black text-left font-body-font-family text-body-font-size font-body-font-weight w-full ${labelClassName}`}
      >
        {label}
      </div>
    </div>
  );
};

export default MetricsNumber;
