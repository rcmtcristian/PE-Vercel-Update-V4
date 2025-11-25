// MainButton.tsx
export interface MainButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const MainButton = ({
  label = "Learn More",
  onClick,
  type = "button",
  className = "",
}: MainButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-pe-gold rounded-[20px] px-8 py-3 w-full max-w-[335px] h-12 flex items-center justify-center ${className}`}
    >
      <span className="text-base font-semibold text-center text-black">
        {label}
      </span>
    </button>
  );
};
