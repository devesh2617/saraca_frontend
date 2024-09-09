// import { useState } from 'react';
import { Helmet } from "react-helmet";
// import DiscoverMoreCards from '../../components/DiscoverMoreCards';
// import IndustryCards from "../../components/IndustryCards";
import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";
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
//     title: "Digital",
//     points: [
//       "Data Analyst",
//       "Application Development",
//       "Hybris Development"
//     ],
//     imageSrc: "Digital.jpg"
//   },
//   {
//     title: "Interiors",
//     points: [
//       "Seating System",
//       "Lighting System",
//       "Video Systems",
//       "Harness and Cabling",
//       "Overhead Structures",
//       "Evacuation Systems",
//       "Technical Publications"
//     ],
//     imageSrc: "Interiors.png"
//   }]

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
    title: "Design for Testability (DFT) Services",
    content: [
      "Scan chain insertion",
      "Boundary scan (JTAG) implementation",
      "ATPG (Automatic Test Pattern Generation) development",
      "Fault simulation and analysis",
      "Testability analysis and optimization",
    ],
    imageSrc: "Design for Testability (DFT) Services.jpg",
  },
  {
    title: "Embedded Systems Development",
    content: [
      "Microcontroller and microprocessor-based system design",
      "Firmware development",
      "Device driver development",
      "Real-time operating system (RTOS) integration",
      "IoT (Internet of Things) device development",
    ],
    imageSrc: "Embedded Systems Development.png",
  },
  {
    title: "Electronic Hardware Design",
    content: [
      "Schematic capture and PCB layout",
      "Analog and digital circuit design",
      "Signal integrity analysis",
      "EMC/EMI compliance testing",
      "Prototyping and hardware debugging",
    ],
    imageSrc: "Electronic Hardware Design.jpg",
  },
  {
    title: "Software Development and Integration",
    content: [
      "Application software development",
      "Middleware development",
      "API development and integration",
      "Database design and optimization",
      "System integration and testing",
    ],
    imageSrc: "Software Development and Integration.png",
  },
  {
    title: "Machine Learning and AI Solutions",
    content: [
      "Data preprocessing and feature engineering",
      "Model development and training",
      "Deployment of ML/AI algorithms on embedded systems",
      "Performance optimization for inference",
      "Continuous model monitoring and updates",
    ],
    imageSrc: "Machine Learning and AI Solutions.png",
  },
  {
    title: "Wireless Communication Solutions",
    content: [
      "RF circuit design",
      "Protocol stack development",
      "Wireless sensor network deployment",
      "Antenna design and optimization",
      "System-level simulation and testing",
    ],
    imageSrc: "Wireless Communication Solutions.png",
  },
  {
    title: "Cybersecurity Services",
    content: [
      "Vulnerability assessment and testing",
      "Security architecture design",
      "Encryption and authentication implementation",
    ],
    imageSrc: "Cybersecurity Services.jpg",
  },
];

