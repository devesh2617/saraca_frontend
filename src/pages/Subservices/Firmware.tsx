
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
        heading: "Secure Firmware Updates",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/Firmware/4.svg`,
    },
    {
        heading: "Real-Time Operating Systems (RTOS)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/Firmware/5.svg`,
    },
    {
        heading: "Software-Defined Networking (SDN)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/Firmware/6.svg`,
    },
    {
        heading: "Internet of Things (IoT) Integration",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/Firmware/7.svg`,
    },
    {
        heading: "Security and Encryption",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/Firmware/8.svg`,
    }
];


const ServiceOfferings = [
    {
        heading: "Firmware Design and Development",
        description:
            "  From low-level device drivers to complex firmware algorithms, we specialize in end-to-end firmware design and development services. Our agile methodologies ensure rapid prototyping and iteration, delivering firmware solutions that meet stringent performance requirements.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/Firmware/1.svg`,
    },
    {
        heading: "Firmware Testing and Validation",
        description:
            "Ensure the reliability and stability of your embedded systems with Saraca's comprehensive firmware testing and validation services. We employ industry-leading testing frameworks and techniques to identify and rectify issues, ensuring optimal performance and reliability in real-world scenarios.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/Firmware/2.svg`,
    },
    {
        heading: "Firmware Optimization and Performance Tuning",
        description:
            "Enhance the efficiency and responsiveness of your embedded systems with Saraca's firmware optimization services. We analyze system behavior, identify bottlenecks, and implement optimizations to improve power efficiency, latency, and overall system performance.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/Firmware/3.svg`,
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
            <div aria-label='landing-image' className=" aspect-video w-full relative">
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/Firmware/Landing.mp4`} type="video/mp4"/>
                </video>

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>
                        Firmware Embedded
                    </h1>
                    <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24'>
                    Firmware engineering involves the development and optimization of software that operates on embedded systems. Firmware serves as the bridge between hardware components and higher-level software applications, enabling embedded systems to execute tasks efficiently and reliably. Firmware engineering plays a crucial role in the design, development, and maintenance of embedded systems across various industries, including automotive, consumer electronics, medical devices, industrial automation, and IoT (Internet of Things) applications. It requires a deep understanding of both hardware and software principles to create efficient, reliable, and secure embedded solutions.        </p>
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