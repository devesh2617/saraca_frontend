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
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Engineering.svg`,
  },
  {
    heading: "Research & Development",
    description:
      "Through advanced process modeling, simulation, and optimization techniques, we help streamline manufacturing processes, enhance efficiency, and reduce costs without compromising quality or compliance.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/R&D.svg`,
  },
  {
    heading: "Digital Solutions",
    description:
      "Navigating the regulatory landscape can be daunting. Our team is well-versed in regulatory requirements and standards, ensuring that your products and processes meet the rigorous demands of regulatory agencies worldwide.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/digital.svg`,
  },
  {
    heading: "Tech Pub",
    description:" Quality is paramount in the life science industry. We provide comprehensive quality assurance and validation services to ensure that your products and processes adhere to the highest standards of reliability, safety, and efficacy.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Consultng.svg`,
  },
{
  heading: "Consulting",
  description:"Whether you're facing technical challenges or seeking strategic guidance, our team is here to help. We offer expert technical consulting services tailored to your unique needs, providing insights and solutions that drive innovation and growth.",
  link: "",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Consultng.svg`,
}
];

const medicalCardsData = [{
  title: "Aerospace",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/aerospace.jpg`,
  link: "/Industry/Aerospace&Defense/Aerospace"
},

{
  title: "Defence",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Defense.jpg`,
  link: "/Industry/Aerospace&Defense/Defense"
},
{
  title: "Space",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Space.jpg`,
  link: "/Industry/Aerospace&Defense/Space"
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
              className="bg-gradient-to-r from-transparent to-black absolute z-[1] w-full h-[100vh]"
            >
              <div className="md:w-1/2 h-full flex justify-start items-center p-24 float-right">
                <div aria-label="content" className="md:text-right">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-right">
                   Aerospace & Defence
                  </h1>
                  <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                  Aviate, Navigate, Communicate
                  </p>
                  
                </div>
              </div>
            </div>
        
        <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Landing.jpg`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center'>
        Engineering the future of Aerospace, Defence & Space
          
        </h1>
        <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24 leading-normal'>
        With over a decade of experience, SARACA is a global leader in engineering services, offering innovative and cost-effective solutions. We specialize in the Aerospace, Defense, and Space industries, excelling in mechanical engineering, embedded systems, software development, and testing. Our team of experienced engineers and designers understands the unique challenges of modern Aerospace and Defense companies, enabling us to deliver customized solutions that meet diverse customer needs. 
        <br />
        <br />
        In the Aerospace, Defense, and Space industry, we provide full-service support from product development and design to manufacturing and assembly operations. We focus on "Right First Time" processes, ensuring quality and efficiency from concept to product launch.
       </p>
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
        {ServiceOfferings.map((data, index: number) => (
          <ServiceOfferingsCards
            cardsData={data}
            imageSrc={data.imageSrc}
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