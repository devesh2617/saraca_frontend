import { FC } from "react";

interface CardProps {
  name: string;
  content: string;
  imageSrc:string;
}

const Card: FC<CardProps> = ({cardsData}) => {
  
  return (
    <div
      className={`flex flex-col container mx-auto bg-background px-2 shadow-xl sm:min-h-24 transition-all duration-500` }
    >
      <div aria-label="image" className="w-full p-8 flex flex-col gap-4">
        <img src={cardsData.imageSrc} className="aspect-[9/11] w-full object-cover" />
      </div>
      <div aria-label="content" className={`md:flex-1 w-full text-left flex justify-center py-12 px-8 md:text-left`}>
        <div className={`w-full`}>   
          <h1 className="text-3xl font-bold">{cardsData.name}</h1>
          <p className="text-xl text-gray-500 md:text-left mb-12 leading-8">{cardsData.content}</p>     
        </div>
      </div>
    </div>
  );
};

export default Card;
