import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay'
// import required modules
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

type ourLeadersCardsData = {
  imageSrc: string,
  name: string,
  designation: string,
  links: {
    web: string,
    link: string
  }[]
}


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
        link: "#"
      },
      {
        web: "linkedin",
        link: "#"
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
  year: string,
  tagline: string,
  imageSrc: string
}

const TimeLineCards: TimeLineCards[] = [
  {
    year: "2014",
    tagline: "Won our first customer in orthopedics from Miami, Florida, USA.",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2014.png`
  },
  {
    year: "2015",
    tagline: "Successfully delivered a mission-critical healthcare project for a prestigious Singapore-based client, ensuring top-tier performance and exceptional results.",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2015.png`
  },
  {
    year: "2016",
    tagline: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2016.png`
  },
  {
    year: "2017",
    tagline: "Established our USA subsidiary in the state of Delaware.",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2017.png`
  },
  {
    year: "2018",
    tagline: "",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2018.png`
  },
  {
    year: "2019",
    tagline: "Celebrated our first customer win in the automotive industry.",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2019.png`
  },
  {
    year: "2020",
    tagline: "Won our first customer in Semiconductor industry.",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2020.png`
  },
  {
    year: "2021",
    tagline: "Reached a significant milestone by securing 10 esteemed Fortune 500 customers.",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2021.png`
  },
  {
    year: "2022",
    tagline: "Began our journey in the Rail Transportation industry.",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2022.png`
  },
  {
    year: "2023",
    tagline: "Successfully filed groundbreaking patents in medical software innovations, setting new standards in the industry.",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2023.png`
  },
  {
    year: "2024",
    tagline: "Launched X1 Platform for Automotive Industry.",
    imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Timeline/2024.png`
  }
]

const ourCultureCards = Array.from({ length: 27 }, (_, index) => ({
  imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 1}.jpg`
}));



