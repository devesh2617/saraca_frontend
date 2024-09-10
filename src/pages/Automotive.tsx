import {Helmet} from "react-helmet"
import DiscoverMoreCards from '../components/DiscoverMoreCards';
import WhereWeServeCards from "../components/WhereWeServeCards";
import ServiceOfferingsCards from "../components/ServicesOfferingsCards";
import { useEffect, useState } from 'react';
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';
type medicalCardsData = {
  title: string,
  link: string,
  imageSrc: string
}
type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}
const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']


const ServiceOfferings = [
  {
    heading: "Software Defined Vehicle",
    content:[
      "Advanced Driver Assistance System (ADAS)",
"Automotive ECU Development",
"AUTOSAR Architecture",
"Development compliant with ISO 26262 standard",
"Telematics",
"Digital Instrument Cluster",
"Digital Infotainment System"
    ],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Software Defined Vehicle.jpg`,
  },
  {
    heading: "Automotive Software Development",
    content:[
      "Microcontrollers and Microprocessors - NXP, Nvidia, Renesas, Infineon, Qualcomm etc.",
"Operating System: Linux, Android, QNX, VX Works, FreeRTOS, iOS, etc.",
"Embedded: C, C++, Python, Dart",
"Device Driver Development",
"Protocols such as J1939, CAN-FD, LIN, BLE, Automotive Ethernet."
    ],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Automotive Software Development.jpg`,
  },
  {
    heading: "Electronics Hardware Design",
    content:[
      "Analog and Digital Design",
"IOT Sensor based system",
"Microcontroller/Microprocessor/FPGA based design",
"SOC/SOM based system",
"Interfaces: USB, Ethernet, CAN, BT, Wi-fi, UART, SPI, I2C etc.",
"PCB design and development",
"Verification & Validation"
    ],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Electronics Hardware Design.jpg`,
  },
{
  heading: "UI/UX Design",
  content:[
    "User Research",
"Competition Analysis",
"Develop Wireframes and Mockups",
"User Flows",
"Develop Prototypes",
"Validation",
"Techstack & Tools - Qt, Qml, Flutter, Dart, Figma, Adobe XD, MS Vision, Lucid Charts"
  ],
  link: "",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/UIUX Design.jpg`,
},
{
  heading: "Testing",
  content:[
    "White Box & Black Box Testing",
"Functional Testing",
"MIL, SIL & HIL Testing",
"System Acceptance Testing",
"GUI Testing",
"Data Integrity Testing",
"Regression Testing"
  ],
  link: "",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Testing.jpg`,
},
{
  heading: "Mechanical Design",
  content:[
    "End to end product design & development",
"Concept Design",
"Risk Assessment",
"2D & 3D CAD design",
"GD&T and Tol-stackup",
"Value Engineering",
"Reverse Engineering",
"Sheetmetal and Plastic Design",
"Prototyping"
  ],
  link: "",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Mechanical Design.jpg`,
}
];

const medicalCardsData = [{
  title: "Passenger Car",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car.jpg`,
  link: "/Industry/Automotive/PassengerCar"
},

{
  title: "Trucks & Buses",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Truck & Buses.jpg`,
  link: "/Industry/Automotive/TruckandBuses"
},
{
  title: "Off-Highway Vehicles",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Off-Highway.jpg`,
  link: "/Industry/Automotive/OffHighwayVehicles"
},
{
  title: "Electric Vehicle",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Electric Vehcile.jpg`,
  link: "/Industry/Automotive/ElectricVehicles"
},
]

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

const Industry = () => {
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
      <title>Advanced Automotive Solutions by Saraca Solutions</title>
        <meta property="og:title" content="Advanced Automotive Solutions by Saraca Solutions" />
        <meta name="description" content="Discover Saraca Solutions' innovative automotive solutions, featuring advanced technologies and strategic services designed to enhance performance, efficiency, and sustainability in the automotive industry. Explore our expertise in automotive engineering and cutting-edge solutions for vehicle innovation" />
        <meta name="keywords" content="Automotive solutions, Automotive technology, Automotive engineering, Vehicle innovation, Automotive industry, Automotive performance, Vehicle efficiency" />
        <meta property="og:description" content="Discover Saraca Solutions' innovative automotive solutions, featuring advanced technologies and strategic services designed to enhance performance, efficiency, and sustainability in the automotive industry. Explore our expertise in automotive engineering and cutting-edge solutions for vehicle innovation" />
        <meta property="og:keywords" content="Automotive solutions, Automotive technology, Automotive engineering, Vehicle innovation, Automotive industry, Automotive performance, Vehicle efficiency" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
      <div
              aria-label="overlay-container"
              className="bg-gradient-to-r from-black to-transparent absolute z-[1] w-full inset-0"
            >
              <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                <div aria-label="content" className="md:text-left">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                   Automotive
                  </h1>
                  <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                  SARACA: Your Automotive Engineering Partner
                  </p>
                </div>
              </div>
            </div>
        
        <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Landing.jpg`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center'>
          Next-Gen Solutions that inspire tomorrow
        </h1>
        <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24 leading-normal'>
        Software is becoming increasingly essential in establishing, maintaining, and improving several elements of vehicle functioning. Additionally, this dynamic shift guarantees unmatched safety, optimal performance, and a positive user experience. As a result, the worldwide automotive sector is experiencing a significant transformation, with a unified push to utilize an advanced, centralized computer system utilizing domain-controller-based architecture, aimed at unlocking the capabilities of software-defined vehicles (SDVs).
        <br />
        <br />
        Our team work closely with OEMs, technology providers, and artificial intelligent disrupters to find new solutions, resolve current challenges, and create strong value frameworks that last for the duration of the automobile lifecycle.
        <br />
        <br />
        To take advantage of the expanding opportunities brought forth by new technologies like electrification, V2X, digital cockpit, and autonomous driving, automakers and suppliers are looking for engineering services partners. SARACA is equipped to adapt to shifting market demands and provide value to your product development process with our wide variety of automotive engineering and design services, products, and solution accelerators.
        </p>
        </div>
      </div>

      <div aria-label="medical-device-segments" className="min-h-[50vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-5xl font-semibold text-center">Where We Serve</h1>
        <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto gap-8">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <WhereWeServeCards key={index} title={data.title} link={data.link} imageSrc={data.imageSrc} />
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
      {/*<div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div>*/} 
    </div>
  )
}

export default Industry