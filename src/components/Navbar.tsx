import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const [searchBoxOpen, setSearchBoxOpen] = useState<boolean>(false);
  const [navbarVisible, setNavbarVisible] = useState<boolean>(window.innerWidth >= 1024);


  const navbarOptions = {
    "Success Stories": {
      sublinks: [
        { "Case Studies": { sublinks: [], link: "/Success_Stories/Case_Studies" } },
        { "Testimonials": { sublinks: [], link: "/Success_Stories/Client_Testimonials" } },
        { "Memberships": { sublinks: [], link: "/Success_Stories/Memberships" } },
        { "Awards": { sublinks: [], link: "/Success_Stories/Awards" } }
      ], link: "#"
    },

    "Industries": {
      sublinks: [
        {
          "Life Sciences": {
            sublinks: [
              { name: "Medical Devices & Diagnostics", link: "/Industry/LifeSciences/MedicalDevices" },
              { name: "Pharmaceuticals", link: "/Industry/LifeSciences/Pharmaceuticals" },
              { name: "Healthcare Applications", link: "/Industry/LifeSciences/HealthcareApplications" }
            ], link: "/Industry/LifeSciences"
          }
        },
        {
          "Aerospace & Defense": {
            sublinks: [
              { name: "Aerospace", link: "/Industry/Aerospace_Defense/Aerospace" },
              { name: "Defense", link: "/Industry/Aerospace_Defense/Defense" },
              { name: "Space", link: "/Industry/Aerospace_Defense/Space" }
            ], link: "/Industry/Aerospace_Defense"
          }
        },
        {
          "Automotive": {
            sublinks: [
              { name: "Passenger Car", link: "/Industry/Automotive/PassengerCar" },
              { name: "Trucks & Buses", link: "/Industry/Automotive/TruckandBuses" },
              { name: "Off-Highway Vehicles", link: "/Industry/Automotive/OffHighwayVehicles" },
              { name: "Electric Vehicles", link: "/Industry/Automotive/ElectricVehicles" }
            ], link: "/Industry/Automotive"
          }
        },
        {
          "Semiconductor": {
            sublinks: [
              { name: "ASIC/FPGA Design & Development", link: "/Industry/Semiconductor/ASIC_FPGA_Design_Development" },
              // { name: "V&V", link: "/Industry/Semiconductor/Verification_Validation" },
              { name: "Physical Design", link: "/Industry/Semiconductor/PhysicalDesign" },
              { name: "DFT", link: "/Industry/Semiconductor/DFT" }
            ], link: "/Industry/Semiconductor"
          }
        },
        // {
        //   "Industrial": {
        //     sublinks: [
        //       { name: "Oil & Gas", link: "/Industry/Industrial/Oil_Gas" },
        //       { name: "Infrastructure", link: "/Industry/Industrial/Infrastructure" },
        //       { name: "Renewables", link: "/Industry/Industrial/Renewables" }
        //     ], link: "/Industry/Industrial"
        //   }
        // },
        {
          "Rail Transportation": {
            sublinks: [
              { name: "Rolling Stocks", link: "/Industry/RailTransportation/RollingStocks" },
              { name: "Signalling", link: "/Industry/RailTransportation/Signalling" }
            ], link: "/Industry/RailTransportation"
          }
        },
        {
          "Consumer": {
            sublinks: [
              { name: "Appliances", link: "/Industry/Consumer/Appliances" },
              // { name: "Smart Homes", link: "/Industry/Consumer/SmartHomes" }
            ], link: "#"
          }
        }
      ], link: "#"
    },

    "Services": {
      sublinks: [
        {
          "Digital": {
            sublinks: [
              { name: "Artificial Intelligence", link: "/Service/Digital/ArtificialIntelligence" },
              { name: "IOT", link: "/Service/Digital/IOT" },
              { name: "Cyber Security", link: "/Service/Digital/CyberSecurity" },
              { name: "Sustainability", link: "/Service/Digital/Sustainability" },
              { name: "Industry 4.0", link: "/Service/Digital/Industry4.0" }        
            ], link: "/Service/Digital"
          }
        },
        {
          "Mechanical": {
            sublinks: [
              { name: "Design & Development", link: "/Service/Mechanical/Design_Development" },
              { name: "CAD/CAE/CFD/CAM", link: "/Service/Mechanical/CAD_CAM" },
              // { name: "CAx Automation", link: "/Service/Mechanical/CAxAutomation" }
            ], link: "/Service/Mechanical"
          }
        },
        {
          "Embedded": {
            sublinks: [
              { name: "Hardware", link: "/Service/Embedded/Hardware" },
              { name: "Firmware", link: "/Service/Embedded/Firmware" },
              { name: "V&V", link: "/Service/Embedded/Verification_Validation" }
            ], link: "/Service/Embedded"
          }
        },
        {
          "Software": {
            sublinks: [
              { name: "Application Development", link: "/Service/Software/ApplicationDevelopment" },
              { name: "Software Testing", link: "/Service/Software/SoftwareTesting" },
              { name: "Cloud", link: "/Service/Software/Cloud" },
              { name: "PLM", link: "/Service/Software/PLM" }
            ], link: "/Service/Software"
          }
        },
        {
          "System": {
            sublinks: [
              { name: "MBD", link: "/Service/System/MBD" },
              { name: "System Testing", link: "/Service/System/SystemTesting" }
            ], link: "/Service/System"
          }
        },
        {
          "Manufacturing": {
            sublinks: [
              { name: "Machining Strategy", link: "/Service/Manufacturing/MachiningStrategy" },
              { name: "Supply Chain Management", link: "/Service/Manufacturing/SupplyChainManagement" },
              { name: "Process Engineering", link: "/Service/Manufacturing/ProcessEngineering" },
              // { name: "Project Management", link: "/Service/Manufacturing/ProjectManagement" },
              // { name: "Manufacturing Transfer", link: "/Service/Manufacturing/ManufacturingTransfer" }
            ], link: "/Service/Manufacturing"
          }
        },
        // {
        //   "TechPub": {
        //     sublinks: [
        //       { name: "AR/VR/MR", link: "/Service/TechPub/ARVRMR" },
        //       { name: "CBT/WBT", link: "/Service/TechPub/CBTWBT" },
        //       { name: "Authoring", link: "/Service/TechPub/Authoring" }
        //     ], link: "/Service/TechPub"
        //   }
        // }
      ],
      link: "#"
    },
    "Innovation": {
      sublinks: [
        { "X1 Platform": { sublinks: [], link: "/Innovation/X1_Platform" } },
        { "eFlexPine": { sublinks: [], link: "/Innovation/eFleXpine" } },
        { "FastPMCF": { sublinks: [], link: "/Innovation/FastPMCF" } },
        // { "QTST": { sublinks: [], link: "/Innovation/QTST" } }
      ], link: "#"
    },
    "About Us": { sublinks: [], link: "/About_Us" },

    "Insights": {
      sublinks: [
        { "Certifications": { sublinks: [], link: "/Insights/Certificates" } },
        { "White Papers": { sublinks: [], link: "/Insights/White_Papers" } },
        { "Blogs": { sublinks: [], link: "/Insights/Blogs" } },
        { "Webinars": { sublinks: [], link: "/Insights/Webinars" } },
        { "News": { sublinks: [], link: "/Insights/News" } },
        // { "Report": [] }
      ], link: "#"
    },

    "Careers": { sublinks: [], link: "/Careers" },
    // "Contact Us" : []
  };
 const navigate = useNavigate()

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      // Set the navbarVisible state based on the screen width
      setNavbarVisible(window.innerWidth >= 1024); // Adjust the width as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 w-[100%] z-20">
      <div
        aria-label="search-bar"
        className={`bg-[#27374D] absolute z-20 w-full h-24 bottom-full ${searchBoxOpen ? "translate-y-24" : "-translate-y-24"
          } transition-all duration-500`}
      >
        <div className="w-[80%] mx-auto h-24 flex">

          <input
            type="text"
            onKeyDown={(e)=>{
              if(e.key === "Enter"){
                navigate(`/Search?query=${e.target.value}`)
              }
            }}
            placeholder="What are you trying to find?"
            className="border-b-2 bg-[#27374D] text-white outline-none h-16 my-auto w-full text-xl"
          />
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="text-white text-4xl my-auto"
            onClick={() => setSearchBoxOpen((prev) => !prev)}
          />
        </div>
      </div>
      <div
        aria-label="regular-navbar"
        className="absolute bg-black min-h-20 xl:min-h-24 bg-opacity-40 flex justify-around items-center z-10 w-full backdrop-blur-sm"
      >
        <a href="/">
          <div>
            <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/saraca-logo.svg`} className="w-52" />
          </div>
        </a>

        <div aria-label="navbar-links" className="flex justify-end items-center gap-8">
          <nav className={`text-white gap-2 list-none text-2xl ${navbarVisible ? "visible" : "invisible"} font-semibold font-sans cursor-pointer flex flex-col bg-black absolute left-0 w-full top-full lg:flex-row lg:static lg:justify-center lg:bg-transparent lg:gap-8`}>
            {Object.entries(navbarOptions).map(([key, value]) => (
              <div
                className="group h-24 flex justify-center group/links items-center bg-gray-500 bg-opacity-25 lg:bg-transparent relative lg:static"
                key={key}
              >
                <a href={value.link}>
                  <li className="group-hover/links:text-orange-400 relative">{key}</li>
                </a>
                {value.sublinks.length ? (<FontAwesomeIcon
                  icon={faChevronDown}
                  className={`mx-4 group-hover/links:text-orange-400 group-hover/links:-rotate-180`}
                />) : ""}

                {value?.sublinks?.length > 0 && (
                  <nav className="bg-black text-white backdrop-blur-sm hidden top-full lg:left-0 lg:right-0 container absolute z-20 px-6 py-2 cursor-pointer text-lg group-hover:grid group-hover:lg:grid-cols-5 group-hover:sm:grid-cols-1">
                    {value.sublinks.map((link: object, index: number) => {

                      // console.log(Object.values(link)[0])
                      return (
                        <div
                          className={`p-2 lg:p-4 text-2xl font-normal`}
                          key={index}
                        >
                          <div className="relative">
                            <span className="peer/sublink group/sublink h-full inline-block hover:text-orange-400">
                              <a href={Object.values(link)[0].link}>
                                {Object.keys(link)[0]}
                              </a>

                              {Object.values(link)[0]?.sublinks?.length ? (
                                <FontAwesomeIcon
                                  icon={faChevronDown}
                                  className={`mx-4  group-hover/sublink:-rotate-180`}
                                />

                              ) : (
                                ""
                              )

                              }
                            </span>
                            <div
                              className={`hidden w-full absolute bottom-full hover:top-full hover:relative hover:block peer-hover/sublink:top-full peer-hover/sublink:relative peer-hover/sublink:block`}
                            >
                              <ul className=" list-disc">
                              {Object.values(link)[0].sublinks.map(
                                (sublink: string, index: number) => {

                                  return (
                                    <li
                                      className="text-white ml-8 p-2"
                                      key={index}
                                    >
                                      <a href={sublink.link} className="hover:text-blue-400">
                                        {sublink.name}
                                      </a>

                                    </li>
                                  );
                                }
                              )}
                              </ul>
                              
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </nav>
                )}
              </div>
            ))}
          </nav>
          <FontAwesomeIcon icon={faBars} className="text-white lg:hidden" size="2x" onClick={() => setNavbarVisible(prev => !prev)} />
          <FontAwesomeIcon
            onClick={() => setSearchBoxOpen((prev) => !prev)}
            icon={faMagnifyingGlass}
            size="2x"
            className="text-white hover:text-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

