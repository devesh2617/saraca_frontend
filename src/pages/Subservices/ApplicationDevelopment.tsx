
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
        heading: "Artificial Intelligence and Machine Learning",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    },
    {
        heading: "Progressive Web Apps (PWAs)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    },
    {
        heading: "DevOps and Continuous Integration/Continuous Deployment (CI/CD)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    },
    {
        heading: "Microservices Architecture",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    },
    {
        heading: "Cross-Platform Mobile Development",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    }
];


const ServiceOfferings = [
    {
        heading: "Custom Application Development",
        description:
            "Leverage our expertise to build custom software applications that address your unique business needs. Whether you require a web-based application, mobile app, or enterprise software solution, we have the skills and experience to bring your vision to life.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Product Design & Development.svg`,
    },
    {
        heading: "Legacy Application Modernization",
        description:
            "Is your legacy software holding you back? Our team can modernize and upgrade your outdated applications to the latest technologies and platforms, ensuring improved performance, scalability, and security while preserving valuable functionality and data.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Process Optimisation.svg`,
    },
    {
        heading: "Full-Cycle Development Services",
        description:
            "From initial concept to deployment and ongoing maintenance, we provide end-to-end application development services that are tailored to your specific requirements. Our agile approach ensures that your project stays on track and delivers results on time and within budget.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Regulatory.svg`,
    },
    {
        heading: "Cross-Platform Development",
        description: "Reach a wider audience with applications that run seamlessly across different devices and operating systems. Whether it's iOS, Android, or web-based applications, we ensure a consistent user experience across all platforms.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Quality.svg`,
    },
    {
        heading: "Integration Services",
        description: "Seamlessly connect your applications with existing systems, third-party APIs, and external services to streamline workflows and improve collaboration across your organization. Our integration services ensure smooth data exchange and automation of business processes.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Technical.svg`,
    },
    {
        heading: "Quality Assurance and Testing",
        description: "Ensure the reliability, performance, and security of your applications with our comprehensive testing services. We conduct thorough testing at every stage of development to identify and fix issues before deployment, ensuring a seamless user experience.",
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
                    Application Development
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                    At Saraca Solutions, we specialize in delivering tailored application development services that empower businesses to thrive in today's digital landscape. With our extensive expertise and commitment to excellence, we help organizations of all sizes transform their ideas into innovative software solutions that drive growth and success.
                    </p>
                </div>
                {/* <div>
                    <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
                        What We Serve
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                        <strong>Custom Application Development:</strong> Saraca Solutions offers tailored application development services to meet the unique needs of businesses. Whether it's a web-based application, mobile app, or enterprise software solution, our team of experienced developers can create custom applications from scratch.
                        <br />
                        <br />
                        <strong>Quality Assurance and Software Testing:</strong> Ensure the reliability and performance of your software applications with Saraca's comprehensive quality assurance and testing services. We employ industry-leading testing frameworks and methodologies to identify and mitigate defects, ensuring flawless user experiences.
                        <br />
                        <br />
                        <strong>Cloud Application Development:</strong> Saraca Solutions specializes in developing cloud-native applications that leverage the scalability, reliability, and flexibility of cloud computing platforms such as AWS, Azure, and Google Cloud. We help businesses harness the power of the cloud to reduce infrastructure costs, improve agility, and accelerate time-to-market for their applications.
                        <br />
                        <br />
                        <strong>Product Lifecycle Management (PLM) Integration:</strong> Saraca Solutions offers PLM integration services to streamline product development processes, from ideation to retirement. We help businesses integrate PLM systems with other enterprise applications such as ERP, CRM, and CAD/CAM systems to ensure seamless data flow and collaboration across departments.
 
                    </p>
                </div> */}

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
            <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')] py-24`}>
                <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
                <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
                    {DiscoverMoreCardsData.map((data: DiscoverMoreCardsData, index: number) => {
                        return (
                            <DiscoverMoreCards key={index} imageSrc={data.imageSrc} link={data.link} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Industry