import { MetricsNumber } from "../components/Stats"; // Adjust import path as needed

const ErgVolunteeringStats = () => {
  return (
    <div className="w-full py-8 md:py-12 px-4 md:pl-36">
      <div className="w-full max-w-full">
        <h2 className="mb-6 md:mb-8 text-xl md:text-2xl lg:text-3xl text-color-palette-primary-black font-title-font-family font-title-font-weight">
          Each event can generate great impact:{" "}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <MetricsNumber number="$76K+" label="Hey" className="w-full" />
          <MetricsNumber className="w-full" />
          <MetricsNumber className="w-full" />
        </div>
      </div>
    </div>
  );
};


export default ErgVolunteeringStats;
