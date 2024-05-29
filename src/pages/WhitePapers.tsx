import { useState, useEffect, useRef } from "react";
import CaseStudiesHeader from "../components/CaseStudiesHeader";
import WhitePaperCard from "../components/WhitePaperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { getApi } from "@/api/adminApi";

const CaseStudies = () => {
  const [activeItem, setActiveItem] = useState("Aerospace and Defense");
  const [cardsData, setCardsData] = useState()
  // const [activeItemScrolled, setActiveItemScrolled] = useState("")
  const sectionRefs = useRef({});
  
  useEffect(() => {
    if(!cardsData) {
      getApi(`api/get_white_papers_by_industry`)
      .then(res=>{
        setCardsData(res?.data?.whitePapers)
        console.log(sectionRefs)
      })
      .catch(e=>console.log(e))
    }
    
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };
    if(cardsData){
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
    }     
    
  }, [cardsData]); // Run only on mount



  return (
    <div>
      <CaseStudiesHeader
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        // activeItemScrolled={activeItemScrolled}
      />
      <div className="flex flex-col pb-24">
      {cardsData&&Object.keys(cardsData).map((data:string, index:number)=>{
       
       const sectionData = cardsData[data];

       return (
         <div
           key={index}
           id={data}
           className="pt-56"
           ref={(ref) => (sectionRefs.current[data] = ref)}
         >
           <Swiper
             modules={[Pagination, Navigation]}
             loop     
           >
             {sectionData.map((card, index) => (
               <SwiperSlide key={index}>
                 <WhitePaperCard data={card} />
               </SwiperSlide>
             ))}
             
           </Swiper>
         </div>
       );
     })}
      </div>
      
    </div>
  );
};

export default CaseStudies;
