import React from 'react';
import { ProfilePicSizeBaseCol2 } from "@/components/ProfilePicSizeBaseCol2";

const teamMembers = [
  {
    name: "Sofia Bonnet",
    organization: "Microsoft",
    organizationUrl: "https://microsoft.com",
    // image: "/team/sofia-bonnet.jpg",
    websiteUrl: "https://example.com",
    linkedinUrl: "https://linkedin.com/in/username"
  },
  {
    name: "Dr. Lonny J Avi Brooks",
    organization: "Institute for the Future",
    image: "/team/lonny-brooks.jpg",
    websiteUrl: "https://example.com",
    linkedinUrl: "https://linkedin.com/in/username"
  },
  {
    name: "Barnali Chatterjee",
    organization: "Snowflake",
    image: "/team/barnali-chatterjee.jpg",
    websiteUrl: "https://example.com",
    linkedinUrl: "https://linkedin.com/in/username"
  },
  {
    name: "Mala Kumar",
    organization: "World Health Organization",
    image: "/team/mala-kumar.jpg",
    websiteUrl: "https://example.com",
    linkedinUrl: "https://linkedin.com/in/username"
  },
  {
    name: "Kirsten Lundgren",
    organization: "Kapor Center",
    image: "/team/kirsten-lundgren.jpg"
  },
  {
    name: "Morgane Palomares",
    organization: "Vercel",
    image: "/team/morgane-palomares.jpg"
  },
  {
    name: "Lynn Wallenstein",
    organization: "CargoSense",
    image: "/team/lynn-wallenstein.jpg"
  },
  {
    name: "Leithia Williams",
    organization: "Slack",
    image: "/team/leithia-williams.jpg"
  },
  {
    name: "Matthew Yazzie",
    organization: "Others Project",
    image: "/team/matthew-yazzie.jpg"
  }
];

const Teams: React.FC = () => {
  return (
    <div className="flex justify-center w-full py-16">
      <div className="grid max-w-screen-xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center px-4">
        {teamMembers.map((member, index) => (
          <ProfilePicSizeBaseCol2
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