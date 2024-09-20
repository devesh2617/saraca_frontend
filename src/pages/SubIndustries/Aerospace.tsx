import { useState,useEffect } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import IndustryCards from "../../components/IndustryCards";
import ServiceOfferingsCards from "../../components/ServicesOfferingsCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';
type medicalCardsData = {
  title: string;
  points: string[];
  imageSrc: string;
};
import { Helmet } from "react-helmet";
// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

// type ServicesOfferingsData = {
//   title: string,
//   content: string[]
// }

type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string,
  type: string
}

const discoverMoreIds = ['427f46e7-1c26-4519-b481-c3a9d5440380',
  'ee04e69a-a249-41fd-bbef-ffb218a0dc1a',
  'e27ce0bb-b759-4b31-ace3-f21dc9077c70'
]

const medicalCardsData = [
  {
    title: "Avionics",
    points: [
      "Communications",
      "Navigations",
      "Flight Control System",
      "Fuel Management Systems",
      "Flight Recorders",
      "RADAR/Surveillance",
      "Aircraft networks",
      "Mission Computer",
      "Power Control Systems",
    ],
    imageSrc: "Avionics.png",
  },

  {
    title: "Exteriors",
    points: [
      "Landing Gears",
      "Doors",
      "Actuators",
      "Hydraulics & Pnematics",
      "Lighting Systems",
      "Airframe",
    ],
    imageSrc: "Exteriors.png",
  },
  {
    title: "MRO",
    points: [
      "Aircraft Maintenance",
      "Aircraft Repair",
      "Aircraft Modification",
      "Assembly/Disassembly",
      "Inspection",
      "Process Improvement",
      "Quality Control/Assurance",
      "Manufacturing Engineering",
    ],
    imageSrc: "MRO.jpg",
  },
  {
    title: "Digital",
    points: [
      "Data Analyst",
      "Application Development",
      "Hybris Development",
      "Monitoring",
      "Aircraft Management System",
    ],
    imageSrc: "Digital.jpg",
  },
  {
    title: "Interiors",
    points: [
      "Seating System",
      "Lighting System",
      "Video Systems",
      "Aircraft Wiring",
      "Harness and Cabling",
      "Overhead Structures",
      "Evacuation Systems",
    ],
    imageSrc: "Interiors.png",
  },
];

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
    title: "Embedded",
    content: [
      "New product development",
      "Low level development – BSP, DD",
      "Application development",
      "ADAS",
      "IOT Systems development",
    ],
    imageSrc: "Embedded.jpg",
  },
  {
    title: "Software Engineering",
    content: [
      "New product development",
      "Safety critical software’s",
      "HMI development",
      "ATE Application development",
      "Front and back end development",
      "Full Stack development",
    ],
    imageSrc: "Software Engineering.jpg",
  },
  {
    title: "Design and Development",
    content: [
      "Conceptual and Preliminary Design",
      "Detailed Design",
      "Systems Engineering",
      "Aerodynamics and Performance Analysis",
      "Structural Analysis and Design",
      "Avionics and Electronics Systems Design",
      "Propulsion Systems Design",
      "Interiors Design and Configuration",
      "Materials and Process Engineering",
    ],
    imageSrc: "Design and Development.jpg",
  },
  {
    title: "Simulation and Testing",
    content: [
      "Computational Fluid Dynamics (CFD) Analysis",
      "Finite Element Analysis (FEA)",
      "System Simulation and Modelling",
      "Structural Testing (static and dynamic)",
      "Environmental Testing",
    ],
    imageSrc: "1.jpg",
  },
  {
    title: "Manufacturing and Production Support",
    content: [
      "Advanced Manufacturing Engineering",
      "Tooling and Fixture Design",
      "Production Planning and Control",
      "Supply Chain Management",
      "Quality Assurance and Control",
      "Lean Manufacturing and Process Optimization",
    ],
    imageSrc: "Manufacturing and Production Support.jpg",
  },
  {
    title: "Maintenance, Repair, and Overhaul (MRO)",
    content: [
      "Aircraft Maintenance and Inspection",
      "Repair and Overhaul of Components",
      "Engine Maintenance",
      "Avionics and Systems Maintenance",
      "Modifications and Upgrades",
      "Condition Monitoring and Predictive Maintenance",
    ],
    imageSrc: "Maintenance, Repair, and Overhaul (MRO).jpg",
  },
  {
    title: "Product Lifecycle Management",
    content: [
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
    imageSrc: "Product Lifecycle Management.jpg",
  },
  {
    title: "Software and IT Services",
    content: [
      "Embedded Systems and Software Development",
      "Flight Management Systems",
      "Data Analytics and Big Data Solutions",
      "Cybersecurity Solutions",
      "Simulation Software Development",
      "IT Infrastructure Management",
    ],
    imageSrc: "7.jpg",
  },
  {
    title: "Certification and Regulatory Compliance",
    content: [
      "Certification Support (FAA, EASA, etc.)",
      "Safety and Reliability Analysis",
      "Compliance Documentation",
      "Environmental Compliance",
      "Risk Management",
    ],
    imageSrc: "Certification and Regulatory Compliance.jpg",
  },
  {
    title: "Sustainability and Green Technologies",
    content: [
      "Fuel Efficiency Optimization",
      "Emission Reduction Technologies",
      "Sustainable Materials and Processes",
      "Electric and Hybrid Propulsion Systems",
      "Renewable Energy Integration",
    ],
    imageSrc: "10.jpg",
  },
  {
    title: "Project Management and Consultancy",
    content: [
      "Program and Project Management",
      "Strategic Consultancy",
      "Market Analysis and Feasibility Studies",
      "Business Process Reengineering",
      "Cost Estimation and Budgeting",
    ],
    imageSrc: "12.jpg",
  },
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
        <title>Leading Aerospace Solutions by Saraca Solutions</title>
        <meta
          property="og:title"
          content="Leading Aerospace Solutions by Saraca Solutions"
        />
        <meta
          name="description"
          content="Discover Saraca Solutions' comprehensive range of cutting-edge aerospace solutions, tailored to meet the dynamic demands of the industry. Explore innovative technologies and strategic services designed to optimize performance and enhance operational efficiency in aerospace applications."
        />
        <meta
          name="keywords"
          content="Aerospace solutions, Aerospace technology, Aerospace engineering, Aerospace innovation, Aerospace services, Aerospace systems, Aerospace industry expertise."
        />
        <meta
          property="og:description"
          content="Discover Saraca Solutions' comprehensive range of cutting-edge aerospace solutions, tailored to meet the dynamic demands of the industry. Explore innovative technologies and strategic services designed to optimize performance and enhance operational efficiency in aerospace applications."
        />
        <meta
          property="og:keywords"
          content="Aerospace solutions, Aerospace technology, Aerospace engineering, Aerospace innovation, Aerospace services, Aerospace systems, Aerospace industry expertise."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className="w-full aspect-video relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 lg:text-9xl md:text-5xl text-2xl text-white flex justify-center items-center p-36 font-semibold text-center">
            Aviate, Navigate, Communicate
          </div>
        </div>

        <img
          className="h-full w-full object-cover brightness-75"
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Industries/Aerospace & Defense/Aerospace/Landing.png`}
        />
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center pb-24">
            Aerospace Engineering
          </h1>
          <p className="container text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            Aerospace engineering involves the design, development, testing, and
            maintenance of aircraft, spacecraft, and related systems. It
            integrates mechanical, electrical, and materials engineering to
            create innovative solutions for aviation and space exploration. In
            today’s digital world, aerospace engineering is essential for
            advancing technology and shaping the future of transportation and
            exploration. It drives innovation by developing advanced materials
            and sophisticated propulsion systems, enhancing the safety,
            efficiency, and performance of aerospace vehicles. Aerospace
            engineering also enables global connectivity through air travel and
            satellite communications, supports space exploration by developing
            spacecraft and launch vehicles, and contributes to national security
            by creating military aircraft and surveillance systems.
          </p>
        </div>
      </div>

      <div
        aria-label="medical-device-segments"
        className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24"
      >
        <h1 className="text-white text-6xl text-center font-semibold">
          Aerospace Segments
        </h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards
                key={index}
                title={data.title}
                points={data.points}
                imageSrc={
                  `${
                    import.meta.env.VITE_REACT_APP_API_URL
                  }/Industries/Aerospace & Defense/Aerospace/` + data.imageSrc
                }
              />
            );
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
              imageSrc={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/Industries/Aerospace & Defense/Aerospace/${data.imageSrc}`}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
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
  );
};

export default Medical;
