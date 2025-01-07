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
  const variantsClassName = "state-" + state;

  return (
    <div
      className={
        "flex flex-row gap-spacing-base-8-05 z-20 items-center justify-start shrink-0 h-6 relative " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="relative z-50 flex items-end justify-center text-center text-header-and-footer-nav-bar-menu-links-default font-link-nav-default-font-family text-link-nav-default-font-size leading-link-nav-default-line-height font-link-nav-default-font-weight">
        {linkText}{" "}
      </div>
      {showDropdownCaret && (
        <>
          <ArrowDropDown className="!shrink-0 !w-3 !h-3"></ArrowDropDown>
        </>
      )}
    </div>
  );
};
