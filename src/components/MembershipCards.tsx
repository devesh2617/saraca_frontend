import { FC } from "react";

interface CardProps {
  name: string;
  imageSrc:string;
}

const Card: FC<CardProps> = (props) => {
  
  return (
    <div
      className={`flex flex-col container mx-auto bg-background p-8 shadow-xl transition-all duration-500` }
    >
      <div aria-label="image" className="w-full flex flex-col gap-4">
        <img src={props.imageSrc} className="aspect-video w-full object-fill" />
      </div>
      <div aria-label="content" className="pt-8">      
          <h1 className="md:text-5xl text-3xl font-bold text-center">{props.name}</h1>    
      </div>
    </div>
  );
};

export default Card;
