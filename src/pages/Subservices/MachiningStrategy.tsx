
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
        heading: "Additive Manufacturing (3D Printing)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/6.svg`,
    },
    {
        heading: "Computer Numerical Control (CNC) Machining",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/7.svg`,
    },
    {
        heading: "Artificial Intelligence (AI) for Toolpath Optimization",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/8.svg`,
    },
    {
        heading: "Digital Twin Technology for Virtual Machining Simulation",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/9.svg`,
    },
    {
        heading: "Internet of Things (IoT) for Real-time Monitoring and Control",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/10.svg`,
    }
];


const ServiceOfferings = [
    {
        heading: "Process Optimization",
        description:
            "  We analyze existing machining processes to identify areas for improvement and implement tailored strategies to optimize efficiency and productivity.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/1.svg`,
    },
    {
        heading: "Tooling Selection and Optimization",
        description:
            "Leveraging our in-depth knowledge of machining tools and techniques, we assist clients in selecting the most suitable tools and optimizing their performance to achieve superior results.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/2.svg`,
    },
    {
        heading: "Toolpath Optimization",
        description:
            "Our team utilizes advanced software and algorithms to optimize toolpaths, minimizing machining time and maximizing throughput without compromising quality.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/3.svg`,
    },
    {
        heading: "Fixture Design and Optimization",
        description: " We design and optimize fixtures to securely hold workpieces during machining operations, ensuring precision and repeatability while minimizing setup time and costs.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/4.svg`,
    },
    {
        heading: "Machining Simulation and Analysis",
        description: "Through advanced simulation techniques, we assess the performance of machining processes, identify potential issues, and propose solutions to enhance overall effectiveness.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/5.svg`,
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
                                Machining Strategy
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                            Precision Perfected: Machining Strategy Engineering Redefined
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Machine Stratagy/Landing.mp4`} type="video/mp4" />
                </video>

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>
                        Machining Strategy
                    </h1>
                    <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24'>
                    Machining Strategy Engineering is the art and science of optimizing machining processes to achieve maximum efficiency, precision, and cost-effectiveness in manufacturing operations. It involves the strategic selection of tools, materials, and machining parameters to enhance productivity and product quality while minimizing waste and downtime.        </p>
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