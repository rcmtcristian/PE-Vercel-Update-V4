export interface IVIconIconMenuProps {
  icon?:
    | "account-circle"
    | "check-circle"
    | "arrow-back"
    | "arrow-forward"
    | "menu"
    | "more-vert"
    | "brightness-1"
    | "crop-square"
    | "layers"
    | "more-horiz"
    | "send"
    | "play-arrow"
    | "network-wifi"
    | "battery-full"
    | "signal-cellular-4-bar"
    | "flash-on"
    | "close"
    | "search"
    | "square"
    | "triangle"
    | "web-asset"
    | "keyboard-arrow-down"
    | "keyboard-arrow-up"
    | "arrow-drop-down"
    | "arrow-drop-up"
    | "chevron-right"
    | "chevron-left";
  className?: string;
}

export const VIconIconMenu = ({
  icon = "arrow-drop-up",
  className,
  ...props
}: IVIconIconMenuProps): JSX.Element => {
  const variantsClassName = "icon-" + icon;

  return (
    <div
      className={
        "shrink-0 w-6 h-6 relative " + className + " " + variantsClassName
      }
    >
      <div className="text-[rgba(0,0,0,0.87)] text-center font-['MaterialIcons-Regular',_sans-serif] text-2xl font-normal absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] flex items-center justify-center">
        menu{" "}
      </div>
    </div>
  );
};
