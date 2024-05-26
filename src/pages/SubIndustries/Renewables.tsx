// import { useState } from 'react';
// import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import IndustryCards from "../../components/IndustryCards";
import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";

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
  imageSrc: "Digital.jpg"
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
        Aerospace Engineering encompasses the design, development, testing, and maintenance of aircraft, spacecraft, and related systems. It involves a multidisciplinary approach that integrates principles of mechanical, electrical, and materials engineering to create innovative solutions for aviation and space exploration.
        <br/>
        <br/>
        In today's digital world, Aerospace Engineering plays a crucial role in advancing technology and shaping the future of transportation and exploration.       
          </p>
        </div>
        <div>
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

      <div aria-label="Our Service Offerings" className="my-24 flex flex-col gap-12">
        <h1 className="text-5xl md:text-8xl text-black text-center font-semibold">
          Our Service Offerings
        </h1>
        {ServiceOfferings.map((data: object, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
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