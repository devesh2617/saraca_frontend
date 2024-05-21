
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
    heading: "Product Design and Development",
    description:
      "  We offer end-to-end product design and development services, from concept generation to prototyping and manufacturing support. Our iterative approach ensures that your product not only meets regulatory standards but also exceeds user expectations.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Product Design & Development.svg`,
  },
  {
    heading: "Process Optimisation",
    description:
      "Through advanced process modeling, simulation, and optimization techniques, we help streamline manufacturing processes, enhance efficiency, and reduce costs without compromising quality or compliance.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Process Optimisation.svg`,
  },
  {
    heading: "Regulatory Compliances",
    description:
      "Navigating the regulatory landscape can be daunting. Our team is well-versed in regulatory requirements and standards, ensuring that your products and processes meet the rigorous demands of regulatory agencies worldwide.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Regulatory.svg`,
  },
  {
    heading: "Quality Assurance and Validation",
    description:" Quality is paramount in the life science industry. We provide comprehensive quality assurance and validation services to ensure that your products and processes adhere to the highest standards of reliability, safety, and efficacy.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Quality.svg`,
  },
{
  heading: "Technical Consulting",
  description:"Whether you're facing technical challenges or seeking strategic guidance, our team is here to help. We offer expert technical consulting services tailored to your unique needs, providing insights and solutions that drive innovation and growth.",
  link: "",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Technical.svg`,
}
];

const medicalCardsData = [{
  title: "Medical Devices",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`,
  link: "#"
},

{
  title: "Pharmaceutical",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharma.jpg`,
  link: "#"
},
{
  title: "Healthcare Applications",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Healthcare Application.jpg`,
  link: "#"
}]
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
                   Life Science
                  </h1>
                  <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                   Engineering solutions for Life Sciences Excellence
                  </p>
                  
                </div>
              </div>
            </div>
        
        <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.jpg`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center'>
          Innovating Life Science Through Technology
        </h1>
        <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24 leading-normal'>
        We specialize in providing cutting-edge engineering services tailored specifically to the dynamic and ever-evolving life science sector. With a steadfast commitment to innovation, excellence, and client satisfaction, we empower life science organizations to thrive in today's competitive landscape. From pharmaceuticals to biotechnology, medical devices to healthcare technologies, we possess the knowledge and skills necessary to tackle the most complex engineering challenges.        </p>
        </div>
      </div>

      <div aria-label="medical-device-segments" className="min-h-[50vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-5xl font-semibold text-center">Where We Serve</h1>
        <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto">
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
      <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')] py-24`}>
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