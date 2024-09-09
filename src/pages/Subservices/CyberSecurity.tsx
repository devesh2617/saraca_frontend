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
    heading: "Zero Trust Architecture",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/Cyber/Zero Trust Architecture.webp`,
  },
  {
    heading: "AI- Powered Security Analysis",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/Cyber/AI- Powered Security Analysis.webp`,
  },
  {
    heading: "Cloud Security",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/Cyber/Cloud Security.webp`,
  },
  {
    heading: "Blockchain Security",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/Cyber/Blockchain Security.webp`,
  },
  {
    heading: "Identify and Access Management",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Services/Digital/Cyber/Identify and Access Management.webp`,
  },
];

const ServiceOfferings = [
  {
    heading: "Cybersecurity Strategy and Architecture",
    description:
      " From developing cybersecurity strategies to designing resilient architectures, we provide end-to-end cybersecurity consulting services tailored to your organization's unique needs and objectives.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Product Design & Development.svg`,
  },
  {
    heading: "Threat Detection and Incident Response",
    description:
      "Detect and respond to cyber threats in real-time with Saraca's threat detection and incident response services. Our advanced threat hunting capabilities and rapid incident response protocols help minimize the impact of security breaches and mitigate risks to business continuity.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Process Optimisation.svg`,
  },
  {
    heading: "Security Assessment and Penetration Testing",
    description:
      "Evaluate the security posture of your digital infrastructure through comprehensive security assessments and penetration testing. Our methodologies simulate real-world attack scenarios to identify weaknesses and implement proactive measures to strengthen defenses.",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Regulatory.svg`,
  },
  {
    heading: "Security Operations Center (SOC) Services",
    description:
      " Monitor, detect, and respond to cyber threats in real-time with Saraca's Security Operations Center (SOC) services. Our team of certified analysts employs advanced threat detection technologies and proactive monitoring techniques to safeguard your digital assets round-the-clock. ",
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/LifeSciences/Quality.svg`,
  },
  {
    heading: "Implementation & Planning",
    description:
      " Develop a robust cybersecurity strategy aligned with your business objectives and risk tolerance. Our experts work closely with your team to identify vulnerabilities, prioritize initiatives, and establish a roadmap for sustainable cybersecurity resilience.",
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
        <title>Cybersecurity Engineering Solutions | Saraca</title>
        <meta
          property="og:title"
          content="Cybersecurity Engineering Solutions | Saraca"
        />
        <meta
          name="description"
          content="Explore Saraca's comprehensive cybersecurity engineering services, including strategy development, threat detection, incident response, penetration testing, and SOC services. Safeguard your digital assets with our expert cybersecurity solutions"
        />
        <meta
          name="keywords"
          content="cybersecurity engineering solutions, cybersecurity strategy, threat detection, incident response, penetration testing, SOC services, zero trust architecture, AI-powered security, cloud security, blockchain security, IAM solutions"
        />
        <meta
          property="og:description"
          content="Explore Saraca's comprehensive cybersecurity engineering services, including strategy development, threat detection, incident response, penetration testing, and SOC services. Safeguard your digital assets with our expert cybersecurity solutions"
        />
        <meta
          property="og:keywords"
          content="cybersecurity engineering solutions, cybersecurity strategy, threat detection, incident response, penetration testing, SOC services, zero trust architecture, AI-powered security, cloud security, blockchain security, IAM solutions"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className=" aspect-video w-full relative">
        <div
          aria-label="overlay-container"
          className="from-black to-transparent absolute z-[1] inset-0"
        >
          <div className="md:w-2/3 h-full flex justify-start items-center p-24">
            <div aria-label="content" className="md:text-left">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-Left">
                CyberSecurity
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Beware of Cyber threats
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
            }/Services/Digital/Cyber/Landing.mp4`}
            type="video/mp4"
          />
        </video>
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Cyber Guardians: Safeguarding Your Digital Fortresses
          </h1>
          <p className="container text-3xl mx-auto px-8 text-gray-600 mt-24">
            In today's digital landscape, Cybersecurity Engineering stands as a
            cornerstone in safeguarding digital assets, mitigating threats, and
            ensuring the integrity of digital ecosystems. In an increasingly
            interconnected world, Cybersecurity Engineering serves as the
            frontline defense against evolving cyber threats. It fosters trust,
            resilience, and continuity in digital operations, protecting
            sensitive data, critical infrastructure, and intellectual property
            from unauthorized access, breaches, and cyberattacks{" "}
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
