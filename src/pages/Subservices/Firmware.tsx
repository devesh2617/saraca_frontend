import { Helmet } from "react-helmet";
import React, { useEffect, useRef,useState } from "react";
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
    heading: "Secure Firmware Updates",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Firmware/4.webp`,
  },
  {
    heading: "Real-Time Operating Systems (RTOS)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Firmware/5.webp`,
  },
  {
    heading: "Software-Defined Networking (SDN)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Firmware/6.webp`,
  },
  {
    heading: "Internet of Things (IoT) Integration",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Firmware/7.webp`,
  },
  {
    heading: "Security and Encryption",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Firmware/8.webp`,
  },
];

const ServiceOfferings = [
  {
    heading: "Firmware Design and Development",
    description:
      "  From low-level device drivers to complex firmware algorithms, we specialize in end-to-end firmware design and development services. Our agile methodologies ensure rapid prototyping and iteration, delivering firmware solutions that meet stringent performance requirements.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Firmware/1.webp`,
  },
  {
    heading: "Firmware Testing and Validation",
    description:
      "Ensure the reliability and stability of your embedded systems with Saraca's comprehensive firmware testing and validation services. We employ industry-leading testing frameworks and techniques to identify and rectify issues, ensuring optimal performance and reliability in real-world scenarios.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Firmware/2.webp`,
  },
  {
    heading: "Firmware Optimization and Performance Tuning",
    description:
      "Enhance the efficiency and responsiveness of your embedded systems with Saraca's firmware optimization services. We analyze system behavior, identify bottlenecks, and implement optimizations to improve power efficiency, latency, and overall system performance.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Embedded/Firmware/3.webp`,
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
        <title>
        Firmware Engineering Services | Secure Updates, RTOS | Saraca
        </title>
        <meta
          property="og:title"
          content="Firmware Engineering Services | Secure Updates, RTOS | Saraca"
        />
        <meta
          name="description"
          content="Discover Saraca's firmware engineering services specializing in secure updates, real-time operating systems (RTOS), and IoT integration. From design to optimization, ensure reliability and performance with our comprehensive firmware solutions."
        />
        <meta
          name="keywords"
          content="Firmware engineering services, secure firmware updates, RTOS development, IoT integration, firmware design, firmware testing, firmware validation, firmware optimization, embedded systems development"
        />
        <meta
          property="og:description"
          content="Discover Saraca's firmware engineering services specializing in secure updates, real-time operating systems (RTOS), and IoT integration. From design to optimization, ensure reliability and performance with our comprehensive firmware solutions."
        />
        <meta
          property="og:keywords"
          content="Firmware engineering services, secure firmware updates, RTOS development, IoT integration, firmware design, firmware testing, firmware validation, firmware optimization, embedded systems development"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className=" aspect-video w-full relative">
        <div
          aria-label="overlay-container"
          className=" from-black to-transparent absolute z-[1] inset-0"
        >
          <div className="md:w-2/3 h-full flex justify-start items-center p-24">
            <div aria-label="content" className="md:text-left">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                Firmware
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Empowering Embedded Innovation with Firmware Excellence
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
            }/Services/Embedded/Firmware/Landing.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Firmware Embedded
          </h1>
          <p className="container text-3xl mx-auto px-8 text-gray-600 mt-24">
            Firmware engineering involves the development and optimization of
            software that operates on embedded systems. Firmware serves as the
            bridge between hardware components and higher-level software
            applications, enabling embedded systems to execute tasks efficiently
            and reliably. Firmware engineering plays a crucial role in the
            design, development, and maintenance of embedded systems across
            various industries, including automotive, consumer electronics,
            medical devices, industrial automation, and IoT (Internet of Things)
            applications. It requires a deep understanding of both hardware and
            software principles to create efficient, reliable, and secure
            embedded solutions.{" "}
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
        <h1 className="text-5xl md:text-6xl font-semibold text-black text-center">
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
