import { useState,useEffect } from 'react';
import DiscoverMoreCards from '../../components/DiscoverMoreCards';
//import IndustryCards from "../../components/IndustryCards";
import { Helmet } from "react-helmet";
import ServiceOfferingsCards from "@/components/ServicesOfferingsCards";
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';

// type medicalCardsData = {
//     title: string,
//     points: string[],
//     imageSrc: string
// }

// type DiscoverMoreCardsData = {
//   imageSrc: string,
//   link: string
// }

// type ServicesOfferingsData = {
//   title: string,
//   content: string[]
// }
type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}

const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

// const medicalCardsData = [{
//     title: "Orthopaedic, Spine, and Trauma",
//     points: [
//         "Joint replacements - Knee, Hips, Ankle implants and instruments",
//         "Spine - Thoracic, Lumber, Cervical, Pedicle Screw Systems, Interbody Devices, 3D printed implants",
//         "Trauma - Plates, Screws, MIS intruments",
//         "Navigation systems - Surgical Robots, Surgery Navigation Software Systems"
//     ],
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-modern-hospital-physical-therapy-patient-with-injury-walks-wearing-advanced-robotic-exoskeleton-2029416683.jpg`
// },

// {
//     title: "Cardiovascular and Radiology",
//     points: [
//         "Cardiac Rhythm Management (CRM) - pacemaker and defibrillators",
//         "Patient Monitors Systems",
//         "Heart Valves, and Stents",
//         "Perfusion Packs and Urology",
//         "Heart lungs machine and Oxygenator",
//         "X-ray, MRI, and Ultrasound Systems",
//         "Hospital Beds, Physiotherapy Systems",
//         "Ophthalmic and ENT Products"
//     ],
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-modern-hospital-physical-therapy-patient-with-injury-walks-wearing-advanced-robotic-exoskeleton-2029416683.jpg`
// },
// {
//     title: "In-vitro Diagnostics",
//     points: [
//         "Transfusion Medicine",
//         "Immunodiagnostic System",
//         "Chemistry System",
//         "Remote Patient Monitoring",
//         "Laboratory Automation & IT",
//         "Point of Care Diagnostics",
//         "Molecular Diagnostics",
//         "Clinical Chemistry"
//     ],
//     imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/stock-photo-modern-hospital-physical-therapy-patient-with-injury-walks-wearing-advanced-robotic-exoskeleton-2029416683.jpg`
// }]

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

