import { ArrowDropDown } from "../ArrowDropDown";

export interface INavLinkStateDefaultProps {
  showDropdownCaret?: boolean;
  linkText?: string;
  state?: "default" | "hover" | "selected";
  className?: string;
}

export const NavLinkStateDefault = ({
  showDropdownCaret = true,
  linkText = "About YOU",
  state = "default",
  className,
  ...props
}: INavLinkStateDefaultProps): JSX.Element => {
  return (
    <div
      className={`
        flex 
        flex-row 
        items-center 
        justify-start 
        relative 
        z-20
        min-h-[1.5rem]
        py-1
        px-2
        md:px-0
        md:py-0
        space-x-1.5
        md:space-x-2
        ${state && `state-${state}`}
        ${className}
      `}
    >
      <span className={`
        relative 
        z-50 
        flex 
        items-center
        text-header-and-footer-nav-bar-menu-links-default 
        font-link-nav-default-font-family 
        text-link-nav-default-font-size 
        leading-link-nav-default-line-height 
        font-link-nav-default-font-weight
        whitespace-nowrap
      `}>
        {linkText}
      </span>

      {showDropdownCaret && (
        <ArrowDropDown className="!shrink-0 !w-2.5 !h-2.5 md:!w-3 md:!h-3" />
      )}
    </div>
  );
};