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
    <div className={`w-[15rem] aspect-square flex overflow-hidden flex-col background_${index+1} text_${index+1} gap-2 p-4 ${cardPosition==="odd"? `border-t-4 border_${index+1}`: `border-b-4 border_${index+1}`}`}>
    <img src={data.imageSrc} alt="image" className="w-[10rem] aspect-square rounded-full mx-auto object-cover"/>
    <h1 className={`text-xl font-semibold text-center`}>{data.title}</h1>
    <div className="text-sm w-full break-words">{data.content}</div>
    </div>
  )
}

export default WhyChooseUsCards
