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
  title: "Orthopaedic, Spine, and Trauma",
  points: [
    "Joint replacements - Knee, Hips, Ankle implants and instruments",
    "Spine - Thoracic, Lumber, Cervical, Pedicle Screw Systems, Interbody Devices, 3D printed implants",
    "Trauma - Plates, Screws, MIS intruments",
    "Navigation systems - Surgical Robots, Surgery Navigation Software Systems"
  ],
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-modern-hospital-physical-therapy-patient-with-injury-walks-wearing-advanced-robotic-exoskeleton-2029416683.jpg`
},
 
{
  title: "Cardiovascular and Radiology",
  points: [
    "Cardiac Rhythm Management (CRM) - pacemaker and defibrillators",
    "Patient Monitors Systems",
    "Heart Valves, and Stents",
    "Perfusion Packs and Urology",
    "Heart lungs machine and Oxygenator",
    "X-ray, MRI, and Ultrasound Systems",
    "Hospital Beds, Physiotherapy Systems",
    "Ophthalmic and ENT Products"
  ],
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-modern-hospital-physical-therapy-patient-with-injury-walks-wearing-advanced-robotic-exoskeleton-2029416683.jpg`
},
{
  title: "In-vitro Diagnostics",
  points: [
    "Transfusion Medicine",
    "Immunodiagnostic System",
    "Chemistry System",
    "Remote Patient Monitoring",
    "Laboratory Automation & IT",
    "Point of Care Diagnostics",
    "Molecular Diagnostics",
    "Clinical Chemistry"
  ],
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-modern-hospital-physical-therapy-patient-with-injury-walks-wearing-advanced-robotic-exoskeleton-2029416683.jpg`
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
    title: "Quality Management System",
    content: [
      "Adapt or build a new quality management system",
      "DHF, RMF, Technical FIle Remediation",
      "Implementation or upgrade of systems to comply with ISO 13485:2016, FDA 21 CFR 820, and EU MDR",
      "Outline how to review and improve processes across your organization",
      "Compliance to ISO 14971, ISO 62304, IEC 60601 4th Edition"
    ],
    imageSrc:"Medical Kit.svg"
  },
  {
    title: "Design Quality Services",
    content: [
      "Identification of critical characteristics in the design",
      "Train and provide clarification on QMS to the engineering and manufacturing team",
      "Responsibility in completing a risk assessment and FMEA",
      "Development of Measurement System Analysis (MSA) for the best inspection ",
      "methodology",
      "Traceability Matrix",
      "Risk Management File (RMF)",
      "Design Input/Output and Design Transfer"
    ],
    imageSrc:"Medical Kit.svg"
  },
  {
    title: "Supplier Quality Services",
    content: [
      "Responsible for Supplier Corrective Action Reports (SCAR)",
      "Improve supplier-related metrics including on-time delivery and better FPY",
      "Execute processes like 8D and root cause analysis",
      "Ensure proper documentation including pFMEA, risk analysis, and process capability",
      "Perform periodic supplier audits",
      "Notified Body(NB) Audits",
      "Coordinate between R&D and Supplier",
      "Supplier Validation Processes "
    ],
    imageSrc:""
  },
  {
    title: "Global Regulatory Strategy Services",
    content: [
      "Global Regulatory assessment, planning, and strategy",
      "Traditional and special 510(k), Pre-Market Approval (PMA) preparation and submission",
      "Design Dossier preparation",
      "FDA, Notified Body, and ISO 13485 registrar audit preparation and participation",
      "Supplier and Internal Audits",
      "Design Controls implementation and completion of Design History Files",
      "Clinical Evaluation Reports",
      "Medical Device Reporting and Vigilance Reporting",
      "Labeling and Instructions for Use",
      "Promotional literature assessments including surgical techniques, brochures, and websites",
      "Remediation resulting in audits or inspections",
      "Training and Mentoring",
      "Due Diligence and Integration Planning"
    ],
    imageSrc:""
  },
  {
    title: "MDR/IVDR Tech Files Services",
    content: [
      "Summary technical documentation (STED) files as per EU IVDR (2017/746) and EU MDR (2017/745), Manufacturer’s Incident Reports (MIR), and field safety actions and notices, and device-specific vigilance reporting per MEDDEV 2.12-1 rev. 8",
      "Notified Body selection",
      "Labeling and Instructions for Use",
      "Medical Device Reporting and Vigilance Reporting",
      "Manage compliance strategy and risks",
      "Develop and sustain a competitive advantage",
      "Protect your brand",
      "Our consultants can temporarily be an extension of your team to manage regulatory compliance issues",
      "Minimize business impacts such as loss of sales, product recall, and obsolete inventory",
      "Support reporting incidents and field actions",
      "Summary of Post Market Surveillance"
    ],
    imageSrc:""
  },
  {
    title: "CER and PER Services",
    content: [
      "Clinical Evaluation Reports and Literature Reviews per MEDDEV 2.7.1 revision",
      "MAUDE search and analysis",
      "State of art development",
      "IVDR Gap Assessment",
      "Risk and benefit analysis",
      "Expertise in PubMed, Embase, Google Scholar, and other popular databases",
      "Performance Evaluation Report (PER) Article 56 of the IVDR with focus on all three elements: scientific validity, analytical performance, and clinical performance",
      "Extensive experience in various segments including Pathology, Chemistry and Immunodiagnostics, Transfusion Medicine",
      "Technical writing of clinical documents like Analytical Performance reports, Clinical Performance reports, and Scientific Validity reports"
    ],
    imageSrc:""
  },
  {
    title: "Post Market Clinical Follow-up (PMCF)",
    content: [
      "PMCF Plan per EU MDR",
      "PMCF Survey Plan development",
      "Development of questionnaires",
      "Scoping of the survey",
      "Determine suitable endpoints",
      "Delivery of electronic survey using the proprietary tool - FastPMCF™",
      "Determine feasibility of survey execution",
      "Sample size calculations and statistical justification",
      "Assist in communication with Notified Body",
      "Data analysis and reporting"
    ],
    imageSrc:""
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
    imageSrc:""
  },
  {
    title: "EU IVDR",
    content: [
      "Regulatory strategy to transition to IVDR",
      "Gap analysis of the IVDR GSPR compliance",
      "Compilation of the technical file / STED",
      "Scientific Validity Reports",
      "Clinical Performance Reports",
      "Performance Evaluation Reports",
      "Writing/revising other documents such as package insert/IFU",
      "Quick Reference Instructions (QRI) and operation/user manual",
      "Post Market Performance Follow up (PMPF) protocols and Reports",
      "Post Market Surveillance (PMSR) Protocols and Reports",
      "Vigilance Reporting as per Article 82 of the IVDR"
    ],
    imageSrc:""
  },
  {
    title: "EU MDR",
    content: [
    "EU MDR - GAP Assessment",
    "CE Certification Strategy",
    "Notified Body support",
    "Virtual MDR training",
    "Identifying the submission process in Europe",
    "Clinical Evaluation Report (CER)",
    "Post Market Clinical Follow-up (PMCF)",
    "Summary Technical Documentation (STED) creation and development",
    ],
    imageSrc:""
  },
  {
    title: "Post Market Surveillance",
    content: [
      "Complaint Handling: Complaint Review",
      "Complaint Investigation",
      "Determination of CAPA if needed",
      "Root-Cause Analysis",
      "Response to Complaint",
      "Complaint Closure",
      "Adverse Event Reporting: Vigilance Reporting",
      "Trend Reporting",
      "Field safety corrective actions",
      "Field safety notice",
      "CAPA: Problem Identification",
      "Root Cause Analysis",
      "Corrective and Preventive Action Plan",
      "Verification of Implementation",
      "Closure"
    ],
    imageSrc:""
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
          <div className="h-full absolute w-full left-0 text-9xl text-white flex justify-center items-center p-36 font-semibold text-center">Improving lives through medical technology</div>
        </div>
        
        <img className="h-full w-full object-cover brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/Landing.png`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
          Medical Device Technologies
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
        <h1 className="text-white text-6xl text-center font-semibold">Medical Device Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={data.imageSrc} />
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
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
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
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/Medical Kit.svg`} alt="symbol" className='h-full w-full' />
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
      {/* <div aria-label="discover more section" className="min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')] py-24">
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