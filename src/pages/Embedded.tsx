import {Helmet} from "react-helmet"
import DiscoverMoreCards from '../components/DiscoverMoreCards';
import { useEffect, useState } from 'react';
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';

// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}

type ServiceOfferings = {
  imageSrc: string,
  link: string,
  title: string
}

const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

const ServiceOfferings = [
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/5.webp`,
  title: "Hardware",
  link: "/Service/Embedded/Hardware"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/6.webp`,
  title: "Firmware",
  link: "/Service/Embedded/Firmware"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/7.webp`,
  title: "Verification & Validation",
  link: "/Service/Embedded/VerificationandValidation"
}
]

// const DiscoverMoreCardsData = [{
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//   link: "#"
// },
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//   link: "#"
// },
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.webp`,
//   link: "#"
// }]

const serviceOfferingCards = (data: ServiceOfferings) => {
  return (
    <a href={data.link}>
      <div className='bg-white rounded-xl overflow-hidden'>
          <img loading = "lazy" src={data.imageSrc} className='object-cover max-w-[30rem] aspect-square'/>
          <h1 className=' font-bold text-center text-2xl py-4'>
            {data.title}
          </h1>
         </div>
    </a>   
  )
}

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
        <title>Embedded Engineering Services | Hardware, Firmware, V&V | Saraca</title>
        <meta
          property="og:title"
          content="Embedded Engineering Services | Hardware, Firmware, V&V | Saraca"
        />
        <meta
          name="description"
          content="Explore Saraca's Embedded Engineering services encompassing hardware development, firmware design, and rigorous verification & validation. Drive innovation and competitiveness with our scalable embedded solutions."
        />
        <meta
          name="keywords"
          content="Embedded engineering services, hardware development, firmware design, verification and validation, embedded systems, IoT devices, regulatory compliance, software testing, embedded software quality"
        />
        <meta
          property="og:description"
          content="Explore Saraca's Embedded Engineering services encompassing hardware development, firmware design, and rigorous verification & validation. Drive innovation and competitiveness with our scalable embedded solutions."
        />
        <meta
          property="og:keywords"
          content="Embedded engineering services, hardware development, firmware design, verification and validation, embedded systems, IoT devices, regulatory compliance, software testing, embedded software quality"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className="w-full aspect-video relative">
      <div
              aria-label="overlay-container"
              className=" from-black to-transparent absolute z-[1] inset-0"
            >
              <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                <div aria-label="content" className="md:text-left max-w-full">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                   Embedded
                  </h1>
                  <p className="text-white text-2xl mt-16 w-full hidden lg:block leading-normal">
                   Engineering Intelligence, Embedded in Every Device
                  </p>
                  
                </div>
              </div>
            </div>
        
        <img loading = "lazy" className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Embedded/landing.webp`} />
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8'>
          Embedded Engineering
        </h1>
        <p className='container text-2xl mx-auto p-8 text-gray-600 leading-normal'>
        Embedded engineering involves the development and testing of software that operates commercial and consumer devices, from an aircraft cockpit display to an MRI machine to the Bluetooth radio in a smartphone. Embedded engineering requires expertise in a different set of operating systems, programming models, communication protocols and regulatory requirements than for standalone computers. 
        <br/>
        <br/>
        Embedded engineering offers several business advantages. Firstly, it helps companies speed up their product launch timelines and ensures compliance with regulations, allowing them to seize opportunities for premium pricing and expanded market presence ahead of competitors. Additionally, our embedded engineering capabilities drives profitability by cutting down software development and testing expenses while enhancing the overall quality of embedded software. This, in turn, minimizes support costs and contributes to improved profitability for businesses.
         </p>
        </div>
      </div>

      <div aria-label='our-service-offerings' className='w-full py-24 bg-cyan-600'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8 text-white'>
          Our Service Offerings 
        </h1>
        <div className=' mt-16 w-full flex justify-center flex-wrap gap-24'>
         {ServiceOfferings.map((data:ServiceOfferings)=>serviceOfferingCards(data))}
        </div>
        </div>
      </div>

      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8'>
          Our Approach
        </h1>
        <p className='container text-2xl mx-auto p-8 text-gray-600 leading-normal'>
        At Saraca, we are dedicated to pioneering groundbreaking innovations in the Embedded Engineering sector. Our team of experts leverages cutting-edge technologies and industry best practices to develop robust, scalable, and future-proof embedded solutions that drive value and competitiveness for our clients.         </p>
        </div>
      </div>
      <div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div> 
    </div>
  )
}

export default Industry