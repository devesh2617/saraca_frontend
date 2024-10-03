import { FC } from "react"

type TestimonialProps = {
  name: string,
  designation: string,
  content: string,
  imageSrc: string
}
const TestmonialCards:FC<TestimonialProps> = (props) => {
  return (
    
    <div className={`mx-auto pt-24 min-h-[35rem] max-w-[28rem] rounded-lg shadow-2xl mt-36 mb-24 p-4 bg-white lg:hover:scale-110 transition-all duration-200 relative`}>
      <a href="/Success_Stories/Client_Testimonials">
      <div className="flex w-full min-h-[8rem] p-2">
        <div aria-label="image" className="absolute w-[12rem] bottom-full left-[50%] translate-y-[50%] -translate-x-[50%] object-cover border-4 border-gray-400 rounded-full p-1 bg-white">
          <img src={props.imageSrc} className=" aspect-square rounded-full object-fill"/>
        </div>
        <div className="text-center w-full">
           <p className="text-3xl font-semibold text-center">
            {props.name}
           </p>
           <p className="text-gray-600 text-lg text-center">
            {props.designation}
           </p>
          </div>
      </div>
      <div className="text-lg px-6 text-left tracking-normal leading-relaxed">
        {props.content}
      </div>
      </a>
    </div>
  )
} 

export default TestmonialCards