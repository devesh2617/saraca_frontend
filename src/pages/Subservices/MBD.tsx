import {Helmet} from "react-helmet"
import React, { useEffect, useRef, useState } from "react";
import DiscoverMoreCards from "../../components/DiscoverMoreCards";
import ServiceOfferingsCards from "../../components/SubservicesServiceOfferingCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';

// type DiscoverMoreCardsData = {
//   imageSrc: string;
//   link: string;
// };

type TrendingTechnologiesObject = {
  title: string;
  link: string;
  imageSrc: string;
};

type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}

const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

const TrendingTechnologiesData = [
  {
    heading: "Generative Design",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/System/MBD/22.webp`,
  },
  {
    heading: "Cyber-Physical System(CPS)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/System/MBD/23.webp`,
  },
  {
    heading: "Model-Based Systems Engineering (MBSE)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/System/MBD/24.webp`,
  },
  {
    heading: "Digital Twins",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/System/MBD/25.webp`,
  },
  {
    heading: "Advanced Simulation and Visualization Techniques",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/System/MBD/26.webp`,
  },
];

const ServiceOfferings = [
  {
    heading: "Model Verification and Validation",
    description:
      "  Rigorously verify and validate system models through comprehensive testing methodologies, ensuring adherence to design specifications and regulatory requirements.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/System/MBD/V&V.webp`,
  },
  {
    heading: "Simulation and Analysis",
    description:
      "Leverage advanced simulation and analysis tools to identify potential design flaws, optimize system performance, and mitigate risks early in the development lifecycle.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/System/MBD/Simulation.webp`,
  },
  {
    heading: "Integration Testing",
    description:
      "Seamlessly integrate individual system components and validate their interactions through robust integration testing, ensuring the overall system functionality and reliability.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/System/MBD/Integration.webp`,
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
      <h6 className="text-3xl text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300">
        {data.heading}
      </h6>
    </div>
  );
};

// const DiscoverMoreCardsData = [
//   {
//     imageSrc: `${
//       import.meta.env.VITE_REACT_APP_API_URL
//     }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//     link: "#",
//   },
//   {
//     imageSrc: `${
//       import.meta.env.VITE_REACT_APP_API_URL
//     }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//     link: "#",
//   },
//   {
//     imageSrc: `${
//       import.meta.env.VITE_REACT_APP_API_URL
//     }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//     link: "#",
//   },
// ];

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
  const [discoverMore, setDiscoverMore] = useState<DiscoverMoreCardsType[]>([])
  useEffect(()=>{
   getDiscoverMoreDataByIds(discoverMoreIds).then(
    res=>{
      setDiscoverMore(res.data.data)
    }
   ).catch(e=>console.log(e))
  },[])

  return (
    <div>
      <Helmet>
        <title>Model-Based Design Engineering Services | Saraca Solutions</title>
        <meta
          property="og:title"
          content="Model-Based Design Engineering Services | Saraca Solutions"
        />
        <meta
          name="description"
          content="Explore Saraca's Model-Based Design (MBD) engineering services, emphasizing dynamic models for designing, simulating, and analyzing complex systems. Ensure efficient development and high-quality outcomes with our MBD expertise."
        />
        <meta
          name="keywords"
          content="Model-Based Design engineering, MBD services, system engineering, dynamic models, simulation and analysis, verification and validation, integration testing, Saraca Solutions, generative design, cyber-physical systems, MBSE, digital twins, advanced simulation techniques, visualization techniques"
        />
        <meta
          property="og:description"
          content="Explore Saraca's Model-Based Design (MBD) engineering services, emphasizing dynamic models for designing, simulating, and analyzing complex systems. Ensure efficient development and high-quality outcomes with our MBD expertise."
        />
        <meta
          property="og:keywords"
          content="Model-Based Design engineering, MBD services, system engineering, dynamic models, simulation and analysis, verification and validation, integration testing, Saraca Solutions, generative design, cyber-physical systems, MBSE, digital twins, advanced simulation techniques, visualization techniques"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className="w-full aspect-video relative">
        <div
          aria-label="overlay-container"
          className=" from-black to-transparent absolute z-[1] inset-0"
        >
          <div className="md:w-2/3 h-full flex justify-start items-center p-24">
            <div aria-label="content" className="md:text-left">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                Model-Based Design
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Driving Performance Excellence with Advanced Model Based
                Solutions
              </p>
            </div>
          </div>
        </div>

        <img loading = "lazy"
          className="h-full w-full object-cover"
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Services/System/MBD/Landing.webp`}
        />
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Model-Based Design
          </h1>
          <p className="container text-3xl mx-auto px-8 text-gray-600 mt-24">
            MBD engineering, or Model-Based Design engineering, is an approach
            to system engineering that emphasizes the use of models throughout
            the development process. In the context of the system engineering
            sector, MBD engineering involves creating and utilizing dynamic,
            computer-based models to design, simulate, and analyze complex
            systems. Overall, MBD engineering in the system engineering sector
            offers a systematic and collaborative approach to designing,
            analyzing, and optimizing complex systems, leading to more efficient
            development processes and higher-quality outcomes. It facilitates
            the seamless transition from conceptual design to implementation,
            streamlining the development lifecycle and enhancing overall product
            quality.{" "}
          </p>
        </div>
      </div>

      <div
        aria-label="trending-technologies-section"
        className={`w-full bg-cyan-950 py-24 bg-[url('${
          import.meta.env.VITE_REACT_APP_API_URL
        }/trending-technologies-pattern.webp')] bg-cover`}
      >
        <h1 className="text-white text-6xl font-semibold text-center">
          Trending Technologies
        </h1>
        <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto gap-8">
          {TrendingTechnologiesData.map((data: TrendingTechnologiesObject) =>
            TrendingTechnologiesCards(data)
          )}
        </div>
      </div>

      <div aria-label="Our Service Offerings" className="py-24">
        <h1 className="text-6xl md:text-6xl font-semibold text-black text-center">
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
      {/*<div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div>*/} 
    </div>
  );
};

export default Industry;
