import { FC } from "react";

interface CardsData {
    category: string;
    title: string;
    text: string;
    link: string;
    imageSrc: string;
    imgPosition: "left" | "right";
    date: string;
}
const NewsBlogsCards: FC<CardsData> = (props) => {
    return (
        <div className="container min-h-[30vh] md:min-h-[80vh] mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold">{props.category}</h1>
            <div className="relative md:h-[70vh] mt-8 md:mt-24 transition-all duration-500">
                <div className={`md:w-[52%] h-full ${props.imgPosition === "right" ? "md:float-right" : ""}`}>
                    <img
                        src={props.imageSrc}
                        className="w-full h-full object-cover"
                    ></img>
                </div>
                <div className={`bg-white md:w-[52%] md:absolute md:z-1 md:top-[50%] ${props.imgPosition === "right" ? "md:left-0" : "md:right-0"} md:-translate-y-[50%] border-b-4 border-sky-500 md:p-12 p-4 shadow-2xl h-[80%] hover:bg-blue-500 hover:border-blue-500 transition-colors duration-500 ease-out group`}>
                    <div className="h-full flex flex-col">
                        <h1 className="lg:text-4xl text-4xl font-bold group-hover:text-white text-[#6A6A6A]">{props.title}</h1>
                        <p className="text-black md:mt-8 mt-4 group-hover:text-white text-xl leading-relaxed">{props.text}</p>
                        <div className="flex flex-col md:flex-row justify-between mt-auto">
                            <a href={props.link}>
                                <button className="bg-gradient-to-r mt-4 from-blue-400 to-blue-700 px-8 py-2 text-lg text-white mx-auto group-hover:from-white group-hover:to-white group-hover:text-blue-500">
                                    Learn More
                                </button>
                            </a>
                            <p className="text-blue-700 mt-auto group-hover:text-white text-right">{props.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsBlogsCards;
