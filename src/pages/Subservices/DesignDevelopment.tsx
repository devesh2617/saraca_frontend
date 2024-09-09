import {Helmet} from "react-helmet"
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
    heading: "Generative Design",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/6.webp`,
  },
  {
    heading: "Simulation and Finite Element Analysis (FEA)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/7.webp`,
  },
  {
    heading: "Internet of Things (IoT) Integration",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/8.webp`,
  },
  {
    heading: "Augmented Reality (AR) and Virtual Reality (VR)",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/9.webp`,
  },
  {
    heading: "Digital Twins",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/10.webp`,
  },
];

const ServiceOfferings = [
  {
    heading: "Design Engineering Services",
    description:
      "  In the realm of product development, we specialize in transforming ideas into tangible prototypes with precision and innovation. Leveraging advanced CAD modeling and simulation tools, we create detailed models and simulate real-world scenarios to optimize design outcomes. Through iterative refinement processes, we enhance the performance, efficiency, and sustainability of mechanical designs, ensuring the highest standards of quality and functionality are met.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/1.webp`,
  },
  {
    heading: "Development Engineering Solutions",
    description:
      "Our comprehensive approach to product development encompasses every stage of the lifecycle, from ideation to market launch, ensuring seamless execution and timely delivery. We conduct rigorous prototype testing and validation procedures to guarantee product integrity, reliability, and compliance with industry standards. Additionally, our focus on manufacturing process optimization enables us to streamline operations, maximizing efficiency, minimizing costs, and accelerating time-to-market for our clients' products.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/2.webp`,
  },
  {
    heading: "Digital Engineering Services",
    description:
      "Our digital twin solutions revolutionize product management by crafting virtual replicas of physical products and systems, empowering predictive maintenance, performance optimization, and informed decision-making. Seamlessly integrating Internet of Things (IoT) technologies, we enhance product functionality, monitor performance, and facilitate data-driven insights. Additionally, our expertise in augmented reality (AR) and virtual reality (VR) applications enriches user experiences and training effectiveness through immersive visualization and training simulations, elevating product understanding and proficiency.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/3.webp`,
  },
  {
    heading: "Rapid Prototyping",
    description:
      " Transform concepts into reality with our rapid prototyping services. We utilize state-of-the-art technologies to fabricate prototypes quickly and efficiently, enabling iterative design processes and accelerating product development cycles.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/4.webp`,
  },
  {
    heading: "Design for Manufacturing (DFM)",
    description:
      "Optimize manufacturability with our Design for Manufacturing (DFM) services. We analyze designs to identify opportunities for cost reduction, process optimization, and quality enhancement, ensuring seamless transition from design to production.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Mechanical/Design & Development/5.webp`,
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
        <title>Design & Development Services | Advanced Engineering Solutions | Saraca</title>
        <meta
          property="og:title"
          content="Design & Development Services | Advanced Engineering Solutions | Saraca"
        />
        <meta
          name="description"
          content="Explore Saraca's comprehensive design and development services including design engineering, development solutions, digital engineering, rapid prototyping, and design for manufacturing (DFM). Harnessing technologies like generative design, simulation, IoT integration, AR/VR, and digital twins to optimize product innovation and efficiency"
        />
        <meta
          name="keywords"
          content="design engineering services, development engineering solutions, digital engineering, rapid prototyping services, design for manufacturing, DFM services, generative design, simulation and FEA, IoT integration, AR and VR applications, digital twins"
        />
        <meta
          property="og:description"
          content="Explore Saraca's comprehensive design and development services including design engineering, development solutions, digital engineering, rapid prototyping, and design for manufacturing (DFM). Harnessing technologies like generative design, simulation, IoT integration, AR/VR, and digital twins to optimize product innovation and efficiency"
        />
        <meta
          property="og:keywords"
          content="design engineering services, development engineering solutions, digital engineering, rapid prototyping services, design for manufacturing, DFM services, generative design, simulation and FEA, IoT integration, AR and VR applications, digital twins"
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
                Design & Development
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Innovate, Design, Excel: The Saraca Advantage
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
            }/Services/Mechanical/Design & Development/Landing.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Experts of Design & Development
          </h1>
          <p className="container text-3xl mx-auto px-8 text-gray-600 mt-24">
            In recent years, technological progress has surged at an
            unprecedented rate, outpacing the ability of end users to fully
            grasp its implications. This trend is poised to continue into the
            next decade, with advancements accelerating beyond the comprehension
            of the average individual. In such a rapidly evolving landscape, the
            imperative for design is clear: to humanize technology and safeguard
            the interests of end users.In this context, the role of design
            extends far beyond mere functionality. It encompasses the imperative
            to delight consumers, educate children, enhance office productivity,
            bolster system security, and navigate the complexities of artificial
            intelligence usage, among other vital functions.{" "}
          </p>
          <br />

          <p className="container text-3xl mx-auto px-8 text-gray-600">
            The user-centric approach of design thinking facilitates a profound
            understanding of all stakeholders involved, while expertise in
            pertinent technologies enables the development of tailored
            solutions. This fusion of technology-driven innovation guided by
            design thinking principles holds the promise of a brighter, more
            prosperous future for all. Ultimately, by harnessing the power of
            design to navigate the complexities of technological advancement, we
            can ensure a future characterized by both innovation and
            human-centricity.{" "}
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
