// import { useState } from 'react';
// import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import {Helmet} from "react-helmet"
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
  title: "Mainline Signalling",
  points: [
    "Trackside equipment (Automatic train protection, Level crossings, Point machines, track circuits, Axle counters)",
    "Interlocking 4.0 (Cloud interlocking, Integration with ERTMS, CBTC systems)",
    "Control centre solutions (Network management, HMI)",
    "Automatic train operation (ATO)"
  ],
  imageSrc: "5.jpg"
},
 
{
  title: "Freight & mining signalling",
  points: [
    "Point machines (Trailable, Non- trailable, Electro-hydraulic, Electro-mechanical)",
    "Train detection devices (Audio frequency, Speed code transition, Low frequency)",
    "Rail crossing protection system.",
    "Design for installation and maintenance",
    "Big data platform",
    "Algorithms for AI, ML, cyber security",
    "Connected technology."
  ],
  imageSrc: "6.jpg"
},
{
  title: "Urban Signalling",
  points: [
    "Communication-based train control (CBTC) system",
    "Automated people mover (APM)",
    "Driver control & assistance functions (CENELEC)",
    "Tram signalling system",
    "Light rail vehicle (LRV) signalling system",
    "Integrated control centre",
    "Optimised traffic management system."
  ],
  imageSrc: "7.jpg"
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
    title: "On-board equipment",
    content: [
      "FASTRAMS",
      "Technical Documentation (Maintenance and operational manuals, IPCs and IETM)",
      "Configuration management",
      "Wiring and electrical equipment design",
      "Mechanical component design",
      "Testing (Functional & non-functional)",
      "Prototyping",
      "Signalling software design & development",
      "DMI Test Automation"
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling/On-board Equipment.jpg`
  },
  {
    title: "Control Centres",
    content: [
     "Equipment design",
     "Verifying and validating applications and interfaces",
     "Customizing railway applications",
     "Designing and programming user interfaces (HMI)"
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling/Control Centres.jpg`
  },
  {
    title: "Rail Communications",
    content: [
      "Technical documentation handling",
      "Communication system management (passenger and assistant information system)"
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling/Rail Communications.jpg`
  },
  {
    title: "Research & Development",
    content: [
      "Verification & validation",
      "Control centres (ATS, CTC, local)",
      "Communication system",
      "Application & infrastructure",
      "Application design & development"
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling/Research & Development.jpg`
  },
  {
    title: "Software & Hardware Track System",
    content: [
      "Signalling solutions",
      "Configuration management",
      "Interlocking systems",
      "Design & installation of track equipment",
      "Hardware design development of interlocking systems"
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling/Software & Hardware Track System.jpg`
  }
 
]
const Medical = () => {
  // const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  // const handleSelect = (data: ServicesOfferingsData) => {
  //   setSelectedServicesOffering(data)
  // }
  return (
    <div>
       <Helmet>
        <title>Rail Signalling</title>
        <meta
          property="og:title"
          content="Rail Signalling"
        />
        <meta
          name="description"
          content="Saraca specializes in advanced engineering and R&D consulting for railway signalling systems, boasting over a decade of expertise from SIL0 to SIL4 classifications. Our comprehensive services encompass system integration, design-in, and application development, supporting clients through every stage of product lifecycle—from initial architecture and software design to final adaptation and configuration.

With a global footprint, our signalling team excels in planning, designing, testing, and commissioning for railway authorities worldwide. We deliver innovative, practical, and cost-efficient solutions that prioritize safety, operational efficiency, and client satisfaction. At Saraca, we are committed to enhancing railway systems with cutting-edge technologies such as Automatic Train Protection (ATP), Automatic Train Operation (ATO), and Automatic Train Supervision (ATS), ensuring safe and secure train journeys across urban and mainline networks.
"
        />
        <meta
          name="keywords"
          content="railway signalling engineering, SIL0 to SIL4 signalling systems, train control management systems (TCMS), system integration for railways, signalling application development, railway product development, Automatic Train Protection (ATP), Automatic Train Operation (ATO), Automatic Train Supervision (ATS), railway interlocking systems, cloud interlocking, ERTMS integration, CBTC systems, railway control centre solutions, signalling for freight and mining, point machines, train detection devices, railway communication systems, Communication-Based Train Control (CBTC), Automated People Mover (APM) signalling, tram signalling systems, railway traffic management systems, railway signalling prototyping, signalling software development, signalling system verification & validation, railway control centre design, railway communication system management, railway R&D consulting, railway signalling algorithms, railway big data platforms, AI and ML algorithms for railway, cyber security for railways, railway signalling equipment design, railway signalling documentation, railway signalling hardware development."
        />
        <meta
          property="og:description"
          content="Saraca specializes in advanced engineering and R&D consulting for railway signalling systems, boasting over a decade of expertise from SIL0 to SIL4 classifications. Our comprehensive services encompass system integration, design-in, and application development, supporting clients through every stage of product lifecycle—from initial architecture and software design to final adaptation and configuration.

With a global footprint, our signalling team excels in planning, designing, testing, and commissioning for railway authorities worldwide. We deliver innovative, practical, and cost-efficient solutions that prioritize safety, operational efficiency, and client satisfaction. At Saraca, we are committed to enhancing railway systems with cutting-edge technologies such as Automatic Train Protection (ATP), Automatic Train Operation (ATO), and Automatic Train Supervision (ATS), ensuring safe and secure train journeys across urban and mainline networks.
"
        />
        <meta
          property="og:keywords"
          content="railway signalling engineering, SIL0 to SIL4 signalling systems, train control management systems (TCMS), system integration for railways, signalling application development, railway product development, Automatic Train Protection (ATP), Automatic Train Operation (ATO), Automatic Train Supervision (ATS), railway interlocking systems, cloud interlocking, ERTMS integration, CBTC systems, railway control centre solutions, signalling for freight and mining, point machines, train detection devices, railway communication systems, Communication-Based Train Control (CBTC), Automated People Mover (APM) signalling, tram signalling systems, railway traffic management systems, railway signalling prototyping, signalling software development, signalling system verification & validation, railway control centre design, railway communication system management, railway R&D consulting, railway signalling algorithms, railway big data platforms, AI and ML algorithms for railway, cyber security for railways, railway signalling equipment design, railway signalling documentation, railway signalling hardware development."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute bg-gradient-to-r from-black to-transparent left-0 lg:text-9xl md:text-5xl text-2xl text-white flex justify-center items-end p-36 font-semibold text-left">Navigating Railways with Advanced Signalling Solutions</div>
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
        At Saraca, we have over a decade of expertise in engineering and R&D consulting for railway signalling, covering SIL0 to SIL4, train information, and train control management systems (TCMS). Our services include system integration, design-in, and application development. We support customers in product development, from architecture and software design to final adaptation and configuration.
        <br />
        <br />
Our signalling team has extensive experience in planning, design, testing, and commissioning for rail authorities worldwide. We offer innovative, practical, and cost-efficient solutions, ensuring high-quality service and successful project delivery. Safety is our top priority, and we consistently meet and exceed client expectations.
          </p>
        </div>
        <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        We enhance operational efficiency with features like Automatic Train Protection (ATP), Automatic Train Operation (ATO), and Automatic Train Supervision (ATS). Our projects span major cities and countries, providing solutions for new and existing rail systems. Saraca is a trusted partner for reliable and efficient railway signalling, ensuring safe and secure train journeys
        .        </p>
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
      <div aria-label="Our Service Offerings" className="my-24 container">
        <h1 className="text-5xl md:text-8xl text-black text-center font-semibold">
          Our Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-12">
        {ServiceOfferings.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={data.imageSrc}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        </div>   
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