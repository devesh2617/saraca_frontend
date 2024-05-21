import { useEffect, useState } from "react"
import { getApi } from "@/api/adminApi"
import WebinarCard from "../components/WebinarCard"

const Client_Testimonials = () => {
  const [WebinarCards, setWebinarCards] = useState([])
  useEffect(()=>{
   getApi(`api/get_webinars`).then(res=>setWebinarCards(res?.data?.webinars)).catch(e=>console.log(e))
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center mx-auto mb-4 flex-wrap gap-4 mt-28">
      {WebinarCards.map((data, index)=> <WebinarCard key={index} cardsData={data}/>)}
    </div>
  )
}

export default Client_Testimonials
