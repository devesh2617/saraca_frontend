import { useEffect, useState } from "react"
import { getApi } from "@/api/adminApi"
import WebinarCard from "../components/WebinarCard"

const Client_Testimonials = () => {
  const [WebinarCards, setWebinarCards] = useState([])
  useEffect(()=>{
   getApi(`api/get_webinars`).then(res=>setWebinarCards(res?.data?.webinars)).catch(e=>console.log(e))
  }, [])
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch mx-auto mb-16 flex-wrap gap-16 mt-44">
      {WebinarCards.map((data, index)=> <WebinarCard key={index} cardsData={data}/>)}
    </div>
  )
}

export default Client_Testimonials
