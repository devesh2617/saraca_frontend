import { FC } from "react"

type medicalCardsData = {
    title: string,
    link: string,
    imageSrc: string
  }
const IndustryCards:FC<medicalCardsData> = (props) => {
  return (
    <a href={props.link} className="cursor-pointer">
    <div className="min-h-[50vh] w-[22rem]">
    <div className="h-[45vh] w-full rounded-2xl overflow-hidden shadow-2xl group">
    <img className="h-full w-full object-cover rounded-2xl" src={props.imageSrc}/>

    </div>
    <h1 className="text-2xl text-white w-full text-center p-4 font-semibold">{props.title}</h1>
    </div>
    </a>
  )
}

export default IndustryCards