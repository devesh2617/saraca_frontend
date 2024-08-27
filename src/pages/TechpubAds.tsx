import { Helmet } from "react-helmet";

const ServiceOfferings = [
  {
    title: "Data and Configuration Management",
  },
  {
    title: "Technical Documentation",
  },
  {
    title: "IETP Development",
  },
  {
    title: "Illustrations and Graphics",
  },
  {
    title: "Training and Support",
  },
  {
    title: "Translation and Localization",
  },
  {
    title: "Standards and Compliance",
  },
  {
    title: "Integration with PLM Systems",
  },
  {
    title: "Lifecycle Documentation Maintenance",
  },
  {
    title: "Content Management Solutions",
  },
  {
    title: "Product Lifecycle Management",
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
          Expert Technical Documentation, Illustrations, and Data Solutions
          </div>
        </div>

        <img
          className="h-full w-full object-cover brightness-75"
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/technical_publication_services.jpg`}
        />
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center pb-24">
            Technical Publication Services
          </h1>
          <p className="container text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            Saraca excels in delivering high-quality documentation services,
            including Technical Illustrations, Authoring, Data Validation and
            Conversion, and Learning Solutions Production. Our proprietary
            Documentation Process Model ensures a seamless transition framework,
            precise metrics, and effective talent transformation. We support
            industry standards such as ATA 100, ATA iSpec 2200, S1000D and ASD
            STE enabling clients to efficiently update legacy publications to
            meet current industry requirements.
          </p>
        </div>
        <div>
          <div className="container grid grid-col-span-1 md:grid-cols-2 text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            <div>
              <h6 className="text-4xl font-semibold text-black pt-24 pb-12">
                Manuals Expertise:
              </h6>
              <ul className="list-inside list-disc">
                <li>Operator Manual</li>
                <li>Maintenance Manual</li>
                <li>Illustrated Parts Catalogue</li>
                <li>Overhaul and Reconditioning Instructions</li>
                <li>Service Bulletin/ Service Newsletter</li>
                <li>Training Manual</li>
                <li>Component Maintenance Manual</li>
                <li>Fault Isolation Manual</li>
                <li>Planning & Recovery manual</li>
                <li>Wiring manual</li>
                <li>Structural Repair Manual</li>
                <li>Powerplant Buildup Manual</li>
                <li>User Handbook</li>
              </ul>
            </div>
            <div>
              <h6 className="text-4xl font-semibold text-black pt-24 pb-12">
                Tools Expertise:
              </h6>
              <ul className="list-inside list-disc">
                <li>PTC Windchill</li>
                <li>Arbortext Editor</li>
                <li>Adobe Illustrator</li>
                <li>ISO Draw</li>
                <li>Tech Illustrator</li>
                <li>Frame Maker</li>
                <li>MS Office</li>
                <li>CAD (2D/3D)</li>
              </ul>
            </div>
          </div>
        </div>
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
