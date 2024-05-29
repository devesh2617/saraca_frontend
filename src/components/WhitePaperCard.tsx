import { FC } from "react"

const CaseStudyCard:FC = ({data}) => {
  return (
    <div className="container mx-auto min-h-[30rem] flex flex-col-reverse md:flex-row bg-[#DDE6ED] shadow-lg rounded-lg md:border-sky-500 md:border-b-4">     
      <div className={`flex-[3]  p-12`}>
                    <div className="h-full flex flex-col gap-2">
                        <h1 className="lg:text-4xl text-4xl font-bold group-hover:text-white leading-relaxed text-[#6A6A6A]">{data?.title}</h1>
                        <p dangerouslySetInnerHTML={{__html:data?.description}} className="text-gray-500 mt-8 group-hover:text-white text-xl leading-relaxed"></p>
                        <div className="flex justify-between mt-auto">
                            <a href={`/white_paper/${data?.id}`}>
                                <button className="bg-gradient-to-r from-blue-400 to-blue-700 px-8 py-2 text-lg text-white mx-auto group-hover:from-white group-hover:to-white group-hover:text-blue-500">
                                    Learn More
                                </button>
                            </a>
                            <p className="text-blue-700 mt-auto group-hover:text-white">{data?.date?.split("00:00:00")[0]}</p>
                        </div>
                    </div>
      </div>
                <div className="flex-[2] my-auto aspect-square">
            <img src={import.meta.env.VITE_REACT_APP_API_URL+data?.img} alt="" className="object-cover mx-auto my-8 h-full w-full "/>
        </div>
    </div>
  )
}

export default CaseStudyCard
