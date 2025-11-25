import React from "react";
import { MetricsNumber } from "../components/Stats";

const GlobalCommunitySection = () => {
  return (
    <div className="w-full px-4 py-16 bg-[#D4E4E3]">
      <div className="w-full mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D5A4F] mb-4">
            We Empower the Next Generation of Tech
          </h2>
          <p className="text-lg md:text-xl text-[#2C4A3E]">
            Contribute to open-source environmental solutions at global
            hackathons
          </p>
        </div>

        <div className="grid items-start grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 justify-items-center">
          <MetricsNumber
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            }
            number="4,000+"
            label="Student attendees worldwide"
            className="w-full max-w-[250px]"
          />

          <MetricsNumber
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            }
            number="9"
            label="Countries participating"
            className="w-full max-w-[250px]"
          />

          <MetricsNumber
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M22 7.99995H20M20 7.99995H19C17 6.00173 14 3.99974 12 5.99995M20 7.99995V15.9999M12 5.99995L8.99956 9.00158C8.9202 9.08097 8.88052 9.12066 8.84859 9.1558C8.15499 9.91889 8.15528 11.0842 8.84927 11.847C8.88121 11.8821 8.92098 11.9218 9.00031 12.0011C9.07967 12.0804 9.11936 12.1201 9.15449 12.152C9.91743 12.8453 11.0824 12.8452 11.8451 12.1516C11.8802 12.1197 11.9199 12.08 11.9992 12.0007L12.9996 11.0003M12 5.99995C10 3.99974 7 6.0018 5 8.00001H4M2 8.00001H4M4 8.00001V15.9999M20 15.9999V18.9999H22M20 15.9999H17.1716M15 12.9999L16.5 14.4999C16.5796 14.5796 16.6195 14.6194 16.6515 14.6547C17.3449 15.4175 17.3449 16.5824 16.6515 17.3452C16.6195 17.3805 16.5796 17.4203 16.5 17.4999C16.4204 17.5795 16.3805 17.6194 16.3453 17.6515C15.5824 18.3449 14.4176 18.3449 13.6547 17.6515C13.6195 17.6194 13.5796 17.5795 13.5 17.4999L13 16.9999C12.4548 17.5452 12.1821 17.8178 11.888 17.9636C11.3285 18.2408 10.6715 18.2408 10.112 17.9636C9.81788 17.8178 9.54525 17.5452 9 16.9999C8.31085 17.9188 6.89563 17.7912 6.38197 16.7639L6 15.9999H4M4 15.9999V18.9999H2"
                    stroke="#f0b44c"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            }
            number="42"
            label="AI for Good partnerships"
            className="w-full max-w-[250px]"
          />

          <MetricsNumber
            icon={
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                fill="#f0b44c"
                stroke="#f0b44c"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M67.47 48.2l-1.11 18.48s3.76 10.64 2.71 25.45c-1.01 14.27-4.8 21.49-5.84 23.99s-3.96 5.63 0 6.88s10.64.63 13.56-.42c2.92-1.04 4.37-6.84 4.8-9.18c1.05-5.79 1.63-16.74-.5-27.54C79.46 77.56 76 63.33 76 63.33L67.47 48.2z"
                    fill="#f0b44c"
                  ></path>
                  <path
                    d="M66.78 45.4s4.28-13.43 14.12-23.62c9.43-9.76 19.06-12.96 26.78-13.92c8.51-1.06 11.98-.95 13.44.1s.94 2.7.97 4.16c.19 10.44.58 23.97-11.7 36.35c-13.11 13.2-22.45 15.57-32.68 16.62c-10.22 1.04-9.06-3.62-9.06-3.62L66.78 45.4z"
                    fill="#f0b44c"
                  ></path>
                  <path
                    d="M2.98 37.05c-.37 1.83 9.29 23.31 27.95 30.07c20.09 7.29 39.03 0 39.03 0l1.56-19.34l-4.75-2.38S56.7 34.29 45.51 30.19c-11.6-4.25-24.71-4.58-33.64.19c-5.6 3-8.69 5.7-8.89 6.67z"
                    fill="#f0b44c"
                  ></path>
                  <path
                    d="M86.68 30.68C77.38 41.7 72.69 52.81 72.2 55.71s1.12 2.78 2.03 1.55c1.64-2.22 7.35-12.37 15.85-22.04c7.36-8.36 18.56-17.4 20.2-19.33c1.02-1.2-.1-2.71-1.64-2.03c-1.54.67-12.45 5.55-21.96 16.82z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M41.43 41c-13.6-4.68-23.55-4.05-25.58-3.37c-2.03.68-1.93 2.9.48 3.19s12.24 1.27 24.56 5.7c13.15 4.74 22.52 11.89 24.17 12.86c1.64.97 2.71-.97 1.26-2.71c-1.11-1.31-9.89-10.51-24.89-15.67z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            }
            number="2,600,000"
            label="Acres conserved from environmental hacks"
            className="w-full max-w-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalCommunitySection;
