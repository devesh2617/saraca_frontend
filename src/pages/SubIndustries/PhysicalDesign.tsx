import { useState, useEffect } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import {Helmet} from "react-helmet"
import IndustryCards from "../../components/IndustryCards";
// import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';

type medicalCardsData = {
  title: string,
  points: string[],
  imageSrc: string
}

type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}

const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

// type ServicesOfferingsData = {
//   title: string,
//   content: string[]
// }

const medicalCardsData = [{
  title: "Functional Engineering",
  points: [
    "Verification",
    "RTL Design",
    "Post Silicon Validation",
    "FPGA Design, Prototyping & Emulation",
    "SystemC & AMS Verification"
  ],
  imageSrc: "151.webp"
},
 
{
  title: "RTL Design",
  points: [
    "RTL IP DESIGN",
    "MICROARCHITECTURE DEVELOPMENT",
    "SYNTHESIS, CDC, LINT, STA, LOW POWER",
    "SOC INTEGRATION"
  ],
  imageSrc: "152.webp"
},
{
  title: "Verification",
  points: [
    "Functional, ARM-based SOC, GLS, C-based, assertion-based verification expertise",
    "IP level, SOC level, subsystem level, chip level verification expertise",
    "Networking, Wireless, Memory, Processor, High Speed Interconnects, Mobile, Wireless",
    "UVM based verification, SV and UVM based verification"
  ],
  imageSrc: "153.webp"
}
]


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
const TrendingTechnologiesCards = (data) => {
  return (
      <div className='w-72 group'>
          <div className='h-72 w-72 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/ASICFPGADesignDevelopment/${data.imageSrc}`} className=' w-full h-full rounded-full object-cover' alt="" />
          </div>
          <h6 className='text-3xl text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300'>{data.title}</h6>
      </div>
  )
}

