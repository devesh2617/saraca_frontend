import { FC } from "react"

type medicalCardsData = {
    title: string,
    points: string[],
    imageSrc: string
  }
const IndustryCards:FC<medicalCardsData> = (props) => {
  return (
    <div className="aspect-[7/9] w-full rounded-2xl relative overflow-hidden shadow-2xl group">
    <img className="h-full w-full object-cover rounded-2xl" src={props.imageSrc}/>
    <div className={`bg-white absolute z-1 top-[85%] w-full h-full text-2xl text-center text-cyan-700  translate-all duration-500 ${props.points.length?"group-hover:bg-opacity-90 group-hover:top-0":""} p-2`}>
        <h1 className="lg:text-4xl h-[12%] text-3xl py-2 flex items-center justify-center group-hover:py-8 font-semibold">
         {props.title}
        </h1>
        <div className="mt-8 px-12 text-left text-black">
          {props.points.length>1?(<ul className="list-disc">
            {
             props.points.map((point:string, index:number)=>{
                return(
                    <li key={index} className="lg:my-4 my-2 text-2xl lg:text-2xl text-gray-800">{point}</li>
                )
             })
            }
          </ul>):(
            <p className="lg:my-4 my-2 text-2xl lg:text-3xl text-gray-800">{props.points[0]}</p>
          )}
        </div>
    </div>
    </div>
  )
}

export default IndustryCards