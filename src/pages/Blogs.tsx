import { useEffect, useState } from "react"
import { getApi } from "@/api/adminApi"
import BlogCard from "../components/BlogCard"

const Client_Testimonials = () => {
  const [BlogsCards, setBlogsCards] = useState([])
  useEffect(()=>{
   getApi(`api/get_blogs`).then(res=>setBlogsCards(res?.data?.blogs)).catch(e=>console.log(e))
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center mx-auto mb-4 flex-wrap gap-4 mt-28">
      {BlogsCards.map((data, index)=> <BlogCard key={index} cardsData={data}/>)}
    </div>
  )
}

export default Client_Testimonials
