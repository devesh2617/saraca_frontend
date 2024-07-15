import { Helmet } from "react-helmet";
import React, { useEffect, useRef } from "react";
import DiscoverMoreCards from "../../components/DiscoverMoreCards";
import ServiceOfferingsCards from "../../components/SubservicesServiceOfferingCards";

type DiscoverMoreCardsData = {
  imageSrc: string;
  link: string;
};

type TrendingTechnologiesObject = {
  title: string;
  link: string;
  imageSrc: string;
};

const TrendingTechnologiesData = [
  {
    heading: "System-on-Chip (SoC) Design",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Hardware/14.svg`,
  },
  {
    heading: "Internet of Things (IoT) Integration",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Hardware/15.svg`,
  },
  {
    heading: "Low-Power Design",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Hardware/16.svg`,
  },
  {
    heading: "Field-Programmable Gate Arrays (FPGAs)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Hardware/17.svg`,
  },
  {
    heading: "Embedded Security",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Hardware/18.svg`,
  },
];

const ServiceOfferings = [
  {
    heading: "Hardware Design and Development",
    description:
      "  From conceptualization to prototyping, we specialize in end-to-end hardware design and development services. Our agile methodologies ensure the rapid delivery of high-quality hardware solutions that align with your business objectives and exceed user expectations.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Hardware/Hardware Design and Development.jpg`,
  },
  {
    heading: "Hardware Testing and Validation",
    description:
      "Ensure the reliability and performance of your embedded hardware systems with Saraca's comprehensive testing and validation services. We employ industry-leading testing frameworks and methodologies to identify and mitigate hardware defects, ensuring optimal functionality and user experiences.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Hardware/Hardware Testing and Validation.jpg`,
  },
  {
    heading: "Legacy System Migration",
    description:
      "Future-proof your embedded hardware infrastructure with Saraca's legacy system migration services. We help businesses transition from outdated hardware platforms to modern architectures, enhancing scalability, security, and maintainability while minimizing disruption to operations.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Hardware/Legacy System Migration.jpg`,
  },
  {
    heading: "Prototype Development",
    description:
      " Accelerate your product development process with our rapid prototype development services. We transform concepts into tangible prototypes, enabling you to validate designs and iterate quickly, reducing time and costs.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Hardware/Prototype Development.jpg`,
  },
];

const TrendingTechnologiesCards = (data: TrendingTechnologiesObject) => {
  return (
    <div className=" w-72 group">
      <div className="h-72 w-72 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300">
        <img
          src={data.imageSrc}
          className=" w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <h6 className="text-xl text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300">
        {data.heading}
      </h6>
    </div>
  );
};

const DiscoverMoreCardsData = [
  {
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
    link: "#",
  },
  {
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
    link: "#",
  },
  {
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
    link: "#",
  },
];

const Industry = () => {
  const cardsRefs = Array.from({ length: ServiceOfferings.length }, () =>
    useRef(null)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("blur-sm");
          } else {
            entry.target.classList.remove("opacity-100");
            entry.target.classList.add("blur-sm");
          }
        });
      },
      {
        root: null, // use the viewport as the root
        rootMargin: "0px 0px -100px 0px", // adjust the bottom margin
        threshold: 0.5, // optional threshold value
      }
    );

    // Observe each element in the array of refs
    cardsRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Hardware Engineering Services | SoC Design, IoT Integration | Saraca</title>
        <meta
          property="og:title"
          content="Hardware Engineering Services | SoC Design, IoT Integration | Saraca"
        />
        <meta
          name="description"
          content="Explore Saraca's hardware engineering services specializing in SoC design, IoT integration, and low-power design. From concept to prototype, ensure reliability and innovation with our comprehensive hardware solutions."
        />
        <meta
          name="keywords"
          content="Hardware engineering services, SoC design, IoT integration, low-power design, FPGA development, embedded hardware testing, hardware validation, legacy system migration, rapid prototype development"
        />
        <meta
          property="og:description"
          content="Explore Saraca's hardware engineering services specializing in SoC design, IoT integration, and low-power design. From concept to prototype, ensure reliability and innovation with our comprehensive hardware solutions."
        />
        <meta
          property="og:keywords"
          content="Hardware engineering services, SoC design, IoT integration, low-power design, FPGA development, embedded hardware testing, hardware validation, legacy system migration, rapid prototype development"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className="w-full aspect-video relative">
        <div
          aria-label="overlay-container"
          className="bg-gradient-to-r from-black to-transparent absolute z-[1] inset-0"
        >
          <div className="md:w-2/3 h-full flex justify-start items-center p-24">
            <div aria-label="content" className="md:text-left">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                Hardware
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Driving Connectivity and Performance through Embedded Hardware
                Innovation
              </p>
            </div>
          </div>
        </div>

        <video
          className="h-full w-full object-cover"
          autoPlay={true}
          loop
          playsInline
          muted
        >
          <source
            src={`${
              import.meta.env.VITE_REACT_APP_API_URL
            }/Services/Embedded/Hardware/Landing.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Hardware Engineering
          </h1>
          <p className="container text-3xl mx-auto px-8 text-gray-600 mt-24">
            Hardware engineering in the Embedded industry encompasses the
            systematic application of engineering principles to design, develop,
            test, and optimize hardware components and systems. In today's
            rapidly evolving technological landscape, hardware engineering plays
            a fundamental role in enabling seamless integration, connectivity,
            and functionality of embedded systems. In the Embedded industry,
            hardware serves as the foundation for powering and controlling a
            diverse range of devices and systems. Hardware engineering ensures
            the reliability, performance, and efficiency of embedded solutions,
            facilitating innovation, scalability, and enhanced user experiences.{" "}
          </p>
        </div>
      </div>

      <div
        aria-label="trending-technologies-section"
        className={`w-full bg-cyan-950 py-24 bg-[url('${
          import.meta.env.VITE_REACT_APP_API_URL
        }/trending-technologies-pattern.svg')] bg-cover`}
      >
        <h1 className="text-white text-5xl font-semibold text-center">
          Trending Technologies
        </h1>
        <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto gap-8">
          {TrendingTechnologiesData.map((data: TrendingTechnologiesObject) =>
            TrendingTechnologiesCards(data)
          )}
        </div>
      </div>

      <div aria-label="Our Service Offerings" className="py-24">
        <h1 className="text-5xl md:text-5xl font-semibold text-black text-center">
          Our Service Offerings
        </h1>
        <div className="mt-24">
          <div className="w-1/2 md:border-r-[3px] md:border-gray-300">
            <div className="w-[100vw]">
              <div className="flex flex-col gap-12 relative z-1">
                {cardsRefs.map(
                  (ref: React.RefObject<HTMLDivElement>, index: number) => (
                    <ServiceOfferingsCards
                      key={index}
                      ref={ref}
                      cardsData={ServiceOfferings[index]}
                      contentPosition={index % 2 === 0 ? "left" : "right"}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')] py-24`}>
                <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
                <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
                    {DiscoverMoreCardsData.map((data: DiscoverMoreCardsData, index: number) => {
                        return (
                            <DiscoverMoreCards key={index} imageSrc={data.imageSrc} link={data.link} />
                        )
                    })}
                </div>
            </div> */}
    </div>
  );
};

export default Industry;
