// import { useState } from 'react';
import { Helmet } from "react-helmet";
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
    imageSrc: "137.jpg",
  },
  {
    title: "ARM Cortex series Processor Verification",
    imageSrc: "138.jpg",
  },
  {
    title: "Analog Mixed-Signal Verification",
    imageSrc: "139.jpg",
  },
  {
    title: "IP Development and Verification",
    imageSrc: "140.jpg",
  },
  {
    title: "EDA Tool Validation",
    imageSrc: "141.jpg",
  },
  {
    title: "FPGA Device Selection",
    imageSrc: "142.jpg",
  },
  {
    title: "ASISC Prototyping",
    imageSrc: "143.jpg",
  },
  {
    title: "Synthesis & Optimization",
    imageSrc: "144.jpg",
  },
  {
    title: "SOC Integration",
    imageSrc: "145.jpg",
  },
  {
    title: "Functional Verification",
    imageSrc: "146.jpg",
  },
  {
    title: "FPGA Accelerator Implementation",
    imageSrc: "147.jpg",
  },
  {
    title: "FPGA Validation",
    imageSrc: "148.jpg",
  },
];

const TrendingTechnologiesCards = (data) => {
  return (
    <div className="w-72 group">
      <div className="h-72 w-72 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300">
        <img
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Industries/Semiconductor/ASICFPGADesignDevelopment/${
            data.imageSrc
          }`}
          className=" w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <h6 className="text-xl text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300">
        {data.title}
      </h6>
    </div>
  );
};

const Medical = () => {
  return (
    <div>
      <Helmet>
        <title>Semiconductor – ASIC FPGA Design Development</title>
        <meta
          property="og:title"
          content="Semiconductor – ASIC FPGA Design Development"
        />
        <meta
          name="description"
          content="Saraca specializes in advanced ASIC (Application Specific Integrated Circuit) and FPGA (Field-Programmable Gate Array) solutions, serving diverse sectors including AI-driven data centres, aerospace, automotive, networking, consumer electronics, industrial, medical, and IoT. Our expertise spans digital and mixed-signal ASIC design, as well as FPGA-SoC development, focusing on high-performance, low-power consumption, and compact form-factor designs. We excel in all stages of silicon development, from initial design and verification to physical implementation and validation, leveraging our proficiency in mixed-signal solutions across various technology nodes from 180nm to cutting-edge 3nm and beyond. With a pioneering spirit, Saraca has achieved numerous successful tape-outs, including milestones at 7nm and 10nm nodes, establishing ourselves as leaders in semiconductor engineering services."
        />
        <meta
          name="keywords"
          content="ASIC design services, FPGA-SoC development, digital ASIC design, mixed-signal ASIC solutions, low-power ASIC design, high-performance ASIC design, compact form-factor ASIC, semiconductor engineering services, silicon design services, AI-driven data centre ASIC, aerospace ASIC development, automotive ASIC solutions, networking ASIC design, consumer electronics ASIC design, industrial ASIC solutions, medical ASIC development, IoT ASIC applications, silicon tape-out, 180nm to 3nm technology nodes, ASIC prototyping, EDA tool validation, FPGA device selection, SoC integration, functional verification in ASIC, FPGA accelerator implementation, FPGA validation, ARM Cortex processor verification, IP development and verification"
        />
        <meta
          property="og:description"
          content="Saraca specializes in advanced ASIC (Application Specific Integrated Circuit) and FPGA (Field-Programmable Gate Array) solutions, serving diverse sectors including AI-driven data centres, aerospace, automotive, networking, consumer electronics, industrial, medical, and IoT. Our expertise spans digital and mixed-signal ASIC design, as well as FPGA-SoC development, focusing on high-performance, low-power consumption, and compact form-factor designs. We excel in all stages of silicon development, from initial design and verification to physical implementation and validation, leveraging our proficiency in mixed-signal solutions across various technology nodes from 180nm to cutting-edge 3nm and beyond. With a pioneering spirit, Saraca has achieved numerous successful tape-outs, including milestones at 7nm and 10nm nodes, establishing ourselves as leaders in semiconductor engineering services."
        />
        <meta
          property="og:keywords"
          content="ASIC design services, FPGA-SoC development, digital ASIC design, mixed-signal ASIC solutions, low-power ASIC design, high-performance ASIC design, compact form-factor ASIC, semiconductor engineering services, silicon design services, AI-driven data centre ASIC, aerospace ASIC development, automotive ASIC solutions, networking ASIC design, consumer electronics ASIC design, industrial ASIC solutions, medical ASIC development, IoT ASIC applications, silicon tape-out, 180nm to 3nm technology nodes, ASIC prototyping, EDA tool validation, FPGA device selection, SoC integration, functional verification in ASIC, FPGA accelerator implementation, FPGA validation, ARM Cortex processor verification, IP development and verification"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full lg:w-1/2 text-left left-0 lg:text-9xl md:text-5xl text-2xl  bg-gradient-to-r from-black to-transparent text-white flex justify-center items-center p-24 font-semibold">
            Expert ASIC/FPGA Design for Every Industry
          </div>
        </div>

        <img
          className="h-full w-full object-cover"
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Industries/Semiconductor/ASICFPGADesignDevelopment/Landing.jpg`}
        />
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center pb-24">
            ASIC/FPGA
          </h1>
          <p className="container text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            We specialize in assisting clients across various sectors, including
            AI-driven data centres, aerospace, automotive, networking, consumer
            electronics, industrial, medical, and IoT. Our team excels in
            digital and mixed-signal ASIC design, as well as FPGA-SoC
            development, catering to the growing demand for high-performance,
            low-power consumption, and compact form-factor designs. We leverage
            our strong expertise in mixed-signal solutions, covering design,
            verification, physical design, and validation, to deliver
            cutting-edge designs even at lower geometry nodes. With a proven
            track record, we have successfully taped-out over 250+ silicon
            designs, ranging from mature 180nm processes to cutting-edge 3nm and
            beyond. We take pride in being the first engineering services
            company to achieve tape-out at the revolutionary 7nm and 10nm nodes.
          </p>
        </div>
      </div>

      <div
        aria-label="trending-technologies-section"
        className={`w-full bg-cyan-950 py-24 bg-[url('${
          import.meta.env.VITE_REACT_APP_API_URL
        }/trending-technologies-pattern.svg')] bg-cover`}
      >
        <h1 className="text-white text-5xl font-semibold text-center">
          Service Offerings
        </h1>
        <div className="container flex flex-wrap justify-center gap-8 items-start mt-24 mx-auto">
          {ServiceOfferings.map((data) => TrendingTechnologiesCards(data))}
        </div>
      </div>
    </div>
  );
};

export default Medical;