const Medical = () => {
  return (
    <div>
      <Helmet>
        <title>Semiconductor – DFT</title>
        <meta property="og:title" content="Semiconductor – DFT" />
        <meta
          name="description"
          content="Saraca is at the forefront of Design for Testability (DFT) services, specializing in optimizing and simplifying the testing process for complex System on Chip (SoC) designs. With expertise tailored to modern SoC challenges—such as integrating multiple memory components, mixed-signal blocks, and IPs from diverse vendors—we employ advanced DFT solutions. Our approach includes hybrid algorithms with optimized scan compression ratios to maximize pattern counts while minimizing testing overhead. We conduct thorough testing across standalone test benches, covering diagnostic, hard repair, soft repair, and BIST verification modes prior to SoC integration. Our comprehensive methodology seamlessly integrates test structures into designs and existing IP, leveraging automation to minimize front-end design modifications. Saraca supports industry-standard features including IEEE 1687 IJTAG support, 1149.1/1149.6 boundary scan, memory BIST, scan stitching, and core wrapper insertion, with additional capabilities in MBIST, logic insertion, clock integration, logical equivalence checking, and multi-pass test pattern generation for extensive coverage analysis."
        />
        <meta
          name="keywords"
          content="Design for Testability (DFT) services, SoC testing, scan chain insertion, boundary scan (JTAG) implementation, ATPG (Automatic Test Pattern Generation), fault simulation and analysis, testability analysis, DFT optimization, embedded systems development, microcontroller design, firmware development, RTOS integration, IoT device development, electronic hardware design, PCB layout, analog circuit design, digital circuit design, signal integrity analysis, EMC/EMI compliance testing, software development, middleware development, API development, database optimization, system integration, machine learning solutions, AI algorithms on embedded systems, wireless communication solutions, RF circuit design, protocol stack development, antenna design, cybersecurity services, vulnerability assessment, encryption implementation"
        />
        <meta
          property="og:description"
          content="Saraca is at the forefront of Design for Testability (DFT) services, specializing in optimizing and simplifying the testing process for complex System on Chip (SoC) designs. With expertise tailored to modern SoC challenges—such as integrating multiple memory components, mixed-signal blocks, and IPs from diverse vendors—we employ advanced DFT solutions. Our approach includes hybrid algorithms with optimized scan compression ratios to maximize pattern counts while minimizing testing overhead. We conduct thorough testing across standalone test benches, covering diagnostic, hard repair, soft repair, and BIST verification modes prior to SoC integration. Our comprehensive methodology seamlessly integrates test structures into designs and existing IP, leveraging automation to minimize front-end design modifications. Saraca supports industry-standard features including IEEE 1687 IJTAG support, 1149.1/1149.6 boundary scan, memory BIST, scan stitching, and core wrapper insertion, with additional capabilities in MBIST, logic insertion, clock integration, logical equivalence checking, and multi-pass test pattern generation for extensive coverage analysis."
        />
        <meta
          property="og:keywords"
          content="Design for Testability (DFT) services, SoC testing, scan chain insertion, boundary scan (JTAG) implementation, ATPG (Automatic Test Pattern Generation), fault simulation and analysis, testability analysis, DFT optimization, embedded systems development, microcontroller design, firmware development, RTOS integration, IoT device development, electronic hardware design, PCB layout, analog circuit design, digital circuit design, signal integrity analysis, EMC/EMI compliance testing, software development, middleware development, API development, database optimization, system integration, machine learning solutions, AI algorithms on embedded systems, wireless communication solutions, RF circuit design, protocol stack development, antenna design, cybersecurity services, vulnerability assessment, encryption implementation"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full lg:w-2/3 text-left left-0 lg:text-9xl md:text-5xl text-2xl  bg-gradient-to-r from-black to-transparent text-white flex justify-center items-center p-36 font-semibold">
            Automated Integration, Minimal Modifications: DFT Made Easy
          </div>
        </div>

        <img
          className="h-full w-full object-cover"
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Industries/Semiconductor/DFT/Landing.jpg`}
        />
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center pb-24">DFT</h1>
          <p className="container text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            Our focus is on simplifying and optimizing the testing process for
            System on Chip (SoC) designs, which have become increasingly complex
            due to advancements in processes, shrinking circuit sizes, and
            strict power consumption limits. We understand the challenges posed
            by modern SoC designs, which often feature multiple memory
            components, mixed-signal blocks, and IPs sourced from various
            vendors. Our DFT solutions are specific to address these
            complexities and streamline the testing process. Utilizing a hybrid
            algorithm with a balanced compression ratio scan, we consistently
            achieve high pattern counts while minimizing testing overhead. Our
            approach includes thorough testing on standalone test benches,
            covering diagnostic, hard repair, soft repair, and BIST verification
            modes before integration into the SoC. Our comprehensive DFT
            methodology involves seamlessly inserting test structures into
            designs and integrating existing test structures embedded in IP.
            Through automation and careful design analysis, we minimize the need
            for extensive modifications to the front-end design. We support a
            wide range of industry-standard features such as IEEE 1687 IJTAG
            support, 1149.1/1149.6 boundary scan, memory BIST and repair, scan
            stitching, scan compression, core wrapper insertion, and more.
            Additionally, our advanced features include MBIST wrappers and logic
            insertion, clock conditioning and control integration, automated
            logical equivalence checking, and multi-pass test pattern generation
            for comprehensive coverage analysis.
          </p>
        </div>
        
      </div>

    
      <div aria-label="Our Service Offerings" className="mb-24 container">
        <h1 className="text-5xl md:text-8xl text-black text-center font-semibold">
          Our Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-12">
          {ServiceOfferings.map((data, index: number) => (
            <ServiceOfferingsCards
              cardsData={data}
              imageSrc={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/Industries/Semiconductor/DFT/${data.imageSrc}`}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default Medical;
