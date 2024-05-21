import { useState } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import IndustryCards from "../../components/IndustryCards";

type medicalCardsData = {
  title: string,
  points: string[],
  imageSrc: string
}

type DiscoverMoreCardsData = {
  imageSrc: string,
  link: string
}

type ServicesOfferingsData = {
  title: string,
  content: string[]
}

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

const DiscoverMoreCardsData = [{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
  link: "#"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
  link: "#"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
  link: "#"
}]


const medicalServiceOfferings = [
  {
    title: "Passenger Experience",
    content: [
      "Saraca provides a range of services, including consumer research, UI/UX design, AI, voice technology, extended reality, and transportation styling, to turn your vision into reality. Our experienced team has a wealth of expertise in collaborating with diverse clients to revolutionize the way individuals engage with their surroundings."
    ],
    imageSrc:"Embedded.svg"
  },
  {
    title: "Design and Styling",
    content: [
      "We offer design and styling consultation services to our clients, employing our comprehensive i-cube design approach, strong research skills, and end-to-end design and engineering capabilities—from concept to deployment."
    ],
    imageSrc:"TechPub.svg"
  },
  {
    title: "HW/SW Development and Testing",
    content: [
      "Hardware Development and Testing across the life cycle including ASIC/FPGA design and redesign activities for cost/component optimization",
      "Firmware Development",
      "User Interface (UI) Design",
      "3D modeling & rendering services and 3D product animation services",
      "Finite Element Analysis — FEA services",
      "Application Software Development/ porting/ integration",
      "Board Support Package(BSP) for a variety of processors like ARM and OS for Linux, VxWorks, Android, and FreeRTOS"
    ],
    imageSrc:"Manufacturing.svg"
  },
  {
    title: "Technical Documentation",
    content: [
      "Create or modify illustrations, CAD file to Illustration",
      "Raster to vector conversion; photo editing",
      "Creation of Electronic and Illustrated Parts catalogs",
      "Development of 3D Modelling and Animation",
      "Legacy conversion/archive of documents",
      "Language Translations",
      "Authoring new technical content on IFUs and related processes, including translation and version control management systems",
      "Production phase- Print, CD Proofing, and release"
    ],
    imageSrc:"Mechnaical.svg"
  },
  {
    title: "System Development",
    content: [
      "Software Development and Testing across the life cycle for a range of (sub-) system such as TCMS, HMI, displays, ATE/ATB, or simulators",
      "RAMS Services as per EN 50126, EN 50128, and EN 50129 standards, including PHA, FMECA, RCM, RGA, and safety planning",
      "Design and mock-up, analysis, and space management",
      "Integration including build support and change management across systems",
      "System Verification and Validation",
      "Product Certifications"
    ],
    imageSrc:"Software.svg"
  },
  {
    title: "Technical authoring and services engineering",
    content: [
      "Our comprehensive rail services engineering encompasses maintainability, technical authoring, and thorough spare parts management, providing improved outcomes without increasing capital expenditures and lowering maintenance costs."
    ],
    imageSrc:"Quality.svg"
  }
 
 
]
const Medical = () => {
  const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  const handleSelect = (data: ServicesOfferingsData) => {
    setSelectedServicesOffering(data)
  }
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
          Rolling Stock
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        The digital age presents opportunities to cut operating costs by embracing fully automated, driverless operations. This shift can enhance system availability, expand network capacity, and boost operational efficiency to address current challenges. Automation in driverless trains also allows for a further reduction in headways.
        <br/>
        <br/>
        As metro ridership continues to rise, train operators are exploring advanced signaling systems like CBTC to safely increase the throughput of existing networks. Additionally, technologies such as obstacle detection systems for trams and light rail vehicles, as well as wayside signal detection and processing for mainline operations, are being pursued to facilitate the move toward driverless operations.
          </p>
        </div>
        <div>
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
        </div>
       
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Rolling Stock Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Rolling Stock`+data.imageSrc} />
            )
          })}
        </div>
      </div>


      <div aria-label='medical-device-service-offerings' className='min-h-[15=20vh]  w-full flex justify-center items-center relative my-24'>
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