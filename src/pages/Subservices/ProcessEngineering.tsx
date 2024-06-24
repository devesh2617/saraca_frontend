
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
        heading: "Industry 4.0 Technologies",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/5.svg`,
    },
    {
        heading: "Additive Manufacturing (3D Printing)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/6.svg`,
    },
    {
        heading: "Robotics and Automation",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/7.svg`,
    },
    {
        heading: "Advanced Materials and Nanotechnology",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/8.svg`,
    },
    {
        heading: "Additive Manufacturing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/9.svg`,
    }
];


const ServiceOfferings = [
    {
        heading: "Process Design and Optimization",
        description:
            "  From conceptualization to implementation, we specialize in end-to-end process design and optimization services. Our experts leverage data-driven insights and simulation tools to optimize process parameters, improve yield, and reduce costs.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/1.svg`,
    },
    {
        heading: "Quality Management Systems (QMS)",
        description:
            "Ensure product quality and compliance with Saraca's Quality Management Systems (QMS) services. We help manufacturers implement robust QMS frameworks, including ISO standards, to ensure adherence to quality standards and regulatory requirements.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/2.svg`,
    },
    {
        heading: "Supply Chain Integration",
        description:
            "Streamline your supply chain operations with Saraca's supply chain integration services. We optimize material flow, inventory management, and logistics processes to minimize lead times, reduce costs, and enhance supply chain visibility and responsiveness.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/3.svg`,
    },
    {
        heading: "Data Analytics and Visualization",
        description: "Harness the power of data analytics and visualization tools to gain insights, identify trends, and make data-driven decisions for process improvement.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/4.svg`,
    },
    {
        heading: "Technical Consulting",
        description: "Whether you're facing technical challenges or seeking strategic guidance, our team is here to help. We offer expert technical consulting services tailored to your unique needs, providing insights and solutions that drive innovation and growth.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Technical.svg`,
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
                    className="bg-gradient-to-r from-black to-transparent absolute z-[1] inset-0"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                                Process Engineering
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                            Engineering Efficiency, Maximizing Output
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Process Engineering/Landing.mp4`} type="video/mp4" />
                </video>

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>
                        Process Engineering
                    </h1>
                    <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24'>
                    Process Engineering is the cornerstone of manufacturing excellence, employing systematic methodologies to design, optimize, and streamline production processes. In today's dynamic manufacturing landscape, Process Engineering plays a pivotal role in enhancing operational efficiency, ensuring product quality, and driving continuous improvement initiatives.        </p>
                    <br />
                    
                    <p className='container text-3xl mx-auto px-8 text-gray-600'>
                    In the fast-paced world of Embedded Engineering, flawless operation and adherence to specifications are paramount. Verification & Validation Engineering ensures that embedded systems perform reliably, accurately, and securely, meeting the demands of today's interconnected world.        </p>
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