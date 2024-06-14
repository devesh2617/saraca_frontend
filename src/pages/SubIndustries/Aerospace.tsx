// import { useState } from 'react';
// import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import IndustryCards from "../../components/IndustryCards";
import ServiceOfferingsCards from "../../components/ServicesOfferingsCards"
type medicalCardsData = {
  title: string,
  points: string[],
  imageSrc: string
}

// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

// type ServicesOfferingsData = {
//   title: string,
//   content: string[]
// }

const medicalCardsData = [{
  title: "Avionics",
  points: [
    "Communications",
    "Navigations",
    "Monitoring",
    "Flight Control System",
    "Fuel Management Systems",
    "Flight Recorders",
    "Aircraft Management Systems",
    "RADAR/Surveillance",
    "Aircraft networks",
    "Mission Computer",
    "Power Control Systems"
  ],
  imageSrc: "Avionics.png"
},
 
{
  title: "Exteriors",
  points: [
    "Landing Gears",
    "Doors and Actuations",
    "Hydraulics",
    "Lighting Systems",
    "Aerostructures"
  ],
  imageSrc: "Exteriors.png"
},
{
  title: "MRO",
  points: [
    "Aircraft Maintenance",
    "Aircraft Repair",
    "Assembly/Disassembly",
    "Inspection",
    "Process Improvement",
    "Quality Control/Assurance",
    "Manufacturing Engineering"
  ],
  imageSrc: "MRO.jpg"
},
{
    title: "Digital",
    points: [
      "Data Analyst",
      "Application Development",
      "Hybris Development"
    ],
    imageSrc: "Digital.jpg"
  },
  {
    title: "Interiors",
    points: [
      "Seating System",
      "Lighting System",
      "Video Systems",
      "Harness and Cabling",
      "Overhead Structures",
      "Evacuation Systems",
      "Technical Publications"
    ],
    imageSrc: "Interiors.png"
  }]

// const DiscoverMoreCardsData = [{
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//   link: "#"
// },
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//   link: "#"
// },
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//   link: "#"
// }]


const ServiceOfferings = [
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
  // const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  // const handleSelect = (data: ServicesOfferingsData) => {
  //   setSelectedServicesOffering(data)
  // }
  return (
    <div>
      <div aria-label='landing-image' className="h-[100vh] w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 text-9xl text-white flex justify-center items-center p-36 font-semibold text-center">Aviate, Navigate, Communicate</div>
        </div>
        
        <img className="h-full w-full object-cover brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/Landing.png`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
          Aerospace Engineering
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        Aerospace engineering involves the design, development, testing, and maintenance of aircraft, spacecraft, and related systems. It integrates mechanical, electrical, and materials engineering to create innovative solutions for aviation and space exploration. In today’s digital world, aerospace engineering is essential for advancing technology and shaping the future of transportation and exploration. It drives innovation by developing advanced materials and sophisticated propulsion systems, enhancing the safety, efficiency, and performance of aerospace vehicles. Aerospace engineering also enables global connectivity through air travel and satellite communications, supports space exploration by developing spacecraft and launch vehicles, and contributes to national security by creating military aircraft and surveillance systems.     
        </p>
        </div>
      
       
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Aerospace Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/`+data.imageSrc} />
            )
          })}
        </div>
      </div>


      <div aria-label="Our Service Offerings" className="my-24 container">
        <h1 className="text-5xl md:text-8xl text-black text-center font-semibold">
          Our Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-12">
        {ServiceOfferings.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
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