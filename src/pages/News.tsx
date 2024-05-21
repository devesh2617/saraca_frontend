import { useEffect, useState } from "react"
import NewsCard from "../components/NewsCard"
import { getApi } from "@/api/adminApi"
const Client_Testimonials = () => {
  const [NewsCards, setNewsCards] = useState([]) 
  useEffect(()=>{
   getApi(`api/get_news`).then(res=>setNewsCards(res?.data?.news))
  }, [])
  return (
    <div className="flex flex-col py-24 mt-12 gap-12">
      {NewsCards.map((data, index)=> <NewsCard cardsData={data}/>)}
    </div>
  )
}

export default Client_Testimonials
