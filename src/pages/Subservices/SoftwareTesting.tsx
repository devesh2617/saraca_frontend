
import React, { useEffect, useRef } from 'react';
// import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import ServiceOfferingsCards from "../../components/SubservicesServiceOfferingCards";

// type DiscoverMoreCardsData = {
//     imageSrc: string,
//     link: string
// }

type TrendingTechnologiesObject = {
    title: string,
    link: string,
    imageSrc: string
}

const TrendingTechnologiesData = [
    {
        heading: "Automated Testing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    },
    {
        heading: "AI and Machine Learning in Testing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    },
    {
        heading: "Continuous Testing in DevOps",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    },
    {
        heading: "Test Automation for Mobile Applications",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    },
    {
        heading: "Performance and Load Testing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    }
];


const ServiceOfferings = [
    {
        heading: "Software Testing",
        description: [
            "Manual Testing",
            "Automated Testing",
            "Performance Testing",
            "Security Testing",
            "Compatibility Testing"
        ],
        link: "",
        imageSrc: ""
    },
    {
        heading: "Quality Assurance",
        description: [
            "Test Plan Development",
            "Test Case Design",
            "Defect Tracking and Management",
            "Regression Testing"
        ],
        link: "",
        imageSrc: ""
    },
    {
        heading: "Consulting Services",
        description: [
            "Test Strategy Development",
            "Process Improvement",
            "Tool Selection and Implementation"
        ],
        link: "",
        imageSrc: ""
    },
    {
        heading: "Specialized Solutions",
        description: [
            "Mobile App Testing",
            "Web Application Testing",
            "Cloud-based Testing",
            "IoT Device Testing"
        ],
        link: "",
        imageSrc: ""
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

// const DiscoverMoreCardsData = [{
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//     link: "#"
// },
// {
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//     link: "#"
// },
// {
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
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


    return (
        <div>
            <div aria-label='landing-image' className="h-[100vh] w-full relative">
                <div
                    aria-label="overlay-container"
                    className="bg-gradient-to-r from-black to-transparent absolute z-[1] w-full h-[100vh]"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                                CyberSecurity
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                                Beware of Cyber threats
                            </p>

                        </div>
                    </div>
                </div>

                <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`} />

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center pb-24'>
                    Software Testing
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                    Software testing is a critical phase in the software development lifecycle aimed at identifying defects and ensuring that software meets quality standards. It involves the systematic examination of software components to detect errors, bugs, and vulnerabilities, ultimately enhancing the performance, usability, and security of software applications.
                    <br />
                    <br />
In today's digital world, where software applications power every aspect of our lives, the importance of software testing cannot be overstated. With the proliferation of complex systems and the increasing demand for flawless user experiences, effective software testing is essential for mitigating risks, enhancing customer satisfaction, and maintaining competitive advantage in the market. 
                    </p>
                </div>
                <div>
                    <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
                        Segments:
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                        <strong>Automated Testing Solutions:</strong> Harness the power of automation to streamline testing processes, accelerate time-to-market, and enhance software quality.
                        <br />
                        <br />
                        <strong>Performance Testing and Optimization:</strong> Ensure optimal performance and scalability of software applications through comprehensive performance testing and optimization strategies.
                        <br />
                        <br />
                        <strong>Security Testing Services:</strong> Safeguard your software assets against potential threats and vulnerabilities with our rigorous security testing services.
                    </p>
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