const ServiceOfferings = [
  {
    title: "Remote Patient Monitoring Software",
    description:
      "RPM helps healthcare providers take care of their patients in a better way, even outside regular office visits. Patients use devices like heart monitors and blood pressure cuffs to track their health, sending the data to their doctor through their phone or other electronic ways. With RPM, many people are actively managing their chronic conditions every day, making it a useful tool in modern healthcare. This tech has made healthcare easier and more accessible, especially for older adults or those recovering from surgeries.",
    imageSrc: "Remote Patient Monitoring Software.jpg",
  },
  {
    title: "Medical Diagnosis Software",
    description:
      "Medical diagnosis software (MDS) or medical diagnosis apps frequently use artificial intelligence (AI) technology. Industry stats suggest that the global market for artificial intelligence in diagnostics is expected to grow steadily at about 20% each year from 2023 to 2032. By 2032, it's projected to hit around $8 billion. During the pandemic, medical diagnosis apps for patients have been helpful. They guide patients with their symptoms and advise if they should go to the hospital. These apps usually consist of simple questionnaires. Medical providers can use diagnostic software to share patient data in a way that keeps it anonymous. This helps to fill in any information gaps, leading to more accurate diagnoses in the end.",
    imageSrc: "Medical Diagnosis Software.jpg",
  },
  {
    title: "Electronic Health Record (EHR)",
    description:
      "Healthcare providers have been adopting certified electronic health records (EHR) more in recent years, according to HealthIT reports. In 2021, about 70% of office-based doctors and 90% of federal acute care hospitals had adopted Electronic Health Records (EHRs). This is a big jump from 2011 when about 25% of acute care hospitals and 30% of doctors used EHRs. Electronic health records (EHR) systems have revolutionized patient information management and are widely adopted by healthcare providers. These systems replace paper medical records and offer all the necessary functions for storing patient information. EHRs enable medical professionals to securely store and access patient data, ensuring that information can be easily shared among healthcare providers. This interoperability means doctors don’t have to ask for the same information repeatedly, which improves patient care and leads to more accurate diagnoses. Additionally, EHR software often includes features for managing billing and payment details, streamlining the administrative side of healthcare. Overall, electronic health records allow for efficient data management, reducing errors and safety hazards.",
    imageSrc: "Electronic Health Record (EHR).jpg",
  },
  {
    title: "Medical Imaging Software",
    description:
      "Medical imaging technology, part of telehealth, adds image-based info to existing data sets. With AI and Machine Learning, data processing speeds up. Examples are X-ray, CT, or MRI scans. It's vital for finding diseases that aren't visible externally. Medical imaging helps doctors catch potential health issues early. Software allows healthcare pros to manage, store, and share images securely. Exciting things are happening in healthcare with apps that make 3D models of human anatomy and even create medical devices or body parts using medical imaging. These advances show a lot of promise for the future of healthcare.",
    imageSrc: "Medical Imaging Software.jpg",
  },
  {
    title: "Surgery Software",
    description:
      "Robots are not new in complex surgeries. Thousands of successful surgeries have been performed with their help. These robots, known as robotically assisted surgical devices (RAS), allow surgeons to control instruments through very small incisions in the patient’s body. They're great for many types of surgeries because they're minimally invasive. However, it's important to understand that the robots themselves can't perform surgeries. It's the surgeons operating the programs who are the real brains behind the entire operation.",
    imageSrc: "Surgery Software.jpg",
  },
];
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
        <title>Healthcare Applications | Life Sciences</title>
        <meta
          property="og:title"
          content="Healthcare Applications | Life Sciences"
        />
        <meta
          name="description"
          content="Our deep expertise in ER&D, combined with a comprehensive understanding of healthcare dynamics enables us to develop impactful software solutions."
        />
        <meta
          name="keywords"
          content="Healthcare Applications, Remote Patient Monitoring Software, Medical Diagnosis Software, Electronic Health Record (EHR), Medical Imaging Software, Surgery Software"
        />
        <meta
          property="og:description"
          content="Our deep expertise in ER&D, combined with a comprehensive understanding of healthcare dynamics enables us to develop impactful software solutions."
        />
        <meta
          property="og:keywords"
          content="Healthcare Applications, Remote Patient Monitoring Software, Medical Diagnosis Software, Electronic Health Record (EHR), Medical Imaging Software, Surgery Software"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className=" aspect-video w-full relative">
        <div className="absolute z-[1] w-full h-full">
          <div className="h-full absolute w-1/2 left-0 lg:text-9xl md:text-5xl text-2xl text-white flex justify-center items-center p-36 font-semibold text-left">
            Leading the Way in Healthcare Software Solutions
          </div>
        </div>

        <img
          className="h-full w-full object-cover"
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Industries/LifeSciences/HealthcareApplications/HealthcareApplications.jpg`}
        />
      </div>
      <div aria-label="what-we-do" className="w-full pt-24">
        <div>
          <h1 className="text-5xl font-semibold text-center pb-24">
            Healthcare Applications
          </h1>
          <p className="container text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            Our deep expertise in ER&D, combined with a comprehensive
            understanding of healthcare dynamics enables us to develop impactful
            software solutions.
            <br />
            <br />
            From streamlining patient care to enhancing clinical workflows,
            improving communication between healthcare providers and patients,
            and optimizing overall healthcare delivery, our range of
            applications spans a wide spectrum. We're dedicated to making a
            meaningful impact on patient outcomes and revolutionizing healthcare
            delivery through cutting-edge solutions.
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-semibold text-center pt-24 pb-24">
            What We Do
          </h1>
          <p className="container text-3xl mx-auto text-gray-600 leading-normal tracking-wide">
            At Saraca, we are committed to contributing to the healthcare sector
            by offering innovative engineering services for the unique
            requirements of healthcare applications:
            <br />
            <br />
            <strong>Custom Application Development:</strong> We specialize in
            developing custom healthcare applications that address specific
            clinical and operational challenges, from electronic health record
            (EHR) systems to patient portals and mobile health apps.
            <br />
            <br />
            <strong>Interoperability Solutions:</strong> We design and implement
            interoperable solutions that facilitate seamless data exchange and
            integration across disparate healthcare systems and platforms,
            ensuring interoperability and data continuity.
            <br />
            <br />
            <strong>Security and Compliance:</strong> We prioritize data
            security and regulatory compliance by implementing robust security
            measures and adhering to industry standards and regulations such as
            HIPAA (Health Insurance Portability and Accountability Act) to
            safeguard patient data and protect against cybersecurity threats.
            <br />
            <br />
            <strong>User Experience Design:</strong> We focus on creating
            intuitive and user-friendly interfaces that enhance user experience
            and engagement, fostering patient empowerment and provider
            satisfaction.
          </p>
        </div>
      </div>

      {/* <div aria-label="medical-device-segments" className="min-h-[100vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
                <h1 className="text-white text-6xl text-center font-semibold">Medical Device Segments</h1>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 mt-24">
                    {medicalCardsData.map((data: medicalCardsData, index: number) => {
                        return (
                            <IndustryCards key={index} title={data.title} points={data.points} imageSrc={data.imageSrc} />
                        )
                    })}
                </div>
            </div> */}
      <div aria-label="Our Service Offerings" className="my-24 container">
        <h1 className="text-5xl md:text-8xl text-black text-center font-semibold">
          Our Service Offerings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-24 gap-12 wrapper">
          {ServiceOfferings.map((data, index: number) => (
            <ServiceOfferingsCards
              cardsData={data}
              imageSrc={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/Industries/LifeSciences/HealthcareApplications/${
                data.imageSrc
              }`}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>

      {/* <div aria-label='medical-device-service-offerings' className='min-h-[120vh] w-full flex justify-center items-center relative'>
        <div aria-label='content-section' className={` ${selectedServicesOffering ? "relative" : "hidden"} top-0 left-0 w-full h-full z-[2] transition-all duration-500 ease-linear flex justify-center items-center`}>
          <div className='container'>
          <h1 className='container text-black font-semibold text-5xl text-center mx-auto relative'>Medical Devices Services Offerings
            <div className='absolute left-0 text-lg top-1/2 -translate-y-1/2 p-2 flex gap-2 items-center cursor-pointer' onClick={() => setSelectedServicesOffering(null)}>
              <i className="fa-solid fa-circle-left"></i>
              back
            </div>

          </h1>
          <div className='flex gap-16 constainer justify-center items-center mt-24 min-h-24'>
            <div className='h-full'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/Medical Kit.svg`} alt="symbol" className='h-full w-full' />
            </div>
            <p className='text-8xl'>
              {selectedServicesOffering && selectedServicesOffering.title}
            </p>
          </div>
          <div className='container mx-auto mt-16'>
            {selectedServicesOffering && selectedServicesOffering.content.map((data: string, index: number) => <li key={index} className='text-2xl p-4 text-gray-600'>{data}</li>)}
          </div>
          </div>
        </div>
        <div className={`h-[80vh] w-[80vh] rounded-full ${selectedServicesOffering ? "hidden" : "relative"}`} >
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-center font-semibold'>Medical Devices Services Offerings</h1>
          <div className='h-full w-full relative -left-1/2 flex justify-center items-center'>

            {medicalServiceOfferings.map((data: any, index: number) => {
              return (
                <div className={`h-[15vh] w-[15vh] border-2 rounded-full absolute z-1`} style={{ transformOrigin: "47.5vh", transform: `rotate(${360 / medicalServiceOfferings.length * index + 1}deg)` }}>
                  <div className='group/icon w-full h-full rounded-full bg-white' style={{ transform: `rotate(${-(360 / medicalServiceOfferings.length * index + 1)}deg)` }}>
                    <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Medical/${data.imageSrc}`} className='h-full w-full rounded-full object-scale-down' />
                    <div className='absolute hidden inset-0 bg-black rounded-full bg-opacity-80 group-hover/icon:flex justify-center items-center text-center overflow-hidden text-white' onClick={() => handleSelect(data)}>{data.title}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div> */}
      {/*<div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div>*/} 
    </div>
  );
};

export default Medical;
