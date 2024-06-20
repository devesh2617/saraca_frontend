
import DiscoverMoreCards from '../components/DiscoverMoreCards';
import WhereWeServeCards from "../components/WhereWeServeCards";
import ServiceOfferingsCards from "../components/ServicesOfferingsCards";
import { useEffect, useRef } from 'react';
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
    heading: "Design & Prototyping",
    description:
      "  We offer end-to-end product design and development services, from concept generation to prototyping and manufacturing support. Our iterative approach ensures that your product not only meets regulatory standards but also exceeds user expectations.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/Design and Prototypin.svg`,
  },
  {
    heading: "Process Optimization",
    description:
      "Through advanced process modeling, simulation, and optimization techniques, we help streamline manufacturing processes, enhance efficiency, and reduce costs without compromising quality or compliance.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/Process.svg`,
  },
  {
    heading: "Digital Twin Implementation",
    description:
      "Navigating the regulatory landscape can be daunting. Our team is well-versed in regulatory requirements and standards, ensuring that your products and processes meet the rigorous demands of regulatory agencies worldwide.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/Digital.svg`,
  },
  {
    heading: "Strategic Consultancy",
    description:" Quality is paramount in the life science industry. We provide comprehensive quality assurance and validation services to ensure that your products and processes adhere to the highest standards of reliability, safety, and efficacy.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/Consulting.svg`,
  }
];

const medicalCardsData = [{
  title: "ASIC/FPGA Design & Development",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/ASIC.jpg`,
  link: "/Industry/Semiconductor/ASIC_FPGA_Design&Development"
},

// {
//   title: "Verification & Validation",
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/V&V.jpg`,
//   link: "/Industry/Semiconductor/Verification&Validation"
// },
{
  title: "Physical Design",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/Physical Design.jpg`,
  link: "/Industry/Semiconductor/PhysicalDesign"
},
{
  title: "DFT",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/Physical Design.jpg`,
  link: "/Industry/Semiconductor/DFT"
}
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
  const ref = useRef<HTMLVideoElement|null>(null)
  useEffect(()=>{
    ref.current?.addEventListener('loadeddata', ()=>ref.current?.play());
  },[ref.current])
  return (
    <div>
      <div aria-label='landing-image' className="h-[100vh] w-full relative">
      <div
              aria-label="overlay-container"
              className="absolute z-[1] w-full h-[100vh]"
            >
              <div className="h-full w-full flex justify-center items-center p-24">
                <div aria-label="content" className="md:text-left text-center">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold">
                   Semiconductor
                  </h1>
                  <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal text-center">
                  Transforming Ideas into Integrated Circuits
                  </p>
                  
                </div>
              </div>
            </div>
        
            <video  
                  ref = {ref}
                  className="h-full w-full object-cover"
                  autoPlay={true}
                  loop
                  playsInline
                  muted
                >
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Semiconductor/Landing.mp4`} type="video/mp4" />
                </video>
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center'>
        Fusing Science with Silicon
        </h1>
        <p className='container text-3xl mx-auto px-8 text-gray-600 mt-24 leading-normal'>
        With over a decade of deep expertise in the semiconductor industry, SARACA offers comprehensive engineering services for custom SoCs (Systems on Chip) and ASICs (Application Specific Integrated Circuits). Our expertise in AI, Machine Learning, and Natural Language Processing fuels expansion in the semiconductor and electronic product market. We provide end-to-end, ensuring high performance and reliability.
        <br />
        <br />
        We support the United Nations Sustainable Development Goals (SDG 9) by promoting resilient infrastructure, sustainable industrialization, and innovation.
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
      {/* <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')] py-24`}>
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