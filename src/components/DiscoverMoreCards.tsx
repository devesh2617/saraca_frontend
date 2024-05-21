import { FC } from "react"

type DiscoverMoreCardsData = {
imageSrc:string,
link:string
}
const DiscoverMoreCards:FC<DiscoverMoreCardsData> = (props) => {
  return (
    <div className="bg-white w-[22rem] h-[45vh] relative group">
    <img src={props.imageSrc} className="h-full w-full object-fill"/>
    <div className="absolute inset-0 bg-black bg-opacity-70 hidden justify-center items-center group-hover:flex">
      <a href={props.link}>
      <button className="border-2 border-white rounded-md text-white py-4 px-12 hover:bg-white hover:text-blue-500">Know More</button>
      </a>
    </div>
    </div>
  )
}

export default DiscoverMoreCards