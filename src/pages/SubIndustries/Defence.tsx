import { useState } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import IndustryCards from "../../components/IndustryCards";

type medicalCardsData = {
  title: string,
  points: string[],
  imageSrc: string
}

type DiscoverMoreCardsData = {
  imageSrc: string,
  link: string
}

type ServicesOfferingsData = {
  title: string,
  content: string[]
}

const medicalCardsData = [{
  title: "Unmanned Aerial Vehicles",
  points: [
    "From communications and navigation to monitoring and surveillance systems, we specialize in the development of advanced avionics solutions that enable UAVs to operate effectively in diverse environments. Our expertise also extends to flight control systems, mission computers, and power control systems, ensuring optimal performance and reliability in unmanned aerial operations."
  ],
  imageSrc: "1.png"
},
 
{
  title: "Land Systems",
  points: [
    "Saraca provides engineering services for drones encompassing avionics, exteriors, and digital solutions. Our capabilities include designing and integrating landing gears, doors, hydraulics, lighting systems, and aerostructures to enhance drone performance and functionality."
  ],
  imageSrc: "2.png"
},
{
  title: "Ground Control Systems",
  points: [
    "We offer a comprehensive suite of engineering services for land systems, including vehicle maintenance, repair, assembly/disassembly, and inspection. Our expertise in process improvement, quality control/assurance, and manufacturing engineering ensures the reliability and readiness of land-based defense systems."
  ],
  imageSrc: "Avionics.png"
},
{
    title: "Small Arms and Ammunition",
    points: [
      "Saraca specializes in the development and integration of ground control systems for unmanned aerial vehicles and drones. Our solutions encompass data analysis, application development, and hybris development to facilitate real-time monitoring, control, and mission management."
    ],
    imageSrc: "Digital.jpg"
  }]

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


const medicalServiceOfferings = [
  {
    title: "Embedded",
    content: [
      "New product development",
      "Low level development – BSP, DD",
      "Application development",
      "ADAS",
      "IOT Systems development"
    ],
    imageSrc:"Embedded.svg"
  },
  {
    title: "Technical Publications",
    content: [
      "Technical illustrations",
      "Technical Authoring",
      "Multimedia"
    ],
    imageSrc:"TechPub.svg"
  },
  {
    title: "Manufacturing Engineering",
    content: [
      "Concurrent/Process Engineering",
      "Tools, Jigs and Fixture Designing",
      "Transfer of Technology (TOT)",
      "Manufacturing Transfers",
      "Sourcing Activities",
      "Assembly Engineering"
    ],
    imageSrc:"Manufacturing.svg"
  },
  {
    title: "Mechanical Engineering",
    content: [
      "New Product Development",
      "Value Engineering",
      "Reverse Engineering",
      "Finite Element Analysis",
      "Sustenance Engineering",
      "Structural Engineering",
      "Systems Engineering",
      "Post Launch Follow-up"
    ],
    imageSrc:"Mechnaical.svg"
  },
  {
    title: "Software Engineering",
    content: [
      "New product development",
      "Safety critical software’s",
      "HMI development",
      "ATE Application development",
      "Front and back end development",
      "Full Stack development"
    ],
    imageSrc:"Software.svg"
  },
  {
    title: "Quality Engineering",
    content: [
      "Product design control",
      "Supplier quality assurance",
      "QMS development",
      "DHF Remediation",
      "Regulatory assessment"
    ],
    imageSrc:"Quality.svg"
  }
 
 
]
const Medical = () => {
  const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  const handleSelect = (data: ServicesOfferingsData) => {
    setSelectedServicesOffering(data)
  }
  return (
    <div>
      <div aria-label='landing-image' className="h-[100vh] w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 text-9xl text-white flex justify-center items-center p-36 font-semibold text-center">Empowering Defense through Engineering Excellence</div>
        </div>
        
        <img className="h-full w-full object-fill brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Defense/Landing.jpg`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
         Innovating the Future of Defense
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        We are highly proficient at working within regulated environments such as those imposed by the U.S. FDA, EU MDR, EU IVDR, ISO13485, 21 CFR Part 820 Quality Management systems along with ISO14971 and IEC62304. Our skills include software development and testing, Embedded Hardware and Firmware, mechanical Design, developing Design Dossiers (DHF/Tech Files), 510(k) applications, CER, PER, STED, UDI implementation, Remediation of Class I, II, and III products, and CAPA Management.
        </p>
        </div>
        <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        We have expertise in implementation of complex new regulations, including the EU MDR and IVDR and creation of CERs and PERs and strong clinical practice supporting EU requirements, providing strategies and turnkey approach to completion of CERs, PERs, and PMS-related deliverables (PSUR, SSCP, PMCF/PMPF plans and reports, PMCF/PMPF surveys).
        has context menu.
        </p>
        </div>
       
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Defense Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/`+data.imageSrc} />
            )
          })}
        </div>
      </div>


      <div aria-label='medical-device-service-offerings' className='min-h-[15=20vh]  w-full flex justify-center items-center relative my-24'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2]  transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
          <h1 className='container text-black text-5xl text-center mx-auto relative'>Defense Services Offerings
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
      </div>
      {/* <div aria-label="discover more section" className="min-h-[80vh] w-full bg-cyan-900 bg-[url('../../public/cube-background.svg')] py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-8">
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

export default Medical