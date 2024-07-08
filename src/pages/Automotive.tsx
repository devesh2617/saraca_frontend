import {Helmet} from "react-helmet"
import DiscoverMoreCards from '../components/DiscoverMoreCards';
import WhereWeServeCards from "../components/WhereWeServeCards";
import ServiceOfferingsCards from "../components/ServicesOfferingsCards"
type medicalCardsData = {
  title: string,
  link: string,
  imageSrc: string
}
type DiscoverMoreCardsData = {
  imageSrc: string,
  link: string
}


const ServiceOfferings = [
  {
    heading: "Engineering Services",
    content:["Conceptualization and Design: From ideation to execution, we bring your automotive visions to life through innovative design solutions.","Product Development: Our expertise spans the entire product development lifecycle, delivering cutting-edge solutions that exceed expectations.","Prototyping and Testing: Utilizing advanced methodologies, we ensure the reliability and performance of automotive components and systems.","Manufacturing Support: We provide comprehensive support throughout the manufacturing process, optimizing efficiency and quality."],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Engineering Services.svg`,
  },
  {
    heading: "Research & Development",
    content:["Advanced Technology Integration: Stay ahead of the curve with our integration of emerging technologies, such as SDV, ADAS, EV, AI, IoT, and advanced materials.","Performance Enhancement: Enhance vehicle performance and efficiency through our research-driven approaches and optimization techniques.","Sustainability Solutions: Embrace sustainability with our eco-friendly initiatives and development of green automotive technologies."],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/R&D.svg`,
  },
  {
    heading: "Digital Solutions",
    content:["Digital Twin Development: Leverage the power of digital twins for virtual simulations, predictive maintenance, and performance optimization.","Data Analytics and Insights: Harness the potential of data-driven insights to make informed decisions and drive business growth.","Connectivity and IoT Solutions: Transform your automotive ecosystem with seamless connectivity and IoT-enabled solutions for enhanced user experiences."],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Digital.svg`,
  },
{
  heading: "Consulting",
  content:["Strategic Planning: Benefit from our industry expertise and strategic insights to navigate market challenges and capitalize on opportunities.","Regulatory Compliance: Ensure compliance with global regulatory standards and industry guidelines such as ISO 26262 with our expert guidance and support.","Voice of customers: Frontend assessment of customer requirements to understand the adoption of latest technologies such as feasibility of global ADAS on Indian roads."],
  link: "",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Consulting.svg`,
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

const DiscoverMoreCardsData = [{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
  link: "#"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
  link: "#"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
  link: "#"
}]

const Industry = () => {
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
        To take advantage of the expanding opportunities brought forth by new technologies like electrification, C2X, digital cockpit, and autonomous driving, automakers and suppliers are looking for engineering services partners. SARACA is equipped to adapt to shifting market demands and provide value to your product development process with our wide variety of automotive engineering and design services, products, and solution accelerators.
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
      {/* <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-900 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')] py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
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

export default Industry