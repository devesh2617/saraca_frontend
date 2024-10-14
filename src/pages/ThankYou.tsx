import { CircleCheckBig } from "lucide-react";
import { useEffect } from "react"

const ThankYou = () => {
    useEffect(()=>{
        return ()=>{document.title="Page Not Found"}
    },[])
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      <div className="w-xl flex flex-col items-center text-center bg-zinc-100 gap-8 py-32 px-36 rounded-xl shadow-md" >
        <CircleCheckBig size={48} color="#2dd240" />
        <p className="text-6xl">Thank You!</p>
        <p className="text-3xl">Your response has been recorded successfully.</p>
      </div>
    </div>
  )
}

export default ThankYou