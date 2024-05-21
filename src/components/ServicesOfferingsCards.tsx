import { FC } from "react";

interface CardProps {
  cardsData: any;
  imagePosition: "left" | "right";
}

const Card: FC<CardProps> = ({ cardsData, imagePosition }) => {
  
  return (
    <div
      className={`flex flex-col items-center container mx-auto bg-white px-8 rounded-3xl md:flex-row ${imagePosition === "right" ? "md:flex-row-reverse" : ""} sm:min-h-24 hover:-translate-y-2 hover:shadow-sm transition-all duration-500` }
    >
      <div aria-label="image" className="md:h-full md:w-1/4 h-[15rem] w-full">
        <img src={cardsData.imageSrc} className="h-full w-full mx-auto object-contain" />
      </div>
      <div aria-label="content" className={`md:flex-1 w-full text-left flex justify-center items-center py-12 px-8 md:text-left`}>
        <div className={`${imagePosition==="left"?"md:pl-8":""} w-full`}>
        
          <h1 className="text-3xl font-bold mb-6">{cardsData.heading}</h1>
          <p className="text-xl text-gray-600 md:text-left mb-12 leading-8">{cardsData.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
