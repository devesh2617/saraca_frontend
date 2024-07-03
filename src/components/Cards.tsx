import { FC } from "react";

interface CardProps {
  cardsData: any;
  imagePosition: "left" | "right";
}

const Card: FC<CardProps> = ({ cardsData, imagePosition }) => {
  
  return (
    <div
      className={`flex flex-col  lg:h-[70vh] sm:flex-col lg:flex-row ${imagePosition === "right" ? "lg:flex-row-reverse" : ""} sm:min-h-24 lg:items-center` }
    >
      <div aria-label="image" className="lg:h-full lg:w-1/2 w-full flex justify-center items-center">
        {cardsData.type === "embedded"?<iframe src={cardsData.imageSrc} className="lg:w-[75%] w-[85%] aspect-video" />:<img src={cardsData.imageSrc} className="h-full lg:w-[75%] w-[85%]  mx-auto object-contain" />}
        
      </div>
      <div aria-label="content" className={`lg:w-1/2 w-full text-left flex justify-center items-center ${imagePosition === "right" ? "lg:pl-36 " : "lg:pr-36"}  py-12 text-center lg:text-left`}>
        <div className="">
          <img className="mb-12 lg:w-1/2 w-1/3 mx-auto object-cover " src={`${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/${cardsData.logo}`}></img>
          <h1 className="lg:text-6xl text-5xl font-bold mb-6">{cardsData.heading}</h1>
          <p className="text-3xl lg:text-left mb-12">{cardsData.description}</p>
          <a href={cardsData.link}>
          <button className=" bg-gradient-to-r from-blue-400 to-blue-700 px-8 py-4 rounded-full lg:text-2xl text-white font-semibold">
            Explore More
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
