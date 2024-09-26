import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
//import IndustryCards from "../../components/IndustryCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';
//import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";
// type medicalCardsData = {
//   title: string,
//   points: string[],
//   imageSrc: string
// }

// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

// type ServicesOfferingsData = {
//   title: string,
//   content: string[]
// }

type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}

const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

// const medicalCardsData = [{
//   title: "Avionics",
//   points: [
//     "Communications",
//     "Navigations",
//     "Monitoring",
//     "Flight Control System",
//     "Fuel Management Systems",
//     "Flight Recorders",
//     "Aircraft Management Systems",
//     "RADAR/Surveillance",
//     "Aircraft networks",
//     "Mission Computer",
//     "Power Control Systems"
//   ],
//   imageSrc: "Avionics.webp"
// },

// {
//   title: "Exteriors",
//   points: [
//     "Landing Gears",
//     "Doors and Actuations",
//     "Hydraulics",
//     "Lighting Systems",
//     "Aerostructures"
//   ],
//   imageSrc: "Digital.webp"
// },
// {
//   title: "MRO",
//   points: [
//     "Aircraft Maintenance",
//     "Aircraft Repair",
//     "Assembly/Disassembly",
//     "Inspection",
//     "Process Improvement",
//     "Quality Control/Assurance",
//     "Manufacturing Engineering"
//   ],
//   imageSrc: "MRO.webp"
// },
// {
//   title: "Digital",
//   points: [
//     "Data Analyst",
//     "Application Development",
//     "Hybris Development"
//   ],
//   imageSrc: "Digital.webp"
// },
// {
//   title: "Interiors",
//   points: [
//     "Seating System",
//     "Lighting System",
//     "Video Systems",
//     "Harness and Cabling",
//     "Overhead Structures",
//     "Evacuation Systems",
//     "Technical Publications"
//   ],
//   imageSrc: "Interiors.webp"
// }]

// const DiscoverMoreCardsData = [{
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//   link: "#"
// },
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//   link: "#"
// },
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//   link: "#"
// }]

const ServiceOfferings = [
  {
    title: "SoC/IP Functional Verification",
    imageSrc: "137.webp",
  },
  {
    title: "ARM Cortex series Processor Verification",
    imageSrc: "138.webp",
  },
  {
    title: "Analog Mixed-Signal Verification",
    imageSrc: "139.webp",
  },
  {
    title: "IP Development and Verification",
    imageSrc: "140.webp",
  },
  {
    title: "EDA Tool Validation",
    imageSrc: "141.webp",
  },
  {
    title: "FPGA Device Selection",
    imageSrc: "142.webp",
  },
  {
    title: "ASISC Prototyping",
    imageSrc: "143.webp",
  },
  {
    title: "Synthesis & Optimization",
    imageSrc: "144.webp",
  },
  {
    title: "SOC Integration",
    imageSrc: "145.webp",
  },
  {
    title: "Functional Verification",
    imageSrc: "146.webp",
  },
  {
    title: "FPGA Accelerator Implementation",
    imageSrc: "147.webp",
  },
  {
    title: "FPGA Validation",
    imageSrc: "148.webp",
  },
];

