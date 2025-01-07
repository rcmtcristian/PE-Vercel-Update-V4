import { Warning } from "../Warning/Warning";

export interface MainButtonProps {
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  label?: string;
  type?: "default" | "outlined" | "text";
  state?: "default" | "hover" | "focused" | "disabled";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MainButton = ({
  showRightIcon = false,
  showLeftIcon = false,
  label = "Button Label",
  type = "default",
  state = "default",
  className,
  onClick,
  ...props
}: MainButtonProps): JSX.Element => {
  const variantsClassName = "type-" + type + " state-" + state;

  return (
    <button
      onClick={onClick}
      className={
        "rounded-[50px] flex flex-col gap-0 items-center justify-center shrink-0 w-full max-w-[200px] h-12 relative " +
        className +
        " " +
        variantsClassName
      }
      {...props}
    >
      <div className="rounded-[50px] border-solid border-pe-gold border p-[3px] flex flex-col gap-0 items-center justify-center self-stretch flex-1 relative">
        <div className="rounded-[50px] border-solid border-pe-gold border p-[3px] flex flex-col gap-0 items-center justify-center self-stretch flex-1 relative">
          <div className="bg-pe-gold rounded-[50px] pt-2 pb-2 flex flex-col gap-0 items-center justify-center self-stretch flex-1 relative">
            <div className="relative flex flex-row items-center self-stretch justify-center flex-1 gap-2">
              {showLeftIcon && (
                <>
                  <Warning className="!shrink-0 !w-6 !h-6"></Warning>
                </>
              )}
              <div className="relative flex items-center justify-center text-center text-color-palette-primary-black font-button-label-font-family text-button-label-font-size font-button-label-font-weight">
                {label}{" "}
              </div>
              {showRightIcon && (
                <>
                  <Warning className="!shrink-0 !w-6 !h-6"></Warning>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
