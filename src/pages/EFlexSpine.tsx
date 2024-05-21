import HorizontalScroll from 'react-scroll-horizontal';

const CaseStudies = () => {

  const cardsData = [
    {
      title: "Precision",
      content: "Achieve unparalleled precision in rod bending. By leveraging advanced algorithms and intelligent software, the system creates a geometry that is specific to the patient's anatomy and condition.      ",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/eFlexPine/1.svg`
    },
    {
      title: "Customization",
      content: "Achieve customization in rod bending. While our solution can be integrated with software to process input coordinate data, we currently focus on providing a device that excels in precise and accurate rod bending. The coordinates can be manually inputted to ensure the desired geometry is achieved.",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/eFlexPine/2.svg`
    },
    {
      title: "Elimination of Manual Force",
      content: "Eliminates the need for manual force, relieving surgeons from physical exertion and reducing the risk of fatigue-related errors. This breakthrough technology enables a safer and more efficient surgical experience.",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/eFlexPine/3.svg`
    },
    {
      title: "Enhanced Accuracy",
      content: "Guaranteed accurate and consistent results. Allows for real-time measurement and adjustment, ensuring that the final bend aligns perfectly with the intended specifications.",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/eFlexPine/4.svg`
    },
    {
      title: "Streamlined Workflow",
      content: "The automated nature of our solution streamlines the entire bending process, optimizing the surgery and reducing procedure duration. Surgeons can perform rod bending with ease and efficiency, allowing for increased patient throughput and improved resource utilization within the hospital or surgical center.",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/eFlexPine/5.svg`
    },
    {
      title: "Compatibility and Versatility",
      content: "Compatible with various spinal rod materials, including Stainless Steel and Titanium alloys. This versatility enables surgeons to work with their preferred implant systems, maintaining flexibility in their surgical approaches while benefiting from the precision and ease of use provided by our system.",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/eFlexPine/6.svg`
    },
  ]

  return (
    <div className='h-screen overflow-y-hidden bg-black'>
      <HorizontalScroll reverseScroll={true}>
        <section className='w-[100vw] h-[100vh] relative'>
          <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/spine.svg`} className='w-full h-full object-contain'>
          </img>
          <div className='z-10 absolute inset-0 flex justify-center items-end font-bold'>
            <h1 className='text-white xl:text-9xl text-5xl'>eFlexPine</h1>
          </div>
        </section>

        <section className='w-screen h-screen p-4 px-24'>
          <div className='h-full w-full flex gap-4 items-center'>
            <section className='flex-1 flex flex-col'>
            <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/image 6.png`} className='object-cover w-full h-[20rem] mx-auto'></img>

              <h1 className=" text-5xl font-semibold text-white mt-12">
              SPINAL ROD BENDING SOLUTION              </h1>
              <p className='text-md text-white mt-12'>
              SARACA is proud to introduce our innovative Automated Spinal Rod Bending Solution, a game-changing system designed to transform the treatment of degenerative disorders, deformities, and trauma indications in the human spine. Our cutting-edge technology empowers surgeons to precisely bend metal rods to meet each patient's specific anatomical needs and conditions, revolutionizing spinal surgery.
              </p>
            </section>
            <section className='flex-[2]'>
            <iframe src="https://www.youtube.com/embed/2xSn3Ws44bw?si=3elqruy-L8g06FcR" className='h-[60vh] object-cover w-[80%] mx-auto'></iframe>

            </section>

          </div>
        </section>


        <section className='h-screen w-screen p-4 flex items-center justify-center gap-24'>

          <div className='w-full'>
            <h1 className='text-5xl text-white font-bold'>
              Key features
            </h1>
            <div className='mt-4 flex gap-12 min-h-[30rem]'>

              {cardsData?.map((data, index) => {
                return (
                  <div className={`${index % 2 === 0 ? "translate-y-[18%]" : ""} border-[1px] p-2 rounded-lg shadow-md shadow-gray-300`}>
                    <div className="h-[16rem] aspect-[4/3]">
                      <img src={data?.imageSrc} alt="" className='w-full h-full object-contain rounded-md' />
                    </div>
                    <div className='text-gray-400 text-sm leading-5 mt-4'>
                      <h1 className='text-white font-semibold text-lg'>{data?.title}</h1>
                      {data?.content}
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>
      </HorizontalScroll>
    </div>
  );
};

export default CaseStudies;