const TrendingTechnologiesCards = (data) => {
  return (
    <div className="w-72 group">
      <div className="h-72 w-72 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300">
        <img
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Industries/Semiconductor/ASICFPGADesignDevelopment/${
            data.imageSrc
          }`}
          className=" w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <h6 className="text-xl text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300">
        {data.title}
      </h6>
    </div>
  );
};

const Medical = () => {
  // const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  // const handleSelect = (data: ServicesOfferingsData) => {
  //   setSelectedServicesOffering(data)
  // }
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
        <title>Semiconductor – ASIC FPGA Design Development</title>
        <meta
          property="og:title"
          content="Semiconductor – ASIC FPGA Design Development"
        />
        <meta
          name="description"
          content="Saraca specializes in advanced ASIC (Application Specific Integrated Circuit) and FPGA (Field-Programmable Gate Array) solutions, serving diverse sectors including AI-driven data centres, aerospace, automotive, networking, consumer electronics, industrial, medical, and IoT. Our expertise spans digital and mixed-signal ASIC design, as well as FPGA-SoC development, focusing on high-performance, low-power consumption, and compact form-factor designs. We excel in all stages of silicon development, from initial design and verification to physical implementation and validation, leveraging our proficiency in mixed-signal solutions across various technology nodes from 180nm to cutting-edge 3nm and beyond. With a pioneering spirit, Saraca has achieved numerous successful tape-outs, including milestones at 7nm and 10nm nodes, establishing ourselves as leaders in semiconductor engineering services."
        />
        <meta
          name="keywords"
          content="ASIC design services, FPGA-SoC development, digital ASIC design, mixed-signal ASIC solutions, low-power ASIC design, high-performance ASIC design, compact form-factor ASIC, semiconductor engineering services, silicon design services, AI-driven data centre ASIC, aerospace ASIC development, automotive ASIC solutions, networking ASIC design, consumer electronics ASIC design, industrial ASIC solutions, medical ASIC development, IoT ASIC applications, silicon tape-out, 180nm to 3nm technology nodes, ASIC prototyping, EDA tool validation, FPGA device selection, SoC integration, functional verification in ASIC, FPGA accelerator implementation, FPGA validation, ARM Cortex processor verification, IP development and verification"
        />
        <meta
          property="og:description"
          content="Saraca specializes in advanced ASIC (Application Specific Integrated Circuit) and FPGA (Field-Programmable Gate Array) solutions, serving diverse sectors including AI-driven data centres, aerospace, automotive, networking, consumer electronics, industrial, medical, and IoT. Our expertise spans digital and mixed-signal ASIC design, as well as FPGA-SoC development, focusing on high-performance, low-power consumption, and compact form-factor designs. We excel in all stages of silicon development, from initial design and verification to physical implementation and validation, leveraging our proficiency in mixed-signal solutions across various technology nodes from 180nm to cutting-edge 3nm and beyond. With a pioneering spirit, Saraca has achieved numerous successful tape-outs, including milestones at 7nm and 10nm nodes, establishing ourselves as leaders in semiconductor engineering services."
        />
        <meta
          property="og:keywords"
          content="ASIC design services, FPGA-SoC development, digital ASIC design, mixed-signal ASIC solutions, low-power ASIC design, high-performance ASIC design, compact form-factor ASIC, semiconductor engineering services, silicon design services, AI-driven data centre ASIC, aerospace ASIC development, automotive ASIC solutions, networking ASIC design, consumer electronics ASIC design, industrial ASIC solutions, medical ASIC development, IoT ASIC applications, silicon tape-out, 180nm to 3nm technology nodes, ASIC prototyping, EDA tool validation, FPGA device selection, SoC integration, functional verification in ASIC, FPGA accelerator implementation, FPGA validation, ARM Cortex processor verification, IP development and verification"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full lg:w-1/2 text-left left-0 lg:text-9xl md:text-5xl text-2xl  bg-gradient-to-r from-black to-transparent text-white flex justify-center items-center p-24 font-semibold">
            Expert ASIC/FPGA Design for Every Industry
          </div>
        </div>

        <img
          className="h-full w-full object-cover"
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Industries/Semiconductor/ASICFPGADesignDevelopment/Landing.webp`}
        />
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center pb-24">
            ASIC/FPGA
          </h1>
          <p className="container text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            We specialize in assisting clients across various sectors, including
            AI-driven data centres, aerospace, automotive, networking, consumer
            electronics, industrial, medical, and IoT. Our team excels in
            digital and mixed-signal ASIC design, as well as FPGA-SoC
            development, catering to the growing demand for high-performance,
            low-power consumption, and compact form-factor designs. We leverage
            our strong expertise in mixed-signal solutions, covering design,
            verification, physical design, and validation, to deliver
            cutting-edge designs even at lower geometry nodes. With a proven
            track record, we have successfully taped-out over 250+ silicon
            designs, ranging from mature 180nm processes to cutting-edge 3nm and
            beyond. We take pride in being the first engineering services
            company to achieve tape-out at the revolutionary 7nm and 10nm nodes.
          </p>
        </div>
      </div>

      {/* <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Aerospace Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/` + data.imageSrc} />
            )
          })}
        </div>
      </div> */}
      <div aria-label="trending-technologies-section" className={`w-full bg-cyan-950 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/trending-technologies-pattern.webp')] bg-cover`}>
                <h1 className="text-white text-5xl font-semibold text-center">Service Offerings</h1>
                <div className="container flex flex-wrap justify-center gap-8 items-start mt-24 mx-auto">
                    {ServiceOfferings.map((data) => TrendingTechnologiesCards(data))}
                </div>
</div>
      {/* <div aria-label="Our Service Offerings" className="my-24 flex flex-col gap-12">
        <h1 className="text-5xl md:text-8xl text-black text-center font-semibold">
          Our Service Offerings
        </h1>
        {ServiceOfferings.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div> */}
      {/* <div aria-label='medical-device-service-offerings' className='min-h-[15=20vh]  w-full flex justify-center items-center relative my-24'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2]  transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
          <h1 className='container text-black text-5xl text-center mx-auto relative'>Aerospace Services Offerings
            <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
              <i className="fa-solid fa-circle-left"></i>
              back
            </div>

          </h1>
          <div className='flex gap-16 constainer justify-center items-center min-h-24'>
            <div className='h-full'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/${selectedServicesOffering?.imageSrc}`} alt="symbol" className='object-contain aspect-square max-h-72' />
            </div>
            <p className='text-7xl flex-1 tracking-wide'>
              {selectedServicesOffering && selectedServicesOffering.title}
            </p>
          </div>
          <div className='container mx-auto'>
            {selectedServicesOffering && selectedServicesOffering.content.map((data: string, index: number) => <li key={index} className='text-2xl p-4 text-gray-600'>{data}</li>)}
          </div>
          </div>
        </div>
        <div className={`h-[80vh] w-[80vh] rounded-full ${selectedServicesOffering ? "hidden" : "relative"}`} >
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Aerospace Services Offerings</h1>
          <div className='h-full w-full relative -left-1/2 flex justify-center items-center'>

            {medicalServiceOfferings.map((data: any, index: number) => {
              return (
                <div className={`h-[20vh] w-[20vh] border-4 rounded-full absolute z-1`} style={{ transformOrigin: "50vh", transform: `rotate(${360 / medicalServiceOfferings.length * index + 1}deg)` }}>
                  <div className='group/icon w-full h-full rounded-full bg-white' style={{ transform: `rotate(${-(360 / medicalServiceOfferings.length * index + 1)}deg)` }}>
                    <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/${data.imageSrc}`} className='h-full w-full rounded-full object-scale-down' />
                    <div className='absolute hidden inset-0 bg-black rounded-full bg-opacity-80 group-hover/icon:flex justify-center items-center text-center overflow-hidden text-white' onClick={() => handleSelect(data)}>{data.title}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div> */}
      {/*<div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Medical;
