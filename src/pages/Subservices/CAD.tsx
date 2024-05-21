
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
        heading: "Generative Design",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/5.svg`,
    },
    {
        heading: "Additive Manufacturing (3D Printing)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/6.svg`,
    },
    {
        heading: "Digital Twins",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/7.svg`,
    },
    {
        heading: "Augmented Reality (AR) for Design Visualization",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/8.svg`,
    },
    {
        heading: "Cloud-Based Simulation and Collaboration Tools",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/9.svg`,
    }
];


const ServiceOfferings = [
    {
        heading: "Modeling and Design",
        description:
            "  From concept to realization, we offer comprehensive modeling and design services tailored to your specific requirements, ensuring seamless integration with downstream processes.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/1.svg`,
    },
    {
        heading: "Finite Element Analysis (FEA)",
        description:
            "Validate product designs, assess structural integrity, and optimize performance with our state-of-the-art FEA simulations, enabling informed decision-making and risk mitigation.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/2.svg`,
    },
    {
        heading: "Computational Fluid Dynamics (CFD)",
        description:
            "Gain insights into fluid dynamics, thermal behavior, and airflow patterns with our CFD simulations, driving optimization and innovation in product design and performance.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/3.svg`,
    },
    {
        heading: "CAM Programming and Optimization",
        description: " Optimize manufacturing processes and enhance CNC machining capabilities with our CAM programming and optimization services, maximizing throughput and quality while minimizing production costs.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/4.svg`,
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
                    <div className="md:w-full h-full flex justify-center items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-center">
                                CAD/CAE/CFD/CAM
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full text-center hidden lg:block leading-normal">
                            Empowering Mechanical Innovations with Advanced Engineering
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/CADCAM/Landing.mp4`} type="video/mp4" />
                </video>

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>
                        CAD/CAE/CFD/CAM
                    </h1>
                    <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24'>
                    CAD plays a crucial role in the product development lifecycle, from initial concept design to manufacturing and assembly. It helps streamline workflows, reduce errors, and accelerate time-to-market for new products. Additionally, CAD software integrates with other engineering tools and technologies, such as CAE (Computer-Aided Engineering) and CAM (Computer-Aided Manufacturing), to create a comprehensive solution for design, analysis, and production.        </p>
                    <br />
                    
                    <p className='container text-3xl mx-auto px-8 text-gray-600'>
                    CFD stands for Computational Fluid Dynamics. It is a branch of fluid mechanics that utilizes numerical methods and algorithms to analyze and solve problems involving fluid flow and heat transfer phenomena. CFD simulations are performed using specialized software that divides the fluid domain into a grid of discrete elements, allowing for the numerical solution of governing equations that describe fluid behavior.        </p>
                    <br />
                    
                    <p className='container text-3xl mx-auto px-8 text-gray-600'>
                    CAM stands for Computer-Aided Manufacturing. It is a technology that utilizes computer software and numerical control machinery to automate and control manufacturing processes. CAM software enables the conversion of digital design data (such as CAD models) into instructions that drive machine tools and equipment, facilitating the production of physical components or parts with precision and efficiency.        </p>
                    <br />
                    
                    <p className='container text-3xl mx-auto px-8 text-gray-600'>
                    CAE stands for Computer-Aided Engineering. It is a broad term that refers to the use of computer software and simulation tools to assist engineers in the analysis, design, and optimization of engineering systems and components. CAE encompasses a range of disciplines and techniques aimed at simulating and evaluating the performance, behavior, and characteristics of complex systems in virtual environments.        </p>
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