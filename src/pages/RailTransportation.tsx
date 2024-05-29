
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
    title: "HW/SW Development and Testing",
    content: [
      "Hardware Development and Testing across the life cycle including ASIC/FPGA design and redesign activities for cost/component optimization",
      "Firmware Development",
      "User Interface (UI) Design",
      "3D modeling & rendering services and 3D product animation services",
      "Finite Element Analysis — FEA services",
      "Application Software Development/ porting/ integration",
      "Board Support Package(BSP) for a variety of processors like ARM and OS for Linux, VxWorks, Android, and FreeRTOS"
    ],
    imageSrc: "HW_SW_Development.svg"
  },
  {
    title: "Technical Documentation",
    content: [
      "Create or modify illustrations, CAD file to Illustration",
      "Raster to vector conversion; photo editing",
      "Creation of Electronic and Illustrated Parts catalogs",
      "Development of 3D Modelling and Animation",
      "Legacy conversion/archive of documents",
      "Language Translations",
      "Authoring new technical content on IFUs and related processes, including translation and version control management systems",
      "Production phase- Print, CD Proofing, and release"
    ],
    imageSrc: "TechnicalDocumentation.svg"
  },
  {
    title: "System Development",
    content: [
      "Software Development and Testing across the life cycle for a range of (sub-) system such as TCMS, HMI, displays, ATE/ATB, or simulators",
      "RAMS Services as per EN 50126, EN 50128, and EN 50129 standards, including PHA, FMECA, RCM, RGA, and safety planning",
      "Design and mock-up, analysis, and space management",
      "Integration including build support and change management across systems",
      "System Verification and Validation",
      "Product Certifications"
    ],
    imageSrc: "SystemDevelopment.svg"
  },
];


const medicalCardsData = [{
  title: "Rolling Stock",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Rolling Stock.jpg`,
  link: "/Industry/RailTransportation/RollingStocks"
},

{
  title: "Signalling",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Signalling.jpg`,
  link: "/Industry/RailTransportation/Signalling"
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
          <div className="md:w-3/4 h-full flex justify-start items-center p-24">
            <div aria-label="content" className="md:text-left">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                Rail Transportation
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Empowering Rails, Engineering Futures                  
              </p>
            </div>
          </div>
        </div>

        <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Rail Transportation/Landing.jpg`} />


      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
          <h1 className='text-5xl font-semibold text-center'>
            Digital Rail System
          </h1>
          <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24 leading-normal'>
            The rail industry is currently experiencing significant changes driven by the integration of various technologies aimed at achieving cost efficiency, strong designs, and compliance with safety standards. To meet these goals, the adoption of connected and resource-efficient systems is crucial. However, the industry also recognizes the necessity for new products and services to create a modernized experience. Key areas of digitalization in the rail sector include improvements in passenger interfaces, mobile apps, e-ticketing, automated train supervision, cybersecurity, driverless trains, and predictive maintenance.</p>
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
          What we do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-12">
        {ServiceOfferings.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/RailTransportation/${data.imageSrc}`}
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