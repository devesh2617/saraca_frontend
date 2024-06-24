
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
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/IOT.png`,
  title: "IOT",
  link: "/Service/Digital/IOT"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/CyberSecurity.png`,
  title: "CyberSecurity",
  link: "/Service/Digital/Cybersecurity"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Sustainability.png`,
  title: "Sustainability",
  link: "/Service/Digital/Sustainability"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Industry4.0.png`,
  title: "Indutry 4.0",
  link: "/Service/Digital/Industry4.0"
},
{
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Artificial Intelligence.png`,
  title: "Artificial Intelligence",
  link: "/Service/Digital/ArtificialIntelligence"
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
       <div className='bg-white w-[16rem] rounded-xl overflow-hidden'>
          <img src={data.imageSrc} className='w-full object-cover min-h-52'/>
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
        
        <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/Services/Digital/Landing.png`} />
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-6xl font-semibold text-center mb-8'>
          Digital Technology
        </h1>
        <p className='container text-2xl mx-auto p-8 text-gray-600 leading-normal'>
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
        At SARACA, we believe in a collaborative approach, working closely with our clients to understand their unique needs, challenges, and aspirations. Through transparent communication, meticulous planning, and agile methodologies, we ensure timely delivery of solutions that exceed expectations and drive tangible results.         </p>
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