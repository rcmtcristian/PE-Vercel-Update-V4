import React from "react";
import { ProfileBox } from "@/components/ProfileBox";

const teamMembers = [
  {
    name: "Sofia Bonnet",
    organization: "Microsoft",
    organizationUrl: "https://microsoft.com",
    image: "/team/sofia bonnet.webp",
    websiteUrl: "https://example.com",
    linkedinUrl: "https://linkedin.com/in/username",
  },
  {
    name: "Dr. Lonny J Avi Brooks",
    organization: "Institute for the Future",
    image: "/team/dr-lonny-j-avi-brooks.webp",
    websiteUrl: "https://example.com",
    linkedinUrl: "https://linkedin.com/in/username",
  },
  {
    name: "Barnali Chatterjee",
    organization: "Snowflake",
    image: "/team/barnali-chatterjee.webp",
    websiteUrl: "https://example.com",
    linkedinUrl: "https://linkedin.com/in/username",
  },
  {
    name: "Mala Kumar",
    organization: "World Health Organization",
    image: "/team/leena-sukumar.webp",
    websiteUrl: "https://example.com",
    linkedinUrl: "https://linkedin.com/in/username",
  },
  {
    name: "Kirsten Lundgren",
    organization: "Kapor Center",
    image: "/team/kirsten-lundgren.webp",
  },
  {
    name: "Morgane Palomares",
    organization: "Vercel",
    image: "/team/morgane-palomares.webp",
  },
  {
    name: "Lynn Wallenstein",
    organization: "CargoSense",
    image: "/team/lynn-wallenstein.webp",
  },
  {
    name: "Leithia Williams",
    organization: "Slack",
    image: "/team/leithia-williams.webp",
  },
  {
    name: "Matthew Yazzie",
    organization: "Others Project",
    image: "/team/matthew-yazzie.webp",
  },
];

const Teams: React.FC = () => {
  return (
    <div className="flex justify-center w-full py-16">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {teamMembers.map((member, index) => (
          <ProfileBox
            key={index}
            header={member.name}
            subheader={member.organization}
            subheaderUrl={member.organizationUrl}
            websiteUrl={member.websiteUrl}
            linkedinUrl={member.linkedinUrl}
            imageSrc={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;
