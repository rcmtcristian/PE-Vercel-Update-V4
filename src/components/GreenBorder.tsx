export interface GreenBorderProps {
  borderSize?: "6-px" | "12-px";
  primaryColor?:
  | "legislative-blue"
  | "open-source-green"
  | "campaign-brown"
  | "pe-gold-2"
  | "pe-gold"
  | "legislative-blue-2";
  secondaryColor?:
  | "legislative-blue"
  | "open-source-green"
  | "campaign-brown"
  | "pe-gold-2"
  | "pe-gold"
  | "legislative-blue-2";
  className?: string;
  src?: string; // optional src, to use default if not provided
  alt?: string; // optional alt text for the image
}

export const GreenBorder = ({
  borderSize = "6-px",
  primaryColor = "legislative-blue",
  secondaryColor = "legislative-blue-2",
  className,
  src,
  alt = "Image",
  ...props
}: GreenBorderProps): JSX.Element => {
  const variantsClassName =
    "border-size-" + borderSize + " color-" + primaryColor;

  const defaultImage = "image0.png"; // replace with actual default image path
  const imageSrc = src || defaultImage; // use src if provided, otherwise fall back to default

  return (
    <div
      className={
        "rounded-[47px] border-solid border-" +
        primaryColor +
        " border-[6px] shrink-0 w-[300px] h-[300px] relative overflow-hidden " +
        className +
        " " +
        variantsClassName
      }
    >
      <img
        className={
          "rounded-[29px] border-solid border-" +
          secondaryColor +
          " border-[12px] w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] "
        }
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        src={imageSrc}
        alt={alt}
      />
    </div>
  );
};
