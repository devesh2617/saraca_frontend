import {Helmet} from "react-helmet"
import React, { useEffect, useRef, useState } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import ServiceOfferingsCards from "../../components/SubservicesServiceOfferingCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';

// type DiscoverMoreCardsData = {
//     imageSrc: string,
//     link: string
// }

type TrendingTechnologiesObject = {
    title: string,
    link: string,
    imageSrc: string
}

type DiscoverMoreCardsType = {
    img: string,
    title:string,
    link: string
  }

const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

const TrendingTechnologiesData = [
    {
        heading: "Digital Twin Technology",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Digital Twin Technology.webp`,
    },
    {
        heading: "Internet of Things (IoT) Integration",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Internet of Things (IoT) Integration.webp`,
    },
    {
        heading: "Cloud-Based PLM Solutions",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Cloud-Based PLM Solutions.webp`,
    },
    {
        heading: "Artificial Intelligence and Machine Learning",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Artificial Intelligence and Machine Learning.webp`,
    },
    {
        heading: "Augmented Reality (AR) and Virtual Reality (VR)",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Augmented Reality (AR) and Virtual Reality (VR).webp`,
    }
];


const ServiceOfferings = [
    {
        heading: "Product Lifecycle Management (PLM)",
        description: "Our PLM services encompass the entire product lifecycle, from conceptualization and design to manufacturing and support. We employ industry-leading tools and methodologies to streamline processes, enhance collaboration, and drive innovation.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Product Lifecycle Management (PLM).webp`
    },
    {
        heading: "Software Engineering Solutions",
        description: "SARACA offers a comprehensive suite of software engineering solutions, including software development, testing, maintenance, and optimization. Our team of seasoned engineers and developers is committed to delivering robust, scalable, and high-performance software solutions that exceed client expectations.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Software Engineering Solutions.webp`
    },
    {
        heading: "Technology Integration",
        description: "We specialize in seamless technology integration, helping clients leverage the latest advancements to optimize operations, improve efficiency, and gain a competitive edge in the market. Whether it's integrating new technologies into existing systems or developing custom solutions from the ground up, SARACA has the expertise to deliver results.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Technology Integration.webp`
    },
    {
        heading: "Quality Assurance and Compliance",
        description: "SARACA ensures adherence to the highest quality standards and regulatory compliance requirements throughout the product development lifecycle. Our rigorous quality assurance processes and compliance frameworks guarantee that deliverables meet the most stringent industry standards and certifications.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Quality Assurance and Compliance.webp`
    },
   
];



const TrendingTechnologiesCards = (data: TrendingTechnologiesObject) => {
  return (
    <div className=" w-72 group">
      <div className="h-72 w-72 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300">
        <img loading = "lazy"
          src={data.imageSrc}
          className=" w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <h6 className="text-3xl text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300">
        {data.heading}
      </h6>
    </div>
  );
};

// const DiscoverMoreCardsData = [{
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//     link: "#"
// },
// {
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//     link: "#"
// },
// {
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
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
    const [discoverMore, setDiscoverMore] = useState<DiscoverMoreCardsType[]>([])
  useEffect(()=>{
   getDiscoverMoreDataByIds(discoverMoreIds).then(
    res=>{
      setDiscoverMore(res.data.data)
    }
   ).catch(e=>console.log(e))
  },[])


    return (
        <div>
            <Helmet>
            <title>Product Lifecycle Management (PLM) Services | Saraca Solutions</title>
            <meta
              property="og:title"
              content="Product Lifecycle Management (PLM) Services | Saraca Solutions"
            />
            <meta
              name="description"
              content="Saraca Solutions provides comprehensive Product Lifecycle Management (PLM) services encompassing software design, development, integration, quality assurance, deployment, and maintenance. Our PLM solutions are designed to optimize your software product's lifecycle, ensuring alignment with business goals and market demands. Partner with us to leverage cutting-edge technologies like IoT, AI, and cloud-based solutions for seamless innovation and competitive advantage."
            />
            <meta
              name="keywords"
              content="product lifecycle management services, PLM solutions, software design and architecture, development and integration, quality assurance and testing, deployment and maintenance, Saraca Solutions"
            />
            <meta
              property="og:description"
              content="Saraca Solutions provides comprehensive Product Lifecycle Management (PLM) services encompassing software design, development, integration, quality assurance, deployment, and maintenance. Our PLM solutions are designed to optimize your software product's lifecycle, ensuring alignment with business goals and market demands. Partner with us to leverage cutting-edge technologies like IoT, AI, and cloud-based solutions for seamless innovation and competitive advantage."
            />
            <meta
              property="og:keywords"
              content="product lifecycle management services, PLM solutions, software design and architecture, development and integration, quality assurance and testing, deployment and maintenance, Saraca Solutions"
            />
            <meta property="og:type" content="website" />
          </Helmet>
            <div aria-label='landing-image' className="w-full aspect-video relative">
                <div
                    aria-label="overlay-container"
                    className=" bg-gradient-to-r from-black to-transparent absolute z-[1] inset-0"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                            Product LifeCycle Management
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                            PLM Solutions: Plan, Execute, Excel                          
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Software/PLM/Landing.mp4`} type="video/mp4" />
                </video>  

            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center pb-24'>
                    Product Lifecycle Management
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                    Product Lifecycle Management (PLM) in software engineering encompasses the management of software products from inception through development, deployment, maintenance, and eventual retirement. It involves comprehensive planning, collaboration, and control to ensure the seamless evolution of software solutions, aligning with business objectives and market demands.
                    <br />
                    <br />
In the rapidly evolving digital landscape, effective PLM is crucial for driving innovation, optimizing resources, and enhancing competitiveness. By implementing robust PLM practices, organizations can accelerate time-to-market, improve product quality, and adapt swiftly to dynamic market trends, thereby maximizing the value of their software investments. 
                    </p>
                </div>
                <div>
                    <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
                        Segments:
                    </h1>
                    <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                        <strong>Software Design and Architecture:</strong> Architecting scalable and resilient software solutions tailored to your business needs.
                        <br />
                        <br />
                        <strong>Development and Integration:</strong> Streamlining the development process and integrating software components for seamless functionality.
                        <br />
                        <br />
                        <strong>Quality Assurance and Testing:</strong> Ensuring the reliability, performance, and security of software products through rigorous testing methodologies.
                        <br />
                        <br />
                        <strong>Deployment and Maintenance:</strong> Facilitating smooth deployment and providing ongoing support and maintenance services to optimize software performance.
                    </p>
                </div>

            </div>

            <div aria-label="trending-technologies-section" className={`w-full bg-cyan-950 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/trending-technologies-pattern.webp')] bg-cover`}>
                <h1 className="text-white text-6xl font-semibold text-center">Trending Technologies</h1>
                <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto gap-8">
                    {TrendingTechnologiesData.map((data: TrendingTechnologiesObject) => TrendingTechnologiesCards(data))}
                </div>
            </div>


            <div aria-label="Our Service Offerings" className="py-24">
                <h1 className="text-5xl md:text-6xl font-semibold text-black text-center">
                    Our Service Offerings
                </h1>
                <div className='mt-24'>
                    <div className='w-1/2 md:border-r-[3px] md:border-gray-300'>
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
            {/*<div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div>*/} 
    </div>
    )
}

export default Industry