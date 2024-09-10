import {Helmet} from "react-helmet"
import React, { useEffect, useRef, useState} from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import ServiceOfferingsCards from "../../components/SubservicesServiceOfferingCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';

// type DiscoverMoreCardsData = {
//     imageSrc: string,
//     link: string
// }

type TrendingTechnologiesObject = {
    title: string,
    link: string,
    imageSrc: string
}

type DiscoverMoreCardsType = {
    img: string,
    title:string,
    link: string
  }

  const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']


const TrendingTechnologiesData = [
    {
        heading: "Robotics and Cobots (Collaborative Robots)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry 4.0/43.webp`,
    },
    {
        heading: "Additive Manufacturing (3D Printing)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry 4.0/44.webp`,
    },
    {
        heading: "Cyber-Physical Systems",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry 4.0/45.webp`,
    },
    {
        heading: "Augmented Reality (AR) and Virtual Reality (VR) for Manufacturing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry 4.0/46.webp`,
    },
    {
        heading: "Big Data Analytics for Predictive Maintenance",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry 4.0/47.webp`,
    }
];


const ServiceOfferings = [
    {
        heading: "Digital Transformation Consulting",
        description:
            "  Navigate the complexities of Industry 4.0 with Saraca's strategic consulting and advisory services. From technology assessments to digital roadmaps, our seasoned consultants provide actionable insights and recommendations to drive successful digital transformation initiatives.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry 4.0/Digital.webp`,
    },
    {
        heading: "IoT Integration and Deployment",
        description:
            "Unlock the full potential of IoT with Saraca's integration and deployment services. We design and deploy IoT solutions that enable real-time monitoring, data analytics, and remote control, empowering businesses to make data-driven decisions and enhance operational efficiency.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry 4.0/IOT.webp`,
    },
    {
        heading: "AI-driven Predictive Analytics",
        description:
            "Harness the power of AI-driven predictive analytics with Saraca's solutions. By analyzing vast datasets and leveraging machine learning algorithms, we help businesses anticipate equipment failures, optimize production schedules, and mitigate risks, enabling proactive decision-making and cost savings.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry 4.0/AI.webp`,
    }
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

// const DiscoverMoreCardsData = [{
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//     link: "#"
// },
// {
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//     link: "#"
// },
// {
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//     link: "#"
// }]

const Industry = () => {
    const cardsRefs = Array.from({ length: ServiceOfferings.length }, () => useRef(null));

    useEffect(()=>{
      
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                       entry.target.classList.add("opacity-100")
                       entry.target.classList.remove("blur-sm")
                       
                    } else {
                        entry.target.classList.remove("opacity-100")
                        entry.target.classList.add("blur-sm")
                        
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
    
        
    }, [])
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
        <title>Industry 4.0 Solutions | Saraca</title>
        <meta
          property="og:title"
          content="Industry 4.0 Solutions | Saraca"
        />
        <meta
          name="description"
          content="Explore Saraca's Industry 4.0 solutions, including digital transformation consulting, IoT integration, AI-driven predictive analytics, and more. Enhance productivity and efficiency with our advanced manufacturing technologies."
        />
        <meta
          name="keywords"
          content="Industry 4.0 solutions, digital transformation consulting, IoT integration services, AI-driven predictive analytics, robotics and cobots, additive manufacturing, cyber-physical systems, AR and VR for manufacturing, big data analytics for predictive maintenance"
        />
        <meta
          property="og:description"
          content="Explore Saraca's Industry 4.0 solutions, including digital transformation consulting, IoT integration, AI-driven predictive analytics, and more. Enhance productivity and efficiency with our advanced manufacturing technologies."
        />
        <meta
          property="og:keywords"
          content="Industry 4.0 solutions, digital transformation consulting, IoT integration services, AI-driven predictive analytics, robotics and cobots, additive manufacturing, cyber-physical systems, AR and VR for manufacturing, big data analytics for predictive maintenance"
        />
        <meta property="og:type" content="website" />
      </Helmet>
            <div aria-label='landing-image' className="w-full aspect-video relative">
                <div
                    aria-label="overlay-container"
                    className=" from-black to-transparent absolute z-[1] inset-0"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                                Industry 4.0
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                            Innovate, Integrate, Industrialize
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry 4.0/Landing.mp4`} type="video/mp4" />
                </video>

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>
                    Industry 4.0
                    </h1>
                    <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24'>
                    Industry 4.0 marks a pivotal stage in manufacturing evolution, emphasizing the integration of advanced technologies and automation. This transformative shift prioritizes interconnectedness, data analytics, and cyber-physical systems to enhance productivity, efficiency, and innovation. With a focus on human-machine collaboration and sustainability, Industry 4.0 sets the stage for the forthcoming Industry 5.0 revolution. Regardless of where your business stands in its digital transformation journey.        </p>
                </div>
            </div>

            <div aria-label="trending-technologies-section" className={`w-full bg-cyan-950 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/trending-technologies-pattern.webp')] bg-cover`} >
                <h1 className="text-white text-5xl font-semibold text-center">Trending Technologies</h1>
                <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto gap-8">
                    {TrendingTechnologiesData.map((data: TrendingTechnologiesObject) => TrendingTechnologiesCards(data))}
                </div>
            </div>


            <div aria-label="Our Service Offerings" className="py-24">
                <h1 className="text-5xl md:text-5xl font-semibold text-black text-center">
                    Our Service Offerings
                </h1>
                <div className='mt-24'>
                    <div className='w-1/2 md:border-r-[3px] md:border-gray-300'>
                        <div className='w-[100vw]'>
                    <div className='flex flex-col gap-12 relative z-1'>
                        {cardsRefs.map((ref: React.RefObject<HTMLDivElement>, index: number) => (
                            <ServiceOfferingsCards
                                key={index}
                                ref={ref}
                                cardsData={ServiceOfferings[index]}
                                contentPosition={index % 2 === 0 ? "left" : "right"}
                            />
                        ))}
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
    )
}

export default Industry