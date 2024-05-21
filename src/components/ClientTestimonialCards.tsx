import { FC } from "react";

interface CardProps {
  name: string;
  designation: string;
  content: string;
  imageSrc:string;
  link: string;
}

const Card: FC<CardProps> = ({cardsData}) => {
  
  return (
    <div
      className={`flex flex-col items-center container mx-auto bg-[#DDE6ED] px-2 rounded-3xl md:flex-row sm:min-h-24 hover:-translate-y-1 hover:shadow-xl transition-all duration-500` }
    >
      <div aria-label="image" className="md:h-full h-[15rem] w-[20rem] p-8 flex md:flex-col md:items-start flex-row items-end gap-4">
        <img src={cardsData.imageSrc} className=" aspect-square md:aspect-[10/11] w-full object-cover rounded-xl" />
        <a href={cardsData.link}><img src={`${import.meta.env.VITE_REACT_APP_API_URL}/linkedin.svg`} alt="" className="h-16 aspect-square"/></a>
      </div>
      <div aria-label="content" className={`md:flex-1 w-full text-left flex justify-center items-center py-12 px-8 md:text-left`}>
        <div className={`w-full`}>
        
          <h1 className="text-3xl font-bold">{cardsData.name}</h1>
          <p className="text-lg text-gray-500 md:text-left mb-12 font-semibold">{cardsData.designation}</p>
          <p className="text-xl text-gray-500 md:text-left mb-12 leading-8">{cardsData.content}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
