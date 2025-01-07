import React from "react";
import { MainButton } from "./MainButton";

export interface IEventCardProps {
  description?: string;
  timeSpan?: string;
  eventName?: string;
  day?: string;
  date?: string;
  month?: string;
  className?: string;
}

export const EventCard = ({
  description = "Description paragraph",
  timeSpan = "6 PM - 8 PM PST (2 hours)",
  eventName = "Event Name",
  day = "Wed",
  date = "30",
  month = "June",
  className = "",
  ...props
}: IEventCardProps): JSX.Element => {
  return (
    <div
      className={`
        bg-color-palette-brand-green-pe-green-5 
        rounded-2xl 
        p-3 
        xs:p-4 
        sm:p-6 
        flex 
        flex-col 
        sm:flex-row 
        items-center 
        sm:items-start 
        gap-3 
        xs:gap-4 
        sm:gap-6 
        w-full 
        max-w-4xl 
        mx-auto 
        ${className}
      `}
    >
      {/* Date Section */}
      <div className="flex flex-row sm:flex-col items-center justify-center text-center gap-2 sm:gap-1 w-full sm:w-auto">
        <div className="text-black font-semibold text-xs xs:text-sm sm:text-base">
          {month}
        </div>
        <div className="text-black font-bold text-xl xs:text-2xl sm:text-3xl w-10 xs:w-12 h-10 xs:h-12 flex items-center justify-center">
          {date}
        </div>
        <div className="text-black text-xs xs:text-sm sm:text-base">
          {day}
        </div>
      </div>

      {/* Event Details Section */}
      <div className="flex flex-col flex-1 gap-2 xs:gap-3 w-full text-left">
        <div className="text-black font-bold text-sm xs:text-base sm:text-lg truncate">
          {eventName}
        </div>
        <div className="text-black font-semibold text-xs xs:text-sm sm:text-base truncate">
          {timeSpan}
        </div>
        <div className="text-black text-xs xs:text-sm sm:text-base line-clamp-2">
          {description}
        </div>
      </div>

      {/* Action Section */}
      <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-auto gap-3 xs:gap-4">
        <div className="text-black text-xs xs:text-sm">
          <span>
            <span className="mr-1">Volunteers needed:</span>
            <span className="font-bold">10</span>
          </span>
        </div>
        <MainButton
          label="Sign Up"
          className="w-full xs:w-36 sm:w-40 text-xs xs:text-sm"
        />
      </div>
    </div>
  );
};

export default EventCard;
