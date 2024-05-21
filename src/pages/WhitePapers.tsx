import { useState, useEffect, useRef } from "react";
import CaseStudiesHeader from "../components/CaseStudiesHeader";
import WhitePaperCard from "../components/WhitePaperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { getApi } from "@/api/adminApi";

const CaseStudies = () => {
  const [activeItem, setActiveItem] = useState("Aerospace and Defense");
  const [cardsData, setCardsData] = useState()
  const [activeItemScrolled, setActiveItemScrolled] = useState("")
  const sectionRefs = useRef({});
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry)
            setActiveItem(entry.target.id);
          }
        });
      },
      observerOptions
    );

    Object.keys(sectionRefs.current).forEach((key) => {
      sectionObserver.observe(sectionRefs.current[key]);
    });
    
  
      getApi(`api/get_white_papers_by_industry`)
      .then(res=>{
        setCardsData(res?.data?.whitePapers)
        console.log(sectionRefs)
      })
      .catch(e=>console.log(e))
      
    
  }, []); // Run only on mount



  return (
    <div>
      <CaseStudiesHeader
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        // activeItemScrolled={activeItemScrolled}
      />
      {cardsData?Object.keys(cardsData).map((data:string, index:number)=>{
       
        const sectionData = cardsData[data];

        return (
          <div
            key={index}
            id={data}
            className="min-h-[100vh] pt-52"
            ref={(ref) => (sectionRefs.current[data] = ref)}
          >
            <Swiper
              className="min-h-[37rem] swiper-container"

              modules={[Pagination, Navigation]}
              loop
              pagination={{ el: '.swiper-pagination' }}

              // Navigation arrows
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {sectionData.map((card, index) => (
                <SwiperSlide key={index}>
                  <WhitePaperCard data={card} />
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
              <div className="swiper-navigation">
                <button className="swiper-button-prev"></button>
                <button className="swiper-button-next"></button>
              </div>
            </Swiper>
          </div>
        );
      }):""}
    </div>
  );
};

export default CaseStudies;
