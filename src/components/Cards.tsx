import { FC } from "react";

interface CardProps {
  cardsData: any;
  imagePosition: "left" | "right";
}

const Card: FC<CardProps> = ({ cardsData, imagePosition }) => {
  
  return (
    <div
      className={`flex flex-col  lg:h-[70vh] sm:flex-col lg:flex-row ${imagePosition === "right" ? "lg:flex-row-reverse" : ""} sm:min-h-24` }
    >
      <div aria-label="image" className="lg:h-full lg:w-1/2 h-[15rem] w-full">
        <img src={cardsData.imageSrc} className="h-full lg:w-[75%] mx-auto object-contain" />
      </div>
      <div aria-label="content" className={`lg:w-1/2 w-full text-left flex justify-center items-center ${imagePosition === "right" ? "lg:pl-36 " : "lg:pr-36"}  py-12 text-center lg:text-left`}>
        <div className="">
          <h1 className="text-6xl text-gray-600 mb-12">{cardsData.title}</h1>
          <h1 className="lg:text-7xl text-3xl font-bold mb-6">{cardsData.heading}</h1>
          <p className="text-lg lg:text-left mb-12">{cardsData.description}</p>
          <button className=" bg-gradient-to-r from-blue-400 to-blue-700 px-8 py-4 rounded-full lg:text-2xl text-white font-semibold">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
