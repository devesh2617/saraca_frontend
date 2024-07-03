import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonialCards from "../components/TestimonialCards"
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import NewsBlogsCards from "../components/NewsBlogsCards";
import WhyChooseUsCards from "../components/WhyChooseUsCards";

type whyChooseUsCardsData = {
  imageSrc: string;
  title: string;
  content:string;
}
const whyChooseUsCardsData = [
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/WhyChooseUs/51.png`,
    title: "Strategy",
    content: "",
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/WhyChooseUs/52.png`,
    title: "Customer Satisfaction",
    content: "",
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/WhyChooseUs/53.png`,
    title: "Flexibility",
    content: "",
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/WhyChooseUs/54.png`,
    title: "Speed",
    content: "",
  },
]
const mediaArray = [
  {
    type: "image",
    name: "Automotive.png",
    heading: "Automotive",
    subheading:
      "As the automotive landscape evolves towards future mobility, we stand ready to assist. Saraca's automotive engineering services, design expertise, and solution accelerators ensure your products align with evolving market expectations, adding value throughout the development lifecycle.",
    link: "/Industry/Automotive",
  },
  {
    type: "image",
    name: "Semiconductor.png",
    heading: "Semiconductor",
    subheading:
      "Companies are recognizing the significance of software and services linked to chipsets, facilitating swift adoption of hardware platforms by OEMs during this era of technological convergence. The AI chipset market is experiencing rapid growth due to widespread acceptance and accelerated development cycles driven by applications and associated technology stacks.",
    link: "/Industry/Semiconductor",
  },
  {
    type: "image",
    name: "Railway.jpg",
    heading: "Railways",
    subheading:
      "The rail industry is experiencing significant transformation driven by technology convergence, aiming for cost-efficiency, robust designs, and safety compliance. Key areas of digitalization in rail encompass passenger interfaces, mobile apps, e-ticketing, automated train supervision, cybersecurity, driverless trains, and predictive maintenance.",
    link: "/Industry/RailTransportation",
  },
  {
    type: "image",
    name: "Aerospace.png",
    heading: "Aerospace",
    subheading:
      "Addressing technology challenges in unmanned aerial systems, SARACA leverages its deep domain knowledge in aerospace engineering. The skilled workforce excels in digital technologies, solving critical problems in aerospace, Défense, and space product development. Through a Design Thinking process, OEMs and suppliers can expedite design cycles, improve safety and efficiency, boost profit margins, and transition into a future-ready organization.",
    link: "/Industry/Aerospace&Defense",
  },
  {
    type: "image",
    name: "MedicalDevices.png",
    heading: "Medical Device",
    subheading:"Leveraging cutting-edge technologies, businesses are reducing operational costs and improving processes. Secure connectivity, automation, and data analytics have the potential to elevate patient value and alleviate the societal burden of disease.",
    link: "/Industry/LifeSciences/MedicalDevices",
  },
  // {
  //   type: "image",
  //   name: "Industrial.jpg",
  //   heading: "Industrial",
  //   subheading:"Elevate Your Projects with Precision: Tailored Infrastructure Engineering Solutions by Our Expert Team, Powered by Cutting-Edge Tools and Industry Best Practices.",
  //   link: "/Industry/Industrial",
  // },
  // {
  //   type: "image",
  //   name: "pic5.png",
  //   heading: "PER",
  //   subheading:"EU 2017/746, the In Vitro Diagnostic Medical Devices Regulation (IVDR), replaces the IVDD with substantial changes for manufacturers. Effective on May 26, 2022, the transition involves addressing challenges in aligning clinical evidence with the intended device purpose, guided by a performance evaluation plan and resulting in a performance evaluation report.",
  //   link: "",
  // },
  // {
  //   type: "image",
  //   name: "pic5.png",
  //   heading: "Tech Pub",
  //   subheading:"SARACA excels in providing essential technical publication services, focusing on functional, operational, and maintenance aspects. Our expertise in technical illustrations, authoring, data validation, and learning solutions transforms documentation processes, ensuring high-quality, user-friendly publications.",
  //   link: "",
  // },
  // {
  //   type: "image",
  //   name: "pic5.png",
  //   heading: "Mechanical Design",
  //   subheading:"Explore Seamless Mechanical Design Solutions for Efficiency and Excellence. Where Form Meets Function – Elevate Your Engineering with Our Expertise.",
  //   link: "",
  // },
  // {
  //   type: "image",
  //   name: "pic5.png",
  //   heading: "A.I.",
  //   subheading:"AI Revolution: Transforming Business with Intelligence. Unleash Growth, Resilience, and Seamless Human-AI Collaboration. Elevate Experiences, Drive Efficiency – Powering Tomorrow's Success.",
  //   link: "",
  // },  
];


