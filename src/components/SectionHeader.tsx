import React from "react";
import { cn } from "@/lib/utils"; // Assuming you're using a utility for conditional class names

export interface ISectionHeaderProps {
  title?: string;
  className?: string;
  titleClassName?: string;
  borderClassName?: string;
  borderColor?: string;
  responsive?: {
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}
export const SectionHeader = ({
  title = "Title",
  className = "",
  titleClassName = "",
  borderClassName = "",
  borderColor = "bg-color-palette-primary-black",
  responsive = {},
}: ISectionHeaderProps): JSX.Element => {
  // Default responsive configurations
  const defaultResponsive = {
    base: {
      container: "px-4 py-4",
      title: "text-base text-left", // Left-aligned title
      border: "h-[0.5px] w-[calc(100%+100vw-100%)] origin-left", // Extends border to the right
    },
    sm: {
      container: "sm:px-6 sm:py-5",
      title: "sm:text-lg",
      border: "sm:h-[0.75px]",
    },
    md: {
      container: "md:px-8 md:py-6 md:pl-[134px]",
      title: "md:text-xl",
      border: "md:h-[1px]",
    },
    lg: {
      container: "lg:px-10 lg:py-7",
      title: "lg:text-2xl",
      border: "lg:h-[1.25px]",
    },
    xl: {
      container: "xl:px-12 xl:py-8",
      title: "xl:text-3xl",
      border: "xl:h-[1.5px]",
    },
  };

  // Merge default responsive config with provided responsive prop
  const mergedResponsive = {
    base: { ...defaultResponsive.base, ...responsive.base },
    sm: { ...defaultResponsive.sm, ...responsive.sm },
    md: { ...defaultResponsive.md, ...responsive.md },
    lg: { ...defaultResponsive.lg, ...responsive.lg },
    xl: { ...defaultResponsive.xl, ...responsive.xl },
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4 items-start justify-start shrink-0 relative",
        mergedResponsive.base.container,
        mergedResponsive.sm.container,
        mergedResponsive.md.container,
        mergedResponsive.lg.container,
        mergedResponsive.xl.container,
        className
      )}
    >
      <div className="relative flex flex-col items-start self-stretch justify-start gap-4 shrink-0">
        <div
          className={cn(
            "relative flex items-start self-stretch justify-start text-left", // Ensures left alignment
            "text-color-palette-primary-black font-title-font-family font-title-font-weight",
            mergedResponsive.base.title,
            mergedResponsive.sm.title,
            mergedResponsive.md.title,
            mergedResponsive.lg.title,
            mergedResponsive.xl.title,
            titleClassName
          )}
        >
          {title}
        </div>
        <div
          className={cn(
            "absolute bottom-0 left-0 right-[-100vw]",
            borderColor,
            mergedResponsive.base.border,
            mergedResponsive.sm.border,
            mergedResponsive.md.border,
            mergedResponsive.lg.border,
            mergedResponsive.xl.border,
            borderClassName
          )}
        />
      </div>
    </div>
  );
};