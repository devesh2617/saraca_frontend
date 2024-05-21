import { postApi } from "@/api/adminApi"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import NewsCard from "../components/NewsCard"
import BlogCard from "@/components/BlogCard"
import WebinarCard from "../components/WebinarCard"
import WhitePaperCard from "../components/WhitePaperCard"
import CaseStudyCard from "../components/CaseStudyCard"
const SearchPage = () => {
  const [params] = useSearchParams()
  const [selected, setSelected] = useState("")
  const [searchResults, setSearchResults] = useState()
  useEffect(()=>{
    postApi(`api/search`, {query:params?.get("query")})
    .then(res=>{
        if(res?.status===200) {
            setSearchResults(res?.data)
            if(res?.data?.news?.length) setSelected("News")
            else if(res?.data?.caseStudies?.length) setSelected("Case Study")
            else if(res?.data?.webinars?.length) setSelected("Webinars")
            else if(res?.data?.blogs?.length) setSelected("Blogs")
            else if(res?.data?.whitePaper?.length) setSelected("White Paper")
        }
    })
  }, [params])
  return (
    <div className="mt-24 container">
        Showing search results for <strong className="underline">{params.get("query")}</strong>
    <div className="flex gap-2 mt-4">
        <button className={`bg-red-400 rounded-lg px-4 py-2 text-white ${selected==="News"?"bg-red-600 font-semibold":""}`} onClick={()=>setSelected("News")}>
          News
        </button>
        <button className={`bg-red-400 rounded-lg px-4 py-2 text-white ${selected==="Case Study"?"bg-red-600 font-semibold":""}`} onClick={()=>setSelected("Case Study")}>
          Case Study
        </button>
        <button className={`bg-red-400 rounded-lg px-4 py-2 text-white ${selected==="Webinars"?"bg-red-600 font-semibold":""}`} onClick={()=>setSelected("Webinars")}>
          Webinars
        </button>
        <button className={`bg-red-400 rounded-lg px-4 py-2 text-white ${selected==="Blogs"?"bg-red-600 font-semibold":""}`} onClick={()=>setSelected("Blogs")}>
          Blogs
        </button>
        <button className={`bg-red-400 rounded-lg px-4 py-2 text-white ${selected==="White Paper"?"bg-red-600 font-semibold":""}`} onClick={()=>setSelected("White Paper")}>
          White Papers
        </button>
    </div>
    <p className="text-gray-500">Please select what to show</p>
    {selected==="News"?(<div className="flex flex-col gap-12 my-12">
      {searchResults?.news?.map((data, index)=> <NewsCard cardsData={data}/>)}
    </div>):""}
    {selected==="Case Study"?(<div className="flex flex-col my-12 gap-12">
      {searchResults?.caseStudies?.map((data, index)=> <CaseStudyCard data={data}/>)}
    </div>):""}
    {selected==="White Paper"?(<div className="flex flex-col my-12 gap-12">
      {searchResults?.whitePaper?.map((data, index)=> <WhitePaperCard data={data}/>)}
    </div>):""}
    {selected==="Blogs"?(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center mx-auto flex-wrap gap-4 my-12">
      {searchResults?.blogs?.map((data, index)=> <BlogCard key={index} cardsData={data}/>)}
    </div>):""}
    {selected==="Webinars"?(<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center mx-auto flex-wrap gap-4 my-12">
      {searchResults?.webinars?.map((data, index)=> <WebinarCard key={index} cardsData={data}/>)}
    </div>):""}
    </div>
  )
}

export default SearchPage
