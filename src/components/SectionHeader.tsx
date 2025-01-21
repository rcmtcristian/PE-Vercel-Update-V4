import React from "react";
import { cn } from "@/lib/utils"; // Assuming you're using a utility for conditional class names

export interface ISectionHeaderProps {
  title?: string;
  className?: string;
  titleClassName?: string;
  borderClassName?: string;
  borderColor?: string;
}

export const SectionHeader = ({
  title = "Title",
  className = "",
  titleClassName = "",
  borderClassName = "",
  borderColor = "bg-color-palette-primary-black",
}: ISectionHeaderProps): JSX.Element => {
  return (
    <div
      className={cn(
        // Base styles
        "flex flex-col gap-4 items-start justify-start relative",
        "px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 md:pl-[134px] lg:px-10 lg:py-7 xl:px-12 xl:py-8",
        className
      )}
    >
      <div className="relative flex flex-col items-start self-stretch justify-start gap-4">
        <div
          className={cn(
            // Base styles
            "relative flex items-start self-stretch justify-start",
            "text-color-palette-primary-black font-title-font-family font-title-font-weight",
            "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ml-[-34.5vw]",
            titleClassName
          )}
        >
          {title}
        </div>
        <div
          className={cn(
            "absolute bottom-0 left-[-34.5vw] right-[-100vw]",
            "h-[1px] sm:h-[1.5px] md:h-[2px] lg:h-[2.5px] xl:h-[3px]",
            "origin-left",
            borderColor,
            borderClassName
          )}
        />
      </div>
    </div>
  );
};
