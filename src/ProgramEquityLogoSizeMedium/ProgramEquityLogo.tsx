export interface IProgramEquityLogoProps {
  size?: "small" | "medium";
  className?: string;
  link?: string;
}

export const ProgramEquityLogo = ({
  size = "small",
  className,
  link,
  ...props
}: IProgramEquityLogoProps): JSX.Element => {
  const variantsClassName = "size-" + size;

  const logoContent = (
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

  return link ? (
    <a href={link} {...props}>
      {logoContent}
    </a>
  ) : (
    logoContent
  );
};