const AboutUs = () => {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [index, setIndex] = useState(1)
  const [activeIndex, setActiveIndex] = useState(null)
  const [screenSize, setScreenSize] = useState<string | null>(null)
  
  useEffect(() => {   
    const intervalId = setInterval(() => {
      if (index >= 18) {
        setIndex(1); // Reset to 1 when index is greater than or equal to 18
      } else {
        setIndex(prev => prev + 9); // Increment by 9 otherwise
      }
      // Additional logic or actions you want to perform here
    }, 8000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalId)
      const handleScreenSize = () => {
        if (window.innerWidth < 768) {
          setScreenSize("sm")
        } else if (window.innerWidth >= 768 && window.innerWidth < 1300) {
          setScreenSize("md")
        } else setScreenSize("lg")
      }
      window.addEventListener("resize", handleScreenSize)
      handleScreenSize()
    };
    
  }, [index]); // Add index to the dependency array to avoid stale closures
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
                About Us
              </h1>
              <p className="text-white text-3xl mt-16 w-full hidden lg:block leading-normal">
                ER&D, Digital, Consulting: Where Solutions Meet Success
              </p>
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
          <source src={`${import.meta.env.VITE_REACT_APP_API_URL}/About US.mp4`} type="video/mp4" />
        </video>

      </div>
      <div aria-label='what-we-do' className='w-full pt-24'>
        <div>
        <p className='container text-3xl mx-auto text-gray-600 leading-normal tracking-wide'>
        SARACA is a global IT consulting and engineering R&D services company with Fortune 500 customers. 80% of our customers are based in the United States of America (USA) with a 95% recurring business. We provide services in medical technology, aerospace, defence, rail transportation, and automotive industries.
        <br />
        <br />
        We offer services in the areas of software development and testing, mechanical design, embedded software and hardware development, technical publications, quality assurance, and regulatory affairs. We have expertise in software development and testing with a core focus on niche technologies including Python, C++, C#, Angular JS, React JS, Qt, QML, WPF, Big Data, .NET framework, and cloud.
        <br />
        <br />
        Our service-oriented team possess extensive industry experience and has a keen understanding of the challenges faced by modern organizations. This understanding helps us in providing you cost-effective and customized solutions.
        </p>
        </div>
       
      </div>
      <div aria-label="vision and mission" className="container min-h-[20rem] mx-auto flex flex-col lg:flex-row text-white py-24 gap-8">
        <div className="text-center flex-1">
          <div className="min-h-[20rem] text-xl leading-normal tracking-wide p-8 rounded-lg bg-[#6C22A6]">
            <h1 className="font-semibold text-5xl"> Our Vision</h1>
            <div className="flex">
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Vision.svg`} alt="" className="w-[12rem] aspect-square" />
              <p className=" mt-12">Achieve success in helping our customer's businesses grow faster and enabling them to lead the industry they serve.</p>
            </div>
          </div>
        </div>
        <div className="text-center flex-1">
          <div className="min-h-[20rem] rounded-lg text-xl leading-normal tracking-wide p-8 bg-[#0D9276]">
            <h1 className="font-semibold text-5xl"> Our Mission</h1>
            <div className="flex direction-reverse">

              <p className=" mt-12">Our mission is to provide the best-in-class level of customer service by ensuring the quality of our work and listening patiently to the needs of our clients.</p>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Mission.svg`} alt="" className="w-[12rem] aspect-square" />
            </div>
          </div>
        </div>
      </div>
      <div aria-label="Our Leaders" className="bg-blue-100 py-24">
        <div className="container mx-auto pb-24">
          <h1 className="text-sky-500 font-semibold text-5xl">Our Leaders</h1>
          <p className="text-xl mt-4">
            Leaders instill in their people a hope for success and a belief in themselves.
          </p>
          <div className="my-12 bg-background py-6 px-12 flex flex-col lg:flex-row rounded-md border-b-4 border-blue-400 gap-12">
            <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Kuldeep.png`} alt="" className="rounded-full w-52 aspect-square object-cover" />
            <div className="flex-1 flex flex-col">
              <h1 className=" text-4xl font-semibold text-sky-700">
                KULDEEP TYAGI
              </h1>
              <p className="uppercase mt-4 text-sky-600 text-2xl">Founder, Managing Director and Cheif Executive Officer</p>
              <div className="flex mt-auto">
                <a href="#">
                  <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/twitter.svg`} alt="twitter" className="h-16 aspect-square" />
                </a>
                <a href="#">
                  <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/linkedin.svg`} alt="linkedin" className="h-16 aspect-square" />

                </a>
              </div>
            </div>
            <div className="flex-[2]">
              <h1 className="text-sky-700 font-semibold text-4xl">CEO's MESSAGE</h1>
              <p className="mt-4 leading-normal text-sky-600 text-2xl">SARACA is a global IT consulting and engineering R&D services company with Fortune 500 customers 80% of our customers are based in United States of America(USA) with 95% of recurring business. We provide services in medical technology, aerospace, defence, rail transportation and automotive industries</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <Swiper
            slidesPerView={screenSize===null?1:screenSize==="sm"?2:screenSize==="md"?3:4}
            effect={"coverflow"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            loop={true}
            centeredSlides
            coverflowEffect={{
              rotate: 8,
              stretch: 0,
              depth: 60,
              modifier: 2.5
            }}
            navigation
            className="min-h-[30rem]"
            
          >
            {
              ourLeadersCardsData.map((data: ourLeadersCardsData, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full aspect-[10/12] rounded-lg overflow-hidden flex flex-col bg-[#535C91] justify-around">
                      <img src={data.imageSrc} alt="image" className="w-[60%] aspect-square rounded-full mx-auto my-4 object-cover p-2 border-white border-4" />
                      <div className="w-full bg-[#232D3F] bg-opacity-60 py-4">
                        <h1 className="text-center text-4xl uppercase font-semibold text-white">
                          {data.name}
                        </h1>
                        <p className="uppercase text-center mt-4 text-white text-xl">{data.designation}</p>
                        <div className="flex justify-center items-center mt-4">
                          {data.links.map((link: any, index: number) => {
                            return (
                              <a href={link.link} key={index}>
                                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/${link.web}.svg`} alt="links" className="w-12 aspect-square" />
                              </a>
                            )
                          })}
                        </div>
                      </div>

                    </div>

                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

      </div>
      <div aria-label="Our Brand Pillars" className="py-24">
        <h1 className="text-5xl text-black font-semibold text-center mb-24">Our Brand Pillars</h1>
        <marquee className="text-8xl text-blue-800 font-semibold overflow-visible whitespace-nowrap">
          <span className=" text-sky-950 text-9xl">S</span>
          YNERGY {" "}
          <span className=" text-sky-950 text-9xl">A</span>
          CCOUNTABILITY {" "}
          <span className=" text-sky-950 text-9xl">R</span>
          ECOGNITION {" "}
          <span className=" text-sky-950 text-9xl">A</span>
          DAPTABILITY {" "}
          <span className=" text-sky-950 text-9xl">C</span>
          URIOSITY {" "}
          <span className=" text-sky-950 text-9xl">A</span>
          GILITY {" "}
        </marquee>
      </div>
      <div aria-label="Timeline" className="min-h-[20rem] lg:py-24 py-8 bg-cover"
      style={{ backgroundImage: `url('${import.meta.env.VITE_REACT_APP_API_URL}/Timeline_Background.svg')` }}
      >
        <h1 className="mb-24 text-7xl font-semibold text-center">Timeline</h1>
        <div>
          <Swiper
            slidesPerView={screenSize===null?1:screenSize === "sm" ? 1 : screenSize === "md"?2: 3}
            spaceBetween={32}
            autoplay={{ delay: 3000 }}
            navigation={true}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper container mx-auto lg:py-32 pt-24 pb-8"
            centeredSlides
            onSlideChange={(swiper => {
              let currentIndex = swiper.activeIndex;
              let activeSlide = swiper.slides[currentIndex];
              // console.log(activeIndex)
                // Reset styles for all slides
                swiper.slides.forEach((slide, index) => {
                  slide.style.transform = '';
                });
                
                setActiveIndex(currentIndex)
                // console.log(activeSlide.classList)
                activeSlide.style.transform = 'translateY(-20px)'; 
            })}
            // onSwiper={(swiper) => {
            //   swiper.on('slideChange', () => {
                    
            //   });
            // }}
          >
            {
              TimeLineCards.map((data: TimeLineCards, index: number) => {
                return (
                  <SwiperSlide className={`timeline-slide-container w-full aspect-[16/9] relative transition-all duration-700 ${activeIndex===index?"rotated":""}`} key={index}>
                    <div className="timeline-slide-front absolute h-[100%] w-[100%] rounded-lg">
                      <img src={data.imageSrc} alt="timeline" className="absolute h-[100%] w-[100%] rounded-lg" />
                      <div className="absolute h-36 aspect-square rounded-full bg-blue-950 timeline-slide-front text-white flex items-center justify-center bg-opacity-40 font-semibold text-5xl">{data.year}</div>
                    </div>

                    <div className=" bg-sky-900 absolute inset-0 timeline-slide-back rounded-lg">
                      <div className="flex flex-col gap-4 lg:p-8 p-2">
                        <div className="text-white text-center font-semibold text-5xl">
                          {data.year}
                        </div>
                        <p className="text-white text-3xl">
                          {data.tagline}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

      </div>
      <div aria-label="Our Culture" className="min-h-[10rem] bg-cover lg:pt-24 pt-8">
        <h1 className="text-5xl font-semibold pb-24 text-center">Our Culture</h1>
        <div>
          <Swiper
            slidesPerView={screenSize===null?1:screenSize === "sm" ? 1 : 2}
            spaceBetween={32}
            autoplay={{ delay: 3000 }}
            navigation={true}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper container mx-auto lg:pb-24 pb-8"
            centeredSlides
          >
            {
              ourCultureCards?.map((data: TimeLineCards, index: number) => {
                return (
                  <SwiperSlide className={`w-full aspect-[16/9] relative transition-all duration-700`} key={index}>
                    <div className="absolute h-full w-full rounded-lg" onMouseOver={(e)=>console.log(e.target)}>
                      <img src={data.imageSrc} alt="timeline" className="absolute h-full w-full rounded-lg object-cover" />
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

      </div>
      {/* <div aria-label="Our-Culture" className="min-h-[10vh] py-24">
        <h1 className="text-5xl text-black font-semibold text-center mb-24">Our Culture</h1>
        <div className="flex flex-col 2xl:flex-row container flex-wrap mx-auto gap-4">
          <div aria-label="left-section" className="h-[44rem] flex-1 flex gap-[1rem] flex-wrap">
            <div className="w-[calc(50%-0.5rem)] h-[14rem] overflow-hidden">
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index}.jpg`} alt="" className="h-full w-full hover:scale-110 object-cover transition-all duration-500 hover:brightness-110" />
            </div>
            <div className="w-[calc(50%-0.5rem)] h-[14rem] overflow-hidden">
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 1}.jpg`} alt="" className="h-full w-full hover:scale-110 object-cover transition-all duration-500 hover:brightness-110" />
            </div>
            <div className="w-full h-[14rem] overflow-hidden">
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 2}.jpg`} alt="" className="h-full w-full hover:scale-110 object-cover transition-all duration-500 hover:brightness-110" />
            </div>
            <div className="w-[calc(50%-0.5rem)] h-[14rem] overflow-hidden">
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 3}.jpg`} alt="" className="h-full w-full hover:scale-110 object-cover transition-all duration-500 hover:brightness-110" />
            </div>
            <div className="w-[calc(50%-0.5rem)] h-[14rem] overflow-hidden">
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 4}.jpg`} alt="" className="h-full w-full hover:scale-110 object-cover transition-all duration-500 hover:brightness-110" />
            </div>
          </div>
          <div aria-label="right-section" className="h-[44rem] flex-1 flex gap-[1rem] flex-wrap">
            <div className="w-[calc(50%-0.5rem)] h-[29rem] overflow-hidden">
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 5}.jpg`} alt="" className="h-full w-full hover:scale-110 object-cover transition-all duration-500 hover:brightness-110" />
            </div>
            <div className="w-[calc(50%-0.5rem)] gap-[1rem] flex flex-col">
              <div className="w-full h-[14rem] overflow-hidden">
                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 6}.jpg`} alt="" className="h-full w-full hover:scale-110 object-cover transition-all duration-500 hover:brightness-110" />
              </div>
              <div className="w-full h-[14rem] overflow-hidden">
                <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 7}.jpg`} alt="" className="h-full w-full hover:scale-110 object-cover transition-all duration-500 hover:brightness-110" />
              </div>
            </div>
            <div className="w-full h-[14rem] overflow-hidden">
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Our_Culture/${index + 8}.jpg`} alt="" className="h-full w-full hover:scale-110 object-cover transition-all duration-500 hover:brightness-110" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default AboutUs
