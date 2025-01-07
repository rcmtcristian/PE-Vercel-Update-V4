import { useState, FormEvent } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import HomeFooter from "@/Home/HomeFooter";
import { MainButton } from "@/components/MainButton";

export interface OurStoryProps {
  className?: string;
}

export const ContactUs = ({
  className,
  ...props
}: OurStoryProps): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className={`bg-color-palette-primary-white flex flex-col items-center justify-start relative overflow-hidden ${className}`}>
      <SectionHeader title="Contact Us" borderColor="bg-legislative-blue" />

      <div className="max-w-screen-xl w-full px-4 md:px-8 py-16">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-legislative-blue focus:ring-legislative-blue"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-legislative-blue focus:ring-legislative-blue"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-legislative-blue focus:ring-legislative-blue"
              required
            />
          </div>

          {/* <button
            type="submit"
            className="w-full bg-legislative-blue text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Send Message
          </button> */}
          <MainButton type="submit" label="Send Message" />
        </form>
      </div>

      <HomeFooter className="!w-desktop-breakpoint-base" />
    </div>
  );
};
