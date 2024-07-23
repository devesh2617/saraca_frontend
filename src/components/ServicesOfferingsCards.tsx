import { FC } from "react";

interface CardProps {
  cardsData: any;
  imagePosition: "left" | "right";
  imageSrc: string;
}

const Card: FC<CardProps> = ({ cardsData, imageSrc }) => {
  return (
    <div
      className={`subgrid container mx-auto bg-gradient-to-l from-slate-600 to-slate-400 px-8 rounded-xl sm:min-h-24 shadow-md transition-all duration-500 py-8`}
    >
      <div aria-label="image" className="w-full">
        <img
          src={imageSrc}
          className="aspect-[16/9] w-full mx-auto object-cover"
        />
      </div>
      
        <h1 className="text-5xl font-bold">
          {cardsData.heading || cardsData.title}
        </h1>

        {cardsData?.description && (
          <p className="text-2xl lg:text-3xl text-white md:text-left font-extralight">
            {cardsData.description}
          </p>
        )}
        {cardsData?.content ? (
          cardsData?.content?.length > 1 ? (
            <ul className="list-disc pl-8">
              {cardsData.content.map((point: string, index: number) => {
                return (
                  <li
                    key={index}
                    className="lg:my-4 my-1 text-2xl lg:text-3xl text-white font-extralight"
                  >
                    {point}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="lg:my-4 my-1 text-2xl lg:text-3xl text-white font-extralight">
              {cardsData.content[0]}
            </p>
          )
        ) : (
          ""
        )}
      </div>
  );
};

export default Card;
