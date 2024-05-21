
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
        heading: "DevOps and Continuous Testing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/System Testing/27.svg`,
    },
    {
        heading: "API Testing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/System Testing/28.svg`,
    },
    {
        heading: "Containerization and Microservices Testing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/System Testing/29.svg`,
    },
    {
        heading: "AI and Machine Learning in Testing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/System Testing/30.svg`,
    },
    {
        heading: "Performance Testing with Cloud",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/System Testing/31.svg`,
    },
    {
        heading: "Test Automation Frameworks",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/System Testing/32.svg`,
    },
    {
        heading: "Blockchain Testing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/System Testing/33.svg`,
    }
];


const ServiceOfferings = [
    {
        heading: "Testing Strategy Development",
        description:
            "  Our expert team at SARACA works closely with clients to develop robust testing strategies tailored to their specific system engineering needs. We analyze requirements, risks, and objectives to create a comprehensive testing framework that ensures the reliability and performance of systems.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/Testing.svg`,
    },
    {
        heading: "Test Planning and Execution",
        description:
            "We provide end-to-end test planning and execution services to validate system functionality, performance, and reliability. Our meticulous approach ensures thorough testing coverage while minimizing risks and optimizing resources.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/Planning.svg`,
    },
    {
        heading: "Test Automation",
        description:
            "SARACA offers cutting-edge test automation solutions to streamline testing processes and accelerate time-to-market. With expertise in industry-leading automation tools and frameworks, we help clients achieve higher test coverage, reduced cycle times, and improved overall efficiency.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/Automation.svg`,
    },
    {
        heading: "Performance Testing",
        description: " Our performance testing services assess the scalability, stability, and responsiveness of systems under various load conditions. We identify performance bottlenecks, optimize system resources, and ensure optimal user experiences across diverse environments.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/Performance.svg`,
    },
    {
        heading: "Security Testing",
        description: "SARACA's security testing services evaluate system vulnerabilities and implement robust security measures to safeguard against potential threats and breaches. We conduct comprehensive security assessments, penetration testing, and vulnerability scans to fortify system defenses and protect sensitive data.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/Security.svg`,
    },
    {
        heading: "Compliance Testing",
        description: "We assist clients in ensuring regulatory compliance and adherence to industry standards through comprehensive compliance testing services. Our team helps navigate complex regulatory requirements, conducts thorough compliance assessments, and provides actionable insights to mitigate compliance risks.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/Compliance.svg`,
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
            <div aria-label='landing-image' className="h-[100vh] w-full relative">
                <div
                    aria-label="overlay-container"
                    className=" from-black to-transparent absolute z-[1] w-full h-[100vh]"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                                System Testing
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                            Driving Confidence Through Rigorous Testing
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/System Testing/Landing.mp4`} type="video/mp4" />
                </video>

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>
                        Testing Technology with latest Technology
                    </h1>
                    <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24'>
                    System testing refers to the process of evaluating and validating the functionality, performance, and reliability of complex systems. It involves testing the integrated components and subsystems of a system to ensure that they operate harmoniously and meet the specified requirements and standards. Overall, system testing plays a critical role in mitigating risks, ensuring quality, and enhancing the reliability and performance of complex systems across various industries, including aerospace, automotive, healthcare, and telecommunications.        </p>
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