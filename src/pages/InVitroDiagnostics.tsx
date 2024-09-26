//import {Helmet} from "react-helmet";
//import { useState,useEffect } from 'react';
// type medicalCardsData = {
//     title: string,
//     points: string[],
//     imageSrc: string
//   }

  const medicalCardsData = [
    {
      title: "Quality Management System",
      imageSrc: "",
    },
    {
      title: "Technical Documentation",
      imageSrc: "",
    },
    {
      title: "General Safety and Performance Requirements",
      imageSrc: "",
    },
    {
      title: "Gap Analysis – IVDD to IVDR",
      imageSrc: "",
    },
    {
      title: "Integrating Post Market Surveillance (PMS) and Post-Market Performance Follow-up (PMPF)",
      imageSrc: "",
    },
    {
      title: "Risk Management Analysis",
      imageSrc: "",
    },
    {
      title: "Benefit-Risk Analysis",
      imageSrc: "",
    },
    {
      title: "Performance Evaluation Plan (PEP) and Performance Evaluation Report (PER)",
      imageSrc: "",
    },
    {
      title: "Analytical Performance Report",
      imageSrc: "",
    },
    {
      title: "Scientific Validity Report",
      imageSrc: "",
    },
    {
      title: "Clinical Performance Reports",
      imageSrc: "",
    },
    {
      title: "Literature Search Protocol (LSP) and Literature Search Report (LSR)",
      imageSrc: "",
    },
    {
        title: "Summary of Safety and Performance (SSP)",
        imageSrc: "",
    },
    {
        title: "Package insert/IFU",
        imageSrc: "",
    }
  ];

  // const TrendingTechnologiesCards = (data) => {
  //   return (
  //     <div className="w-72 group">
  //       <div className="h-72 w-72 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300">
  //         <img
  //           src={`${
  //             import.meta.env.VITE_REACT_APP_API_URL
  //           }/Industries/Semiconductor/ASICFPGADesignDevelopment/${
  //             data.imageSrc
  //           }`}
  //           className=" w-full h-full rounded-full object-cover"
  //           alt=""
  //         />
  //       </div>
  //       <h6 className="text-xl text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300">
  //         {data.title}
  //       </h6>
  //     </div>
  //   );
  // };


  const Invitro = () => {
    return (
        <div>
            <div aria-label='landing-image' className="h-[100vh] w-full relative">
                <div className="absolute z-[1] w-full h-full">
                    <div className="h-full absolute w-full left-0 text-8xl text-white flex justify-center items-center p-36 font-semibold text-left">
                        Navigating Through Complex Regulations of In-Vitro Diagnostic Devices
                    </div>
                </div>
        
                <img className="h-full w-full object-cover brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/InVitroDiagnostics/Invitro_Landing.png`} />
      
            </div>
            <div aria-label='what-we-do' className='w-full py-24'>
                <div>
                    <h1 className='text-6xl font-semibold text-center pb-24'>
                    In Vitro Diagnostics Medical Device Technologies
                    </h1>
                        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
                            In vitro diagnostics (IVD) industry is experiencing a dynamic transformation driven by leading-edge software technologies and innovative advancements. This evolution is not just about enhanced capabilities, it’s about redefining patient care through smarter, more efficient diagnostic solutions
                            <br/>
                            <br/>
                            We, at Saraca Solutions, embrace the technological breakthroughs in industry and navigate the rapidly transforming global regulations and international standards, ensuring that our customers meet the highest quality and safety benchmarks.
                        </p>    
                            <br/>
                            <br/>
                </div>
            </div>
            <div aria-label="trending-technologies-section" className={`min-h-[30vh] w-full bg-cyan-950 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/trending-technologies-pattern.webp')] bg-cover`}>
                <h1 className="text-white text-6xl font-semibold text-center">What We Do</h1>
                <br />
                <br />
                    <p className='container text-3xl mx-auto text-white leading-normal tracking-wide'>
                        We bring a unique value to our In vitro diagnostic’s medical device customers with integrated capabilities in Product engineering as well as Quality Assurance, Regulatory & Clinical Affairs. Explore our innovative service offerings below:
                    </p>
                <ul className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 text-2xl justify-start items-start mt-24 mx-auto list-disc">
                    {medicalCardsData.map((data) => (<li className="text-white p-4">{data.title}</li>))}
                </ul>
            </div>
        </div>
      
    )
  }

  export default Invitro