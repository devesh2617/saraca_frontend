import { useState,useEffect } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
// import { title } from "process";
// import IndustryCards from "../../components/IndustryCards";
// import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';
import {Helmet} from "react-helmet"
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
  title: "E-motors, Batteries, EDUs, Skateboard Chassis, Power Electronics, and Connectivity",
  imageSrc: ""
},

{
  title: "ECU Consolidation and Ready Reference Designs",
  imageSrc: ""
},
{
  title: "Battery Optimization",
  imageSrc: ""
},
{
  title: "Advanced Battery Management System (BMS)",
  imageSrc: ""
},
{
  title: "Comprehensive Battery Digital Twin Platform",
  imageSrc: ""
},
{
  title: "Dedicated E-mobility HILS Setup",
  imageSrc: ""
},
{
  title: "Cyber Security",
  imageSrc: ""
},
{
  title: "Tech Support & Program Management",
  imageSrc: ""
},
{
  title: "Verification & Validation",
  imageSrc: ""
},
{
  title: "Embedded Engineering",
  imageSrc: ""
},
{
  title: "Simulation & Analysis",
  imageSrc: ""
},
{
  title: "System Engineering",
  imageSrc: ""
},
{
  title: "Power Converter",
  imageSrc: ""
},
{
  title: "DC-DC Converter",
  imageSrc: ""
},
{
  title: "EV Systems",
  imageSrc: ""
},
{
  title: "EV Digital Ecosystem",
  imageSrc: ""
},
{
  title: "Energy Infra Ecosystem",
  imageSrc: ""
},
{
  title: "Vehicle Design",
  imageSrc: ""
},
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


// const ServiceOfferings = [
//   {
//     title: "Component Design Services",
//     content: [
//       "We assist OEMs in streamlining vehicle architecture by standardizing and reducing the number of electrical components. Our goal is to enhance scalability and optimize production costs."
//     ],
//     imageSrc: "Embedded.svg"
//   },
//   {
//     title: "Computational Fluid Dynamics (CFD)",
//     content: [
//       "We offer a complete range of CFD services, leveraging industry-leading tools and domain expertise to address all CFD simulation requirements."
//     ],
//     imageSrc: "TechPub.svg"
//   },
//   {
//     title: "Finite Element Analysis (FEA)",
//     content: [
//       "Our FEA services offer precise calculations and resourceful evaluation methods tailored to the transportation sector's needs."
//     ],
//     imageSrc: "Manufacturing.svg"
//   },
//   {
//     title: "Mechanical Engineering",
//     content: [
//       "New Product Development",
//       "Value Engineering",
//       "Reverse Engineering",
//       "Finite Element Analysis",
//       "Sustenance Engineering",
//       "Structural Engineering",
//       "Systems Engineering",
//       "Post Launch Follow-up"
//     ],
//     imageSrc: "Mechnaical.svg"
//   },
//   {
//     title: "Software Engineering",
//     content: [
//       "New product development",
//       "Safety critical software’s",
//       "HMI development",
//       "ATE Application development",
//       "Front and back end development",
//       "Full Stack development"
//     ],
//     imageSrc: "Software.svg"
//   },
//   {
//     title: "Value Add & Value Engineering (VA/VE)",
//     content: [
//       "We adopt VA/VE methodologies to enhance project efficiency, quality, and communication, delivering superior ROI for our clients."
//     ],
//     imageSrc: "Quality.svg"
//   }
// ]  
// const TrendingTechnologiesCards = (data) => {
//   return (
//       <div className='w-48 group'>
//           <div className='h-48 w-48 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300'>
//               <img src={data.imageSrc} className=' w-full h-full rounded-full object-cover' alt="" />
//           </div>
//           <h6 className='text-md text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300'>{data.title}</h6>
//       </div>
//   )
// }


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
      <title>Innovative Electric Vehicle Engineering Solutions | Saraca</title>
        <meta property="og:title" content="Innovative Electric Vehicle Engineering Solutions | Saraca" />
        <meta name="description" content="Discover Saraca's pioneering electric vehicle engineering solutions, including EV systems, battery management, digital connectivity, and sustainable mobility advancements. Partner with us to accelerate your journey towards eco-friendly transportation." />
        <meta name="keywords" content="electric vehicle engineering, EV systems, battery management systems, sustainable mobility, electric propulsion systems, vehicle-to-grid communication, digital connectivity in EVs, electric drivetrains, charging infrastructure, automotive electrification" />
        <meta property="og:description" content="Discover Saraca's pioneering electric vehicle engineering solutions, including EV systems, battery management, digital connectivity, and sustainable mobility advancements. Partner with us to accelerate your journey towards eco-friendly transportation." />
        <meta property="og:keywords" content="electric vehicle engineering, EV systems, battery management systems, sustainable mobility, electric propulsion systems, vehicle-to-grid communication, digital connectivity in EVs, electric drivetrains, charging infrastructure, automotive electrification" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 lg:text-9xl md:text-5xl text-2xl text-white flex justify-center items-center p-36 font-semibold text-center">Unlocking the Future of Electric Vehicles</div>
        </div>

        <img className="h-full w-full object-cover brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Electric Vehicles/ElectricVehicle.png`} />

      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
          <h1 className='text-5xl font-semibold text-center pb-24'>
            Electric Vehicles
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            At Saraca, we've been leading the charge in the electric vehicle revolution for more than a decade. We use our expertise to create eco-friendly EV systems with integrated software for OEMs and Tier-1 all around the globe.
            <br />
            <br />
            Our focus is clear: enabling wider EV adoption by addressing key challenges such as limited range, battery concerns, interface complexity. We achieve this through cutting-edge solutions like Battery Digital Twins and Intelligent Battery Management Systems (BMS) powered by AI and advanced estimation methods.
            <br />
            <br />
            Partnering with global OEMs and Tier-1, Saraca provides a comprehensive range of services to Electric Vehicles (EVs) and their ecosystems. Leveraging our expertise in Embedded, Mechanical, and Digital domains, we guide clients through their auto electrification journey with confidence.
            <br />
            <br />
            From Electric Vehicles (EVs) to Hybrid Electric Vehicles (HEVs) to Plug-in Hybrid Electric Vehicles (PHEVs), our suite of e-powertrain systems, technologies, and solutions caters to diverse applications and vehicle platforms.
            <br />
            <br />
            With electric vehicle sales surging by 60% in 2022 alone, the momentum behind this transformation is undeniable. At Saraca, we're proud to be part of this journey, empowering our clients and contributing to a greener, more sustainable tomorrow.
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
            <br />
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

      {/* <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Electric Vehicles Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/` + data.imageSrc} />
            )
          })}
        </div>
      </div> */}


<div aria-label="trending-technologies-section" className={`min-h-[30vh] w-full bg-cyan-950 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/trending-technologies-pattern.svg')] bg-cover`}>
                <h1 className="text-white text-5xl font-semibold text-center">Service Offerings</h1>
                <ul className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 text-2xl justify-evenly items-start mt-24 mx-auto list-outside list-disc">
                    {medicalCardsData.map((data) => (<li className="text-white p-2">{data.title}</li>))}
                </ul>
</div>
      <div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div> 
    </div>
  )
}

export default Medical