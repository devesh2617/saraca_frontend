import { Helmet } from "react-helmet"
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
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/IOT.webp`,
  title: "IOT",
  link: "/Service/Digital/IOT"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/CyberSecurity.webp`,
  title: "CyberSecurity",
  link: "/Service/Digital/Cybersecurity"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability.webp`,
  title: "Sustainability",
  link: "/Service/Digital/Sustainability"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry4.0.webp`,
  title: "Indutry 4.0",
  link: "/Service/Digital/Industry4.0"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Artificial Intelligence.webp`,
  title: "Artificial Intelligence",
  link: "/Service/Digital/ArtificialIntelligence"
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
          <img loading="lazy" src={data.imageSrc} className='object-cover max-w-[30rem] aspect-square'/>
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
        <title>Leading Digital Technology Solutions | Saraca</title>
        <meta
          property="og:title"
          content="Leading Digital Technology Solutions | Saraca"
        />
        <meta
          name="description"
          content="Discover Saraca's cutting-edge digital technology solutions, including IoT, cybersecurity, sustainability, Industry 4.0, and artificial intelligence. We empower businesses with innovative engineering services for the digital era."
        />
        <meta
          name="keywords"
          content="digital technology solutions, IoT services, cybersecurity solutions, sustainability initiatives, Industry 4.0 advancements, artificial intelligence in engineering, digital engineering paradigm, hardware software synergy"
        />
        <meta
          property="og:description"
          content="Discover Saraca's cutting-edge digital technology solutions, including IoT, cybersecurity, sustainability, Industry 4.0, and artificial intelligence. We empower businesses with innovative engineering services for the digital era."
        />
        <meta
          property="og:keywords"
          content="digital technology solutions, IoT services, cybersecurity solutions, sustainability initiatives, Industry 4.0 advancements, artificial intelligence in engineering, digital engineering paradigm, hardware software synergy"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className=" aspect-video w-full relative">
      <div
              aria-label="overlay-container"
              className="bg-gradient-to-r from-black to-transparent absolute z-[1] inset-0"
            >
              <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                <div aria-label="content" className="md:text-left max-w-full">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                   Digital
                  </h1>
                  <p className="text-white text-2xl mt-16 w-full hidden lg:block leading-normal">
                   Let's make the world digital
                  </p>
                  
                </div>
              </div>
            </div>
        
        <img loading="lazy" className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Landing.webp`} />
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8'>
          Digital Technology
        </h1>
        <p className='container text-3xl mx-auto p-8 text-gray-600 leading-normal'>
        We live in a digital era. New advancements in communications, data processing, and data storage technology are driving the next frontiers of progress. As global engineering services are refined by the continuing rise of emerging technologies and ongoing developments in the digital technologies. Virtual realms are reshaping the way products are designed, developed, and manufactured. In this dynamic environment, the future belongs to the next level of synergy between hardware and software, underscoring the need for a robust digital engineering paradigm. As the world evolves and demand patterns mature, the future, therefore, will be defined by the new age solutions and offerings of companies that can leverage the capabilities unlocked by digital engineering.
        <br/>
        <br/>
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
        <p className='container text-3xl mx-auto p-8 text-gray-600 leading-normal'>
        At SARACA, we believe in a collaborative approach, working closely with our clients to understand their unique needs, challenges, and aspirations. Through transparent communication, meticulous planning, and agile methodologies, we ensure timely delivery of solutions that exceed expectations and drive tangible results.         </p>
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