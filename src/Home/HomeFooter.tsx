import { TextFieldSendBox } from "../components/TextFieldSendBox";

export interface IHomeFooterProps {
  socialLinks?: {
    linkedin?: string;
    // Add more social links
  };
}

export const HomeFooter = ({
  socialLinks = {
    linkedin: "linkedin0.svg",
  },
}: IHomeFooterProps): JSX.Element => {
  return (
    <footer className="w-full ">
      <div className="w-full px-6 py-8">
        <div className="flex flex-col items-center justify-between mx-auto max-w-7xl md:flex-row">
          <div className="w-full md:max-w-xl">
            <h2 className="mb-4 text-xl font-semibold">Join our newsletter</h2>
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
              <TextFieldSendBox appendIcon="no" className="w-full" />{" "}
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="https://www.linkedin.com/company/programearth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 transition-transform sm:w-9 sm:h-9 md:w-10 md:h-10 hover:scale-110"
            >
              <img
                src={socialLinks.linkedin}
                alt="LinkedIn"
                className="object-contain w-full h-full"
              />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 text-sm text-right text-gray-600 max-w-7xl">
          © 2024 ProgramEarth 501(c)(3)
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
