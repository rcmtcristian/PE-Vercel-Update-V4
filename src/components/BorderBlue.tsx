import React from "react";

// Default image as a base64 encoded placeholder (a light blue square)
const DEFAULT_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' fill='%2387CEEB'%3E%3Crect width='1' height='1'/%3E%3C/svg%3E";

export interface BorderBlueProps {
  borderSize?: "6-px" | "12-px";
  colorTheme?:
    | "legislative-blue"
    | "open-source-green"
    | "campaign-brown"
    | "pe-gold";
  className?: string;
  src?: string;
  alt?: string;
}

export const BorderBlue = ({
  borderSize = "6-px",
  colorTheme = "legislative-blue",
  className = "",
  src,
  alt = "Default image placeholder",
  ...props
}: BorderBlueProps): JSX.Element => {
  const variantsClassName = `border-size-${borderSize} color-theme-${colorTheme}`;

  // Use provided src, or fallback to DEFAULT_IMAGE
  const imageSrc = src || DEFAULT_IMAGE;

  return (
    <div className="flex items-center justify-center w-full h-full py-8">
      <div
        className={`
          relative 
          w-full 
          max-w-[600px] 
          aspect-square
          rounded-[30px] 
          border-solid 
          border-legislative-blue-4 
          border-[12px] 
          overflow-hidden 
          border-blue-200

       
          ${className} 
          ${variantsClassName}
        `}
      >
        <div className="absolute inset-0">
          <img
            src={imageSrc}
            alt={alt}
            className="
              absolute 
              w-full 
              h-full 
              object-cover 
              rounded-[20px] 
              border-solid 
              border-legislative-blue-3 
              border-[10px]
              border-blue-300
              
            "
          />
        </div>
      </div>
    </div>
  );
};

export default BorderBlue;
