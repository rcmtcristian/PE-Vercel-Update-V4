import React from "react";

export interface IProgramEquityLogoProps {
  size?: "small" | "medium";
  className?: string;
}

export const ProgramEquityLogo = ({
  size = "small",
  className,
  ...props
}: IProgramEquityLogoProps): JSX.Element => {
  const variantsClassName = "size-" + size;

  return (
    <div
      className={`flex flex-row items-center justify-start relative ${className} ${variantsClassName}`}
    >
      <img
        className="w-full h-auto max-w-[280px]"
        alt="Program Equity Logo"
        src="pe-logo-mark-and-text-10.png"
      />
    </div>
  );
};
