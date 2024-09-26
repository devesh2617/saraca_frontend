import { FC } from "react";

type DiscoverMoreCardsData = {
  img: string;
  link: string;
  title:string;
  type:string;
};
const DiscoverMoreCards: FC<DiscoverMoreCardsData> = (props) => {
 
  return (<div className="flex flex-col gap-4">
    <h6 className=" uppercase text-5xl font-bold text-white">{props.type}</h6>
    <div className="w-[40rem] h-[32rem] relative group p-4 bg-white/30 backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden">
      <div className="w-full">
        <img
          src={`${import.meta.env.VITE_REACT_APP_API_URL}${props.img}`}
          className="w-full aspect-video object-fill"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 hidden justify-center items-center group-hover:flex">
          <a href={props.link} target="_blank">
            <button className="border-2 border-white rounded-md text-white py-4 px-12 hover:bg-white hover:text-blue-500">
              Know More
            </button>
          </a>
        </div>
        <h1 className="text-white text-4xl break-words mt-4 font-semibold">{props.title}</h1>
      </div>
    </div>
    </div>
  );
};

export default DiscoverMoreCards;
