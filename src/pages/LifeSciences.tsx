import {Helmet} from "react-helmet"
import DiscoverMoreCards from '../components/DiscoverMoreCards';
import WhereWeServeCards from "../components/WhereWeServeCards";
import ServiceOfferingsCards from "../components/ServicesOfferingsCards"
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
  link: string,
  type: string
}

const discoverMoreIds = [
  '4fd646bc-d101-47a1-abeb-86484844dcae',
  '28bbf14e-71ee-499a-834f-fff62fd8bd5f',
  'c21ea5e6-dfd7-476e-a205-564b9a075ff3',
  '166c327f-8d03-49ef-b267-53c830e21c8c',
  '89378fc0-eba6-480b-8051-6d3f33763578',
  '2de7bf5b-ae52-41ac-99c6-1ca8344af3b9'
]

const ServiceOfferings = [
  {
    heading: "Product Design and Development",
    description:
      "  We offer end-to-end product design and development services, from concept generation to prototyping and manufacturing support. Our iterative approach ensures that your product not only meets regulatory standards but also exceeds user expectations.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Product Design & Development.webp`,
  },
  {
    heading: "Process Optimisation",
    description:
      "Through advanced process modeling, simulation, and optimization techniques, we help streamline manufacturing processes, enhance efficiency, and reduce costs without compromising quality or compliance.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Process Optimisation.webp`,
  },
  {
    heading: "Regulatory Compliances",
    description:
      "Navigating the regulatory landscape can be daunting. Our team is well-versed in regulatory requirements and standards, ensuring that your products and processes meet the rigorous demands of regulatory agencies worldwide.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Regulatory.webp`,
  },
  {
    heading: "Quality Assurance and Validation",
    description:" Quality is paramount in the life science industry. We provide comprehensive quality assurance and validation services to ensure that your products and processes adhere to the highest standards of reliability, safety, and efficacy.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Quality.webp`,
  },
{
  heading: "Technical Consulting",
  description:"Whether you're facing technical challenges or seeking strategic guidance, our team is here to help. We offer expert technical consulting services tailored to your unique needs, providing insights and solutions that drive innovation and growth.",
  link: "",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Technical.webp`,
}
];

const medicalCardsData = [{
  title: "Medical Devices",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.webp`,
  link: "/Industry/LifeSciences/MedicalDevices"
},

{
  title: "Pharmaceutical",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Pharma.webp`,
  link: "/Industry/LifeSciences/Pharmaceuticals"
},
{
  title: "Healthcare Applications",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Healthcare Application.webp`,
  link: "/Industry/LifeSciences/HealthcareApplications"
}]



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
      <title>Innovating Life Science Through Technology | Industry</title>
        <meta property="og:title" content="Innovating Life Science Through Technology | Industry" />
        <meta name="description" content="We specialize in providing cutting-edge engineering services tailored specifically to the dynamic and ever-evolving life science sector. With a steadfast commitment to innovation, excellence, and client satisfaction, we empower life science organizations to thrive in today's competitive landscape." />
        <meta name="keywords" content="Lifescience, life science, Medical Devices, Pharmaceuticals, Healthcare Applications, Product Design Development, Process Optimization, Regulatory Compliances, Quality Assurance and Validation, Technical Consulting" />
        <meta property="og:description" content="We specialize in providing cutting-edge engineering services tailored specifically to the dynamic and ever-evolving life science sector. With a steadfast commitment to innovation, excellence, and client satisfaction, we empower life science organizations to thrive in today's competitive landscape." />
        <meta property="og:keywords" content="Lifescience, life science, Medical Devices, Pharmaceuticals, Healthcare Applications, Product Design Development, Process Optimization, Regulatory Compliances, Quality Assurance and Validation, Technical Consulting" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className="aspect-video w-full relative">
      <div
              aria-label="overlay-container"
              className="bg-gradient-to-r from-black to-transparent absolute z-[1] w-full inset-0"
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
        
        <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/LifeSciences/Landing.webp`} />
      
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
        <h1 className="text-white text-6xl font-semibold text-center">Where We Serve</h1>
        <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto">
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
      <div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} type={data.type} />
            )
          })}
        </div>
      </div> 
    </div>
  )
}

export default Industry