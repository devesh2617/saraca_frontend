// import { useState } from 'react';
// import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import IndustryCards from "../../components/IndustryCards";
import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";
import {Helmet} from "react-helmet"
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
  title: "Advanced Vehicle Design",
  points: [
    "Our team of expert engineers specializes in designing Off-Highway Vehicles equipped with state-of-the-art digital technologies, ensuring superior performance, reliability, and durability in rugged environments."
  ],
  imageSrc: "90.jpg"
},

{
  title: "Digital Integration and Connectivity",
  points: [
    "We leverage the power of digital integration and connectivity to equip Off-Highway Vehicles with IoT sensors, telematics systems, and data analytics platforms for real-time monitoring, remote diagnostics, and predictive maintenance."
  ],
  imageSrc: "91.jpg"
},
{
  title: "Safety and Autonomous Solutions",
  points: [
    "Saraca is at the forefront of developing safety-critical systems and autonomous solutions for Off-Highway Vehicles, including collision avoidance systems, operator assistance features, and autonomous operation capabilities, enhancing safety and efficiency on the job site."
  ],
  imageSrc: "92.jpg"
},
{
  title: "Environmental Sustainability",
  points: [
    "Through innovative engineering practices, we prioritize environmental sustainability by designing Off-Highway Vehicles with low emissions, energy-efficient components, and recyclable materials, contributing to a greener and more sustainable future."
  ],
  imageSrc: "93.jpg"
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
    title: "Autonomous Off-Highway Vehicles",
    content: [
      "Autonomous technology revolutionizes Off-Highway Vehicle operations. Saraca develops safety-critical systems and autonomous solutions, enhancing safety, efficiency, and productivity on job sites with collision avoidance and autonomous operation capabilities."
    ],
    imageSrc: "95.jpg"
  },
  {
    title: "Connected Systems for Off-Highway Vehicles",
    content: [
      "Seamless connectivity optimizes Off-Highway Vehicle performance. Saraca integrates IoT sensors, telematics systems, and data analytics platforms for real-time monitoring, remote diagnostics, and predictive maintenance, empowering informed decision-making."
    ],
    imageSrc: "96.jpg"
  },
  {
    title: "Displays and Information",
    content: [
      "Clear, intuitive information enhances operator control. Saraca designs and integrates advanced display systems and information interfaces, providing real-time feedback, diagnostic information, and control functionality for improved operator productivity and safety.",
    ],
    imageSrc: "97.jpg"
  },
  {
    title: "Sustenance & Value Engineering",
    content: [
      "Continuous improvement sustains competitiveness. Saraca optimizes product lifecycle management, enhances reliability, and maximizes value through systematic analysis, innovation, and process refinement, ensuring long-term success for our partners."
    ],
    imageSrc: "98.jpg"
  },
  {
    title: "Polymer Engineering",
    content: [
      "Polymer materials enhance Off-Highway Vehicle performance and sustainability. Saraca's expertise in advanced polymer solutions ensures superior mechanical properties and environmental performance in demanding operating conditions."
    ],
    imageSrc: "99.jpg"
  },
  {
    title: "Off-Highway Vehicle Electrification",
    content: [
      "Electric and hybrid powertrains are the future. Saraca pioneers electrification solutions for Off-Highway Vehicles, delivering enhanced performance, efficiency, and environmental sustainability through advanced technology and engineering."
    ],
    imageSrc: "100.jpg"
  },
  {
    title: "Embedded Engineering",
    content: [
      "Embedded systems enhance Off-Highway Vehicle functionality and intelligence. Saraca's solutions encompass advanced electronics and software, enabling real-time monitoring, control, and optimization for superior performance and efficiency in challenging environments."
    ],
    imageSrc: "101.jpg"
  },
  {
    title: "Powertrain",
    content: [
      "Efficient powertrains are essential for high-performance Off-Highway Vehicles. Saraca specializes in designing and optimizing robust, fuel-efficient propulsion systems, minimizing emissions and operating costs while meeting heavy-duty application demands."
    ],
    imageSrc: "website image.jpg"
  }

]
const Medical = () => {
  // const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  // const handleSelect = (data: ServicesOfferingsData) => {
  //   setSelectedServicesOffering(data)
  // }
  return (
    <div>
      <Helmet>
      <title>Off-Highway Vehicles Engineering | Advanced Design & Technology Solutions</title>
        <meta property="og:title" content="Off-Highway Vehicles Engineering | Advanced Design & Technology Solutions" />
        <meta name="description" content="Explore Saraca's expertise in Off-Highway Vehicles (OHVs) engineering, offering advanced design, digital integration, autonomous solutions, and environmental sustainability. Discover how we enhance performance, efficiency, and safety across industries." />
        <meta name="keywords" content="off-highway vehicles engineering, advanced vehicle design, digital integration, IoT sensors, autonomous solutions, safety systems, environmental sustainability, polymer engineering, electrification solutions, powertrain optimization" />
        <meta property="og:description" content="Explore Saraca's expertise in Off-Highway Vehicles (OHVs) engineering, offering advanced design, digital integration, autonomous solutions, and environmental sustainability. Discover how we enhance performance, efficiency, and safety across industries." />
        <meta property="og:keywords" content="off-highway vehicles engineering, advanced vehicle design, digital integration, IoT sensors, autonomous solutions, safety systems, environmental sustainability, polymer engineering, electrification solutions, powertrain optimization" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute lg:w-2/3 w-full left-0 lg:text-9xl md:text-5xl text-2xl  bg-gradient-to-r from-black to-transparent text-white flex justify-center items-center p-36 font-semibold text-left">Transforming Off-Road Challenges into Engineering Triumphs</div>
        </div>
        <img className="h-full w-full object-cover"
          src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Off-Highway/Off Highway Landing.jpg`}
        />

      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
          <h1 className='text-5xl font-semibold text-center pb-24'>
            Off-Highway Vehicles
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            Off-Highway Vehicles (OHVs) engineering involves the design, development, and optimization of vehicles used primarily in off-road environments, such as construction sites, agricultural fields, mining operations, and forestry. These vehicles include bulldozers, excavators, tractors, dump trucks, and other heavy machinery essential for various industries.
            <br />
            <br />
            In today's digital world, Off-Highway Vehicles engineering plays a crucial role in advancing technological capabilities, improving efficiency, and enhancing safety standards across industries.
          </p>
        </div>
        {/* <div>
          <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
            What We Do
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            At Saraca, we are committed to revolutionizing Off-Highway Vehicles engineering with our comprehensive range of services and solutions to meet the evolving needs of our customers:            <br />
            <br />
            <strong>Advanced Vehicle Design: </strong>Our team of expert engineers specializes in designing Off-Highway Vehicles equipped with state-of-the-art digital technologies, ensuring superior performance, reliability, and durability in rugged environments.            <br />
            <br />
            <strong>Digital Integration and Connectivity: </strong>We leverage the power of digital integration and connectivity to equip Off-Highway Vehicles with IoT sensors, telematics systems, and data analytics platforms for real-time monitoring, remote diagnostics, and predictive maintenance.            <br />
            <br />
            <strong>Safety and Autonomous Solutions: </strong>  Saraca is at the forefront of developing safety-critical systems and autonomous solutions for Off-Highway Vehicles, including collision avoidance systems, operator assistance features, and autonomous operation capabilities, enhancing safety and efficiency on the job site.
            <br />
            <br />
            <strong>Environmental Sustainability: </strong>  We prioritize environmental sustainability by designing Off-Highway Vehicles with low emissions, energy-efficient components, and recyclable materials, contributing to a greener and more sustainable future.
          </p>

        </div> */}

      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Off-Highway Vehicles Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Off-Highway/` + data.imageSrc} />
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
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Off-Highway/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        </div>   
      </div>

      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh]  w-full flex justify-center items-center relative my-24'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2]  transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
            <h1 className='container text-black text-5xl text-center mx-auto relative font-semibold'>Off-Highway Vehicles Services Offerings
              <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
                <i className="fa-solid fa-circle-left"></i>
                back
              </div>

            </h1>
            <div className='flex gap-16 container justify-center items-center min-h-24'>


            </div>
            <div className='container mx-auto flex flex-col lg:flex-row items-center'>
              <div className='flex-1'>
                <ul className='list-disc text-gray-500 font-medium'>
                  {selectedServicesOffering && selectedServicesOffering.content.map((data: string, index: number) => <li key={index} className='text-2xl p-4'>{data}</li>)}

                </ul>

              </div>
              <div className='flex-1 flex flex-col justify-center'>

                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/${selectedServicesOffering?.imageSrc}`} alt="symbol" className='object-contain aspect-square w-[32rem] mx-auto' />
                <h1 className='text-6xl text-black font-semibold text-center'>
                  {selectedServicesOffering && selectedServicesOffering.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={`h-[80vh] w-[80vh] rounded-full ${selectedServicesOffering ? "hidden" : "relative"}`} >
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Off-Highway Vehicles Services Offerings</h1>
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