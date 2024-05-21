
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
    description:
      "  We offer end-to-end product design and development services, from concept generation to prototyping and manufacturing support. Our iterative approach ensures that your product not only meets regulatory standards but also exceeds user expectations.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Engineering Services.svg`,
  },
  {
    heading: "Research & Development",
    description:
      "Through advanced process modeling, simulation, and optimization techniques, we help streamline manufacturing processes, enhance efficiency, and reduce costs without compromising quality or compliance.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/R&D.svg`,
  },
  {
    heading: "Digital Solutions",
    description:
      "Navigating the regulatory landscape can be daunting. Our team is well-versed in regulatory requirements and standards, ensuring that your products and processes meet the rigorous demands of regulatory agencies worldwide.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Digital.svg`,
  },
{
  heading: "Consulting",
  description:"Whether you're facing technical challenges or seeking strategic guidance, our team is here to help. We offer expert technical consulting services tailored to your unique needs, providing insights and solutions that drive innovation and growth.",
  link: "",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Consulting.svg`,
}
];

const medicalCardsData = [{
  title: "Passenger Car",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car.jpg`,
  link: "#"
},

{
  title: "Trucks & Buses",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Truck & Buses.jpg`,
  link: "#"
},
{
  title: "Off-Highway Vehicles",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Off-Highway.jpg`,
  link: "#"
},
{
  title: "Electric Vehicle",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Electric Vehcile.jpg`,
  link: "#"
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
      <div aria-label='landing-image' className="h-[100vh] w-full relative">
      <div
              aria-label="overlay-container"
              className="bg-gradient-to-r from-black to-transparent absolute z-[1] w-full h-[100vh]"
            >
              <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                <div aria-label="content" className="md:text-left">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                   Automotive
                  </h1>
                  <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                   Driving Innovation, Powering Performance: Your Automotive Engineering Partner 
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
        In today's fast-paced digital era, the automotive industry is undergoing a significant transformation. Software has emerged as a key driver, prompting all industry players to rethink their approach to subsystem ownership. With our comprehensive suite of automotive engineering services and solutions, backed by years of experience partnering with automotive OEMs, Tier1 suppliers, we're here to help you navigate the evolving landscape of mobility.
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
      <div aria-label="Our Service Offerings" className="py-24">
        <h1 className="text-5xl md:text-5xl font-semibold text-black text-center">
          Our Service Offerings
        </h1>
        <div className='flex flex-col gap-12 mt-24'>
        {ServiceOfferings.map((data: object, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        </div>
      </div>
      <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-900 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')] py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {DiscoverMoreCardsData.map((data: DiscoverMoreCardsData, index: number) => {
            return (
              <DiscoverMoreCards key={index} imageSrc={data.imageSrc} link={data.link} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Industry