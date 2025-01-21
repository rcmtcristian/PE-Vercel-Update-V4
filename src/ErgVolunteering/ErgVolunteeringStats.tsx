import { MetricsNumber } from "../components/Stats"; // Adjust import path as needed

const ErgVolunteeringStats = () => {
  return (
    <div className="w-full py-12 pl-36">
      <div className="w-full max-w-full">
        <h2 className="mb-8 text-xl text-color-palette-primary-black font-title-font-family md:text-2xl lg:text-3xl font-title-font-weight">
          Each event can generate great impact:{" "}
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <MetricsNumber number="$76K+" label="Hey" className="w-full" />
          <MetricsNumber className="w-full" />
          <MetricsNumber className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ErgVolunteeringStats;
