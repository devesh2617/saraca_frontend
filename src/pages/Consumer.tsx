
import DiscoverMoreCards from '../components/DiscoverMoreCards';
import IndustryCards from "../components/IndustryCards";
import ServiceOfferingsCards from "../components/ServicesOfferingsCards"
import { useEffect, useState } from 'react';
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';
type medicalCardsData = {
  title: string,
  points: string[],
  imageSrc: string
}
// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}
const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

const ServiceOfferings = [
  {
    title: "QTST",
    heading: "Quick Talent Search Tool",
    description:
      "It’s an idea to transform talent search method to more interactive and swift manner. With AI identifying the resumes best suited for position provides confidence to recruiters for sharing resumes to account managers. Interactive dashboard allows BU heads and Team Leads track account summary.",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/qtst-laptop.png`,
  },
  {
    title: "X1 Platform",
    heading: "Driving tomorrows innovation today",
    description:
      "Elevating automotive excellence with AGL: Powered instrument cluster, infotainment, and telematics system",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/image 8.png`,
  },
  {
    title: "eFlexSpine",
    heading: "Advancing Precision, Surgeon Well-being & Patient- Centricity in spinal surgery",
    description:
      "A significant stride in spinal surgery, this innovative system is poised to redefine the landscape of treating degenerative disorders, deformities like scoliosis, and trauma indications in the human spine",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/image 6.png`,
  },
  {
    title: "FastPMCF",
    heading: "Accelerating Insights, Elevating Excellence",
    description:"Transforming PMCF surveys for swift clinical evidence feedback",
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/image 5.png`,
  },
];

const medicalCardsData = [{
  title: "Orthopaedic, Spine, and Trauma",
  points: [
    "Joint replacements - Knee, Hips, Ankle implants and instruments",
    "Spine - Thoracic, Lumber, Cervical, Pedicle Screw Systems, Interbody Devices, 3D printed implants",
    "Trauma - Plates, Screws, MIS intruments",
    "Navigation systems - Surgical Robots, Surgery Navigation Software Systems"
  ],
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-modern-hospital-physical-therapy-patient-with-injury-walks-wearing-advanced-robotic-exoskeleton-2029416683.jpg`
},

{
  title: "Orthopaedic, Spine, and Trauma",
  points: [
    "Joint replacements - Knee, Hips, Ankle implants and instruments",
    "Spine - Thoracic, Lumber, Cervical, Pedicle Screw Systems, Interbody Devices, 3D printed implants",
    "Trauma - Plates, Screws, MIS intruments",
    "Navigation systems - Surgical Robots, Surgery Navigation Software Systems"
  ],
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-inovation-design-engineer-and-doctor-team-diverse-industries-expert-programming-and-robotic-hand-1879601818.jpg`
},
{
  title: "Orthopaedic, Spine, and Trauma",
  points: [
    "Joint replacements - Knee, Hips, Ankle implants and instruments",
    "Spine - Thoracic, Lumber, Cervical, Pedicle Screw Systems, Interbody Devices, 3D printed implants",
    "Trauma - Plates, Screws, MIS intruments",
    "Navigation systems - Surgical Robots, Surgery Navigation Software Systems"
  ],
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-modern-hospital-physical-therapy-patient-with-injury-walks-wearing-advanced-robotic-exoskeleton-2029416683.jpg`
}]

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
      <div aria-label='landing-image' className="h-[100vh] w-full relative">
      <div
              aria-label="overlay-container"
              className="bg-gradient-to-r from-black to-transparent absolute z-[1] w-full h-[100vh]"
            >
              <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                <div aria-label="content" className="md:text-left">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                   Consumers
                  </h1>
                  <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                   Engineering solutions for Consumers
                  </p>
                  
                </div>
              </div>
            </div>
        
        <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/MedicalDevices.png`} />
      
      </div>
      <div aria-label='what-we-do' className='w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-center'>
          Innovating Life Science Through Technology
        </h1>
        <p className='container text-3xl mx-auto p-8 text-gray-600'>
        We specialize in providing cutting-edge engineering services tailored specifically to the dynamic and ever-evolving life science sector. With a steadfast commitment to innovation, excellence, and client satisfaction, we empower life science organizations to thrive in today's competitive landscape. From pharmaceuticals to biotechnology, medical devices to healthcare technologies, we possess the knowledge and skills necessary to tackle the most complex engineering challenges.        </p>
        </div>
      </div>

      <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-12">
        <h1 className="text-white text-8xl text-center pb-12">What We Serve</h1>
        <div className="container grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mx-auto gap-16">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <IndustryCards key={index} title={data.title} points={data.points} imageSrc={data.imageSrc} />
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
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div> 
    </div>
  )
}

export default Industry