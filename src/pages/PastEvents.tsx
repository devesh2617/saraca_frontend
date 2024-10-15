import { getApi } from "@/api/adminApi";
import PastEventCard from "@/components/PastEventCard";
import { useEffect, useState } from "react";

const PastEvents= () => {
  const [data, setData] = useState([])
  const getIncomingEvents = async () => {
    try {
      const res = await getApi('api/past_events')
      if(res.status === 200) setData(res.data.data)
        console.log(res.data.data)
    } catch (error) {
      console.error(error.message)
    }
  }
   useEffect(()=>{
   getIncomingEvents()
   }, [])
  return (
    <div className="flex flex-col w-[100%] justify-start mt-32 mb-28 gap-12 mx-auto">
        {data.map(event=><PastEventCard data={event}/>)}
    </div>
  )
}

export default PastEvents
