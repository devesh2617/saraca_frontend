
import WhereWeServeCards from "../components/WhereWeServeCards";
import {Helmet} from "react-helmet";
import ServiceOfferingsCards from "../components/ServicesOfferingsCards"
type medicalCardsData = {
  title: string,
  link: string,
  imageSrc: string
}



const ServiceOfferings = [
  {
    heading: "Engineering Services",
    content:["Mechanical Engineering","Electrical Engineering","Systems Engineering","Aerospace Structural Analysis","Aerodynamics and Fluid Dynamics"],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Engineering.svg`,
  },
  {
    heading: "Research & Development",
    content:["Advanced Materials Research","Sensor Technology Development","Autonomous Systems","Satellite Communications","Space Exploration Technologies"],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/R&D.svg`,
  },
  {
    heading: "Digital Solutions",
    content:["Data Analytics and Visualization","Cybersecurity Solutions","Cloud Computing","Internet of Things (IoT) Integration","Artificial Intelligence and Machine Learning"],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/digital.svg`,
  },
  {
    heading: "Tech Pub",
    content:["Technical illustrations", "Technical Authoring", "Multimedia"],
    link: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Tech Pub.png`,
  },
{
  heading: "Consulting",
  content:["Strategic Planning","Regulatory Compliance","Market Analysis","Supply Chain Management","Risk Assessment and Mitigation"],
  link: "",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Consultng.svg`,
}
];

const medicalCardsData = [{
  title: "Aerospace",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/aerospace.jpg`,
  link: "/Industry/Aerospace&Defense/Aerospace"
},

{
  title: "Defence",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Defense.jpg`,
  link: "/Industry/Aerospace&Defense/Defense"
},
{
  title: "Space",
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industries/Aerospace & Defense/Space.jpg`,
  link: "/Industry/Aerospace&Defense/Space"
}]



const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy</title>
        <meta property="og:title" content="Privacy Policy" />
        {/* <meta name="description" content="Explore Saraca Solutions' cutting-edge offerings in aerospace and defense industries, delivering innovative solutions and advanced technologies to meet the sector's unique challenges and requirements." />
        <meta name="keywords" content="Aerospace solutions, Aerospace engineering, Defense innovations, Aerospace industry, Defense sector, Aerospace systems, Defense solutions" />
        <meta property="og:description" content="Explore Saraca Solutions' cutting-edge offerings in aerospace and defense industries, delivering innovative solutions and advanced technologies to meet the sector's unique challenges and requirements." />
        <meta property="og:keywords" content="Aerospace solutions, Aerospace engineering, Defense innovations, Aerospace industry, Defense sector, Aerospace systems, Defense solutions" /> */}
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label='landing-image' className="aspect-video w-full relative">
      <div
              aria-label="overlay-container"
              className="bg-gradient-to-r from-black to-to-transparent absolute z-[1] w-full inset-0"
            >
              <div className="md:w-1/2 h-full flex justify-start items-center p-24">
                <div aria-label="content" className="md:text-right">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold">
                   Privacy Policy
                  </h1>
                  {/* <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                  Aviate, Navigate, Communicate
                  </p> */}
                  
                </div>
              </div>
            </div>
        
        <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/privacy-policy.jpg`} />
      
      </div>
      <div aria-label='what-we-do' className='container w-full py-24'>
        <div>
        <h1 className='text-5xl font-semibold text-left'>
        1. Introduction    
        </h1>
        <p className='text-3xl mx-auto text-gray-600 mt-12 leading-normal'>
        Welcome to SARACA. We are committed to protecting and respecting your privacy. This Privacy Notice
explains how we collect, use, disclose, and safeguard your information when you visit our website or use
our services. Please read this notice carefully to understand our views and practices regarding your
personal data and how we will treat it. 
     
       </p>
       <h1 className='text-5xl font-semibold text-left mt-12'>
        2. Information We Collect   
        </h1>
       <p className='text-3xl mx-auto text-gray-600 mt-12 leading-normal'>
       <strong className='text-left mt-12'>
        a. Personal Information:
        </strong>
        <ul className=" list-inside list-disc">
            <li>
                Name
            </li>
            <li>
                Email Address
            </li>
            <li>
                Phone Number
            </li>
            <li>
                Address
            </li>
            <li>
                Country
            </li>
            <li>
                Industry
            </li>
            <li>
                Message
            </li>
        </ul>
     
       </p>
       <h1 className=' mt-12 text-5xl font-semibold text-left'>
        3. How We Collect Information
        </h1>
        <p className='text-3xl mx-auto text-gray-600 mt-12 leading-normal'>
        <strong>a. Directly from you:</strong> Information you provide when filling out contact us form, communicating
with us 
     
       </p>
       <h1 className=' mt-12 text-5xl font-semibold text-left'>
        4. Use of Your Information
        </h1>
        <p className='text-3xl mx-auto text-gray-600 mt-12 leading-normal'>
        We use the information we collect in the following ways:
        <ul className=" list-inside list-disc">
            <li>To provide, operate, and maintain our services</li>
            <li>To improve, personalize, and expand our services</li>
            <li>To communicate with you, including for customer service, updates, and promotional purposes</li>
        </ul>
       </p>
       <h1 className=' mt-12 text-5xl font-semibold text-left'>
        5. Sharing Your Information
        </h1>
        <p className='text-3xl mx-auto text-gray-600 mt-12 leading-normal'>
        We may share your information with:
        <ul className=" list-inside list-disc">
            <li><strong>Service Providers:</strong> To assist us in providing and supporting our services.</li>
            <li><strong>Affiliates:</strong> To deliver services or products you have requested.</li>
        </ul>
       </p>
       <h1 className=' mt-12 text-5xl font-semibold text-left'>
        6. Data Security
        </h1>
        <p className='text-3xl mx-auto text-gray-600 mt-12 leading-normal'>
        We implement appropriate technical and organizational measures to protect your personal data against
unauthorized access, disclosure, alteration, and destruction. However, no security measure is perfect, and
we cannot guarantee absolute security.
       </p>
        </div>
      </div>

      {/* <div aria-label="medical-device-segments" className="min-h-[50vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24">
        <h1 className="text-white text-5xl font-semibold text-center">Where We Serve</h1>
        <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <WhereWeServeCards key={index} title={data.title} link={data.link} imageSrc={data.imageSrc} />
            )
          })}
        </div>
      </div> */}
      {/* <div aria-label="Our Service Offerings" className="my-24 container">
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
      </div> */}
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

export default PrivacyPolicy