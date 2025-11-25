export interface IMetricsNumberProps {
  className?: string;
  icon?: React.ReactNode;
  number?: number | string;
  label?: string;
  numberClassName?: string;
  labelClassName?: string;
}

export const MetricsNumber = ({
  className = "",
  icon,
  number = "40",
  label = "Countries participating",
  numberClassName = "",
  labelClassName = "",
  ...props
}: IMetricsNumberProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col gap-2 items-center justify-start text-center ${className}`}
    >
      {icon && (
        <div className="w-16 h-16 md:w-20 md:h-20 mb-2 text-[#E8A64D]">
          {icon}
        </div>
      )}

      <div
        className={`text-3xl md:text-4xl font-bold text-[#3D5A4F] ${numberClassName}`}
      >
        {number}
      </div>

      <div
        className={`text-sm md:text-base text-[#2C4A3E] mt-2 ${labelClassName}`}
      >
        {label}
      </div>
    </div>
  );
};