const cardsData = [
  // {
  //   logo: "QTST",
  //   heading: "Quick Talent Search Tool",
  //   description:
  //     "It’s an idea to transform talent search method to more interactive and swift manner. With AI identifying the resumes best suited for position provides confidence to recruiters for sharing resumes to account managers. Interactive dashboard allows BU heads and Team Leads track account summary.",
  //   link: "",
  //   imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/qtst-laptop.png`,
  // },
  {
    logo: "x1-logo.svg",
    heading: "Driving tomorrows innovation today",
    description:
      "Elevating automotive excellence with AGL: Powered instrument cluster, infotainment, and telematics system",
    link: "/Innovation/X1_Platform",
    type: "embedded",
    imageSrc: `https://www.youtube.com/embed/k0TpoaiZGb0?si=brztd2wseyrUgIWf`,
  },
  {
    logo: "eFleXpine-logo.svg",
    heading: "Advancing Precision, Surgeon Well-being & Patient- Centricity in spinal surgery",
    description:
      "A significant stride in spinal surgery, this innovative system is poised to redefine the landscape of treating degenerative disorders, deformities like scoliosis, and trauma indications in the human spine",
    link: "/Innovation/eFleXpine",
    type: "embedded",
    imageSrc: `https://www.youtube.com/embed/2xSn3Ws44bw?si=IskOUblfe7yO9gDA`,
  },
  {
    logo: "Fastpmcf Logo.svg",
    heading: "Accelerating Insights, Elevating Excellence",
    description:"Transforming PMCF surveys for swift clinical evidence feedback",
    link: "/Innovation/FastPMCF",
    type: "image",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/image 5.png`,
  },
];

const insightsCards = [
  {
    category: "Certificates",
    title: "",
    text: "",
    link: "#",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/pic3.png`,
    date: "12-Aug-2023"
  },
  {
    category: "Case Studies",
    title: "Design and Development of MALE UAV System",
    text: "Emerging multinational aerospace & aero-structures and Unmanned Aerial Systems (UAV) system manufacturer has selected SARACA to design and develop their MALE UAV hardware, software, and mechanical system within challenging project timelines.",
    link: "#",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/pic3.png`,
    date: "12-Aug-2023"
  }, {
    category: "News",
    title: "SARACA membership in SIDM showcases commitment to innovation & excellence in Indian Defence Industry",
    text: "SARACA announced that it has become a proud member of the Society of Indian Defence Manufacturers (SIDM) on the 18th of January 2023.",
    link: "#",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/pic3.png`,
    date: "12-Aug-2023"
  }, {
    category: "Blogs",
    title: "Role of Human Errors in CAPAs",
    text: "What is a “HUMAN ERROR”? Is it a Human error? Can we prevent these error occurrences? What could be the possible cause or situation which leads to these “Human error”?",
    link: "#",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/pic3.png`,
    date: "19-Aug-2023"
  }, {
    category: "White Paper",
    title: "Journey of IVDR: Insights of the Regulation (EU IVDR (2017/746)How to address current challenges?",
    text: "The IVDR (In-Vitro Diagnostic Regulation) is a new set of regulations set forth by the European Union (EU) in 2017 to regulate medical devices and in-vitro diagnostic devices. The purpose of the IVDR is to improve patient safety by ensuring that all medical devices, including in-vitro diagnostic devices, are designed, manufactured, and marketed to meet the highest safety and quality standards.",
    link: "#",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/pic3.png`,
    date: "12-Aug-2023"
  }
]

const TestmonialCardsData = [
  {
    name:"Saurabh Aggarwal",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Saurabh_Aggarwal.png`,
    designation: "Head, Napier Development Centre at Napier Healthcare",
    content: "Saraca was extremely helpful to our Product Team’s understanding of the requirements of ISO 13485 by presenting it to them in a simple and effective manner. They have also done a commendable job in helping us to align our deliverables in-line with the ISO 13485 requirements...."
  },
  {
    name:"Dr. Eduardo Gonzalez",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Educardo.jpg`,
    designation: "CEO-Toby Orthopaedics",
    content: "Toby has had a smooth journey with Saraca Solutions.  They have provided us with both a highly experienced Quality Manager and a very energetic Quality Engineer.  Specifically, I would like to thank Saraca for closing our NCs in a timely manner while simultaneously performing a gap...."
  },
  {
    name:"Patrick Ireland",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Patrick.jpg`,
    designation: "Vice President-Grace Medical",
    content: "Our team has partnered well with SARACA Solutions as we continue the development process for submitting one of ENT products for 510(k) review with US FDA. They constructed and maintain a Design History. They are also working on Risk Analysis as defined by our Quality Management...."
  },
  {
    name:"Manoj Kumar",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Manoj_Kumar.png`,
    designation: "VP, Head Engineering",
    content: "SARACA's commitment to delivering high-quality solutions has significantly contributed to the success of our projects. Their technical expertise, attention to detail, and proactive approach exceeded our expectations. Despite the tight timelines, Saraca's impressive speed in completing the...."
  }
]


