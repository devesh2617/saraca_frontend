// import { useState } from 'react';
// import DiscoverMoreCards from '../../components/DiscoverMoreCards';
import IndustryCards from "../../components/IndustryCards";
import ServiceOfferingsCards from "../../components/ServicesOfferingsCards.tsx"
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
//   content: string[],

// }

const medicalCardsData = [{
  title: "Avionics",
  points: [
    "Communications",
    "Navigations",
    "Monitoring",
    "Flight Control System",
    "Fuel Management Systems",
    "Flight Recorders",
    "Aircraft Management Systems",
    "RADAR/Surveillance",
    "Aircraft networks",
    "Mission Computer",
    "Power Control Systems"
  ],
  imageSrc: "Avionics.png"
},

{
  title: "Exteriors",
  points: [
    "Landing Gears",
    "Doors and Actuations",
    "Hydraulics",
    "Lighting Systems",
    "Aerostructures"
  ],
  imageSrc: "Digital.jpg"
},
{
  title: "MRO",
  points: [
    "Aircraft Maintenance",
    "Aircraft Repair",
    "Assembly/Disassembly",
    "Inspection",
    "Process Improvement",
    "Quality Control/Assurance",
    "Manufacturing Engineering"
  ],
  imageSrc: "MRO.jpg"
},
{
  title: "Digital",
  points: [
    "Data Analyst",
    "Application Development",
    "Hybris Development"
  ],
  imageSrc: "Digital.jpg"
},
{
  title: "Interiors",
  points: [
    "Seating System",
    "Lighting System",
    "Video Systems",
    "Harness and Cabling",
    "Overhead Structures",
    "Evacuation Systems",
    "Technical Publications"
  ],
  imageSrc: "Interiors.png"
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
    title: "Embedded",
    content: [
      "New product development",
      "Low level development – BSP, DD",
      "Application development",
      "ADAS",
      "IOT Systems development"
    ],
    imageSrc: "Embedded.svg"
  },
  {
    title: "Technical Publications",
    content: [
      "Technical illustrations",
      "Technical Authoring",
      "Multimedia"
    ],
    imageSrc: "TechPub.svg"
  },
  {
    title: "Manufacturing Engineering",
    content: [
      "Concurrent/Process Engineering",
      "Tools, Jigs and Fixture Designing",
      "Transfer of Technology (TOT)",
      "Manufacturing Transfers",
      "Sourcing Activities",
      "Assembly Engineering"
    ],
    imageSrc: "Manufacturing.svg"
  },
  {
    title: "Mechanical Engineering",
    content: [
      "New Product Development",
      "Value Engineering",
      "Reverse Engineering",
      "Finite Element Analysis",
      "Sustenance Engineering",
      "Structural Engineering",
      "Systems Engineering",
      "Post Launch Follow-up"
    ],
    imageSrc: "Mechnaical.svg"
  },
  {
    title: "Software Engineering",
    content: [
      "New product development",
      "Safety critical software’s",
      "HMI development",
      "ATE Application development",
      "Front and back end development",
      "Full Stack development"
    ],
    imageSrc: "Software.svg"
  },
  {
    title: "Quality Engineering",
    content: [
      "Product design control",
      "Supplier quality assurance",
      "QMS development",
      "DHF Remediation",
      "Regulatory assessment"
    ],
    imageSrc: "Quality.svg"
  }


]
const Medical = () => {
  // const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  // const handleSelect = (data: ServicesOfferingsData) => {
  //   setSelectedServicesOffering(data)
  // }
  return (
    <div>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full bg-gradient-to-r from-black to-transparent absolute lg:w-2/3 w-full left-0 lg:text-9xl md:text-5xl text-2xl text-white flex justify-center items-center p-36 font-semibold text-left">Smart Solutions for Illumination, Security, and Efficiency</div>
        </div>
        
        <video  
                  
                  className="h-full w-full object-cover"
                  autoPlay={true}
                  loop
                  playsInline
                  muted
                >
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Consumer/Appliances/Landing.mp4`} type="video/mp4" />
                </video>
      
      </div>
    
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
          <h1 className='text-5xl font-semibold text-center pb-24'>
            Appliances
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            From initial concept and design to prototyping, testing, and final production, we are dedicated to ensuring that your consumer products meet the highest standards of quality, functionality, and market appeal. Whether you're developing household appliances, electronics, personal care products, or any other consumer goods, Saraca has the knowledge and experience to bring your vision to life.
          </p>
        </div>
        <div>
          <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
            What We Do
          </h1>
          <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            <strong>Consumer Electronics:</strong>
            <br />
            Consumer electronics have become very common in our daily lives, seamlessly integrating into our homes, offices, and beyond. As these products evolve to become smarter, they are reshaping the way we interact with our environment. Saraca collaborates with consumer electronics companies, providing essential design, electronics, connectivity, and programming support to enhance digital interaction and user experience.
            <br /><br />
            <br />
            <strong>Lighting:</strong><br />
            Saraca empowers manufacturers of lamps and luminaires by:
            <br />
            <ul className=" list-disc list-inside">
            <li>Implementing wired & wireless connectivity protocols such as DALI, DMX, Zigbee, BLE, 6LoPAN, WiFi, and PoE</li>
            <li>Integration with diverse commercial and open-source home-automation IoT platforms</li>
            <li>Development of mobile & web applications for control, monitoring, and analytics</li>
            <li>Cloud enablement</li>
            <li>Over-The-Air upgrades</li>
            </ul><br /><br />
            
            <strong>Home Automation & Security:</strong><br />
            Home automation systems streamline management of climate, lighting, security, entertainment, and more. Saraca collaborates with companies in this sector by:
            <ul className=" list-disc list-inside">
            <li>Integrating with various commercial and open-source home-automation IoT platforms</li>
            <li>Enabling connectivity protocols like Zigbee, BLE, and WiFi</li>
            <li>Developing mobile & web applications for control, monitoring, and analytics</li>
            <li>Cloud enablement</li>
            <li>Over-The-Air upgrades</li>
            </ul>
            <br />
            <br />
            <strong>Home & Industrial Appliances:</strong><br />
            Saraca partners with manufacturers of home & commercial appliances for cooking, cleaning, and food preservation, facilitating:
            <br />
            <ul className=" list-inside list-disc">
            <li>Development of mobile & web applications for control, monitoring, and analytics</li>
            <li>Integration with Building Automation Systems</li>
            <li>Integration with various commercial and open-source home-automation IoT platforms</li>
            <li>Enablement of connectivity protocols like Zigbee, BLE, and WiFi</li>
            <li>Cloud enablement</li>
            <li>Over-The-Air upgrades</li>
            </ul>
          </p>
        </div>

      </div>

      {/* <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Aerospace Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Consumer/Appliances` + data.imageSrc} />
            )
          })}
        </div>
      </div> */}


      {/* <div aria-label="Our Service Offerings" className="my-24 container">
        <h1 className="text-5xl md:text-8xl text-black text-center font-semibold">
          Our Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-12">
        {ServiceOfferings.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
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