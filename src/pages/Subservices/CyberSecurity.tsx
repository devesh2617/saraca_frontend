
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
        heading: "Zero Trust Architecture",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/services/digital/cyber/zero.jpg`,
    },
    {
        heading: "AI- Powered Security Analysis",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
    },
    {
        heading: "Cloud Security",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/services/digital/cyber/cloud.jpg`,
    },
    {
        heading: "Blockchain Security",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/services/digital/cyber/block.jpg`,
    },
    {
        heading: "Identify and Access Management",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/services/digital/cyber/identify.jpg`,
    }
];


const ServiceOfferings = [
    {
        heading: "Cybersecurity Strategy and Architecture",
        description:
            " From developing cybersecurity strategies to designing resilient architectures, we provide end-to-end cybersecurity consulting services tailored to your organization's unique needs and objectives.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Product Design & Development.svg`,
    },
    {
        heading: "Threat Detection and Incident Response",
        description:
            "Detect and respond to cyber threats in real-time with Saraca's threat detection and incident response services. Our advanced threat hunting capabilities and rapid incident response protocols help minimize the impact of security breaches and mitigate risks to business continuity.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Process Optimisation.svg`,
    },
    {
        heading: "Security Assessment and Penetration Testing",
        description:
            "Evaluate the security posture of your digital infrastructure through comprehensive security assessments and penetration testing. Our methodologies simulate real-world attack scenarios to identify weaknesses and implement proactive measures to strengthen defenses.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Regulatory.svg`,
    },
    {
        heading: "Security Operations Center (SOC) Services",
        description: " Monitor, detect, and respond to cyber threats in real-time with Saraca's Security Operations Center (SOC) services. Our team of certified analysts employs advanced threat detection technologies and proactive monitoring techniques to safeguard your digital assets round-the-clock. ",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Quality.svg`,
    },
    {
        heading: "Implementation & Planning",
        description: " Develop a robust cybersecurity strategy aligned with your business objectives and risk tolerance. Our experts work closely with your team to identify vulnerabilities, prioritize initiatives, and establish a roadmap for sustainable cybersecurity resilience.",
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
                    className="from-black to-transparent absolute z-[1] w-full h-[100vh]"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-Left">
                                CyberSecurity
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                                Beware of Cyber threats
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Cyber/Landing.mp4`} type="video/mp4" />
                </video>  

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>
                    Cyber Guardians: Safeguarding Your Digital Fortresses
                    </h1>
                    <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24'>
                    In today's digital landscape, Cybersecurity Engineering stands as a cornerstone in safeguarding digital assets, mitigating threats, and ensuring the integrity of digital ecosystems. In an increasingly interconnected world, Cybersecurity Engineering serves as the frontline defense against evolving cyber threats. It fosters trust, resilience, and continuity in digital operations, protecting sensitive data, critical infrastructure, and intellectual property from unauthorized access, breaches, and cyberattacks       </p>
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