import { useState,useEffect } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
// import IndustryCards from "../../components/IndustryCards";
import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';

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

const ServiceOfferings_Electrical = [
  {
    title: "Electrical Design and Documentation",
    content: [
      "Saraca offers design and documentation services for both high and low voltage electrical systems",
      "<strong>Design Structures & Documentation:</strong> Transitioning electrical designs and documents to AutoCAD and ETAP platforms"
    ],
    imageSrc:`Electrical Design.webp`
  },
  {
    title: "Electrical and Instrumentation Solutions",
    content: [
      "Our services provide optimized solutions for improved performance and reduced operational costs:",
      "<strong>Feasibility Studies & Design:</strong> Front-end engineering, design, HAZOP, and HAZID studies for enhanced project outcomes."
    ],
    imageSrc:`Electrical & Instrumentation.webp`
  },
  {
    title: "PCB Design and Development",
    content: [
      "We offer comprehensive PCB design and development services including:",
      "<strong>Prototyping & Testing:</strong> PCB prototyping, design & testing for reliable electronic components"
    ],
    imageSrc:`PCB Design.webp`
  }
]
const CivilGround = [
  {
    title: "Structural Engineering Services",
    content: [
      "We provide specialized structural engineering services addressing complex challenges:",
      "<strong>Structural Assessments & Analysis:</strong> Advanced assessments, failure analysis, and structural engineering solutions."
    ],
    imageSrc:`Structural Engineering services.webp`
  },
  {
    title: "Asset & Facility Management",
    content: [
      "Saraca’s asset management services ensure efficient lifecycle management of oil and gas facilities:",
      "<strong>Asset Creation & Maintenance:</strong> Structured methods for asset creation, operation, maintenance, and decommissioning."
    ],
    imageSrc:`Asset.webp`
  }
]
const ServiceOfferings = [
  {
    title: "CAD Modeling and Drafting services",
    content: [
      "We employ 3D CAD software to produce accurate 3D models from diverse data sources including:",
      "<strong>Drawings & Scanned Data:</strong> Transformation of 2D drawings and scan data into robust 3D CAD models.",
      "<strong>Site Surveys & Markups:</strong> Development of 3D models based on site surveys, engineering markups, and field data."
    ],
    imageSrc:`CAD Modeling and Drafting services.webp`
  },
  {
    title: "CAD Modeling Conversion",
    content: [
      "Our services facilitate the transformation of scanned engineering drawings, sketches, and PDFs into precise CAD formats compatible with a range of CAD software platforms. Our capabilities include:",
      "<strong>Accurate CAD Drawings:</strong> Conversion of legacy formats into detailed and reliable CAD models",
      "<strong>ISO Views & Fabrication Drawings:</strong> Generation of ISO views, fabrication drawings, and material nesting.",
      "<strong>Bill of Materials (BOM):</strong> Creation and management of comprehensive BOM for manufacturing and assembly processes."
    ],
    imageSrc:`CAD Modeling Conversion.webp`
  },
  {
    title: "Product Development",
    content: [
      "We provide end-to-end support for product development with a focus on precision and innovation:",
      "<strong>Design & Drafting:</strong> Comprehensive design services from conceptualization to detailed drafting.",
      "<strong>Prototyping:</strong> Development of functional prototypes for performance evaluation.",
      "<strong>Development & Testing:</strong> Complete product development lifecycle support, including testing and validation."
    ],
    imageSrc:`Product Development.webp`
  },
  {
    title: "Reverse Engineering",
    content: [
      "Our Reverse Engineering services utilize advanced techniques to create detailed 3D models from existing products:",
      "<strong>Detailed 3D Models:</strong> Generation of high-accuracy 3D models from physical objects.",
      "<strong>Parametric Models:</strong> Creation of parametric models for future design modifications and enhancements."
    ],
    imageSrc:`Reverse Engineering.webp`
  },
  {
    title: "Value Engineering",
    content: [
      "Saraca applies Value Engineering principles to optimize product designs for efficiency and cost-effectiveness:",
      "<strong>Design Optimization:</strong> Enhancement of design to simplify manufacturing processes and reduce production costs.",
      "<strong>Cost Reduction:</strong> Strategies for maintaining competitive product pricing while enhancing value."
    ],
    imageSrc:`Value Engineering.webp`
  },
  {
    title: "Piping and Instrumentation Diagrams (P&ID)",
    content: [
      "We offer world-class P&ID services including:",
      "<strong>Detailed P&ID Drawings:</strong> Creation of detailed P&ID diagrams incorporating symbols, attributes, and process information.",
      "<strong>Fast Turnaround:</strong> Efficient delivery of P&ID services within stipulated timeframes and budget constraints."
    ],
    imageSrc:`P&ID.webp`
  },
  {
    title: "Plant Engineering",
    content: [
      "We deliver multi-discipline engineering solutions for CAPEX-driven projects in the oil and gas sector:",
      "<strong>Intelligent Plant Design:</strong> Comprehensive plant design services including civil, mechanical, and piping engineering.",
      "<strong>Layout & Drafting:</strong> Detailed drafting and layout services for plant infrastructure and systems."
    ],
    imageSrc:`Plant Engineering.webp`
  },
  {
    title: "Point Cloud to CAD/P&ID Conversion",
    content: [
      "Our services utilize advanced technology to convert point cloud data into actionable CAD models:",
      "<strong>High-Tech Data Processing:</strong> Extraction of geometries from point cloud data for precise 3D modeling.",
      "<strong>P&ID Creation:</strong> Development of intelligent P&ID diagrams from complex point cloud datasets."
    ],
    imageSrc:`Point Cloud.webp`
  },
  {
    title: "Technical Publications",
    content: [
      "Saraca produces high-quality technical documentation and publications:",
      "<strong>Technical Specifications & Manuals:</strong> Creation of technical content including specifications, manuals, and 2D/3D animations.",
      "<strong>Content Management Systems:</strong> Development of systems for managing and updating technical documentation.",
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
    imageSrc:`Technical Publications.webp`
  },
  {
    title: "FEA and CFD Engineering services",
    content: [
      "We provide Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD) for comprehensive engineering services:",
      "<strong>Thermal & Mechanical Analysis:</strong> Detailed analysis of equipment performance under various conditions.",
      "<strong>Multi-Physics Simulation:</strong> Advanced simulations for assessing thermal, mechanical, fluid dynamics, etc."
    ],
    imageSrc:`FEA & CFD.webp`
  }
]
const Industry = () => {
  const [discoverMore, setDiscoverMore] = useState<DiscoverMoreCardsType[]>([])
  useEffect(()=>{
   getDiscoverMoreDataByIds(discoverMoreIds).then(
    res=>{
      setDiscoverMore(res.data.data)
    }
   ).catch(e=>console.log(e))
  },[])
  // const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  // const handleSelect = (data: ServicesOfferingsData) => {
  //   setSelectedServicesOffering(data)
  // }
  return (
    <div>
      <div aria-label='landing-image' className="h-[100vh] w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 text-8xl text-white flex justify-center items-center p-36 font-semibold text-center">
          Transforming Oil & Gas Engineering with Integrated Solutions for Efficiency, Safety, and Sustainability
          </div>
        </div>
        
        <img className="h-full w-full object-cover brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Industrial/OilGas/Landing.svg`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-6xl font-semibold text-center pb-24'>
          Oil & Gas 
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        We have expertise across product design, development, manufacturing, supply chain management, operations optimization, and asset integrity management. Our proficiency spans Mechanical, Electronics, Software, and Digital Technologies, enabling us to drive impactful business outcomes for equipment manufacturers and operators.
        <br/>
        <br/>
        In collaboration with our clients, Saraca supports digital transformation initiatives essential to modernizing the Oil & Gas sector. Our capabilities include Digital Oil Fields, Digital Manufacturing, Model-Based Design, Digital Twin implementation, Immersive Training, Predictive Maintenance, and employee safety enhancements. Using IoT, AI, ML, AR/VR, Cloud, and Data Analytics, we enable companies to improve operational efficiency, reliability, and safety compliance.
        <br/>
        <br/>
        In the face of escalating global energy demand and evolving environmental regulations, Saraca facilitates the transition towards cleaner energy solutions. We assist oil and gas companies in adopting Low Carbon Solutions, fostering business resilience, and driving positive environmental impacts. Our integrated approach integrates environmental stewardship with practical engineering solutions, supporting clients in making informed decisions that contribute to a sustainable future.      
          </p>
        </div>
        <div>
        <h1 className='text-5xl font-semibold text-center pt-20 pb-20'>
          {/* What We Serve */}
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        {/* we are committed to driving innovation and excellence in the aerospace industry. Here's how we contribute to our customers' success: */}
        1.<strong> Upstream:</strong> We specialize in optimizing asset utilization and enhancing worker safety through advanced digital technologies, enabling remote monitoring and process improvement. Our comprehensive solutions encompass complex issues such as startup/shutdown dynamics, emergency control, and overpressure protection for both onshore and offshore facilities. We excel in feasibility studies, design, and implementation, supporting clients from project inception through to sustainable operation and decommissioning. Saraca's commitment to environmental sustainability includes innovative solutions for site assessment, remediation, and reclamation, ensuring minimal impact and maximal operational reliability in extreme environments
        <br/>
        <br />
        2.<strong> Midstream:</strong> Saraca specializes in midstream Oil & Gas projects, offering design, engineering, and environmental services throughout the project lifecycle. With over a decade of experience, we focus on sustainable solutions that minimize environmental impact, including nature-based approaches and ground performance expertise.
        We provide strategic guidance for constructing infrastructure in challenging environments, ensuring environmental compliance and safety in populated areas. Our digital capabilities include remote surveillance, subsea monitoring, pipeline inspection, and commodity trading analytics, enhancing operational optimization and decision-making.
        Saraca supports midstream companies with managing pipelines, transport vessels, gas plants, and compression stations efficiently. We integrate trading operations into clients' systems to ensure operational efficiency and regulatory compliance.
        <br />
        <br />
        3.<strong> Downstream:</strong> We focus on refinery operations, asset integrity, and efficient maintenance planning. Our solutions ensure seamless coordination for maintenance, shutdowns, and start-ups, optimizing secondary product distribution and maximizing profitability through strategic storage and logistics.
        We provide agile solutions amid fluctuating oil prices and stringent regulations, empowering operators with data-driven insights for smarter decision-making. Saraca manages downstream operations comprehensively, from project inception to decommissioning, emphasizing environmental compliance and community impact mitigation
        {/*4.<strong>Quality and Compliance:</strong> We adhere to rigorous quality standards and regulatory requirements to ensure compliance with industry regulations and certifications, maintaining the highest levels of safety and reliability in our aerospace solutions.*/}
        </p>
        </div>
      </div>
      {/* <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Aerospace Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/`+data.imageSrc} />
            )
          })}
        </div>
      </div> */}
      <div aria-label="Our Service Offerings" className="my-24 container">
        <h1 className="text-5xl md:text-8xl text-black text-center font-semibold">
          Our Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-10">
        {ServiceOfferings.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Industrial/OilGas/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
         ))}
        </div>   
      </div>
      <div aria-label="Our Service Offerings" className="my-24 container">
        <h1 className="text-4xl md:text-7xl text-black text-center font-semibold">
        Electrical and Electronics Services for the Oil and Gas Industry
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-12">
        {ServiceOfferings_Electrical.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Industrial/OilGas/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
         ))}
        </div>   
      </div>
      <div aria-label="Our Service Offerings" className="my-24 container">
        <h1 className="text-4xl md:text-7xl text-black text-center font-semibold">
        Civil & Ground Services for the Oil and Gas Industry
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-12">
        {CivilGround.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Industrial/OilGas/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
         ))}
        </div>   
      </div>


      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh]  w-full flex justify-center items-center relative my-24'>
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

export default Industry