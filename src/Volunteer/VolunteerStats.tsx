import React from "react";
import { MetricsNumber } from "../components/Stats"; // Adjust import path as needed

const VolunteerStats = () => {
  return (
    <div className="w-full py-12">
      <div className="w-full max-w-full">



        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <MetricsNumber number="#" label="Mentor Joined" className="w-full" />
          <MetricsNumber number="182" label="Mentor Joined" className="w-full" />
          <MetricsNumber number={14} label="Mentor Joined" className="w-full" />
          <MetricsNumber number={14} label="Mentor Joined" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default VolunteerStats;
