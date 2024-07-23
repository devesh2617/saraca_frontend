import { getApi } from "@/api/adminApi"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CaseStudy = () => {
    const { id } = useParams()
    const [caseStudy, setCaseStudy] = useState()
    useEffect(() => {
        getApi(`api/get_case_study/${id}`)
            .then(res => setCaseStudy(res?.data?.caseStudy))
            .catch(e => console.log(e))
    },
        [])
    return (
        <div>
            <div aria-label='landing-image' className="w-full h-full lg:mt-24 mt-20 relative">
                <div className="absolute z-[1] w-full h-full">
                    <div className="h-full absolute w-2/3 left-0 text-xl lg:text-5xl text-white flex items-center lg:font-semibold text-left pl-[1em]">
                        {caseStudy?.title}
                    </div>
                </div>

                <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_REACT_APP_API_URL}/case-study.jpg`} />

            </div>
            <h1 className="text-2xl lg:text-5xl text-center mt-4">{caseStudy?.customer}</h1>
            <div className="container flex flex-col lg:flex-row py-8 gap-4">
                <div className="flex-1">
                    <img src={import.meta.env.VITE_REACT_APP_API_URL+caseStudy?.img} alt="" className="w-full aspect-[16/9] object-fill rounded-lg" />
                </div>
                <div className="flex-1 flex flex-col gap-4">

                    <div className="bg-stone-200 p-8 rounded-lg shadow-xl lg:border-l-2 border-sky-500">
                        <h1 className="font-semibold text-2xl text-center mb-4">Project Scope</h1>
                        <div aria-label="project-scope" dangerouslySetInnerHTML={{ __html: caseStudy?.project_scope }} className="editorText"/>

                    </div>

                    <div className="bg-gray-200 p-8 rounded-lg shadow-xl lg:border-l-2 border-sky-500">
                        <h1 className="font-semibold text-2xl text-center mb-4">Project Deliverables</h1>
                        <div aria-label="project-deliverables" dangerouslySetInnerHTML={{ __html: caseStudy?.project_deliverables }} className="editorText"/>

                    </div>

                    <div className=" bg-slate-200 p-8 rounded-lg shadow-xl lg:border-l-2 border-sky-500">
                        <h1 className="font-semibold text-2xl text-center mb-4">Key Tools</h1>
                        <div aria-label="key-tools" dangerouslySetInnerHTML={{ __html: caseStudy?.key_tools }} className="editorText"/>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CaseStudy
