import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay'
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import EmployeeSpeaksCards from "../components/EmployeeSpeaksCards"
import { Carousel } from "react-responsive-carousel";

import { ArrowRight } from "lucide-react";
import { getApi } from "@/api/adminApi";
import { useNavigate } from "react-router-dom";

type ourLeadersCardsData = {
  imageSrc: string,
  name: string,
  designation: string,
  links: {
    web: string,
    link: string
  }[]
}

const ourCultureCards = Array.from({ length: 27 }, (_, index) => ({
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 1}.jpg`
}));

const ourLeadersCardsData: ourLeadersCardsData[] = [
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Rohit Gupta.png`,
    name: "Rohit Gupta",
    designation: "Associate Vice President",
    links: [
      {
        web: "twitter",
        link: "#"
      },
      {
        web: "linkedin",
        link: "#"
      }
    ]
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Ankur Aggarwal.png`,
    name: "Ankur Aggarwal",
    designation: "Vice President- BU Head",
    links: [
      {
        web: "twitter",
        link: "#"
      },
      {
        web: "linkedin",
        link: "#"
      }
    ]
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Rahul Sisodhiya.png`,
    name: "Rahul Sisodiya",
    designation: "Asssociate Director",
    links: [
      {
        web: "twitter",
        link: "#"
      },
      {
        web: "linkedin",
        link: "#"
      }
    ]
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Seema Tyagi.png`,
    name: "Seema Tyagi",
    designation: "Director Human Resources",
    links: [
      {
        web: "twitter",
        link: ""
      },
      {
        web: "linkedin",
        link: ""
      }
    ]
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Neeraj Kumar Gupta.png`,
    name: "Neeraj Kumar Gupta",
    designation: "Consultant",
    links: [
      {
        web: "twitter",
        link: "#"
      },
      {
        web: "linkedin",
        link: "#"
      }
    ]
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Dan Wood.png`,
    name: "Dan Wood",
    designation: "Director-Business Development",
    links: [
      {
        web: "twitter",
        link: "#"
      },
      {
        web: "linkedin",
        link: "#"
      }
    ]
  },
]

type TimeLineCards = {
  imageSrc: string
}
const TestmonialCardsData = [
  {
    name: "Tarun Kumar",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Employee Speaks/tarun.webp`,
    designation: "Sr. Team Lead",
    content: "At the start of joining, I had doubts about the company and corporate culture. But when I joined and time passed, I became more relaxed. After engineering, learning something new-in-service sector was adventurous as well as scary but Kuldeep, Ankit and Rahul helped me to sail through. I really like working in SARACA, I hope that I reach good heights."
  },
  {
    name: "Sanjay Kumar Rajpoot",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Employee Speaks/sanjay.webp`,
    designation: "Recruitment Manager",
    content: "I have been associated with SARACA for the last 8 years as a Recruitment Manager. SARACA always recognizes my work ethic and contribution towards my job responsibilties. Leaders at SARACA are very helpful and hold our hand in an odd situation and problems..."
  },
  {
    name: "Bhanu Prakash Jena",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Employee Speaks/bhanu.webp`,
    designation: "Deputy General Manager",
    content: "A company that has its vision and mission clear & same has been communicated transparently to each & every employee. Diversity and inclusion are some of the key highlights observed while working in SARACA. Efforts have always been recognised in a..."
  },
  {
    name: "Kundan Kumar Mishra",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Employee Speaks/kundan.webp`,
    designation: "Sr. QA/RA Executive",
    content: "I am working at SARACA for the last 3 years. As I experienced it is a good company with a great working culture and a lot of new opportunities to learn and grow. All staffs are helpful and supportive. Thank you so much SARACA. For freshers, SARACA is a good choice..."
  }
]
const TimeLineCards: TimeLineCards[] = [
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industrial.jpg`
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industrial.jpg`
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industrial.jpg`
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industrial.jpg`
  },
  {
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Industrial.jpg`
  }
]


