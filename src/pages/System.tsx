import {Helmet} from "react-helmet"
import DiscoverMoreCards from '../components/DiscoverMoreCards';

type DiscoverMoreCardsData = {
  imageSrc: string,
  link: string
}

type ServiceOfferings = {
  imageSrc: string,
  link: string,
  title: string
}

const ServiceOfferings = [
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/MBD.jpg`,
  title: "MBD",
  link: "/Service/System/MBD"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/Test.jpg`,
  title: "System Testing",
  link: "/Service/System/SystemTesting"
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

const serviceOfferingCards = (data: ServiceOfferings) => {
  return (
    <a href={data.link}>
      <div className='bg-white rounded-xl overflow-hidden'>
          <img src={data.imageSrc} className='object-cover max-w-[30rem] aspect-square'/>
          <h1 className=' font-bold text-center text-2xl py-4'>
            {data.title}
          </h1>
         </div>
    </a>   
  )
}

const Industry = () => {
  return (
    <div>
      <Helmet>
        <title>System Engineering Services | Saraca Solutions</title>
        <meta
          property="og:title"
          content="System Engineering Services | Saraca Solutions"
        />
        <meta
          name="description"
          content="Explore Saraca's comprehensive system engineering services, including MBD (Model-Based Design) and system testing across aerospace, automotive, healthcare, and telecommunications industries."
        />
        <meta
          name="keywords"
          content="System engineering services, MBD, system testing, complex systems design, aerospace, automotive, healthcare, telecommunications, system architecture, requirements analysis, integration, Saraca Solutions"
        />
        <meta
          property="og:description"
          content="Explore Saraca's comprehensive system engineering services, including MBD (Model-Based Design) and system testing across aerospace, automotive, healthcare, and telecommunications industries."
        />
        <meta
          property="og:keywords"
          content="System engineering services, MBD, system testing, complex systems design, aerospace, automotive, healthcare, telecommunications, system architecture, requirements analysis, integration, Saraca Solutions"
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
                   System
                  </h1>
                  <p className="text-white text-2xl mt-16 w-full hidden lg:block leading-normal">
                  Fostering Innovation via Integrated System Engineering
                  </p>
                  
                </div>
              </div>
            </div>
        
            <video  
                  
                  className="h-full w-full object-cover"
                  autoPlay={true}
                  loop
                  playsInline
                  muted
                >
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/System/Landing.mp4`} type="video/mp4" />
                </video>
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8'>
          System Engineering
        </h1>
        <p className='container text-2xl mx-auto p-8 text-gray-600 leading-normal'>
        System engineering is a multidisciplinary approach to designing and managing complex systems over their entire lifecycle. It encompasses various engineering disciplines, such as mechanical, electrical, software, and structural engineering, along with considerations for system architecture, requirements analysis, testing, and integration.
        <br/>
        <br/>
        It is applied across various industries, including aerospace, automotive, Défense, healthcare, and telecommunications, to develop complex systems such as aircraft, spacecraft, automobiles, medical devices, and large-scale infrastructure projects. It aims to ensure that systems are designed, built, and operated in a systematic and cost-effective manner to meet the needs of stakeholders and users.
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
        At Saraca, we are committed to revolutionizing the System Engineering domain with our innovative solutions and cutting-edge technologies. Our team of experts combines industry expertise with technical excellence to deliver transformative solutions that address the evolving needs of our clients.         </p>
        </div>
      </div>

      
      
      {/* <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')]`}>
        <h1 className="text-white text-6xl text-center font-semibold py-12">Discover More</h1>
        <div className=" mt-16 w-full flex justify-evenly flex-wrap gap-8">
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