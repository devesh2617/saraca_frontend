import { Helmet } from "react-helmet";
import React, { useEffect, useRef, useState } from "react";
import DiscoverMoreCards from "../../components/DiscoverMoreCards";
import ServiceOfferingsCards from "../../components/SubservicesServiceOfferingCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';
// type DiscoverMoreCardsData = {
//   imageSrc: string;
//   link: string;
// };

type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}

type TrendingTechnologiesObject = {
  title: string;
  link: string;
  imageSrc: string;
};

const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

const TrendingTechnologiesData = [
  {
    heading: "5G Connectivity",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/IOT/5G.webp`,
  },
  {
    heading: "Edge Computing",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/IOT/Edge.webp`,
  },
  {
    heading: "AI/ML",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/IOT/34.webp`,
  },
  {
    heading: "Blockchain Technology",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/IOT/35.webp`,
  },
  {
    heading: "LPWAN(Low-Power Wide-Area Network",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/IOT/36.webp`,
  },
  {
    heading: "Digital Twins",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/IOT/37.webp`,
  },
];

const ServiceOfferings = [
  {
    heading: "IoT Product Development:",
    description:
      " From conceptualization to deployment, we offer end-to-end IoT product development services to bring your vision to fruition. Our team of engineers and developers are well-versed in the latest IoT technologies and best practices, ensuring your product stands out in the market.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Product Design & Development.svg`,
  },
  {
    heading: "Sensor Integration and Connectivity",
    description:
      "We specialize in integrating sensors and establishing robust connectivity solutions to enable seamless data exchange and communication in IoT ecosystems. Whether it's wireless protocols, network architectures, or sensor fusion algorithms, we have the expertise to optimize your IoT infrastructure for performance and reliability.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Process Optimisation.svg`,
  },
  {
    heading: "Data Analytics and Insights",
    description:
      "Leveraging advanced data analytics techniques, we help you extract valuable insights from IoT-generated data. Whether you're looking to optimize operations, improve decision-making, or enhance user experiences, our data-driven approach empowers you to unlock the full potential of your IoT investments.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Regulatory.svg`,
  },
  {
    heading: "Security and Compliance",
    description:
      " Security is paramount in the IoT landscape, and we prioritize the implementation of robust security measures to safeguard your IoT deployments against potential threats and vulnerabilities. Our comprehensive security and compliance services ensure your IoT solutions adhere to industry standards and regulatory requirements. ",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Quality.svg`,
  },
  {
    heading: "IoT Strategy and Consulting",
    description:
      "Let's work together to develop a cohesive strategy with our clients, aimed at driving business transformation through IoT. Our approach involves several key steps: assessing organizational readiness, analyzing business scenarios, calculating ROI, devising a technology roadmap, outlining architectural blueprints, crafting deployment plans, and selecting suitable partners. We're here to streamline and enhance your IoT journey, ensuring smooth implementation and meaningful outcomes.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Technical.svg`,
  },
  {
    heading: " IoT Engineering Service",
    description:
      "We specialize in creating and integrating full-scale IoT solutions for businesses and consumers alike. By harnessing Saraca's solution accelerators and intellectual properties (IPs), we guarantee quicker time-to-market. Our engineering prowess extends to rigorous IoT Testing and Analytics, offering valuable insights through machine learning, deep learning, and artificial intelligence. Moreover, our IoT Security service conducts thorough security assessments, ensuring scalable and secure solutions for your peace of mind. We simplify complexity by offering tailored IoT solutions that meet your specific needs.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Technical.svg`,
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

// const DiscoverMoreCardsData = [
//   {
//     imageSrc: `${
//       import.meta.env.VITE_REACT_APP_API_URL
//     }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//     link: "#",
//   },
//   {
//     imageSrc: `${
//       import.meta.env.VITE_REACT_APP_API_URL
//     }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//     link: "#",
//   },
//   {
//     imageSrc: `${
//       import.meta.env.VITE_REACT_APP_API_URL
//     }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
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
        <title>
          Emphasizes Saraca's expertise in IoT engineering solutions, targeting
          businesses looking to leverage IoT for digital transformation.
        </title>
        <meta
          property="og:title"
          content="Emphasizes Saraca's expertise in IoT engineering solutions, targeting businesses looking to leverage IoT for digital transformation."
        />
        <meta
          name="description"
          content="Provides a succinct overview of Saraca's comprehensive IoT services, highlighting key areas such as product development, data analytics, security, and strategic consulting."
        />
        <meta
          name="keywords"
          content="5G connectivity, AI/ML, blockchain, and digital twins, to attract targeted traffic interested in advanced IoT solutions."
        />
        <meta
          property="og:description"
          content="Provides a succinct overview of Saraca's comprehensive IoT services, highlighting key areas such as product development, data analytics, security, and strategic consulting."
        />
        <meta
          property="og:keywords"
          content="5G connectivity, AI/ML, blockchain, and digital twins, to attract targeted traffic interested in advanced IoT solutions."
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
                IOT
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Transforming Data into Action: Saraca's IoT Engineering
                Expertise
              </p>
            </div>
          </div>
        </div>

        <video
          className="h-full w-full object-fill"
          autoPlay={true}
          loop
          playsInline
          muted
        >
          <source
            src={`${
              import.meta.env.VITE_REACT_APP_API_URL
            }/Services/Digital/IOT/landing.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Building the future of IOT
          </h1>
          <p className="container text-3xl mx-auto px-8 text-gray-600 mt-24">
            In today's digital landscape, IoT (Internet of Things) engineering
            stands at the forefront of innovation, enabling seamless
            connectivity and intelligent automation across diverse industries.
            At Saraca, we recognize the transformative power of IoT engineering
            in driving efficiency, optimizing operations, and delivering
            unparalleled user experiences. IoT engineering serves as the
            backbone of modern digital ecosystems, empowering businesses to
            harness real-time data insights, automate processes, and unlock new
            revenue streams. At Saraca, we ensure the reliability, scalability,
            and security of IoT solutions, enabling organizations to thrive in
            the era of digital transformation.
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
      <div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div> 
    </div>
  );
};

export default Industry;
