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
  title: "HARDWARE DESIGN & VALIDATION",
  points: [
    "PCB Design & Design Analysis (Thermal, Reliability, EMI/EMC, Timing, WCCA)",
    "Safety Engineering: ISO 26262",
    "Hardware Software Integration",
    "Prototype Production"
    ],
  imageSrc: "Avionics.png"
},
 
{
  title: "CHARGING ELECTRONICS",
  points: [
    "Multi-protocol support",
    "Charger interface module",
    "Underbody charger"
  ],
  imageSrc: "Digital.jpg"
},
{
  title: "FUNCTIONAL SAFETY",
  points: [
    "SW safety function, library qualification and testing for ISO26262 ASIL B/C/D",
    "Compliance for HEVs & EVs",
    "Multiple BMS programs with ASIL C",
    "Programs with vehicle dynamic controller & ESCL with ASIL D",
    "Functional safety support for Delphi – SDM 40 and PODS"
  ],
  imageSrc: "MRO.jpg"
},
{
    title: "HARNESS DESIGN & ANALYSIS",
    points: [
      "Schematic design & simulation",
      "Sizing & optimization",
      "Manufacturing drawing & BOM"
    ],
    imageSrc: "Digital.jpg"
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    points: [
      "AUTOSAR CoE with Specialists & Engineers",
      "Safety Engineering: ISO 26262",
      "Model Based Approach for System Behaviour Modelling & Algorithm Development",
      "Plant Modelling & HIL"
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
    title: "Component Design Services",
    content: [
      "We assist OEMs in streamlining vehicle architecture by standardizing and reducing the number of electrical components. Our goal is to enhance scalability and optimize production costs."
    ],
    imageSrc:"Embedded.svg"
  },
  {
    title: "Computational Fluid Dynamics (CFD)",
    content: [
      "We offer a complete range of CFD services, leveraging industry-leading tools and domain expertise to address all CFD simulation requirements."
    ],
    imageSrc:"TechPub.svg"
  },
  {
    title: "Finite Element Analysis (FEA)",
    content: [
      "Our FEA services offer precise calculations and resourceful evaluation methods tailored to the transportation sector's needs."
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
    title: "Value Add & Value Engineering (VA/VE)",
    content: [
      "We adopt VA/VE methodologies to enhance project efficiency, quality, and communication, delivering superior ROI for our clients."
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
          <div className="h-full absolute w-full left-0 text-9xl text-white flex justify-center items-center p-36 font-semibold text-center">Unlocking the Future of Electric Vehicles</div>
        </div>
        
        <img className="h-full w-full object-cover brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Electric Vehicles/ElectricVehicle.png`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
          Electric Vehicles
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        As the world transitions towards sustainable transportation solutions, electric vehicle engineering stands at the forefront of innovation, reshaping the automotive industry in the digital era.
 
        <br/>
        <br/>
        Electric vehicle engineering encompasses the design, development, and optimization of electric-powered vehicles, including battery technology, electric drivetrains, charging infrastructure, and vehicle integration. In today's digital world, the importance of electric vehicle engineering cannot be overstated. 
          </p>
        </div>
        <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        At Saraca, we are committed to revolutionizing the electric vehicle landscape and empowering our customers with innovative engineering solutions.We are passionate about shaping the future of transportation through electric vehicle engineering. Partner with us to accelerate your journey towards sustainable mobility and driving excellence in the digital world.
        <br />
        <br />
1. <strong>Sustainability:</strong> Electric vehicles offer a cleaner and more sustainable alternative to traditional internal combustion engine vehicles, reducing greenhouse gas emissions and dependence on fossil fuels.
<br/>
<br />
2.<strong> Technological Advancements:</strong> Electric vehicles integrate advanced technologies such as electric propulsion systems, battery management systems, regenerative braking, and vehicle-to-grid communication. 
<br />
<br />
3.<strong> Digital Connectivity:</strong> Electric vehicles are increasingly becoming connected devices, leveraging digital technologies for enhanced safety, convenience, and efficiency. Electric vehicle engineering facilitates seamless integration of digital features, enabling functionalities such as remote monitoring, over-the-air updates, and predictive maintenance.
<br />
<br />
4.<strong> End-to-End Engineering Services:</strong> From conceptualization to production, we offer comprehensive engineering services tailored to the electric vehicle industry. Our expertise spans vehicle design, battery technology, power electronics, electric drivetrains, and charging infrastructure.
        </p>
        </div>
       
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Electric Vehicles Segments</h1>
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