import { useState, useEffect } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import {Helmet} from "react-helmet"
import IndustryCards from "../../components/IndustryCards";
import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';
type medicalCardsData = {
  title: string,
  points: string[],
  imageSrc: string
}

type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string,
  type: string
}

const discoverMoreIds = ['161b5837-358a-41b3-abb2-b5d6bab12afd',
  'fb7f8e28-d102-47f1-ad78-ae341a73f8f7',
  'cc8926ae-b731-4871-9ed5-e84eecfa8d81',
  '72ecb3f0-83a2-4bb7-97bb-4c80ee0981a7',
  '340b28eb-9740-41e0-8d92-170fd1919cb2',
  '3282c363-f1aa-4f5a-bc3a-a839f2b245d2',
  'eb86034c-2f28-4098-b89d-5d714fca17b3'
]

// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

// type ServicesOfferingsData = {
//   title: string,
//   content: string[]
// }

const medicalCardsData = [{
  title: "Cardiovascular Devices",
  points: [],
  imageSrc: "Cardiovascular Devices.webp"
},
 
{
  title: "Ear, Nose, and Throat Devices",
  points: [],
  imageSrc: "Ear, Nose, and Throat Devices.webp"
},
{
  title: "Neurological Devices",
  points: [],
  imageSrc: "Neurological Devices.webp"
},
{
  title: "Ophthalmic Devices",
  points: [],
  imageSrc: "Ophthalmic Devices.webp"
},
{
  title: "Orthopaedic Devices",
  points: [],
  imageSrc: "Orthopaedic Devices.webp"
},
{
  title: "Radiology Devices",
  points: [],
  imageSrc: "Radiology Devices.webp"
},
{
  title: "Maxillofacial Devices",
  points: [],
  imageSrc: "Maxillofacial Devices.webp"
},
{
  title: "Sterile & non-sterile devices",
  points: [],
  imageSrc: "Sterile & non-sterile devices.webp"
},
{
  title: "In-vitro Diagnostic Devices",
  points: [],
  imageSrc: "In-vitro Diagnostic Devices.webp"
}
]

// const DiscoverMoreCardsData = [{
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//   link: "#"
// },
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//   link: "#"
// },
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//   link: "#"
// }]


