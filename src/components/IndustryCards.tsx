import { FC } from "react"

type medicalCardsData = {
    title: string,
    points: string[],
    imageSrc: string
  }
const IndustryCards:FC<medicalCardsData> = (props) => {
  return (
    <div className="h-[65vh] rounded-2xl relative overflow-hidden shadow-2xl group">
    <img className="h-full w-full object-cover rounded-2xl" src={props.imageSrc}/>
    <div className="bg-white absolute z-1 top-[85%] w-full h-full text-2xl text-center text-cyan-700 group-hover:top-0 translate-all duration-500 group-hover:bg-opacity-80 p-2">
        <h1 className="lg:text-3xl h-[12%] text-xl py-2 flex items-center justify-center group-hover:py-8">
         {props.title}
        </h1>
        <div className="mt-8 px-12 text-left text-black">
          <ul className="list-disc">
            {
             props.points.map((point:string, index:number)=>{
                return(
                    <li key={index} className="lg:my-4 my-2 text-lg lg:text-xl text-gray-600">{point}</li>
                )
             })
            }
          </ul>
        </div>
    </div>
    </div>
  )
}

export default IndustryCards