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
  title: "Quality Assurance, QMS and Data Integration",
  points: [
    "Design quality including GMP and GDP",
    "Equipment qualification (IQ/OQ/PQ)",
    "Process validation (OSD/LD/SVP)",
    "Implementation of new regulations into existing QMS",
    "Preparation of external audit",
    "CAPA procedure management and risk management",
    "Investigation and root cause analysis (RCA)",
    "Internal and Lead Auditor",
    "ICH Q9: Quality Risk Management",
    "Regulatory Compliance per WHO, USFDA, SAHPRA, MHRA, TGA, Health Canada and EMEA"
  ],
  imageSrc: "QMS.png"
},

{
  title: "Regulatory Affairs",
  points: [
    "Global regulatory strategy",
    "Dossier gap analysis & remediation",
    "CMC writing & regulatory documentation review",
    "Compliance with ICH guidelines",
    "Regulatory dossier preparation and compilation for new product registration (CTD, ACTD)",
    "Computer system validation (CSV) per US FDA 21 CFR Part 11 and Canadian requirements",
    "Resolution for FDA 483"
  ],
  imageSrc: "Regulatory.png"
},
{
  title: "Quality Remediation and Compliance Verification",
  points: [
    "Revised QMS documents (Change control, Deviation, Investigation, OOS and CAPA procedure)",
    "Revised compliance verification procedure",
    "Gap assessment of current procedures with FDA requirements.",
    "Implementation of procedures and effectiveness verification",
    "Facility remediation",
    "Facility modification and documentation (HVAC qualification)",
    "Facility qualification and temperature mapping",
    "Aseptic technique SOP"
  ],
  imageSrc: "remedastion.png"
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
    title: "Conceptual Design and Feasibility Studies",
    content: [
      "From initial concept to feasibility analysis, we offer comprehensive services to help you define and refine your pharmaceutical projects with precision and foresight."
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharmaceuticals/Feasibility.jpg`
  },
  {
    title: "Process Engineering",
    content: [
      "Our team of seasoned engineers excels in designing, optimizing, and implementing pharmaceutical processes to ensure efficiency, compliance, and product integrity throughout the production lifecycle."
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharmaceuticals/Process.jpg`
  },
  {
    title: "Equipment Selection and Validation",
    content: [
      "Leveraging our expertise and industry insights, we assist in selecting the most suitable equipment and validating their performance to meet the stringent regulatory requirements of the pharmaceutical sector."
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharmaceuticals/Equipment.jpg`
  },
  {
    title: "Facility Design and Commissioning",
    content: [
      "Whether it's the design of a new facility or the renovation of an existing one, we provide end-to-end solutions for facility design, commissioning, and qualification to meet the highest standards of safety, functionality, and compliance."
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharmaceuticals/Facility.jpg`
  },
  {
    title: "Regulatory Compliance and Documentation",
    content: [
      "Stay ahead of regulatory challenges with our specialized services in compliance assurance and documentation management, ensuring that your pharmaceutical operations adhere to global regulatory standards."
    ],
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharmaceuticals/Regulatory.jpg`
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
          <div className="h-full absolute w-full lg:w-1/2 text-left left-0 lg:text-9xl md:text-4xl text-2xl  bg-gradient-to-r from-black to-transparent text-white flex justify-center items-center pl-36 font-semibold">Catalyzing Discovery: Engineering the Essence of Pharmaceuticals!</div>
        </div>

        <img
          className="h-full w-full object-cover"
          src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharmaceuticals/Pharma.jpg`}
        >

        </img>

      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
          <h1 className='text-5xl font-semibold text-center pb-24'>
            Pharmaceuticals
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            In this era of AI, pharmaceutical engineering plays a crucial role in optimizing processes, enhancing efficiency, and ensuring regulatory compliance throughout the drug development and manufacturing lifecycle. With the advent of advanced technologies such as artificial intelligence, data analytics, and automation, pharmaceutical companies have unprecedented opportunities to innovate and streamline their operations.
            <br />
            <br />
          </p>
        </div>
        <div>
          <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
            What We Do
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            At Saraca, we are committed to driving progress in the pharmaceutical sector by leveraging our expertise in engineering and digital technologies. Here's how we contribute to our customers in this sector:
            <br />
            <br />
            1. <strong>Process Optimization:</strong> We harness the power of digital tools and analytics to optimize pharmaceutical manufacturing processes, minimizing waste, reducing cycle times, and maximizing yield.
            <br />
            <br />
            2. <strong>Quality Assurance:</strong> Our rigorous quality assurance practices and advanced monitoring systems ensure that pharmaceutical products meet stringent regulatory requirements and adhere to the highest quality standards.
            <br />
            <br />
            3. <strong>Technology Integration:</strong> We integrate cutting-edge technologies such as IoT sensors, predictive modeling, and real-time monitoring systems into pharmaceutical facilities to enable data-driven decision-making and proactive maintenance.
            <br />
            <br />
            4. <strong>Innovation and R&D:</strong> We collaborate with pharmaceutical companies to drive innovation and accelerate the development of novel drug delivery systems, formulations, and manufacturing processes, bringing life-changing therapies to market faster and more efficiently.
            <br />
            <br />
            5. <strong>Sustainability and Environmental Stewardship:</strong> We are committed to promoting sustainable practices in the pharmaceutical industry, helping our customers minimize their environmental footprint and embrace eco-friendly manufacturing processes.
            <br />
            <br />
            6. <strong>Compliance and Regulatory Support:</strong> We provide comprehensive support to ensure regulatory compliance at every stage of the pharmaceutical lifecycle, helping our customers navigate complex regulatory landscapes with confidence.
          </p>
        </div>

      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Pharmaceuticals Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharmaceuticals/` + data.imageSrc} />
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
          <h1 className='container text-black text-5xl text-center mx-auto relative'>Pharmaceuticals Services Offerings
            <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
              <i className="fa-solid fa-circle-left"></i>
              back
            </div>

          </h1>
          <div className='flex gap-16 container justify-center items-center min-h-24'>
            <div className='h-full'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharmaceuticals/${selectedServicesOffering?.imageSrc}`} alt="symbol" className='object-contain aspect-square max-h-72' />
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
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Pharmaceuticals Services Offerings</h1>
          <div className='h-full w-full relative -left-1/2 flex justify-center items-center'>

            {medicalServiceOfferings.map((data: any, index: number) => {
              return (
                <div className={`h-[20vh] w-[20vh] border-4 rounded-full absolute z-1`} style={{ transformOrigin: "50vh", transform: `rotate(${360 / medicalServiceOfferings.length * index + 1}deg)` }}>
                  <div className='group/icon w-full h-full rounded-full bg-white' style={{ transform: `rotate(${-(360 / medicalServiceOfferings.length * index + 1)}deg)` }}>
                    <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharmaceuticals/${data.imageSrc}`} className='h-full w-full rounded-full object-scale-down' />
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