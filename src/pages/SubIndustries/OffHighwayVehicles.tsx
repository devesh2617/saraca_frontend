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
  title: "Advanced Vehicle Design",
  points: [
    "Our team of expert engineers specializes in designing Off-Highway Vehicles equipped with state-of-the-art digital technologies, ensuring superior performance, reliability, and durability in rugged environments."
  ],
  imageSrc: "Avionics.png"
},

{
  title: "Digital Integration and Connectivity",
  points: [
    "We leverage the power of digital integration and connectivity to equip Off-Highway Vehicles with IoT sensors, telematics systems, and data analytics platforms for real-time monitoring, remote diagnostics, and predictive maintenance."
  ],
  imageSrc: "Digital.jpg"
},
{
  title: "Safety and Autonomous Solutions",
  points: [
    "Saraca is at the forefront of developing safety-critical systems and autonomous solutions for Off-Highway Vehicles, including collision avoidance systems, operator assistance features, and autonomous operation capabilities, enhancing safety and efficiency on the job site."
  ],
  imageSrc: "MRO.jpg"
},
{
  title: "Environmental Sustainability",
  points: [
    "Through innovative engineering practices, we prioritize environmental sustainability by designing Off-Highway Vehicles with low emissions, energy-efficient components, and recyclable materials, contributing to a greener and more sustainable future."
  ],
  imageSrc: "Digital.jpg"
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
    title: "New Product Development",
    content: [
      "Detail design",
      "Systems definition and engineering",
      "Design validation",
      "Prototype testing services"
    ],
    imageSrc: "Embedded.svg"
  },
  {
    title: "Product Localization",
    content: [
      "Deep understanding and strong insights about emerging markets",
      "Expertise in identifying challenges & studying market conditions",
      "A vast network of customers and critical suppliers"
    ],
    imageSrc: "TechPub.svg"
  },
  {
    title: "Embedded Engineering",
    content: [
      "System Architecture Development",
      "System Test Plan",
      "Software Design & Architecture",
      "SW Component/Model Development",
      "Manual & Auto Coding",
      "Schematics & Layout Design",
      "BOM Development & Optimization",
      "HW & SW Integration",
      "Functional Testing"
    ],
    imageSrc: "Manufacturing.svg"
  },
  {
    title: "Sustenance & Value Engineering",
    content: [
      "Product improvement & enhancements",
      "Change management",
      "Value Engineering",
      "Engineering Procurement Services"
    ],
    imageSrc: "Mechnaical.svg"
  },
  {
    title: "Polymer Engineering",
    content: [
      "DESIGN & DEVELOPMENT",
      "BENCHMARKING",
      "TESTING",
      "FINITE ELEMENT ANALYSIS"
    ],
    imageSrc: "Software.svg"
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
          <div className="h-full absolute w-1/2 left-0 text-9xl bg-gradient-to-r from-black to-transparent text-white flex justify-center items-center p-36 font-semibold text-left">Transforming Off-Road Challenges into Engineering Triumphs</div>
        </div>
        <img className="h-full w-full object-cover"
          src={`../../../public/Industries/Automotive/Off-Highway/Off Highway Landing.jpg`}
        />  

      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
          <h1 className='text-5xl font-semibold text-center pb-24'>
            Off-Highway Vehicles
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            Off-Highway Vehicles (OHVs) engineering involves the design, development, and optimization of vehicles used primarily in off-road environments, such as construction sites, agricultural fields, mining operations, and forestry. These vehicles include bulldozers, excavators, tractors, dump trucks, and other heavy machinery essential for various industries.
            <br />
            <br />
            In today's digital world, Off-Highway Vehicles engineering plays a crucial role in advancing technological capabilities, improving efficiency, and enhancing safety standards across industries.
          </p>
        </div>
        <div>
          <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
            What We Do
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            At Saraca, we are committed to pioneering significant innovations in Off-Highway Vehicles Engineering, leveraging our expertise in ER&D, Digital solutions, and Consulting services. Our focus areas include:
            <br />
            <br />
            1. <strong>Advanced Vehicle Dynamics:</strong> Implementing cutting-edge simulation and analysis techniques to optimize vehicle performance, stability, and maneuverability in off-road environments.
            <br />
            <br />
            2. <strong>Intelligent Control Systems:</strong> Developing smart control systems and automation solutions to enhance operational efficiency, safety, and autonomy in Off-Highway Vehicles.
            <br />
            <br />
            3. <strong>Electrification and Alternative Powertrains:</strong> Embracing sustainable technologies and alternative powertrains to reduce emissions, improve fuel efficiency, and minimize environmental impact in Off-Highway Vehicle operations.
          </p>
        </div>

      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Off-Highway Vehicles Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/` + data.imageSrc} />
            )
          })}
        </div>
      </div>
      
      <div aria-label="Our Service Offerings" className="my-24 flex flex-col gap-12">
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
      </div>

      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh]  w-full flex justify-center items-center relative my-24'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2]  transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
            <h1 className='container text-black text-5xl text-center mx-auto relative font-semibold'>Off-Highway Vehicles Services Offerings
              <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
                <i className="fa-solid fa-circle-left"></i>
                back
              </div>

            </h1>
            <div className='flex gap-16 container justify-center items-center min-h-24'>


            </div>
            <div className='container mx-auto flex flex-col lg:flex-row items-center'>
              <div className='flex-1'>
                <ul className='list-disc text-gray-500 font-medium'>
                  {selectedServicesOffering && selectedServicesOffering.content.map((data: string, index: number) => <li key={index} className='text-2xl p-4'>{data}</li>)}

                </ul>

              </div>
              <div className='flex-1 flex flex-col justify-center'>

                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/${selectedServicesOffering?.imageSrc}`} alt="symbol" className='object-contain aspect-square w-[32rem] mx-auto' />
                <h1 className='text-6xl text-black font-semibold text-center'>
                  {selectedServicesOffering && selectedServicesOffering.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={`h-[80vh] w-[80vh] rounded-full ${selectedServicesOffering ? "hidden" : "relative"}`} >
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Off-Highway Vehicles Services Offerings</h1>
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