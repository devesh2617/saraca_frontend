import { FC, useEffect } from "react"
const CaseStudiesHeader: FC = ({ activeItem }) => {
  const caseStudiesHeader = [
    "Aerospace and Defense",
    "Automotive",
    "Consumer",
    "Industrial",
    "Life Sciences",
    "Rail Transportation",
    "Semiconductor",
  ]
  useEffect(() => {
    // const targetSection = document.getElementById(activeItem)
    // if (targetSection) targetSection.scrollIntoView({
    //   behavior: 'instant'
    // })
  }, [activeItem])
  return (
    <div className=" bg-sky-200 text-sky-800 font-semibold text-xl flex flex-row mt-24 fixed z-10 justify-around h-16 overflow-x-auto min-w-[100%] gap-4">
      {caseStudiesHeader.map((item, index) => {
        return (
          <p key={index} className={`${activeItem === item ? "text-blue-600 flex-shrink border-b-4 border-blue-600" : ""} h-full flex items-center`}>{item}</p>
        )
      })}
    </div>
  )
}

export default CaseStudiesHeader
