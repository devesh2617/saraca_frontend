import { FC } from "react";

interface CardProps {
  name: string;
  imageSrc:string;
}

const Card: FC<CardProps> = (props) => {
  
  return (
    <div
      className={`flex flex-col container mx-auto bg-background p-8 shadow-xl sm:min-h-24 transition-all duration-500` }
    >
      <div aria-label="image" className="w-full flex flex-col gap-4">
        <img src={props.imageSrc} className="aspect-[9/11] w-full object-fill" />
      </div>
      <div aria-label="content" className={`text-left pt-8`}>
      
          <h1 className="sm:text-5xl text-3xl font-semibold">{props.name}</h1>    
        
      </div>
    </div>
  );
};

export default Card;