const AboutUs = () => {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [regions, setRegions] = useState()
  const [screenSize, setScreenSize] = useState<string | null>(null)
  const navigate = useNavigate()
  useEffect(() => {
    const handleScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("sm")
      } else if (window.innerWidth >= 768 && window.innerWidth < 1300) {
        setScreenSize("md")
      } else setScreenSize("lg")
    }

    window.addEventListener("resize", handleScreenSize)
    handleScreenSize()
    return ()=>{
      getApi(`api/get_regions`).then(res=>{
        if(res?.data?.message){
          setRegions(res?.data?.regions)
        }
      }).catch((e)=>console.log(e))
    }
  }, [])
  return (
    <div>
      <div aria-label='landing-image' className="w-full aspect-video relative">
        <div
          aria-label="overlay-container"
          className="bg-gradient-to-r from-black to-transparent absolute z-[1] inset-0"
        >
          <div className="md:w-2/3 h-full flex justify-start items-center p-24">
            <div aria-label="content" className="md:text-left">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-semibold text-left">
                Careers
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                Build a Future with SARACA
              </p>
              <button className="lg:mt-24 md:mt-16 mt-8 bg-white text-black text-lg lg:text-3xl py-4 px-8 flex items-center gap-4 rounded-xl animate-bounce" onClick={()=>document.getElementById("regions")?.scrollIntoView({behavior:"smooth"})}>
                Apply now <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <video
          ref={ref}
          className="h-full w-full object-cover"
          autoPlay={true}
          loop
          playsInline
          muted
        >
          <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/Careers.mp4`} type="video/mp4" />
        </video>

      </div>
      <div aria-label='what-we-do' className='w-full lg:py-24 py-8'>
        <div>
          <h1 className='text-4xl lg:text-5xl font-semibold text-center pb-8 lg:pb-24'>
            Why Join SARACA
          </h1>
          <p className='container text-xl lg:text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
            Our vision is to help our customers' businesses grow faster and enable them to lead the industry they serve. To achieve this, we follow a flat organization structure and transparent performance appraisal policy. The leadership team that supports teamwork allows you to voice your opinion and achieve your goals. We look forward to hard work and dedication in exchange for a competitive salary. Sounds like a place to dream and achieve, we would love to hear from you.
          </p>

        </div>
      </div>
      <div aria-label='our-culture' className='w-full lg:py-24 py-8 bg-stone-200'>
        <div className="container flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className='lg:text-5xl text-4xl font-semibold mb-8'>
              Our Culture
            </h1>
            <p className='lg:text-3xl text-xl text-gray-600 leading-normal tracking-wide'>
              We have a culture where we are incredibly self–critical, we don’t get comfortable with success.
            </p>
          </div>
          <div className="flex-1">
            <iframe height="315" className="w-full" src="https://www.youtube.com/embed/ZFQZo-4Q7KY" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div aria-label="Timeline" className="min-h-[10rem] bg-cover lg:pt-24 pt-8">
        <div>
          <Swiper
            slidesPerView={screenSize===null?1:screenSize === "sm" ? 1 : screenSize==="md"?2:3}
            spaceBetween={32}
            autoplay={{ delay: 3000 }}
            navigation={true}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper container mx-auto lg:pb-24 pb-8"
            centeredSlides
          >
            {
              ourCultureCards.map((data: TimeLineCards, index: number) => {
                return (
                  <SwiperSlide className={`w-full aspect-[16/9] relative transition-all duration-700`} key={index}>
                    <div className="absolute h-[100%] w-[100%] rounded-lg">
                      <img src={data.imageSrc} alt="timeline" className="absolute h-[100%] w-[100%] rounded-lg object-cover" />
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

      </div>
      <div aria-label="Employee Speaks" className="bg-blue-100">
        <div className="container lg:pt-24 pt-8">
          <h1 className="text-sky-500 font-semibold lg:text-5xl text-4xl">Employee Speaks</h1>
          <p className="text-xl mt-4">
            We have a culture where we are incredibly self-critical, we don't get comfortable with success.
          </p>
        </div>
        <div className="mx-auto">
          <Carousel

            ariaLabel="employee speaks"
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
            {TestmonialCardsData.map((data: any, index: number) => {
              return (<EmployeeSpeaksCards key={index} imageSrc={data.imageSrc} name={data.name} designation={data.designation} content={data.content}/>
              )
            })}

          </Carousel>
        </div>

      </div>

      <div id="regions" className="container my-24 text-center">
        <h1 className="text-red-600 lg:text-7xl text-4xl font-semibold">We are Hiring</h1>
        <p className="lg:text-3xl text-xl mt-8">Choose from global locations and job functions</p>
        <div className="flex flex-col sm:flex-row gap-12 justify-center mt-8 ">
          {regions?.map((region:any)=>(    
                          <button key={region?.id} className=" bg-red-400 flex-1 hover:bg-red-500 transition-all duration-300 py-4 px-8 rounded-lg text-xl text-white hover:scale-105" onClick={()=>navigate(`/Careers/Positions/${region?.name}`)}>{region?.name}</button>     
          ))}
        </div>
      </div>

    </div>
  )
}

export default AboutUs