const ServiceOfferings = [
  {
    title: "RTL Design",
    imageSrc:"137.webp"
  },
  {
    title: "Post Silicon Validation",
    imageSrc:"138.webp"
  },
  {
    title: "FPGA Design, Prototyping & Emulation",
    imageSrc:"139.webp"
  },
  {
    title: "SystemC & AMS Verification",
    imageSrc:"140.webp"
  },
  {
    title: "Design for Manufacturing/Design for Yield",
    imageSrc:"141.webp"
  },
  {
    title: "Design for Test ",
    imageSrc:"142.webp"
  },
  {
    title: "RTL Synthesis",
    imageSrc:"146.webp"
  },
  {
    title: "Physical Verification",
    imageSrc:"147.webp"
  },
 
 
]
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
        <title>Semiconductor – Physical Design</title>
        <meta
          property="og:title"
          content="Semiconductor – Physical Design"
        />
        <meta
          name="description"
          content="Saraca excels in advanced Physical Design services, leveraging extensive capabilities and experience to deliver silicon turnkey design solutions. With a focus on 10nm, 7nm, and 5nm ASIC technology nodes, our dedicated tech department implements robust physical design flows encompassing Design for Test (DFT) and Design for Manufacturing (DFM). We maintain a state-of-the-art EDA infrastructure and employ a team of seasoned experts proficient in methodologies crucial for achieving optimal Performance, Power efficiency, and Area utilization (PPA). Our stringent processes ensure seamless compliance with foundry-specific checks such as Design Rule Checks (DRCs), Layout vs. Schematic (LVS) checks, and Electrical Rule Checks (ERCs), minimizing iterations and project delays."
        />
        <meta
          name="keywords"
          content="physical design services, silicon turnkey design, ASIC technology nodes, 10nm ASIC design, 7nm ASIC design, 5nm ASIC design, EDA infrastructure, DFT in ASIC, DFM in ASIC, PPA optimization, Design Rule Checks (DRC), Layout vs. Schematic (LVS) checks, Electrical Rule Checks (ERC), RTL design, RTL IP design, microarchitecture development, synthesis in ASIC, CDC analysis, linting in ASIC, static timing analysis (STA) in ASIC, low power design in ASIC, SOC integration, post silicon validation, FPGA design, FPGA prototyping, FPGA emulation, SystemC verification, AMS verification, Design for Manufacturing (DFM), Design for Test (DFT), RTL synthesis, physical verification in ASIC"
        />
        <meta
          property="og:description"
          content="Saraca excels in advanced Physical Design services, leveraging extensive capabilities and experience to deliver silicon turnkey design solutions. With a focus on 10nm, 7nm, and 5nm ASIC technology nodes, our dedicated tech department implements robust physical design flows encompassing Design for Test (DFT) and Design for Manufacturing (DFM). We maintain a state-of-the-art EDA infrastructure and employ a team of seasoned experts proficient in methodologies crucial for achieving optimal Performance, Power efficiency, and Area utilization (PPA). Our stringent processes ensure seamless compliance with foundry-specific checks such as Design Rule Checks (DRCs), Layout vs. Schematic (LVS) checks, and Electrical Rule Checks (ERCs), minimizing iterations and project delays."
        />
        <meta
          property="og:keywords"
          content="physical design services, silicon turnkey design, ASIC technology nodes, 10nm ASIC design, 7nm ASIC design, 5nm ASIC design, EDA infrastructure, DFT in ASIC, DFM in ASIC, PPA optimization, Design Rule Checks (DRC), Layout vs. Schematic (LVS) checks, Electrical Rule Checks (ERC), RTL design, RTL IP design, microarchitecture development, synthesis in ASIC, CDC analysis, linting in ASIC, static timing analysis (STA) in ASIC, low power design in ASIC, SOC integration, post silicon validation, FPGA design, FPGA prototyping, FPGA emulation, SystemC verification, AMS verification, Design for Manufacturing (DFM), Design for Test (DFT), RTL synthesis, physical verification in ASIC"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
      <div
              aria-label="overlay-container"
              className="bg-gradient-to-r from-black to-transparent absolute z-[1] inset-0"
            >
              <div className="md:w-1/2 h-full flex justify-start items-center p-24">
                <div aria-label="content" className="md:text-left">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                   Physical Design
                  </h1>
                  <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                  Transforming Ideas into Integrated Circuits
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/PhysicalDesign/Landing.mp4`} type="video/mp4" />
                </video>
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
          Physical Design
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        Having extensive capabilities and experience in this field, our tech department with established physical design flow (DFT, DFM) SARACA has successfully satisfied its partners and clients by providing its silicon turnkey design services. We are working on 10nm, 7nm and 5nm ASIC technology node. We not only uphold a cutting-edge EDA infrastructure for physical design but also boast a team of dedicated subject matter experts with extensive experience in the critical methodologies and processes integral to achieving optimal performance, power efficiency, and area utilization (PPA). Our established processes and methods guarantee that the design seamlessly navigates through foundry-specific checks like DRCs, LVS, and ERCs, eliminating the need for multiple revisions and preventing delays to keep the project on track.     
          </p>
        </div>
        {/* <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        we are committed to driving innovation and excellence in the aerospace industry. Here's how we contribute to our customers' success:
        <br />
        <br />
1. <strong>Expertise and Experience:</strong> Our team of experienced aerospace engineers brings deep domain expertise and hands-on experience in designing, testing, and certifying aerospace systems and components.
<br/>
<br />
2.<strong>Advanced Technologies:</strong> We leverage cutting-edge technologies and industry best practices to develop next-generation aerospace solutions that meet the highest standards of safety, reliability, and performance.
<br />
<br />
3.<strong>Customized Solutions:</strong> We work closely with our customers to understand their unique requirements and challenges, delivering customized engineering solutions that address their specific needs and objectives.
<br />
<br />
4.<strong>Quality and Compliance:</strong> We adhere to rigorous quality standards and regulatory requirements to ensure compliance with industry regulations and certifications, maintaining the highest levels of safety and reliability in our aerospace solutions.
        </p>
        </div> */}
       
      </div>

      <div aria-label="medical-device-segments" className="min-h-[10vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Physical Design Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/PhysicalDesign/${data.imageSrc}`} />
            )
          })}
        </div>
      </div>
      <div aria-label="trending-technologies-section" className={` w-full bg-cyan-950 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/trending-technologies-pattern.webp')] bg-cover`}>
                <h1 className="text-white text-6xl font-semibold text-center">Service Offerings</h1>
                <div className="container flex flex-wrap justify-center items-start mt-24 mx-auto gap-8">
                    {ServiceOfferings.map((data) => TrendingTechnologiesCards(data))}
                </div>
</div>

      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh]  w-full flex justify-center items-center relative my-24'>
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
      </div>*/}
    </div>
  )
}

export default Medical