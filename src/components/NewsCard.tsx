import { FC } from "react";

interface CardProps {
  title:string;
  decription:string;
  date:string;
  img:string;
  link:string;
}

const Card: FC<CardProps> = ({cardsData}) => {
  
  return (
    <div
      className={`flex flex-col items-center container mx-auto bg-[#DDE6ED] px-2 rounded-3xl md:flex-row sm:min-h-24 hover:-translate-y-1 hover:shadow-xl transition-all duration-500` }
    >
      <div aria-label="image" className="md:h-full min-h-[15rem]  p-8 flex flex-col md:items-start items-end gap-4">
        <img src={import.meta.env.VITE_REACT_APP_API_URL+cardsData.img} className="md:aspect-[16/9] w-[40rem] object-cover" />
        
      </div>
      <div aria-label="content" className={`md:flex-1 w-full text-left flex justify-center items-center py-12 px-8 md:text-left`}>
        <div className={`w-full min-h-[15rem] flex flex-col`}>
        
          <h1 className="text-3xl font-semibold">{cardsData?.title}</h1>
          
          <p className="text-2xl md:text-left mb-12 leading-8 mt-4 text-gray-600">{cardsData?.description}</p>
          <div className="mt-auto flex justify-between">
          <a href={cardsData.link} target="_blank" className=" text-red-500 underline text-2xl">Read more...</a>
          <p className="text-right text-sky-500 text-2xl">{cardsData?.date?.split("00:00:00")[0]}</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Card;
