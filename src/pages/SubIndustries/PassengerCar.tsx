import { useState,useEffect } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
// import IndustryCards from "../../components/IndustryCards";
import {Helmet} from "react-helmet"
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';
type medicalCardsData = {
  title: string,
  points: string[],
  imageSrc: string
}

type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}

const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

// type ServicesOfferingsData = {
//   title: string,
//   content: string[]
// }

  const TrendingTechnologiesCards = (data) => {
    return (
      <div className=" w-72 group">
      <div className="h-72 w-72 rounded-full border-2 p-2 group-hover:border-none group-hover:scale-105 transition-transform duration-300">
        <img
          src={data.imageSrc}
          className=" w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>
      <h6 className="text-xl text-white w-full text-center mt-4 group-hover:font-semibold transition-all duration-300">
        {data.title}
      </h6>
    </div>
    )
}

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


const medicalCardsData = [
  {
    title: "Digital Benchmarking", 
    imageSrc:`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car/Benchmarking.jpg`
  },
  {
    title: "Finite Element Analysis (FEA)",  
    imageSrc:`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car/FEA.jpg`
  },
  {
    title: "Database management",  
    imageSrc:`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car/Database.jpg`
  },
  {
    title: "Testing",
    imageSrc:`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car/Testing.jpg`
  },
  {
    title: "Product digitalization and automation",
    imageSrc:`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car/Automation.jpg`
  },
  {
    title: "CAE Solutions",
    imageSrc:`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car/CAE.jpg`
  },
  {
    title: "Motion simulation",
    imageSrc:`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car/Motion.jpg`
  },
  {
    title: "Flow & Thermal characterization (CFD)",
    imageSrc:`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car/Thermal.jpg`
  }
 
]
const Medical = () => {
  // const [selectedServicesOffering, setSelectedServicesOffering] = useState<ServicesOfferingsData | null>(null)
  // const handleSelect = (data: ServicesOfferingsData) => {
  //   setSelectedServicesOffering(data)
  // }
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
      <title>Innovative Passenger Car Solutions by Saraca Solutions</title>
        <meta property="og:title" content="Innovative Passenger Car Solutions by Saraca Solutions" />
        <meta name="description" content="Explore Saraca Solutions' advanced solutions for passenger cars, featuring cutting-edge technologies and strategic services tailored to optimize performance, safety, and comfort. Discover our expertise in automotive engineering and innovative solutions designed to enhance the driving experience." />
        <meta name="keywords" content="Passenger car solutions, Automotive engineering services, Vehicle performance optimization, Automotive safety features, Vehicle comfort enhancements, Advanced automotive technologies, Passenger vehicle innovations, Automotive industry expertise" />
        <meta property="og:description" content="Explore Saraca Solutions' advanced solutions for passenger cars, featuring cutting-edge technologies and strategic services tailored to optimize performance, safety, and comfort. Discover our expertise in automotive engineering and innovative solutions designed to enhance the driving experience." />
        <meta property="og:keywords" content="Passenger car solutions, Automotive engineering services, Vehicle performance optimization, Automotive safety features, Vehicle comfort enhancements, Advanced automotive technologies, Passenger vehicle innovations, Automotive industry expertise" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-full left-0 lg:text-9xl md:text-5xl text-2xl text-white flex justify-center items-center p-36 font-semibold text-center">Where Engineering Meets Mobility</div>
        </div>
        
        <img className="h-full w-full object-fill brightness-75" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Automotive/Passenger Car/Landing.png`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center pb-24'>
          Passenger Car
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        Our Automotive Engineering Services Offering is designed to support clients throughout the product development lifecycle. From comprehensive product design support utilizing optimized CAD/CAE environments to specialized product validation employing best practice methods, we ensure efficient and accurate development processes.      
          </p>
        </div>
        <div>
        <h1 className='text-5xl font-semibold text-center pt-24 pb-24'>
          What We Do
        </h1>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        Saraca brings over a decade of deep expertise in the automotive sector, serving as a trusted partner for engineering services tailored to meet the diverse needs of the industry.
        <br />
        <br />
        1. <strong>Advanced Engineering Technologies:</strong> We enhance the efficiency and performance of passenger cars through advanced simulations, prototyping, and testing methodologies. From powertrain optimization to lightweighting strategies, we optimize every aspect of vehicle design to maximize fuel efficiency and reduce environmental impact.
        <br/>
        <br />
        2. <strong>Digital Integration and Connectivity:</strong> We specialize in integrating smart technologies and connectivity features into passenger cars, creating seamless and intuitive user experiences. From infotainment systems to advanced driver assistance systems (ADAS), we empower our customers with next-generation vehicle capabilities that enhance safety, convenience, and entertainment on the road.
        <br />
        <br />
        3. <strong>Sustainable Mobility Solutions:</strong> We're committed to developing eco-friendly solutions that minimize carbon footprint and promote environmental stewardship. From electric and hybrid vehicle development to sustainable materials sourcing, we're driving the transition towards cleaner, greener transportation options for a better tomorrow.

        </p>
        </div>
       
      </div>

      {/* <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-6xl text-center font-semibold">Passenger Car Segments</h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/`+data.imageSrc} />
            )
          })}
        </div>
      </div> */}


      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh]  w-full flex justify-center items-center relative my-24'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2]  transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
          <h1 className='container text-black text-5xl text-center mx-auto relative'>Passenger Car Services Offerings
            <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
              <i className="fa-solid fa-circle-left"></i>
              back
            </div>

          </h1>
          <div className='flex gap-16 constainer justify-center items-center min-h-24'>
            <div className='h-full'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Aerospace/${selectedServicesOffering?.imageSrc}`} alt="symbol" className='object-contain aspect-square max-h-72' />
            </div>
            <p className='text-7xl flex-1 tracking-wide'>
              {selectedServicesOffering && selectedServicesOffering.title}
            </p>
          </div>
          <div className='container mx-auto'>
            {selectedServicesOffering && selectedServicesOffering.content.map((data: string, index: number) => <li key={index} className='text-2xl p-4 text-gray-600'>{data}</li>)}
          </div>
          </div>
        </div>
        <div className={`h-[80vh] w-[80vh] rounded-full ${selectedServicesOffering ? "hidden" : "relative"}`} >
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Passenger Car Services Offerings</h1>
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

      <div aria-label="trending-technologies-section" className={`w-full bg-cyan-950 py-24 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/trending-technologies-pattern.svg')] bg-cover`}>
                <h1 className="text-white text-5xl font-semibold text-center">Service Offerings</h1>
                <div className="container flex flex-wrap justify-center items-start mt-24 mx-auto gap-8">
                    {medicalCardsData.map((data) => TrendingTechnologiesCards(data))}
                </div>
      </div>
    </div>
  )
}

export default Medical