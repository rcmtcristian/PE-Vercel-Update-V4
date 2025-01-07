import { Warning } from "../Warning/Warning";

export interface ISecondaryButtonProps {
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  label?: string;
  type?: "default" | "outlined" | "text";
  state?: "default" | "hover" | "focused" | "disabled";
  className?: string;
}

export const SecondaryButton = ({
  showRightIcon = false,
  showLeftIcon = false,
  label = "Button Label",
  type = "default",
  state = "default",
  className,
  ...props
}: ISecondaryButtonProps): JSX.Element => {
  const variantsClassName = "type-" + type + " state-" + state;

  return (
    <div
      className={
        "rounded-[50px] flex flex-col gap-0 items-center justify-center shrink-0 relative " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="relative flex flex-row items-center self-stretch justify-center gap-spacing-base-8-1 shrink-0">
        {showLeftIcon && (
          <>
            <Warning className="!w-spacing-base-8-2 !h-spacing-base-8-2"></Warning>
          </>
        )}
        <div className="relative flex items-center justify-center text-center text-links-default font-button-link-default-font-family text-button-link-default-font-size font-button-link-default-font-weight">
          {label}{" "}
        </div>
        {showRightIcon && (
          <>
            <Warning className="!w-spacing-base-8-2 !h-spacing-base-8-2"></Warning>
          </>
        )}
      </div>
    </div>
  );
};
