import { useEffect } from "react"

const Error404 = () => {
    useEffect(()=>{
        return ()=>{document.title="Page Not Found"}
    },[])
  return (
    <div className="w-screen h-screen bg-background flex justify-center items-center">
      <div className=" max-w-xl flex flex-col text-center">
        <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Error 404.svg`} className="w-full aspect-auto" alt="Error" />
        <h1 className=" text-7xl md:text-9xl font-sans font-bold">Error 404</h1>
        <h1 className="text-4xl md:text-6xl">OOPS! Page Not Found</h1>
      </div>
    </div>
  )
}

export default Error404