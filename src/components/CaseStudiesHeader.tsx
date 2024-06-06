import { FC } from "react"

interface CaseStudiesHeaderProps {
  activeItem: string
  setActiveItem: (item: string) => void
}

const CaseStudiesHeader: FC<CaseStudiesHeaderProps> = ({ activeItem, setActiveItem }) => {
  const caseStudiesHeader = [
    "Aerospace and Defense",
    "Automotive",
    "Consumer",
    "Industrial",
    "Life Sciences",
    "Rail Transportation",
    "Semiconductor",
  ]

  return (
    <div className="bg-sky-200 text-sky-800 font-semibold text-xl flex flex-row lg:mt-24 mt-20 fixed z-10 justify-around h-16 overflow-x-auto min-w-[100%] gap-8 whitespace-nowrap no-scrollbar">
      {caseStudiesHeader.map((item, index) => {
        return (
          <p 
            key={index} 
            className={`${
              activeItem === item ? "text-blue-600 border-b-4 border-blue-600" : ""
            } flex-shrink-0 h-full flex items-center cursor-pointer`} 
            onClick={() => {
              document.getElementById(item).scrollIntoView({ behavior: "smooth" })
              setActiveItem(item)
            }}
          >
            {item}
          </p>
        )
      })}
    </div>
  )
}

export default CaseStudiesHeader
