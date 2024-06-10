import { FC } from "react"

const CaseStudyCard:FC = ({data}) => {
  return (
    <div className="container mx-auto transition-all duration-700 scale-95 border-[2px] border-black hover:scale-100 fade-in-90 flex flex-col-reverse md:flex-row bg-background rounded-lg md:border-sky-500 md:border-b-4">     
      <div className={`flex-1  p-12`}>
                    <div className="h-full flex flex-col gap-2">
                        <h1 className="lg:text-5xl text-4xl font-bold group-hover:text-white leading-relaxed text-black">{data?.title}</h1>
                        <p dangerouslySetInnerHTML={{__html:data?.project_scope}} className="text-gray-500 mt-8 group-hover:text-white text-3xl leading-relaxed"></p>
                        <div className="flex justify-between mt-auto">
                            <a href={`/case_study/${data?.id}`}>
                                <button className="bg-gradient-to-r from-blue-400 to-blue-700 px-8 py-2 text-2xl text-white mx-auto group-hover:from-white group-hover:to-white group-hover:text-blue-500">
                                    Learn More
                                </button>
                            </a>
                            <p className="text-blue-700 mt-auto group-hover:text-white text-2xl">{data?.date?.split("00:00:00")[0]}</p>
                        </div>
                    </div>
      </div>
                <div className="flex-1 my-auto w-full">
            <img src={import.meta.env.VITE_REACT_APP_API_URL+data?.img} alt="" className="my-8 object-fill mx-auto w-[100%] aspect-[16/9]"/>
        </div>
    </div>
  )
}

export default CaseStudyCard
