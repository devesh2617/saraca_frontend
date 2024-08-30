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
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/1.webp`,
  title: "Design & Development",
  link: "/Service/Mechanical/Design&Development"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/2.webp`,
  title: "CAD/CAE/CFD/CAM",
  link: "/Service/Mechanical/CAD_CAM"
},
// {
//   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/3.svg`,
//   title: "CAx Automation",
//   link: ""
// }
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
        <title>Mechanical Engineering Solutions | Saraca</title>
        <meta
          property="og:title"
          content="Mechanical Engineering Solutions | Saraca"
        />
        <meta
          name="description"
          content="Explore Saraca's mechanical engineering services, including design, CAD/CAE/CFD/CAM solutions, and development. Our expertise drives efficiency, productivity, and innovation across diverse industrial sectors"
        />
        <meta
          name="keywords"
          content="mechanical engineering solutions, CAD services, CAE services, CFD solutions, CAM services, mechanical design, mechanical development, industrial innovation, efficiency in engineering, productivity enhancement, sustainability in engineering"
        />
        <meta
          property="og:description"
          content="Explore Saraca's mechanical engineering services, including design, CAD/CAE/CFD/CAM solutions, and development. Our expertise drives efficiency, productivity, and innovation across diverse industrial sectors"
        />
        <meta
          property="og:keywords"
          content="mechanical engineering solutions, CAD services, CAE services, CFD solutions, CAM services, mechanical design, mechanical development, industrial innovation, efficiency in engineering, productivity enhancement, sustainability in engineering"
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
                   Mechanical
                  </h1>
                  <p className="text-white text-2xl mt-16 w-full hidden lg:block leading-normal">
                  Designing the world for a better tomorrow
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Mechanical/Landing.mp4`} type="video/mp4" />
                </video>
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8'>
          Mechanical Engineering
        </h1>
        <p className='container text-2xl mx-auto p-8 text-gray-600 leading-normal'>
        Mechanical Engineering is the cornerstone of industrial innovation, encompassing the design, development, and optimization of mechanical systems and processes. In today's dynamic landscape, Mechanical Engineering drives progress, efficiency, and sustainability across diverse sectors.
        <br/>
        <br/>
        Mechanical Engineering serves as the bedrock of innovation, underpinning the design and operation of machinery, manufacturing processes, and infrastructure. It ensures reliability, performance, and safety in the built environment, fostering progress and economic growth.
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
        <p className='text-2xl mx-auto p-8 text-gray-600 leading-normal'>
        At Saraca, we are committed to spearheading advancements in Mechanical Engineering. Our team of skilled engineers harnesses cutting-edge technologies and best practices to deliver transformative solutions that elevate efficiency, productivity, and competitiveness for our clients.        </p>
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