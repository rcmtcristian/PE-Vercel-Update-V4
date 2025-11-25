export interface IHomeFooterProps {
  socialLinks?: {
    linkedin?: string;
    github?: string;
  };
}

export const HomeFooter = ({
  socialLinks = {
    linkedin: "linkedin0.svg",
    github: "github.svg",
  },
}: IHomeFooterProps): JSX.Element => {
  return (
    <footer className="w-full bg-[#D4E4E3]">
      <div className="w-full px-6 py-8">
        <div className="flex flex-col items-center justify-between mx-auto max-w-7xl md:flex-row">
          {/* Copyright Text */}
          <div className="text-sm md:text-base text-[#2C4A3E] font-medium">
            Copyright © ProgramEarth 2025
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com/programearth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <img
                src={socialLinks.github}
                alt="GitHub"
                className="object-contain w-full h-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/programearth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <img
                src={socialLinks.linkedin}
                alt="LinkedIn"
                className="object-contain w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
