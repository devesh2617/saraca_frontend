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
//   content: string[], 
//   imageSrc: string
// }

const medicalCardsData = [{
  title: "Additive Manufacturing",
  points: [
    "Leveraging cutting-edge additive manufacturing techniques, we facilitate the production of complex components and structures for space missions, revolutionizing the way spacecraft are designed and manufactured."
  ],
  imageSrc: "Additive.jpg"
},
 
{
  title: "Hypersonic Engineering",
  points: [
    "Our expertise in hypersonic engineering enables us to design and develop next-generation propulsion systems and vehicles capable of achieving unprecedented speeds, advancing the frontier of space exploration and travel."
  ],
  imageSrc: "Hypersonic.jpg"
},
{
  title: "Carbon and Carbon Fiber Joining",
  points: [
    "With a focus on lightweight and high-strength materials, we specialize in carbon and carbon fiber joining techniques, ensuring the integrity and durability of critical components in space missions, from rocket stages to satellite structures."
  ],
  imageSrc: "Carbon.jpg"
},
{
    title: "Data Science",
    points: [
      "Harnessing the power of data science, we extract actionable insights from vast volumes of space-related data, enabling informed decision-making, predictive analysis, and optimization of mission parameters for enhanced efficiency and success."
    ],
    imageSrc: "Data Science.jpg"
  },
  {
    title: "Advanced Automation",
    points: [
      "Our advanced automation solutions streamline manufacturing processes, payload integration, and mission operations, maximizing productivity, reducing costs, and minimizing human error in space exploration endeavors."
    ],
    imageSrc: "Advance Automation.jpg"
  },
  {
    title: "Battery and Fuel Cell Development",
    points: [
      "We spearhead the development of innovative battery and fuel cell technologies tailored to the demands of space missions, ensuring reliable power supply, energy storage, and propulsion for spacecraft and extraterrestrial habitats."
    ],
    imageSrc: "Battery & Fuel.jpg"
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
    title: "Mission Analysis",
    content: [
      "Planning a mission involves more than just developing a spacecraft. It also entails considering various aspects, including the disposal phase."
    ],
    imageSrc:"Mission.svg"
  },
  {
    title: "Thermal Analysis",
    content: [
      "A thorough thermal analysis is crucial and may prompt conceptual changes in your design. Therefore, it's advisable to address it from the outset."
    ],
    imageSrc:"Thermal.svg"
  },
  {
    title: "Power Analysis",
    content: [
      "A comprehensive power analysis is necessary to determine the appropriate number of solar cells and battery size required for your spacecraft. "
    ],
    imageSrc:"Powe.svg"
  },
  {
    title: "Space Systems Engineering",
    content: [
      "We can assist you in turning your mission concept into the final revision, enabling you to commence manufacturing your product and prepare for launch!"
    ],
    imageSrc:"Space systems.svg"
  },
  {
    title: "Formal Peer Reviews",
    content: [
      "Technical engineering peer reviews are crucial for ensuring the success of a mission. SARACA can join as a reviewer during your project milestones, offering expert feedback."
    ],
    imageSrc:"Peer.svg"
  },
  {
    title: "Structural and Stress Analysis",
    content: [
      "A thorough structural and stress analysis is essential to ensure your payload or spacecraft can withstand the harsh conditions imposed by launch vehicles, including bolt dimensioning."
    ],
    imageSrc:"Stress.svg"
  },
  {
    title: "Critical Software Development",
    content: [
      "Developing mission critical software differs from conventional embedded systems development. We can assist you in ensuring that you meet the highest standards or even develop the software for you."
    ],
    imageSrc:"Software.svg"
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
          <div className="h-full absolute w-full left-0 text-9xl text-white flex justify-center items-center p-36 font-semibold text-center">Engineering the Next Era of Space Exploration</div>
        </div>
        
        <img className="h-full w-full object-cover brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Space/Landing.jpg`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
           From Earth to the Cosmos
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        We are highly proficient at working within regulated environments such as those imposed by the U.S. FDA, EU MDR, EU IVDR, ISO13485, 21 CFR Part 820 Quality Management systems along with ISO14971 and IEC62304. Our skills include software development and testing, Embedded Hardware and Firmware, mechanical Design, developing Design Dossiers (DHF/Tech Files), 510(k) applications, CER, PER, STED, UDI implementation, Remediation of Class I, II, and III products, and CAPA Management.
        </p>
        </div>
        <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        We have expertise in implementation of complex new regulations, including the EU MDR and IVDR and creation of CERs and PERs and strong clinical practice supporting EU requirements, providing strategies and turnkey approach to completion of CERs, PERs, and PMS-related deliverables (PSUR, SSCP, PMCF/PMPF plans and reports, PMCF/PMPF surveys).
        has context menu.
        </p>
        </div>
       
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Space Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Space/`+data.imageSrc} />
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
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Space/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        </div>   
      </div>
      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh]  w-full flex justify-center items-center relative my-24'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2]  transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
          <h1 className='container text-black text-5xl text-center mx-auto relative'>Space Services Offerings
            <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
              <i className="fa-solid fa-circle-left"></i>
              back
            </div>

          </h1>
          <div className='flex gap-16 constainer justify-center items-center min-h-24'>
            <div className='h-full'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Space/${selectedServicesOffering?.imageSrc}`} alt="symbol" className='object-contain aspect-square max-h-72' />
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
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Space Services Offerings</h1>
          <div className='h-full w-full relative -left-1/2 flex justify-center items-center'>

            {medicalServiceOfferings.map((data: any, index: number) => {
              return (
                <div className={`h-[20vh] w-[20vh] border-4 rounded-full absolute z-1`} style={{ transformOrigin: "50vh", transform: `rotate(${360 / medicalServiceOfferings.length * index + 1}deg)` }}>
                  <div className='group/icon w-full h-full rounded-full bg-white' style={{ transform: `rotate(${-(360 / medicalServiceOfferings.length * index + 1)}deg)` }}>
                    <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Space/${data.imageSrc}`} className='h-full w-full rounded-full object-scale-down' />
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