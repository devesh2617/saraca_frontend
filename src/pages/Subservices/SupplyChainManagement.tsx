
import React, { useEffect, useRef } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import ServiceOfferingsCards from "../../components/SubservicesServiceOfferingCards";

type DiscoverMoreCardsData = {
    imageSrc: string,
    link: string
}

type TrendingTechnologiesObject = {
    title: string,
    link: string,
    imageSrc: string
}

const TrendingTechnologiesData = [
    {
        heading: "Blockchain Technology",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Supply Chain Management/Blockchain Technology.jpg`,
    },
    {
        heading: "Internet of Things (IoT)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Supply Chain Management/IOT.jpg`,
    },
    {
        heading: "Artificial Intelligence (AI) and Machine Learning",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Supply Chain Management/AI and ML.jpg`,
    },
    {
        heading: "Robotics and Automation",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Supply Chain Management/Robotics.jpg`,
    }
];


const ServiceOfferings = [
    {
        heading: "Supply Chain Optimization",
        description:
            "  Streamline operations, minimize lead times, and optimize inventory levels through advanced modelling and simulation techniques.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Supply Chain Management/Supply Chain Optimization.jpg`,
    },
    {
        heading: "Supplier Relationship Management",
        description:
            "Enhance collaboration and mitigate risks by implementing robust supplier management processes and performance metrics.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Supply Chain Management/Supplier Relationship Management.jpg`,
    },
    {
        heading: "Demand Forecasting and Planning",
        description:
            "Utilize predictive analytics and demand sensing techniques to forecast customer demand accurately and optimize production planning and scheduling.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Supply Chain Management/Demand Forecasting.jpg`,
    },
    {
        heading: "Supply Chain Integration",
        description:
            "Streamline your supply chain operations with Saraca's supply chain integration services. We optimize material flow, inventory management, and logistics processes to minimize lead times, reduce costs, and enhance supply chain visibility and responsiveness.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Supply Chain Management/Supply Chain Integration.jpg`,
    }
];

const TrendingTechnologiesCards = (data: TrendingTechnologiesObject) => {
    return (
        <div className='w-48 group'>
            <div className='h-48 w-48 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300'>
                <img src={data.imageSrc} className=' w-full h-full rounded-full object-cover' alt="" />
            </div>
            <h6 className='text-md text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300'>{data.heading}</h6>
        </div>
    )
}

const DiscoverMoreCardsData = [{
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
    link: "#"
},
{
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
    link: "#"
},
{
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
    link: "#"
}]

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


    return (
        <div>
            <div aria-label='landing-image' className="w-full aspect-video relative">
                <div
                    aria-label="overlay-container"
                    className=" from-black to-transparent absolute z-[1] inset-0"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                                Supply Chain Management
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                            Empowering Manufacturers with Next-Gen Supply Chain Solutions
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Supply Chain Management/landing.mp4`} type="video/mp4" />
                </video>

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>
                        Supply Chain Management
                    </h1>
                    <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24'>
                    Supply Chain Management (SCM) in the Manufacturing Engineering domain encompasses the strategic coordination and optimization of processes involved in the production and distribution of goods. It involves managing the flow of raw materials, components, and finished products, from suppliers to manufacturers and ultimately to end customers. SCM plays a pivotal role in enhancing efficiency, reducing costs, and ensuring timely delivery, thereby contributing to overall business success.        </p>
                    <br />
                    <p className='container text-3xl mx-auto px-8 text-gray-600'>
                    With increasing global competition, rapidly evolving consumer demands, and complex supply networks, organizations must leverage advanced technologies and data-driven insights to stay ahead. Effective SCM enables businesses to adapt to market dynamics, minimize disruptions, and optimize resource utilization, fostering agility and resilience in an ever-changing landscape.        </p>
                </div>
            </div>

            <div aria-label="trending-technologies-section" className={`min-h-[30vh] w-full bg-cyan-950 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/trending-technologies-pattern.svg')] bg-cover`}>
                <h1 className="text-white text-5xl font-semibold text-center">Trending Technologies</h1>
                <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto">
                    {TrendingTechnologiesData.map((data: TrendingTechnologiesObject) => TrendingTechnologiesCards(data))}
                </div>
            </div>


            <div aria-label="Our Service Offerings" className="py-24">
                <h1 className="text-5xl md:text-5xl font-semibold text-black text-center">
                    Our Service Offerings
                </h1>
                <div className='mt-24'>
                    <div className='w-1/2 border-r-[3px] border-gray-300'>
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
    )
}

export default Industry