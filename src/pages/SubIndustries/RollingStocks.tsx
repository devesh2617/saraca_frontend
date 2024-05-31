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
  title: "Physical Installation & Integration",
  points: [
    "CAR body exterior and interiors",
    "Driver cab and driver desk",
    "CAE validation – crashworthiness, strength & durability, NVH, CFD, etc.",
    "Gap & flush, tolerance management",
    "Electrical wiring harness design and development",
    "Pipe routing and mounting",
    "Drawing release for component manufacturing"
  ],
  imageSrc: "Avionics.png"
},
 
{
  title: "Train Control and Management System (TCMS)",
  points: [
    "System engineering",
    "TCMS platformisation",
    "Software quality assurance and validation",
    "TCMS application software development",
    "TCMS and subsystem integration",
    "Test engineering for TCMS",
    "TCMS HMI"
  ],
  imageSrc: "Digital.jpg"
},
{
  title: "Vehicle Engineering",
  points: [
    "Operability engineering",
    "Train architecture (Functional, Electrical, Mechanical)",
    "Functional requirements modelling & simulation",
    "Functional requirements decomposition & allocation to sub-systems",
    "Requirements management from train level to components",
    "Model based systems engineering",
    "Vehicle level validation on lab train"
  ],
  imageSrc: "MRO.jpg"
},
{
    title: "Automated Test Equipment/Test Rigs",
    points: [
      "Design & Development of PC Based Virtual Test Bench",
      "Hardware-In-Loop Simulation Rig",
      "Lab Train Rig for train simulation",
      "Test Automation Framework"
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
    title: "Verification & Validation",
    content: [
      "Hardware-in-loop simulation"
    ],
    imageSrc: "Verification & Validation.jpg"
  },
  {
    title: "Cybersecurity",
    content: [
      "IEC 62443 for software & hardware",
      "FMEA, FTA",
      "Product Certification Management"
    ],
    imageSrc: "Cybersecurity.jpg"
  },
  {
    title: "Electronics",
    content: [
      "Test automation",
      "Embedded software development",
      "Hardware development"
    ],
    imageSrc: "Electronics.jpg"
  },
  {
    title: "AI/ML & Cloud",
    content: [
      "AI/ML solution development",
      "Development of cloud applications"
    ],
    imageSrc: "AIML & Cloud.jpg"
  },
  {
    title: "Vehicle System Engineering",
    content: [
      "Standardization",
      "System Validation",
      "Functional Engineering"
    ],
    imageSrc: "Vehicle System Engineering.jpg"
  },
  {
    title: "Physical Installation & Integration",
    content: [
      "Pipe routing & mounting",
      "CAE validation",
      "Driver desk",
      "CAR body interiors & exteriors",
      "DFA & DFM"
    ],
    imageSrc: "Physical Installation & Integration.jpg"
  },
  {
    title: "Signaling System Engineering",
    content: [
      "SIL 3/4 product engineering EN 50126/8/9",
      "CBTC",
      "Electronic interlocking"
    ],
    imageSrc: "Signaling System Engineering.jpg"
  },
  {
    title: "Industrial Design",
    content: [
      "Visualization",
      "Modelling",
      "Passenger flow"
    ],
    imageSrc: "Industrial Design.jpg"
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
          <div className="h-full absolute w-full left-0 text-9xl text-white flex justify-center items-center p-36 font-semibold text-center">Empowering Rails, Engineering Futures</div>
        </div>
        
        <video  
                  
                  className="h-full w-full object-cover brightness-50"
                  autoPlay={true}
                  loop
                  playsInline
                  muted
                >
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Rolling Stock/Landing.mp4`} type="video/mp4" />
                </video>
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
          Rolling Stock Segment
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        Our services focus on designing, developing, and integrating signaling and communication engineering, train control systems, braking systems, automation, testing, and validation. We have a skilled team of mechanical and embedded hardware/software engineers who work on various aspects such as mechanical and electrical design, cabin simulation, retrofit/upgrades, and testing and commissioning support.
 <br />
 <br />
We specialize in optimizing rolling stock design for interiors, car bodies, and subsystems, ensuring safety, reliability, and efficiency. With a commitment to innovation, we help our customers maximize railroad safety, improve passenger journeys, and increase operational efficiencies.
          </p>
        </div>
        {/* <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        At Saraca, we are dedicated to revolutionizing the Rolling Stocks Engineering domain. Our team of experts combines cutting-edge technologies and industry best practices to deliver transformative solutions that drive efficiency, safety, and reliability across railway networks.
        <br />
        <br />
<strong>Rolling Stock Design and Development:</strong> Partner with Saraca for bespoke rolling stock design and development solutions tailored to your specific requirements. From locomotives to passenger coaches and freight wagons, we specialize in creating robust, efficient, and sustainable rolling stock solutions.
<br/>
<br />
<strong>Maintenance and Lifecycle Management:</strong>Ensure the longevity and performance of your rolling stock assets with Saraca's comprehensive maintenance and lifecycle management services. We employ proactive maintenance strategies and advanced analytics to optimize asset performance and minimize downtime.
<br />
<br />
<strong>Safety and Compliance Solutions:</strong> Safeguard your operations and comply with industry regulations with Saraca's safety and compliance solutions. Our expertise in risk assessment, safety protocols, and regulatory compliance ensures that your rolling stock operations meet the highest standards of safety and reliability.
        </p>
        </div> */}
       
      </div>

      {/* <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Rolling Stock Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Rolling Stock/`+data.imageSrc} />
            )
          })}
        </div>
      </div> */}

      <div aria-label="Our Service Offerings" className="my-24 container">
        <h1 className="text-5xl md:text-8xl text-black text-center font-semibold">
          Our Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-12">
        {ServiceOfferings.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Rolling Stock/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        </div>   
      </div>
      {/* <div aria-label='medical-device-service-offerings' className='min-h-[15=20vh]  w-full flex justify-center items-center relative my-24'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2]  transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
          <h1 className='container text-black text-5xl text-center mx-auto relative'>Rolling Stock Services Offerings
            <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
              <i className="fa-solid fa-circle-left"></i>
              back
            </div>

          </h1>
          <div className='flex gap-16 constainer justify-center items-center min-h-24'>
            <div className='h-full'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Rolling Stock/${selectedServicesOffering?.imageSrc}`} alt="symbol" className='object-contain aspect-square max-h-72' />
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
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Rolling Stock Services Offerings</h1>
          <div className='h-full w-full relative -left-1/2 flex justify-center items-center'>

            {medicalServiceOfferings.map((data: any, index: number) => {
              return (
                <div className={`h-[20vh] w-[20vh] border-4 rounded-full absolute z-1`} style={{ transformOrigin: "50vh", transform: `rotate(${360 / medicalServiceOfferings.length * index + 1}deg)` }}>
                  <div className='group/icon w-full h-full rounded-full bg-white' style={{ transform: `rotate(${-(360 / medicalServiceOfferings.length * index + 1)}deg)` }}>
                    <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Rolling Stock${data.imageSrc}`} className='h-full w-full rounded-full object-scale-down' />
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