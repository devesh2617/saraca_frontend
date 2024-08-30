
import React, { useEffect, useRef } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import ServiceOfferingsCards from "../../components/SubservicesServiceOfferingCards";
import {Helmet} from "react-helmet"
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
        heading: "Renewable Energy Integration",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/38.webp`,
    },
    {
        heading: "Internet of Things (IoT) for Environmental Monitoring",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/39.webp`,
    },
    {
        heading: "Artificial Intelligence (AI) for Predictive Analytics in Sustainability",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/40.webp`,
    },
    {
        heading: "Blockchain for Transparent and Traceable Supply Chains",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/41.webp`,
    },
    {
        heading: "Green Building Technologies and Energy Management Systems",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/42.webp`,
    }
];


const ServiceOfferings = [
    {
        heading: "Sustainable Product Design",
        description:
            "  We collaborate with clients to design and develop eco-friendly products that meet market demands while adhering to sustainable principles. Our multidisciplinary team employs advanced engineering techniques to create innovative solutions that minimize resource consumption and environmental impact.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/Sustain.webp`,
    },
    {
        heading: "Lifecycle Assessment",
        description:
            "Our lifecycle assessment services enable clients to evaluate the environmental impact of their products and processes across their entire lifecycle. By analyzing factors such as energy consumption, emissions, and waste generation, we help organizations identify opportunities for improvement and implement sustainable practices.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/Lifecycle.webp`,
    },
    {
        heading: "Supply Chain Optimization",
        description:
            "We assist clients in optimizing their supply chains to reduce carbon footprint, improve resource efficiency, and enhance overall sustainability performance. Through data-driven analysis and strategic insights, we help organizations identify opportunities for collaboration, streamline processes, and implement sustainable sourcing practices.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/Supply.webp`,
    },
    {
        heading: "Sustainable Software Development",
        description: " From ideation to deployment, we specialize in developing software solutions that align with sustainability objectives. Our agile methodologies prioritize eco-friendly design principles, ensuring that digital solutions contribute to a more sustainable future.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/SD.webp`,
    },
    {
        heading: "Environmental Impact Assessment",
        description: "Evaluate and mitigate environmental risks with Saraca's comprehensive impact assessment services. Leveraging advanced modeling and simulation techniques, we help businesses understand the environmental implications of their operations and implement strategies to minimize adverse effects.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/Environ.webp`,
    },
    {
        heading: "Green Data Centres and Cloud Services",
        description: "Transition to sustainable IT infrastructure with Saraca's green data centre and cloud services. We design and implement energy-efficient data centres powered by renewable energy sources, reducing carbon emissions, and optimizing resource utilization.",
        link: "",
        imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/Green Data.webp`,
    }
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
        <h6 className="text-xl text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300">
          {data.heading}
        </h6>
      </div>
    );
  };

const DiscoverMoreCardsData = [{
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
    link: "#"
},
{
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
    link: "#"
},
{
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
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
            <Helmet>
        <title>Sustainability Engineering Solutions | Saraca</title>
        <meta
          property="og:title"
          content="Sustainability Engineering Solutions | Saraca"
        />
        <meta
          name="description"
          content="Explore Saraca's comprehensive sustainability engineering services, including sustainable product design, lifecycle assessment, supply chain optimization, and green IT solutions. Partner with us to lead the way towards a greener future."
        />
        <meta
          name="keywords"
          content="sustainability engineering solutions, sustainable product design, lifecycle assessment services, supply chain optimization, sustainable software development, environmental impact assessment, green data centers, renewable energy integration, IoT for environmental monitoring, AI for sustainability analytics, blockchain for supply chain transparency"
        />
        <meta
          property="og:description"
          content="Explore Saraca's comprehensive sustainability engineering services, including sustainable product design, lifecycle assessment, supply chain optimization, and green IT solutions. Partner with us to lead the way towards a greener future."
        />
        <meta
          property="og:keywords"
          content="sustainability engineering solutions, sustainable product design, lifecycle assessment services, supply chain optimization, sustainable software development, environmental impact assessment, green data centers, renewable energy integration, IoT for environmental monitoring, AI for sustainability analytics, blockchain for supply chain transparency"
        />
        <meta property="og:type" content="website" />
      </Helmet>
            <div aria-label='landing-image' className="w-full aspect-video relative">
                <div
                    aria-label="overlay-container"
                    className=" from-black to-transparent absolute z-[1] inset-0"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                                Sustainability
                            </h1>
                            <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                            Driving Eco-Innovation Through Sustainable Engineering
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability/Landing.mp4`} type="video/mp4" />
                </video>
            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-5xl font-semibold text-center'>
                        Introduction
                    </h1>
                    <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24'>
                    At Saraca, we recognize the imperative of Sustainability Engineering in shaping a greener future and enabling sustainable growth in the digital landscape. Sustainability Engineering epitomizes the fusion of technology and environmental consciousness, revolutionizing industries towards eco-friendly practices and resource optimization. It ensures that digital solutions not only meet business objectives but also minimize ecological footprints, paving the way for a more sustainable tomorrow.        </p>
                </div>
            </div>

            <div aria-label="trending-technologies-section" className={`w-full bg-cyan-950 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/trending-technologies-pattern.webp')] bg-cover`}>
                <h1 className="text-white text-5xl font-semibold text-center">Trending Technologies</h1>
                <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto gap-8">
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
            {/* <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.webp')] py-24`}>
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