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
      <div className="flex-1 flex justify-center">
        <h1 className={`text-gray-500 font-semibold text-4xl px-4 w-2/3 text-center`}>{cardsData.heading}</h1>
      </div>
      <div aria-label="image" className="w-[24rem]">
        <img src={cardsData.imageSrc} className="w-full aspect-[4/3] mx-auto object-fit" alt="" />
      </div>
      <div aria-label="content" className={`flex-1 text-left md:flex md:flex-row md:justify-center`}>
        <div className={`md:w-[80%] md:flex md:flex-row md:justify-center`}>
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
    </div>
  );
});

export default Card;
