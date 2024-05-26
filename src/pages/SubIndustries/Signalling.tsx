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
  title: "Railway Signaling Systems:",
  points: [
    "Design, Development, and Implementation: Specializing in crafting cutting-edge signaling systems tailored precisely to the needs of railway networks.",
    "Range of Solutions: From traditional block signaling to advanced Positive Train Control (PTC) systems, our solutions prioritize safety, reliability, and efficiency.",
    "Optimization: Our systems optimize train movements, enhancing safety and reliability while streamlining operations for maximum efficiency."
  ],
  imageSrc: "railway.png"
},
 
{
  title: "Digital Signal Processing",
  points: [
    "Leveraging Technology: Harnessing the power of digital signal processing to revolutionize railway signaling systems.",
    "Enhanced Accuracy: Implementation of sophisticated algorithms and predictive analytics for improved signal detection, classification, and processing capabilities.",
    "Responsiveness: Digital signal processing technologies ensure heightened responsiveness and accuracy in signaling operations."
  ],
  imageSrc: "Digital.png"
},
{
  title: "Consulting and Advisory Services",
  points: [
    "Strategic Guidance: Navigating the complexities of signaling engineering with comprehensive consulting and advisory services.",
    "Expert Assessment: Seasoned consultants provide in-depth assessments, strategic recommendations, and implementation support.",
    "Operational Excellence: Helping railway operators optimize signaling infrastructure, meet regulatory requirements, and drive operational excellence through strategic guidance and support."
  ],
  imageSrc: "MRO.jpg"
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
    title: "Signal Design and Implementation",
    content: [
      "End-to-end signal design and hardware integration.",
      "Tailored solutions for specific project needs.",
      "Collaboration for seamless integration and compliance.",
      "Embrace innovation for enhanced safety and efficiency."
    ],
    imageSrc:"Embedded.svg"
  },
  {
    title: "System Integration and Testing",
    content: [
      "Comprehensive integration and rigorous testing.",
      "Validation of functionality, interoperability, and safety.",
      "Expertise across hardware, software, and protocols.",
      "Continuous improvement and adoption of best practices."
    ],
    imageSrc:"TechPub.svg"
  },
  {
    title: "Maintenance and Support",
    content: [
      "Proactive maintenance to minimize downtime.",
      "Remote monitoring for early issue detection.",
      "Rapid response teams for quick resolutions.",
      "Performance optimization for peak reliability."
    ],
    imageSrc:"Manufacturing.svg"
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
          <div className="h-full absolute w-full left-0 text-9xl text-white flex justify-center items-center p-36 font-semibold text-center">Navigating Railways with Advanced Signalling Solutions</div>
        </div>
        
        <video  
                  
                  className="h-full w-full object-cover brightness-50"
                  autoPlay={true}
                  loop
                  playsInline
                  muted
                >
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling/Landing.mp4`} type="video/mp4" />
                </video>
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
          Engineering the Signals
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        In the realm of Rail Transportation, signaling engineering stands as a crucial component ensuring the safety, efficiency, and reliability of railway systems. It encompasses the design, implementation, and maintenance of signaling systems that facilitate seamless operations and safeguard passengers and cargo.
        <br/>
        <br/>
        Signaling engineering serves as the backbone of railway safety and efficiency. It ensures precise control over train movements, mitigates the risk of accidents, and optimizes traffic flow along railway networks. In the dynamic landscape of rail transportation, signaling engineering plays a pivotal role in modernizing infrastructure, enhancing capacity, and meeting evolving safety standards.
          </p>
        </div>
        <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        At Saraca, we are dedicated to advancing the field of signaling engineering with innovative solutions tailored to the needs of railway operators and stakeholders. Our team of experts leverages cutting-edge technologies and industry best practices to deliver transformative signaling solutions that elevate safety, efficiency, and operational performance across railway networks.
        </p>
        </div>
       
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Signalling Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling/`+data.imageSrc} />
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
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Rolling Stock/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh]  w-full flex justify-center items-center relative my-24'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2]  transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
          <h1 className='container text-black text-5xl text-center mx-auto relative'>Signalling Services Offerings
            <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
              <i className="fa-solid fa-circle-left"></i>
              back
            </div>

          </h1>
          <div className='flex gap-16 constainer justify-center items-center min-h-24'>
            <div className='h-full'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling/${selectedServicesOffering?.imageSrc}`} alt="symbol" className='object-contain aspect-square max-h-72' />
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
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Signalling Services Offerings</h1>
          <div className='h-full w-full relative -left-1/2 flex justify-center items-center'>

            {medicalServiceOfferings.map((data: any, index: number) => {
              return (
                <div className={`h-[20vh] w-[20vh] border-4 rounded-full absolute z-1`} style={{ transformOrigin: "50vh", transform: `rotate(${360 / medicalServiceOfferings.length * index + 1}deg)` }}>
                  <div className='group/icon w-full h-full rounded-full bg-white' style={{ transform: `rotate(${-(360 / medicalServiceOfferings.length * index + 1)}deg)` }}>
                    <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling/${data.imageSrc}`} className='h-full w-full rounded-full object-scale-down' />
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