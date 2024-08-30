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
    heading: "Model-Based Testing (MBT)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/6.webp`,
  },
  {
    heading: "Continuous Integration and Continuous Testing (CI/CT)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/7.webp`,
  },
  {
    heading: "Hardware-in-the-Loop (HIL) Testing",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/8.webp`,
  },
  {
    heading:
      "Artificial Intelligence (AI) and Machine Learning (ML) for Test Automation",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/9.webp`,
  },
  {
    heading: "Cybersecurity Testing for Embedded Systems",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/10.webp`,
  },
];

const ServiceOfferings = [
  {
    heading: "Test Strategy Development",
    description:
      "  We collaborate closely with clients to formulate robust test strategies tailored to their specific requirements and objectives, ensuring comprehensive coverage and efficient resource utilization.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/1.webp`,
  },
  {
    heading: "Test Automation",
    description:
      "Our expertise in test automation enables us to streamline the testing process, enhance efficiency, and accelerate time-to-market while maintaining the highest level of accuracy and reliability.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/2.webp`,
  },
  {
    heading: "Verification & Validation Protocols",
    description:
      "From test plan development to execution and reporting, we meticulously design and implement V&V protocols to validate system functionality, performance, and compliance with regulatory standards.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/3.webp`,
  },
  {
    heading: "Risk Assessment & Mitigation",
    description:
      " We conduct thorough risk assessments to identify potential vulnerabilities and develop proactive mitigation strategies, safeguarding against unforeseen challenges and minimizing project disruptions.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/4.webp`,
  },
  {
    heading: "Compliance & Certification Support",
    description:
      "Our experienced team provides comprehensive support throughout the compliance and certification process, guiding clients through regulatory requirements and facilitating successful product approvals.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/V&V/5.webp`,
  },
];

const TrendingTechnologiesCards = (data: TrendingTechnologiesObject) => {
  return (
    <div className=" w-72 group">
      <div className="h-72 w-72 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300">
        <img loading = "lazy"
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
    }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
    link: "#",
  },
  {
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
    link: "#",
  },
  {
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
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
        <title>
        Embedded Verification & Validation Engineering | Saraca
        </title>
        <meta
          property="og:title"
          content="Embedded Verification & Validation Engineering | Saraca"
        />
        <meta
          name="description"
          content="Explore Saraca's embedded Verification & Validation (V&V) engineering services. From test strategy development to compliance support, ensure reliability and compliance of embedded systems with our comprehensive V&V solutions"
        />
        <meta
          name="keywords"
          content="Embedded V&V engineering, model-based testing, continuous integration, continuous testing, hardware-in-the-loop testing, AI for test automation, cybersecurity testing, embedded systems reliability, compliance support"
        />
        <meta
          property="og:description"
          content="Explore Saraca's embedded Verification & Validation (V&V) engineering services. From test strategy development to compliance support, ensure reliability and compliance of embedded systems with our comprehensive V&V solutions"
        />
        <meta
          property="og:keywords"
          content="Embedded V&V engineering, model-based testing, continuous integration, continuous testing, hardware-in-the-loop testing, AI for test automation, cybersecurity testing, embedded systems reliability, compliance support"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className=" aspect-video w-full relative">
        <div
          aria-label="overlay-container"
          className=" from-black to-transparent absolute z-[1] inset-0"
        >
          <div className="md:w-2/3 h-full flex justify-end items-center p-24 float-right">
            <div aria-label="content" className="md:text-left">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-right">
                Verification & Validation
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal text-right">
                Ensuring Embedded Systems Work Right, Right from the Start
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
            }/Services/Embedded/V&V/Landing.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Verification & Validation
          </h1>
          <p className="container text-3xl mx-auto px-8 text-gray-600 mt-24">
            V&V (Verification and Validation) engineering in the embedded sector
            refers to the process of ensuring that embedded systems, which are
            computer systems embedded within larger mechanical or electrical
            systems, meet their intended specifications and requirements.
            Overall, V&V engineering in the embedded sector is essential for
            ensuring the quality, reliability, and safety of embedded systems
            across various industries, including automotive, aerospace, medical
            devices, consumer electronics, and industrial automation.{" "}
          </p>
          <br />

          <p className="container text-3xl mx-auto px-8 text-gray-600">
            In the fast-paced world of Embedded Engineering, flawless operation
            and adherence to specifications are paramount. Verification &
            Validation Engineering ensures that embedded systems perform
            reliably, accurately, and securely, meeting the demands of today's
            interconnected world.{" "}
          </p>
        </div>
      </div>

      <div
        aria-label="trending-technologies-section"
        className={`w-full bg-cyan-950 py-24 bg-[url('${
          import.meta.env.VITE_REACT_APP_API_URL
        }/trending-technologies-pattern.webp')] bg-cover`}
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
      {/* <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.webp')] py-24`}>
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