const ServiceOfferings = [
  { 
    title: "Mechanical Design",
    content: [
      "Design of implants, instruments and electro-mechanical equipment",
      "Design of Orthopaedic, Cardiovascular, In-vitro diagnostic and automated medical systems",
      "3D part and assembly modelling",
      "2D drawing development",
      "GD&T and tolerance stack-up",
      "Structural, Thermal and CFD analysis for Medical Devices",
      "Prototyping"
    ],
    imageSrc: "40.webp"
  },
  {
    title: "Electronics Design",
    content: [
      "Electronics design for medical device applications",
      "Analog and digital design",
      "Microcontroller and Microprocessor based design",
      "SOC/SOM, IOT & Sensor based medical device design",
      "USB, Ethernet, CAN, Bluetooth, Wi-fi, UART, I2C",
      "Multilayer PCB design & development",
      "RoHS, REACH and EMI/EMC Compliance support",
      "Prototyping"
    ],
    imageSrc: "41.webp"
  },
  {
    title: "Embedded Software",
    content: [
      "MCU/MPU: Renesas, NXP, STM, Infineon, Nvidia, Cypress, Qualcomm, Intel",
      "OS: MICROSAR, Linux, QNX, OSEK, VX works, FreeRTOS, Green Hills",
      "Protocols: J1939, CAN-FD, LIN, UDS, MOST, Flexray, BLE, Ethernet, Automotive Ethernet, MODBUS, LVDS",
      "Languages: Embedded C, C++, Python, JAVA, Dart",
      "Standards: ISO 62304, IATF 16949, ASPICE, MISRA-C",
      "Driver Development: I/O, CAN, LIN, BLE, Crypto drivers, NVM, DMA, Sensors – Temperature, Pressure, Level, Proximity, J1939, Ethernet"
    ],
    imageSrc: "42.webp"
  },
  {
    title: "Quality Assurance",
    content: [
      "Adapt or build a new quality management system to comply with ISO 13485, FDA 21 CFR 820, and EU MDR",
      "Risk Management per ISO 14971",
      "Gap analysis & Remediation of DHF, Technical File and Risk Management File",
      "Compliance to ISO 62304, IEC 60601 for Medical Software Development and Electrical safety",
      "Post-Market Quality support – NC, CAPA, Complaint handling etc.",
      "Verification & Validation support",
      "Manufacturing Process development and design transfer support",
      "Supplier and Internal Audits"
    ],
    imageSrc: "43.webp"
  },
  {
    title: "Clinical Evaluation Report (CER)",
    content: [
      "Clinical Evaluation Plan",
      "Literature Search",
      "Clinical background, Current knowledge and State of the Art",
      "Integrating PMS data",
      "Integrating Risk management data",
      "Benefit risk analysis",
      "Compilation and conclusion of CER",
      "Support until document approval by notified body"
    ],
    imageSrc: "44.webp"
  },
  {
    title: "Performance Evaluation Report (PER)",
    content: [
      "Performance Evaluation Plan (PEP)",
      "Performance Evaluation Report (PER)",
      "Scientific Validity Report (SVR)",
      "Analytical Performance Report (APR)",
      "Clinical Performance Report (CPR)",
      "Tech File Submission and Review",
      "IVDR Readiness Audits and Mock Audits",
      "Gap Assessments in the existing PER"
    ],
    imageSrc: "45.webp"
  },
  {
    title: "Post Market Surveillance",
    content: [
      "Complaint Handling: Complaint Review, Complaint Investigation, Determination of CAPA if needed, Root-Cause Analysis, Response to Complaint, Complaint Closure",
      "Adverse Event Reporting: Vigilance Search & Reporting, Trend Reporting, Field safety corrective actions, Field safety notice",
      "CAPA: Problem Identification, Root Cause Analysis, Corrective and Preventive Action Plan, Verification of Implementation, Closure"
    ],
    imageSrc: "Post Market Surveillance.webp"
  },
  {
    title: "Software Quality Assurance",
    content: [
      "Quality support for Software (NPD) DHF documentation per IEC 62304",
      "Software Risk Assessment",
      "Quality support for Software V&V",
      "Documentation preparation and review",
      "Quality support throughout phase gate process"
    ],
    imageSrc: "46.webp"
  },
  {
    title: "Regulatory Affairs Consulting",
    content: [
      "Global Regulatory assessment, planning, and strategy",
      "Traditional and special 510(k), Pre-Market Approval (PMA) preparation and submission",
      "Medical Device Reporting and Vigilance Reporting",
      "Labelling and Instructions for Use",
      "Remediation resulting in audits or inspections"
    ],
    imageSrc: "47.webp"
  },
  {
    title: "EU MDR & EU IVDR",
    content: [
      "MDD to MDR Gap Assessment and transition",
      "Device Classification per EU MDR",
      "Development & remediation of STED",
      "GSPR Compliance",
      "Clinical Evaluation Report (CER)",
      "Post Market Clinical Follow-up (PMCF)",
      "Periodic Safety Update Report (PSUR)",
      "Summary of Safety and Clinical Performance (SSCP)",
      "Vigilance search & reporting"
    ],
    imageSrc: "EU IVDR.webp"
  },
  {
    title: "EU IVDR",
    content: [
      "IVDD to IVDR Gap Assessment and transition",
      "Development & remediation of STED",
      "GSPR Compliance",
      "Scientific Validity Reports",
      "Clinical Performance Reports",
      "Performance Evaluation Reports (PERs)",
      "Post Market Performance Follow up (PMPF)",
      "Post Market Surveillance (PMS) Protocols and Reports",
      "Vigilance Reporting as per Article 82 of the IVDR",
      "Package insert/IFU"
    ],
    imageSrc: "EU IVDR.webp"
  }
];

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
      <title>Medical Devices Technologies | Life Sciences</title>
        <meta property="og:title" content="Medical Devices Technologies | Life Sciences" />
        <meta name="description" content="Medical Device Industry is going through a major shift in terms of technology advancement with the adoption of Software Technologies in the devices and frequent changes in global regulations and international standards." />
        <meta name="keywords" content="Medical Devices Technologies, Mechanical Design, Electronics Design, Embedded Software, Quality Assurance, Clinical Evaluation Report, CER, Performance Evaluation Report, PER, Post Market Surveillance, PMS, Software Quality Assurance, SQA, Regulatory Affairs Consulting, RA, EU MDR & EU IVDR, IVDR" />
        <meta property="og:description" content="Medical Device Industry is going through a major shift in terms of technology advancement with the adoption of Software Technologies in the devices and frequent changes in global regulations and international standards." />
        <meta property="og:keywords" content="Medical Devices Technologies, Mechanical Design, Electronics Design, Embedded Software, Quality Assurance, Clinical Evaluation Report, CER, Performance Evaluation Report, PER, Post Market Surveillance, PMS, Software Quality Assurance, SQA, Regulatory Affairs Consulting, RA, EU MDR & EU IVDR, IVDR" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 lg:text-9xl md:text-5xl text-2xl text-white flex justify-center items-center p-36 font-semibold text-center">Improving lives through medical technology</div>
        </div>
        
        <img className="h-full w-full object-cover brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/MedicalDevices/Landing.webp`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
          Medical Device Technologies
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        Medical Device Industry is going through a major shift in terms of technology advancement with the adoption of Software Technologies in the devices and frequent changes in global regulations and international standards.
        <br />
        <br />
