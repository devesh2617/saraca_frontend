// import { useState } from 'react';
// import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import {Helmet} from "react-helmet";
import IndustryCards from "../../components/IndustryCards";
import ServiceOfferingsCards from '@/components/ServicesOfferingsCards';
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
  title: "Unmanned Aerial Vehicles",
  points: [],
  imageSrc: "22.jpg"
},

{
  title: "Armored Vehicles",
  points: [],
  imageSrc: "Armored Vehicles.jpg"
},
{
  title: "Artillery Systems",
  points: [],
  imageSrc: "Artillery Systems.jpg"
},
{
  title: "Naval Systems",
  points: [],
  imageSrc: "Naval Systems.jpg"
},
{
  title: "Air Systems",
  points: [],
  imageSrc: "Air Systems.jpg"
},
{
  title: "Cyber and Electronic Systems",
  points: [],
  imageSrc: "15.jpg"
},
{
  title: "Small Arms and Weapons",
  points: [],
  imageSrc: "17.jpg"
},
{
  title: "Homeland Security and Border Defense",
  points: [],
  imageSrc: "18.jpg"
},
{
  title: "Ground Control Systems",
  points: [],
  imageSrc: "Ground Control Systems.jpg"
}
]

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
      "IOT Systems development",
    ],
    imageSrc: "Embedded.jpg",
  },
  {
    title: "Software Engineering",
    content: [
      "New product development",
      "Safety critical software’s",
      "HMI development",
      "ATE Application development",
      "Front and back end development",
      "Full Stack development",
    ],
    imageSrc: "Software Engineering.jpg",
  },
  {
    title: "Design and Development",
    content: [
      "Conceptual and Preliminary Design",
      "Detailed Design",
      "Systems Engineering",
      "Aerodynamics and Performance Analysis",
      "Structural Analysis and Design",
      "Avionics and Electronics Systems Design",
      "Propulsion Systems Design",
      "Interiors Design and Configuration",
      "Materials and Process Engineering",
    ],
    imageSrc: "Design and Development.jpg",
  },
  {
    title: "Simulation and Testing",
    content: [
      "Computational Fluid Dynamics (CFD) Analysis",
      "Finite Element Analysis (FEA)",
      "System Simulation and Modelling",
      "Structural Testing (static and dynamic)",
      "Environmental Testing",
    ],
    imageSrc: "Simulation and Testing.jpg",
  },
  {
    title: "Manufacturing and Production Support",
    content: [
      "Advanced Manufacturing Engineering",
      "Tooling and Fixture Design",
      "Production Planning and Control",
      "Supply Chain Management",
      "Quality Assurance and Control",
      "Lean Manufacturing and Process Optimization",
    ],
    imageSrc: "Manufacturing and Production Support.jpg",
  },
  {
    title: "Maintenance, Repair, and Overhaul (MRO)",
    content: [
      "Aircraft Maintenance and Inspection",
      "Repair and Overhaul of Components",
      "Engine Maintenance",
      "Avionics and Systems Maintenance",
      "Modifications and Upgrades",
      "Condition Monitoring and Predictive Maintenance",
    ],
    imageSrc: "Maintenance, Repair, and Overhaul (MRO).jpg",
  },
  {
    title: "Product Lifecycle Management",
    content: [
      "Data and Configuration Management",
      "Technical Documentation",
      "IETP Development",
      "Illustrations and Graphics",
      "Training and Support",
      "Translation and Localization",
      "Standards and Compliance",
      "Integration with PLM Systems",
      "Lifecycle Documentation Maintenance",
      "Content Management Solutions",
    ],
    imageSrc: "Product Lifecycle Management.jpg",
  },
  {
    title: "Software and IT Services",
    content: [
      "Embedded Systems and Software Development",
      "Flight Management Systems",
      "Data Analytics and Big Data Solutions",
      "Cybersecurity Solutions",
      "Simulation Software Development",
      "IT Infrastructure Management",
    ],
    imageSrc: "Software and IT Services.jpg",
  },
  {
    title: "Certification and Regulatory Compliance",
    content: [
      "Certification Support (FAA, EASA, etc.)",
      "Safety and Reliability Analysis",
      "Compliance Documentation",
      "Environmental Compliance",
      "Risk Management",
    ],
    imageSrc: "Certification and Regulatory Compliance.jpg",
  },
  {
    title: "Sustainability and Green Technologies",
    content: [
      "Fuel Efficiency Optimization",
      "Emission Reduction Technologies",
      "Sustainable Materials and Processes",
      "Electric and Hybrid Propulsion Systems",
      "Renewable Energy Integration",
    ],
    imageSrc: "Sustainability and Green Technologies.jpg",
  },
  {
    title: "Project Management and Consultancy",
    content: [
      "Program and Project Management",
      "Strategic Consultancy",
      "Market Analysis and Feasibility Studies",
      "Business Process Reengineering",
      "Cost Estimation and Budgeting",
    ],
    imageSrc: "Project Management and Consultancy.jpg",
  },
];

const Medical = () => {
  // const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  // const handleSelect = (data: ServicesOfferingsData) => {
  //   setSelectedServicesOffering(data)
  // }
  return (
    <div>
      <Helmet>
      <title>Advanced Defense Solutions by Saraca Solutions</title>
        <meta property="og:title" content="Advanced Defense Solutions by Saraca Solutions" />
        <meta name="description" content="Explore Saraca Solutions' advanced defense solutions, offering innovative technologies and strategic services tailored to meet the evolving needs of the defense sector. Discover our expertise in enhancing operational effectiveness and mission success in defense applications." />
        <meta name="keywords" content="Defense solutions, Defense technology, Defense engineering, Defense innovation, Military solutions, Strategic defense services, Defense industry expertise." />
        <meta property="og:description" content="Explore Saraca Solutions' advanced defense solutions, offering innovative technologies and strategic services tailored to meet the evolving needs of the defense sector. Discover our expertise in enhancing operational effectiveness and mission success in defense applications." />
        <meta property="og:keywords" content="Defense solutions, Defense technology, Defense engineering, Defense innovation, Military solutions, Strategic defense services, Defense industry expertise." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 lg:text-9xl md:text-5xl text-2xl text-white flex justify-center items-center p-36 font-semibold text-center">Empowering Defense through Engineering Excellence</div>
        </div>

        <img className="h-full w-full object-fill brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Defense/Landing.jpg`} />

      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
          <h1 className='text-5xl font-semibold text-center pb-24'>
            Innovating the Future of Defense
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>

            Defence engineering involves applying engineering principles and technologies to design, develop, and maintain systems. Our services focus on the integration of advanced technologies like artificial intelligence, machine learning, cybersecurity, and data analytics to enhance defense systems' performance and resilience. We drive strategic innovation, developing next-generation defence platforms, weapons systems, communication networks, and surveillance technologies to maintain military superiority.
            <br />
            <br />
            We equip defense forces with adaptive capabilities to anticipate, detect, and respond to emerging threats in real-time, ensuring proactive defense measures.  

            </p>
        </div>
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Defense Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Defense/` + data.imageSrc} />
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
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Defense/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        </div>   
      </div>
      {/* <div aria-label='medical-device-service-offerings' className='min-h-[15=20vh]  w-full flex justify-center items-center relative my-24'>
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