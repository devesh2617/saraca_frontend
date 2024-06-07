import React, { FC, forwardRef } from "react";

interface CardProps {
  key:number;
  cardsData: any;
  contentPosition: "left" | "right";
}

const Card: FC<CardProps> = forwardRef(({ cardsData, contentPosition }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center container opacity-0 mx-auto px-8 rounded-3xl md:flex-row ${contentPosition === "right" ? "md:flex-row-reverse" : ""} transition-all duration-700 blur-sm ${contentPosition}`}
    >
      <div className="flex-1">
        <h1 className={`text-gray-500 font-semibold text-3xl px-4 w-2/3 ${contentPosition === "left" ? "ml-auto text-right" : "mr-auto text-left"}`}>{cardsData.heading}</h1>
      </div>
      <div aria-label="image" className="w-[18rem] aspect-square">
        <img src={cardsData.imageSrc} className="h-full w-full mx-auto object-contain" alt="" />
      </div>
      <div aria-label="content" className={`flex-1 ${contentPosition === "left" ? "text-left" : "text-right"}`}>
        <p className="text-lg text-gray-600 px-6">{typeof cardsData?.description==="string"?<p className="lg:my-4 my-1 text-lg lg:text-xl">{cardsData?.description}</p>:cardsData?.description?.length>1?(<ul className="list-disc">
            {
             cardsData.description.map((point:string, index:number)=>{
                return(
                    <li key={index} className="lg:my-4 my-1 text-lg lg:text-xl list-none">{index+1}. {point}</li>
                )
             })
            }
          </ul>):(
            <p className="lg:my-4 my-1 text-lg lg:text-xl">{cardsData.description[0]}</p>
          )}</p>
      </div>
    </div>
  );
});

export default Card;
