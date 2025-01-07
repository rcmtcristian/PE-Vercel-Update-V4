import React from 'react';
import { MainButton } from './MainButton'; // Adjust the import path as needed

interface CallToActionBannerProps {
  title: string;
  buttonLabel: string;
  buttonClassName?: string;
  onButtonClick?: () => void;
  className?: string;
  backgroundColor?: string;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  title,
  buttonLabel,
  buttonClassName = '!w-desktop-column-width-base-col-03',
  onButtonClick,
  className = '',
  backgroundColor = 'bg-campaign-brown',
}) => {
  return (
    <div className={`relative flex flex-row items-center justify-center w-full ${backgroundColor} gap-spacing-base-8-3 py-12 mt-4 ${className}`}>
      <div className="relative flex flex-col items-center justify-start flex-1 gap-6">
        <div className="relative flex items-center self-stretch justify-center text-center text-color-palette-primary-white font-title-font-family text-title-font-size font-title-font-weight">
          {title}
        </div>
        <MainButton
          label={buttonLabel}
          className={buttonClassName}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default CallToActionBanner;