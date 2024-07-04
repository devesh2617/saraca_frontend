
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
        heading: "Server less Computing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/Serverless Computing.png`,
    },
    {
        heading: "Hybrid and Multi-Cloud Solutions",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/Hybrid and Multi-Cloud Solutions.png`,
    },
    {
        heading: "Edge Computing",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/Edge Computing.png`,
    },
    {
        heading: "AI and Machine Learning as a Service",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/AI and Machine Learning.png`,
    },
    {
        heading: "Cloud Security and Compliance",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/Cloud Security.png`,
    }
];

const ServiceOfferings = [
    {
        heading: "Cloud Migration",
        description: [
            "Seamlessly transition your applications and data to the cloud with our expert cloud migration services. We ensure minimal disruption and maximum efficiency throughout the migration process."
        ],
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/Cloud Migration.jpg`
    },
    {
        heading: "Cloud Architecture Design",
        description: [
            "Our team of seasoned architects designs robust and scalable cloud architectures tailored to your specific needs. We optimize performance, reliability, and security to maximize the benefits of cloud computing."
        ],
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/Cloud Architecture Design.jpg`
    },
    {
        heading: "Cloud Infrastructure Management",
        description: [
            "SARACA provides comprehensive cloud infrastructure management services to keep your cloud environment running smoothly. From monitoring to optimization, we handle all aspects of cloud infrastructure maintenance."
        ],
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/Cloud Infrastructure Management.jpg`
    },
    {
        heading: "DevOps Integration",
        description: [
            "Accelerate your software development lifecycle with our DevOps integration services. We automate processes, streamline collaboration, and improve efficiency to deliver high-quality software at scale."
        ],
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/DevOps Integration.jpg`
    },
    {
        heading: "Cloud Security Solutions",
        description: [
            "Protect your cloud assets and data with our advanced cloud security solutions. We implement robust security measures and best practices to mitigate risks and safeguard your valuable resources."
        ],
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/Cloud Security Solutions.jpg`
    },
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
           <div aria-label='landing-image' className="w-full aspect-video relative">
                <div
                    aria-label="overlay-container"
                    className=" bg-gradient-to-r from-black to-transparent absolute z-[1] inset-0"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                            Cloud Engineering
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                            Simple Cloud Solutions, Remarkable Results                            
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/Cloud/Landing.mp4`} type="video/mp4" />
                </video>  

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center pb-24'>
                    Cloud Engineering
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                    Cloud Engineering encompasses the design, development, deployment, and maintenance of software applications and systems that leverage cloud computing infrastructure. It involves harnessing the power of cloud resources, such as storage, computing power, and services, to create scalable, flexible, and cost-effective solutions.
                    <br />
                    <br />
Cloud Engineering enables organizations to scale their operations seamlessly, accelerate time-to-market, enhance collaboration, and adapt to changing market demands with ease. By leveraging the cloud, businesses can unlock unprecedented opportunities for growth and transformation.
                    </p>
                </div>
                <div>
                    <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
                        Segments:
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                        <strong>Cloud Application Development:</strong> We specialize in designing and developing cloud-native applications tailored to meet the unique needs and objectives of our clients.
                        <br />
                        <br />
                        <strong>Cloud Migration and Modernization:</strong> Our comprehensive migration and modernization services help businesses seamlessly transition their legacy systems to the cloud, unlocking new levels of scalability, reliability, and performance.
                        <br />
                        <br />
                        <strong>Cloud Infrastructure Optimization:</strong> We optimize cloud infrastructure to maximize efficiency, reduce costs, and enhance overall performance, ensuring that businesses derive maximum value from their cloud investments.
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