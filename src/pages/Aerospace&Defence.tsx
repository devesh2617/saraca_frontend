import DiscoverMoreCards from "../components/DiscoverMoreCards";
import WhereWeServeCards from "../components/WhereWeServeCards";
import { Helmet } from "react-helmet";
import ServiceOfferingsCards from "../components/ServicesOfferingsCards";
import { useEffect, useState } from 'react';
import getDiscoverMoreDataByIds from '@/utilities/getDiscoverMoreDataByIds';
type medicalCardsData = {
  title: string;
  link: string;
  imageSrc: string;
};
type DiscoverMoreCardsType = {
  img: string,
  title:string,
  link: string
}
 const discoverMoreIds = ['5f443ee6-2919-41bf-9cd9-ac961bd31910', '2430a2d3-fcfa-49ad-9275-94cf098ef05c']

const ServiceOfferings = [
  {
    heading: "Engineering Services",
    content: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Systems Engineering",
      "Aerospace Structural Analysis",
      "Aerodynamics and Fluid Dynamics",
    ],
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Aerospace & Defense/Engineering.svg`,
  },
  {
    heading: "Research & Development",
    content: [
      "Advanced Materials Research",
      "Sensor Technology Development",
      "Autonomous Systems",
      "Satellite Communications",
      "Space Exploration Technologies",
    ],
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Aerospace & Defense/R&D.svg`,
  },
  {
    heading: "Digital Solutions",
    content: [
      "Data Analytics and Visualization",
      "Cybersecurity Solutions",
      "Cloud Computing",
      "Internet of Things (IoT) Integration",
      "Artificial Intelligence and Machine Learning",
    ],
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Aerospace & Defense/digital.svg`,
  },
  {
    heading: "Tech Pub",
    content: ["Technical illustrations", "Technical Authoring", "Multimedia"],
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Aerospace & Defense/Tech Pub.png`,
  },
  {
    heading: "Consulting",
    content: [
      "Strategic Planning",
      "Regulatory Compliance",
      "Market Analysis",
      "Supply Chain Management",
      "Risk Assessment and Mitigation",
    ],
    link: "",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Aerospace & Defense/Consultng.svg`,
  },
];

const medicalCardsData = [
  {
    title: "Aerospace",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Aerospace & Defense/aerospace.jpg`,
    link: "/Industry/Aerospace_Defense/Aerospace",
  },

  {
    title: "Defence",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Aerospace & Defense/Defense.jpg`,
    link: "/Industry/Aerospace_Defense/Defense",
  },
  {
    title: "Space",
    imageSrc: `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/Industries/Aerospace & Defense/Space.jpg`,
    link: "/Industry/Aerospace_Defense/Space",
  },
];

// const DiscoverMoreCardsData = [
//   {
//     imageSrc: `${
//       import.meta.env.VITE_REACT_APP_API_URL
//     }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//     link: "#",
//   },
//   {
//     imageSrc: `${
//       import.meta.env.VITE_REACT_APP_API_URL
//     }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//     link: "#",
//   },
//   {
//     imageSrc: `${
//       import.meta.env.VITE_REACT_APP_API_URL
//     }/Industries/Medical/stock-photo-on-a-factory-scientist-in-sterile-protective-clothing-work-on-a-modern-industrial-d-printing-1268263753.jpg`,
//     link: "#",
//   },
// ];

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
        <title>Advanced Aerospace & Defense Solutions | Saraca Solutions</title>
        <meta
          property="og:title"
          content="Advanced Aerospace & Defense Solutions | Saraca Solutions"
        />
        <meta
          name="description"
          content="Explore Saraca Solutions' cutting-edge offerings in aerospace and defense industries, delivering innovative solutions and advanced technologies to meet the sector's unique challenges and requirements."
        />
        <meta
          name="keywords"
          content="Aerospace solutions, Aerospace engineering, Defense innovations, Aerospace industry, Defense sector, Aerospace systems, Defense solutions"
        />
        <meta
          property="og:description"
          content="Explore Saraca Solutions' cutting-edge offerings in aerospace and defense industries, delivering innovative solutions and advanced technologies to meet the sector's unique challenges and requirements."
        />
        <meta
          property="og:keywords"
          content="Aerospace solutions, Aerospace engineering, Defense innovations, Aerospace industry, Defense sector, Aerospace systems, Defense solutions"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div aria-label="landing-image" className="aspect-video w-full relative">
        <div
          aria-label="overlay-container"
          className="bg-gradient-to-r from-transparent to-black absolute z-[1] w-full inset-0"
        >
          <div className="md:w-1/2 h-full flex justify-start items-center p-24 float-right">
            <div aria-label="content" className="md:text-right">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-right">
                Aerospace & Defence
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Aviate, Navigate, Communicate
              </p>
            </div>
          </div>
        </div>

        <img
          className="h-full w-full object-cover"
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Industries/Aerospace & Defense/Landing.jpg`}
        />
      </div>
      <div aria-label="what-we-do" className="w-full py-24">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Engineering the future of Aerospace, Defence & Space
          </h1>
          <p className="container text-3xl mx-auto px-8 text-gray-600 mt-24 leading-normal">
            With over a decade of experience, SARACA is a global leader in
            engineering services, offering innovative and cost-effective
            solutions. We specialize in the Aerospace, Defense, and Space
            industries, excelling in embedded systems, mechanical engineering,
            software development, testing and technical publication. Our team of
            experienced engineers and designers understands the unique
            challenges of modern Aerospace and Defense companies, enabling us to
            deliver customized solutions that meet diverse customer needs.
            <br />
            <br />
            In the Aerospace, Defense, and Space industry, our core purpose is
            to contribute to a safer, more sustainable world, where air
            transport is more environmentally friendly, comfortable and
            accessible . We provide full-service support from product
            development and design to manufacturing and assembly operations. We
            focus on " Right First Time" & “On Time" delivery, ensuring quality
            and efficiency from concept to product launch.
          </p>
        </div>
      </div>

      <div
        aria-label="medical-device-segments"
        className="min-h-[50vh] w-full bg-gradient-to-r from-cyan-950 to-cyan-700 py-24"
      >
        <h1 className="text-white text-5xl font-semibold text-center">
          Where We Serve
        </h1>
        <div className="container flex flex-wrap justify-evenly items-start mt-24 mx-auto">
          {medicalCardsData.map((data: medicalCardsData, index: number) => {
            return (
              <WhereWeServeCards
                key={index}
                title={data.title}
                link={data.link}
                imageSrc={data.imageSrc}
              />
            );
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
      {/* <div aria-label="discover more section" className={`w-full bg-cyan-700 py-24`}>
        <h1 className="text-white text-6xl text-center font-semibold">Discover More</h1>
        <div className=" mt-24 w-full flex justify-evenly flex-wrap gap-16">
          {discoverMore?.map((data:DiscoverMoreCardsType, index: number) => {
            return (
              <DiscoverMoreCards key={index} img={data.img} title={data.title} link={data.link} />
            )
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Industry;