const Home = () => {

  const [screenSize, setScreenSize] = useState<string | null>(null)

  useEffect(() => {
    const handleScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("sm")
      } else if (window.innerWidth >= 768 && window.innerWidth < 1300) {
        setScreenSize("md")
      } else setScreenSize("lg")
    }
  //  const typed = new Typed('', {
  //     strings: ["Contact Us", "Gmail"],
  //     typeSpeed: 200,
  //     loop:true
  //   });
    window.addEventListener("resize", handleScreenSize)
    handleScreenSize()
    return () => document.title = "SARACA"
  }, [])

  return (
    <div>
      <Carousel
        autoPlay
        autoFocus
        showArrows={false}
        infiniteLoop
        interval={4000}
        showStatus={false}
        showThumbs={false}
      >
        {mediaArray.map((media, index) => (
          <>
            <div
              aria-label="overlay-container"
              className="bg-gradient-to-r from-black to-transparent absolute z-10 w-full inset-0 text-white"
            >
              <div className="md:w-2/3 h-full flex justify-center items-center p-24">
                <div aria-label="content" className="md:text-left">
                  <h1 className="text-white text-3xl md:text-7xl lg:text-9xl font-semibold text-left">
                    {media.heading}
                  </h1>
                  <p className="text-white text-xl lg:text-3xl mt-16 w-3/4 hidden lg:block leading-normal">
                    {media.subheading}
                  </p>
                  <a href={media.link}>
                  <button className=" bg-gradient-to-r from-blue-400 to-blue-700 px-8 py-4 rounded-full text-xl text-white mt-8 mx-auto font-semibold">
                    Explore More
                  </button>
                  </a>
                </div>
              </div>
            </div>
            <div key={index} className="relative w-screen aspect-[16/9] xl:aspect-auto xl:h-screen">
              {media.type === "image" ? (
                <img
                  src={`${import.meta.env.VITE_REACT_APP_API_URL}/` + media.name}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  className=" "
                />
              ) : (
                <video
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  className=" "
                  autoPlay
                  loop
                >
                  <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/` + media.name} type="video/mp4" />
                </video>
              )}
            </div>
          </>
        ))}
      </Carousel>
     
      <div aria-label="stories" className="my-24 flex flex-col gap-8">
        <h1 className="text-5xl md:text-8xl text-black text-center mb-24 lg:mb-0 font-semibold">
          Let's Do Engineering
        </h1>
        {cardsData.map((data: object, index: number) => (
          <Cards
            cardsData={data}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
      <div aria-label="Why Choose Us" className="lg:py-24 py-8 bg-gradient-to-tl from-black to-blue-950 bg-cover"
      style={{background:`url(${import.meta.env.VITE_REACT_APP_API_URL}/whychooseus.jpg)`}}
      >
      <div className="container">
      <h1 className="text-7xl text-white font-semibold">
          Why Choose Us ?
        </h1>
        <div className="grid grid-cols-2 lg:mt-24 mt-8 md:grid-cols-3 lg:grid-cols-4 gap-12 place-content-stretch">
          {whyChooseUsCardsData.map((data:whyChooseUsCardsData, index:number)=> {
            return (
              <WhyChooseUsCards data={data} cardPosition={index%2 === 0?'odd': 'even'} index={index}/>
            )
          })}
        </div>
      </div>
      </div>
      
      <div className="bg-gradient-to-r from-cyan-950 to-cyan-700">
        <h1 className="md:text-8xl text-5xl text-white text-center font-semibold pt-16">
          Client Testimonials
        </h1>
        <Carousel
          ariaLabel="testimonials"
          autoPlay
          autoFocus
          showArrows={false}
          infiniteLoop
          interval={4000}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={screenSize===null?100:screenSize==="sm"?66:screenSize === "md" ? 34 : 34}
          showStatus={false}
        >
          {TestmonialCardsData.map((data:any, index:number)=> {
            return (<TestimonialCards key={index} imageSrc={data.imageSrc} name={data.name} designation={data.designation} content={data.content}/>
            )
          })}
          
        </Carousel>
      </div>
      {/* <div aria-label="latest from saraca" className="mt-24">
        <h1 className="text-5xl md:text-8xl text-black text-center mt-8 font-semibold mb-12">       Latest from SARACA
        </h1>
        <div aria-label="insights-cards" className="flex flex-col gap-32 mb-32">
          {
            insightsCards.map((data, index: number) => (<NewsBlogsCards category={data.category} title={data.title} text={data.text} link={data.link} imageSrc={data.imageSrc} imgPosition={index % 2 === 0 ? "left" : "right"} date={data.date} />))
          }
        </div>
      </div> */}
      
    </div>
  );
};

export default Home;
