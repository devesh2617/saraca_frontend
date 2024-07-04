import { FC } from "react"
type whyChooseUsCardsData = {
    imageSrc: string;
    title: string;
    content:string;
    cardPosition: 'odd' | 'even';
    index: number;
  }
const WhyChooseUsCards:FC<whyChooseUsCardsData> = ({data, cardPosition, index}) => {
    
      
  
//   console.log(backgroundCode)
  return (
    <div className={`w-full flex flex-col gap-6 p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl ring-1 ring-white/40 shadow-white/20`}>
    <img src={data.imageSrc} alt="image" className="w-full aspect-square object-cover"/>
    <p className={`text-2xl text-center text-black`}>{data.title}</p>
    <p className="text-4xl text-center text-black font-bold">{data.content}</p>
    </div>
  )
}

export default WhyChooseUsCards
