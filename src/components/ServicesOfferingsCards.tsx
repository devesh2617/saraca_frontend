import { FC } from "react";

interface CardProps {
  cardsData: any;
  imagePosition: "left" | "right";
  imageSrc: string;
}

const Card: FC<CardProps> = ({ cardsData, imageSrc }) => {
  
  return (
    <div
      className={`flex flex-col container mx-auto bg-gradient-to-l from-slate-700 to-slate-400 px-8 rounded-xl sm:min-h-24 hover:-translate-y-1 shadow-md transition-all duration-500` }
    >
      <div aria-label="image" className="w-full  mt-8">
        <img src={imageSrc} className="aspect-[16/9] w-full mx-auto object-cover" />
      </div>
      <div aria-label="content" className={`text-left flex py-8 px-8 md:text-left`}>
        <div className={``}>
        
          <h1 className="text-5xl font-bold mb-6">{cardsData.heading||cardsData.title}</h1>
          {cardsData?.description&&(<p className="text-2xl lg:text-3xl text-white md:text-left font-extralight">{cardsData.description}</p>)}
          {cardsData?.content?cardsData?.content?.length>1?(<ul className="list-disc">
            {
             cardsData.content.map((point:string, index:number)=>{
                return(
                    <li key={index} className="lg:my-4 my-1 text-2xl lg:text-3xl text-white font-extralight">{point}</li>
                )
             })
            }
          </ul>):(
            <p className="lg:my-4 my-1 text-2xl lg:text-3xl text-white font-extralight">{cardsData.content[0]}</p>
          ):""}
        </div>
      </div>
    </div>
  );
};

export default Card;
