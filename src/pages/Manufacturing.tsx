
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
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/1.svg`,
  title: "Machining Strategy",
  link: ""
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/2.svg`,
  title: "Supply Chain Management",
  link: ""
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/3.svg`,
  title: "Process Engineering",
  link: ""
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/4.svg`,
  title: "Project Management",
  link: ""
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/5.svg`,
  title: "Manufacturing Transfer",
  link: ""
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
    <div className='bg-white w-[16rem] rounded-xl overflow-hidden'>
          <img src={data.imageSrc} className='w-full object-cover min-h-52'/>
          <h1 className=' font-bold text-center text-2xl py-4'>
            {data.title}
          </h1>
         </div>
  )
}

const Industry = () => {
  return (
    <div>
      <div aria-label='landing-image' className="h-[100vh] w-full relative">
      <div
              aria-label="overlay-container"
              className="bg-gradient-to-r from-black to-transparent absolute z-[1] w-full h-[100vh]"
            >
              <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                <div aria-label="content" className="md:text-left max-w-full">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                   Manufacturing
                  </h1>
                  <p className="text-white text-2xl mt-16 w-full hidden lg:block leading-normal">
                  Engineering Precision, Powering Progress
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
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Manufacturing/Landing.mp4`} type="video/mp4" />
                </video>
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8'>
          Manufacturing Engineering
        </h1>
        <p className='container text-2xl mx-auto p-8 text-gray-600 leading-normal'>
        In today's digital world, Manufacturing Engineering plays a pivotal role in driving competitiveness and sustainability for businesses. By leveraging cutting-edge technologies such as automation, robotics, IoT, and data analytics, Manufacturing Engineering enables organizations to streamline production, reduce costs, accelerate time-to-market, and adapt to rapidly changing market dynamics.
        <br/>
        <br/>
        It involves the design, development, and implementation of innovative solutions aimed at improving productivity, quality, and efficiency in manufacturing operations.
         </p>
        </div>
      </div>

      <div aria-label='our-service-offerings' className='w-full py-24 bg-cyan-600'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8 text-white'>
          Our Service Offerings 
        </h1>
        <div className=' mt-16 w-full flex justify-evenly flex-wrap gap-8'>
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
        At Saraca, we are committed to pioneering significant innovations in the Manufacturing Engineering sector. Our focus lies in harnessing the power of digitalization and advanced engineering methodologies to revolutionize traditional manufacturing processes, paving the way for increased agility, scalability, and resilience in the industry.         </p>
        </div>
      </div>

      
      
      <div aria-label="discover more section" className={`min-h-[80vh] w-full bg-cyan-700 bg-[url('${import.meta.env.VITE_REACT_APP_API_URL}/cube-background.svg')]`}>
        <h1 className="text-white text-6xl text-center font-semibold py-12">Discover More</h1>
        <div className=" mt-16 w-full flex justify-evenly flex-wrap gap-8">
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