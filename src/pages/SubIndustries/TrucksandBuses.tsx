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
  title: "Vehicle Design and Development",
  points: [
    "From conceptualization to prototyping, we leverage cutting-edge technologies and industry insights to create vehicles that exceed expectations in performance, durability, and sustainability."
  ],
  imageSrc: "Avionics.png"
},
 
{
  title: "Powertrain Optimization",
  points: [
    "We specialize in enhancing powertrain systems to maximize fuel efficiency, reduce emissions, and enhance overall vehicle performance, ensuring your fleet operates at peak efficiency levels."
  ],
  imageSrc: "Digital.jpg"
},
{
  title: "Safety Solutions",
  points: [
    "Safety is paramount in the Trucks and Buses sector. Our team is dedicated to implementing state-of-the-art safety features and technologies to mitigate risks and ensure the well-being of drivers, passengers, and pedestrians alike."
  ],
  imageSrc: "MRO.jpg"
},
{
    title: "Customized Solutions",
    points: [
      "Recognizing that each client has unique requirements, we offer tailor-made engineering solutions that address specific challenges and deliver measurable results, helping you stay ahead in a competitive market landscape."
    ],
    imageSrc: "Digital.jpg"
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
    imageSrc:"Embedded.svg"
  },
  {
    title: "Technical Publications",
    content: [
      "Technical illustrations",
      "Technical Authoring",
      "Multimedia"
    ],
    imageSrc:"TechPub.svg"
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
    imageSrc:"Manufacturing.svg"
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
    imageSrc:"Mechnaical.svg"
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
    imageSrc:"Software.svg"
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
    imageSrc:"Quality.svg"
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
          <div className="h-full absolute w-full left-0 text-9xl text-white flex justify-center items-center p-36 font-semibold text-center">
Efficiency, Safety, Sustainability - Engineered for Success</div>
        </div>
        
        <video  
                  
                  className="h-full w-full object-cover"
                  autoPlay={true}
                  loop
                  playsInline
                  muted
                >
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Truck and Buses/Landing.mp4`} type="video/mp4" />
                </video>      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
          Trucks and Buses
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        SARACA, where we specialize in engineering services tailored for trucks and buses. Trucks and buses engineering involves the design, development, and optimization of vehicles specifically tailored for transportation and logistics purposes. In today's digital world, the importance of trucks and buses engineering cannot be overstated.
        <br/>
        <br/>
        In the digital age, transportation is undergoing significant transformation. Efficiency, safety, and sustainability have become paramount concerns for fleet operators and manufacturers alike. Trucks and buses engineering plays a crucial role in addressing these challenges by leveraging advanced technologies and innovative solutions.
          </p>
        </div>
        <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        We are dedicated to delivering premier engineering solutions tailored specifically to the dynamic needs of the Trucks and Buses sector. With a commitment to innovation, reliability, and efficiency, we stand as a trusted partner for companies seeking excellence in vehicle design, performance enhancement, and safety optimization.
        <br />
        <br />
1. <strong>Advanced Vehicle Design:</strong> We employ state-of-the-art engineering techniques and software to design trucks and buses that prioritize fuel efficiency, aerodynamics, and safety without compromising performance.
<br/>
<br />
2. <strong>Digital Integration:</strong> Our engineering solutions incorporate cutting-edge digital technologies such as IoT sensors, telematics, and predictive analytics to enable real-time monitoring, remote diagnostics, and predictive maintenance, enhancing fleet management capabilities.
<br />
<br />
3. <strong>Electrification and Alternative Fuels:</strong> Recognizing the growing importance of sustainability, we focus on developing electric and hybrid propulsion systems as well as exploring alternative fuel options to reduce emissions and minimize environmental impact.
<br />
<br />
4. <strong>Autonomous and Connected Vehicles:</strong> We are at the forefront of research and development in autonomous and connected vehicle technologies, paving the way for safer and more efficient transportation systems through features like adaptive cruise control, collision avoidance systems, and vehicle-to-vehicle communication.
<br />
<br />
5. <strong>Customized Solutions:</strong> Our team works closely with clients to understand their unique requirements and challenges, delivering customized engineering solutions that address specific needs and optimize fleet operations.
        </p>
        </div>
       
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Trucks and Buses Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/`+data.imageSrc} />
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
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Truck and Buses/${data.imageSrc}`}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        </div>   
      </div>
      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh]  w-full flex justify-center items-center relative my-24'>
      <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2]  transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
            <h1 className='container text-black text-5xl text-center mx-auto relative font-semibold'>Truck and Buses Services Offerings
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
                <h1 className='text-6xl text-gray-400 font-semibold text-center'>
                  {selectedServicesOffering && selectedServicesOffering.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={`h-[80vh] w-[80vh] rounded-full ${selectedServicesOffering ? "hidden" : "relative"}`} >
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Trucks and Buses Services Offerings</h1>
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