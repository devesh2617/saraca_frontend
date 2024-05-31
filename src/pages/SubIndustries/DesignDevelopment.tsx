// import { useState } from 'react';
// import DiscoverMoreCards from '../../components/DiscoverMoreCards';
// import IndustryCards from "../../components/IndustryCards";
// import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";
// type medicalCardsData = {
//   title: string,
//   points: string[],
//   imageSrc: string
// }

// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

// type ServicesOfferingsData = {
//   title: string,
//   content: string[]
// }

// const medicalCardsData = [{
//   title: "Avionics",
//   points: [
//     "Communications",
//     "Navigations",
//     "Monitoring",
//     "Flight Control System",
//     "Fuel Management Systems",
//     "Flight Recorders",
//     "Aircraft Management Systems",
//     "RADAR/Surveillance",
//     "Aircraft networks",
//     "Mission Computer",
//     "Power Control Systems"
//   ],
//   imageSrc: "Avionics.png"
// },

// {
//   title: "Exteriors",
//   points: [
//     "Landing Gears",
//     "Doors and Actuations",
//     "Hydraulics",
//     "Lighting Systems",
//     "Aerostructures"
//   ],
//   imageSrc: "Digital.jpg"
// },
// {
//   title: "MRO",
//   points: [
//     "Aircraft Maintenance",
//     "Aircraft Repair",
//     "Assembly/Disassembly",
//     "Inspection",
//     "Process Improvement",
//     "Quality Control/Assurance",
//     "Manufacturing Engineering"
//   ],
//   imageSrc: "MRO.jpg"
// },
// {
//   title: "Digital",
//   points: [
//     "Data Analyst",
//     "Application Development",
//     "Hybris Development"
//   ],
//   imageSrc: "Digital.jpg"
// },
// {
//   title: "Interiors",
//   points: [
//     "Seating System",
//     "Lighting System",
//     "Video Systems",
//     "Harness and Cabling",
//     "Overhead Structures",
//     "Evacuation Systems",
//     "Technical Publications"
//   ],
//   imageSrc: "Interiors.png"
// }]

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
    title: "SoC/IP Functional Verification",
    imageSrc: "137.jpg"
  },
  {
    title: "ARM Cortex series Processor Verification",
    imageSrc: "138.jpg"
  },
  {
    title: "Analog Mixed-Signal Verification",
    imageSrc: "139.jpg"
  },
  {
    title: "IP Development and Verification",
    imageSrc: "140.jpg"
  },
  {
    title: "EDA Tool Validation",
    imageSrc: "141.jpg"
  },
  {
    title: "FPGA Device Selection",
    imageSrc: "142.jpg"
  },
  {
    title: "ASISC Prototyping",
    imageSrc: "143.jpg"
  },
  {
    title: "Synthesis & Optimization",
    imageSrc: "144.jpg"
  },
  {
    title: "SOC Integration",
    imageSrc: "145.jpg"
  },
  {
    title: "Functional Verification",
    imageSrc: "146.jpg"
  },
  {
    title: "FPGA Accelerator Implementation",
    imageSrc: "147.jpg"
  },
  {
    title: "FPGA Validation",
    imageSrc: "148.jpg"
  }
]


const TrendingTechnologiesCards = (data) => {
  return (
      <div className='w-48 group'>
          <div className='h-48 w-48 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/ASICFPGADesignDevelopment/${data.imageSrc}`} className=' w-full h-full rounded-full object-cover' alt="" />
          </div>
          <h6 className='text-md text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300'>{data.title}</h6>
      </div>
  )
}


const Medical = () => {
  // const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  // const handleSelect = (data: ServicesOfferingsData) => {
  //   setSelectedServicesOffering(data)
  // }
  return (
    <div>
      <div aria-label='landing-image' className="h-[100vh] w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 text-9xl text-white flex justify-center items-center p-36 font-semibold text-center">Expert ASIC/FPGA Design for Every Industry</div>
        </div>

        <img className="h-full w-full object-cover brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/ASICFPGADesignDevelopment/Landing.jpg`} />

      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
          <h1 className='text-5xl font-semibold text-center pb-24'>
            ASIC/FPGA
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            We specialize in assisting clients across various sectors, including AI-driven data centres, aerospace, automotive, networking, consumer electronics, industrial, medical, and IoT.
            Our team excels in digital and mixed-signal ASIC design, as well as FPGA-SoC development, catering to the growing demand for high-performance, low-power consumption, and compact form-factor designs. We leverage our strong expertise in mixed-signal solutions, covering design, verification, physical design, and validation, to deliver cutting-edge designs even at lower geometry nodes.
            With a proven track record, we have successfully taped-out over 250+ silicon designs, ranging from mature 180nm processes to cutting-edge 3nm and beyond. We take pride in being the first engineering services company to achieve tape-out at the revolutionary 7nm and 10nm nodes.
          </p>
        </div>
      </div>

      {/* <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Aerospace Segments</h1>
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
                <div className="container flex flex-wrap justify-center gap-8 items-start mt-24 mx-auto">
                    {ServiceOfferings.map((data) => TrendingTechnologiesCards(data))}
                </div>
</div>
      {/* <div aria-label="Our Service Offerings" className="my-24 flex flex-col gap-12">
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
      </div> */}
      {/* <div aria-label='medical-device-service-offerings' className='min-h-[15=20vh]  w-full flex justify-center items-center relative my-24'>
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