We, at Saraca Solutions, have always been advancing along with industry trends and have evolved with resolving the challenges being faced by the industry.
        </p>
        </div>
        <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        We bring a unique value to our medical device customers with integrated capabilities in Product engineering as well as Quality Assurance, Regulatory & Clinical Affairs. Our engineering capabilities span across mechanical design, electronics design & embedded software with an experience across several therapeutic areas.
        </p>
        </div>
       
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Medical Device Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/MedicalDevices/${data.imageSrc}`} />
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
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/MedicalDevices/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        </div>   
      </div>

      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh] w-full flex justify-center items-center relative'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2] transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
          <h1 className='container text-black font-semibold text-5xl text-center mx-auto relative'>Medical Devices Services Offerings
            <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
              <i className="fa-solid fa-circle-left"></i>
              back
            </div>

          </h1>
          <div className='flex gap-16 constainer justify-center items-center mt-24 min-h-24'>
            <div className='h-full'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/Medical Kit.webp`} alt="symbol" className='h-full w-full' />
            </div>
            <p className='text-8xl'>
              {selectedServicesOffering && selectedServicesOffering.title}
            </p>
          </div>
          <div className='container mx-auto mt-16'>
            {selectedServicesOffering && selectedServicesOffering.content.map((data: string, index: number) => <li key={index} className='text-2xl p-4 text-gray-600'>{data}</li>)}
          </div>
          </div>
        </div>
        <div className={`h-[80vh] w-[80vh] rounded-full ${selectedServicesOffering ? "hidden" : "relative"}`} >
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Medical Devices Services Offerings</h1>
          <div className='h-full w-full relative -left-1/2 flex justify-center items-center'>

            {medicalServiceOfferings.map((data: any, index: number) => {
              return (
                <div className={`h-[15vh] w-[15vh] border-2 rounded-full absolute z-1`} style={{ transformOrigin: "47.5vh", transform: `rotate(${360 / medicalServiceOfferings.length * index + 1}deg)` }}>
                  <div className='group/icon w-full h-full rounded-full bg-white' style={{ transform: `rotate(${-(360 / medicalServiceOfferings.length * index + 1)}deg)` }}>
                    <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/${data.imageSrc}`} className='h-full w-full rounded-full object-scale-down' />
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
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} type={data.type} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Medical