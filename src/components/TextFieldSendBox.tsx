import React from "react";
import { IconIndex } from "../components/IconIndex";

export interface TextFieldSendBoxProps {
  prependOuterIcon?: "no" | "yes";
  prependIcon?: "no" | "yes";
  appendIcon?: "no" | "yes";
  appendOuterIcon?: "no" | "yes";
  variant?: "filled";
  component0?: JSX.Element;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

export const TextFieldSendBox = ({
  prependOuterIcon = "no",
  prependIcon = "no",
  appendIcon = "no",
  appendOuterIcon = "no",
  variant = "filled",
  component0,
  className = "",
  placeholder = "Email Address...",
  value = "",
  onChange,
  onSubmit,
  ...props
}: TextFieldSendBoxProps): JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        flex 
        items-center 
        w-full 
        border-b 
        border-gray-300 
        ${className}
      `}
    >
      {/* Prepend Icon Section */}
      {/* {prependOuterIcon === "yes" && (
        <div className="mr-2">
          <IconIndex icon="some-icon" size={20} className="w-5 h-5" />
        </div>
      )} */}

      {/* Input Field */}
      <div className="flex-grow">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 text-sm bg-transparent focus:outline-none"
          {...props}
        />
      </div>

      {/* Optional Component */}
      {component0 && <div className="ml-2">{component0}</div>}

      {/* Append Icon Section */}
      {appendIcon === "yes" && (
        <div className="ml-2">
          <IconIndex icon="send" size={20} className="w-5 h-5" />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="p-2 ml-2 transition-colors duration-200 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <IconIndex
          icon="send"
          size={20}
          className="w-5 h-5 text-blue-500"
          iconLibrary="lucide"
        />
      </button>
    </form>
  );
};

export default TextFieldSendBox;
