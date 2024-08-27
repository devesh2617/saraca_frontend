import { Helmet } from "react-helmet";

const ServiceOfferings = [
  {
    title: "PMCF Plan per EU MDR",
  },
  {
    title: "PMCF Survey Plan Development",
  },
  {
    title: "Development of Questionnaires",
  },
  {
    title: "Scoping of the Survey",
  },
  {
    title: "Determine Suitable Endpoints",
  },
  {
    title: "Delivery of Electronic Survey using FastPMCF",
  },
  {
    title: "Determine Feasibility of Survey Execution",
  },
  {
    title: "Sample Size Calculations and Statistical Justification",
  },
  {
    title: "Assist in Communication with Notified Body",
  },
  {
    title: "Data Analysis and Reporting",
  },
];

const TechPubAds = () => {
  return (
    <div>
      <Helmet>
        <title>Technical Publications | SARACA</title>
        {/* <meta
          property="og:title"
          content="Innovative Electric Vehicle Engineering Solutions | Saraca"
        />
        <meta
          name="description"
          content="Discover Saraca's pioneering electric vehicle engineering solutions, including EV systems, battery management, digital connectivity, and sustainable mobility advancements. Partner with us to accelerate your journey towards eco-friendly transportation."
        />
        <meta
          name="keywords"
          content="electric vehicle engineering, EV systems, battery management systems, sustainable mobility, electric propulsion systems, vehicle-to-grid communication, digital connectivity in EVs, electric drivetrains, charging infrastructure, automotive electrification"
        />
        <meta
          property="og:description"
          content="Discover Saraca's pioneering electric vehicle engineering solutions, including EV systems, battery management, digital connectivity, and sustainable mobility advancements. Partner with us to accelerate your journey towards eco-friendly transportation."
        />
        <meta
          property="og:keywords"
          content="electric vehicle engineering, EV systems, battery management systems, sustainable mobility, electric propulsion systems, vehicle-to-grid communication, digital connectivity in EVs, electric drivetrains, charging infrastructure, automotive electrification"
        />
        <meta property="og:type" content="website" /> */}
      </Helmet>
      <div aria-label="landing-image" className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 lg:text-9xl md:text-5xl text-2xl text-white flex justify-center items-center p-36 font-semibold text-center">
          Ensure Device Safety: Comprehensive Post-Market Clinical Follow-Up for Real-World Insight and Compliance
          </div>
        </div>

        <img
          className="h-full w-full object-cover brightness-75"
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/pmcf.jpg`}
        />
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center pb-24">
            What is Post Market Clinical Follow-up?
          </h1>
          <p className="container text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            PMCF is an active collection of data on the clinical experience of
            your device aftermarket release. PMCF activities can range from an
            analysis of data from literature or existing device registries to
            performing a new post-market clinical investigation. Post Market
            Clinical Follow-up is crucial to identify any emerging or previously
            unknown risks and to confirm the safety and performance of the
            device throughout its lifetime.
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-semibold text-center py-24">
            KEY ADVANTAGES OF PMCF SURVEYS
          </h1>

          <ul className="container list-disc list-inside text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            <li>
              Potential for quicker execution than other data collection methods
              such as trials
            </li>
            <li>No ethics review or competent authority approval required</li>
            <li>Can be designed and conducted fully remotely</li>

            <li>High-quality data can be obtained</li>
            <li>The fraction of the budget of a clinical trial</li>
            <li>
              Can help obtain sufficient clinical evidence and meet PMCF
              requirements
            </li>
            <li>
              Collect data on general user experience or on single use cases
            </li>
          </ul>
        </div>
        <div></div>
      </div>

      <div
        aria-label="trending-technologies-section"
        className={`min-h-[30vh] w-full bg-cyan-950 py-24 bg-[url('${
          import.meta.env.VITE_REACT_APP_API_URL
        }/trending-technologies-pattern.svg')] bg-cover`}
      >
        <h1 className="text-white text-5xl font-semibold text-center">
          Service Offerings
        </h1>
        <ul className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 text-2xl justify-evenly items-start mt-24 mx-auto list-outside list-disc">
          {ServiceOfferings.map((data) => (
            <li className="text-white p-2">{data.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechPubAds;
