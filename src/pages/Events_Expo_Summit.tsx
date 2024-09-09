//  import { useState, useEffect, useRef } from "react";
// // import CaseStudiesHeader from "../components/CaseStudiesHeader";
// // import CaseStudyCard from "../components/CaseStudyCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { getApi } from "@/api/adminApi";

// const Events = () => {

  
//     const [activeItem, setActiveItem] = useState("");
  
//     const [cardsData, setCardsData] = useState()
//     // const [activeItemScrolled, setActiveItemScrolled] = useState("")
//     const sectionRefs = useRef({});
  
//     useEffect(() => {
      
//       if(!cardsData){
//         getApi(`api/get_case_studies_by_industry`)
//         .then(res=>{
//           setCardsData(res?.data?.caseStudies)
//           console.log(sectionRefs)
//         })
//         .catch(e=>console.log(e))
//       }
      
//       const observerOptions = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.6,
//       };
//       if(cardsData){
//         const sectionObserver = new IntersectionObserver(
//           (entries) => {
//             entries.forEach((entry) => {
//               if (entry.isIntersecting) {
//                 setActiveItem(entry.target.id);
//               }
//             });
//           },
//           observerOptions
//         );
    
//         Object.keys(sectionRefs.current).forEach((key) => {
//           sectionObserver.observe(sectionRefs?.current[key]);
//         });
//       }  
//         // return ()=> {
//         //   Object.keys(sectionRefs.current).forEach((key) => {
//         //     const ref = sectionRefs?.current[key];
//         //     if (ref) {
//         //       sectionObserver.unobserve(ref);
//         //     }
//         //   });
//         // }
        
//     }, [cardsData]); // Run only on mount
// }