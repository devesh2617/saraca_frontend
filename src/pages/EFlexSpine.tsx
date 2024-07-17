import { Helmet } from "react-helmet";
import HorizontalScroll from "react-scroll-horizontal";

const CaseStudies = () => {
  const cardsData = [
    {
      title: "Precision",
      content:
        "Achieve unparalleled precision in rod bending. By leveraging advanced algorithms and intelligent software, the system creates a geometry that is specific to the patient's anatomy and condition.      ",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/eFlexPine/1.svg`,
    },
    {
      title: "Customization",
      content:
        "Achieve customization in rod bending. While our solution can be integrated with software to process input coordinate data, we currently focus on providing a device that excels in precise and accurate rod bending. The coordinates can be manually inputted to ensure the desired geometry is achieved.",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/eFlexPine/2.svg`,
    },
    {
      title: "Elimination of Manual Force",
      content:
        "Eliminates the need for manual force, relieving surgeons from physical exertion and reducing the risk of fatigue-related errors. This breakthrough technology enables a safer and more efficient surgical experience.",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/eFlexPine/3.svg`,
    },
    {
      title: "Enhanced Accuracy",
      content:
        "Guaranteed accurate and consistent results. Allows for real-time measurement and adjustment, ensuring that the final bend aligns perfectly with the intended specifications.",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/eFlexPine/4.svg`,
    },
    {
      title: "Streamlined Workflow",
      content:
        "The automated nature of our solution streamlines the entire bending process, optimizing the surgery and reducing procedure duration. Surgeons can perform rod bending with ease and efficiency, allowing for increased patient throughput and improved resource utilization within the hospital or surgical center.",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/eFlexPine/5.svg`,
    },
    {
      title: "Compatibility and Versatility",
      content:
        "Compatible with various spinal rod materials, including Stainless Steel and Titanium alloys. This versatility enables surgeons to work with their preferred implant systems, maintaining flexibility in their surgical approaches while benefiting from the precision and ease of use provided by our system.",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/eFlexPine/6.svg`,
    },
  ];

  return (
    <div className="h-screen bg-black lg:overflow-y-hidden overflow-x-hidden">
      <Helmet>
        <title>
          Automated Spinal Rod Bending Solution by SARACA: Redefining Surgical
          Precision
        </title>
        <meta
          property="og:title"
          content="Automated Spinal Rod Bending Solution by SARACA: Redefining Surgical Precision"
        />
        <meta
          name="description"
          content="Explore SARACA's revolutionary Automated Spinal Rod Bending Solution, transforming spinal surgery with unparalleled precision and efficiency. Designed to cater to diverse surgical needs, this innovative system enhances surgical outcomes by ensuring real-time measurement and adjustment for perfect spinal rod alignment. Discover SARACA's commitment to advancing medical technology, prioritizing surgeon well-being, patient-centric care, and regulatory compliance."
        />
        <meta
          name="keywords"
          content="automated spinal rod bending solution, SARACA medical technology, surgical precision, spinal surgery innovation, spine deformity treatment, scoliosis treatment, surgical outcomes improvement"
        />
        <meta
          property="og:description"
          content="Explore SARACA's revolutionary Automated Spinal Rod Bending Solution, transforming spinal surgery with unparalleled precision and efficiency. Designed to cater to diverse surgical needs, this innovative system enhances surgical outcomes by ensuring real-time measurement and adjustment for perfect spinal rod alignment. Discover SARACA's commitment to advancing medical technology, prioritizing surgeon well-being, patient-centric care, and regulatory compliance."
        />
        <meta
          property="og:keywords"
          content="automated spinal rod bending solution, SARACA medical technology, surgical precision, spinal surgery innovation, spine deformity treatment, scoliosis treatment, surgical outcomes improvement"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <HorizontalScroll reverseScroll={true} className="hidden lg:block">
        <section className="w-[100vw] h-[100vh] relative">
          <video
            className="w-full h-full object-cover"
            playsInline={true}
            autoPlay
            loop
            muted
          >
            <source
              src={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/Innovation/eFlexPine/SRBS.mp4`}
              type="video/mp4"
            />
          </video>
          <div className="z-10 absolute inset-0 flex justify-end items-end font-bold">
            <img
              src={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/Innovation/eFleXpine-logo.svg`}
              className="aspect-auto w-52 bg-white"
            />
          </div>
        </section>

        <section className="w-screen h-screen p-4 px-24">
          <div className="h-full w-full flex gap-4 items-center">
            <section className="flex-1 flex flex-col">
              <img
                src={`${import.meta.env.VITE_REACT_APP_API_URL}/image 6.png`}
                className="object-cover w-full acpect-[16/9] mx-auto"
              ></img>

              <h1 className=" text-5xl font-semibold text-white mt-12">
                SPINAL ROD BENDING SOLUTION
              </h1>
              <p className="text-3xl text-white mt-12">
                SARACA is proud to introduce our innovative Automated Spinal Rod
                Bending Solution, a game-changing system designed to transform
                the treatment of degenerative disorders, deformities, and trauma
                indications in the human spine. Our cutting-edge technology
                empowers surgeons to precisely bend metal rods to meet each
                patient's specific anatomical needs and conditions,
                revolutionizing spinal surgery.
              </p>
            </section>
            <section className="flex-[2]">
              <iframe
                src="https://www.youtube.com/embed/2xSn3Ws44bw?si=3elqruy-L8g06FcR"
                className="aspect-[16/9] object-cover w-[80%] mx-auto"
              ></iframe>
            </section>
          </div>
        </section>

        <section className="h-screen w-screen p-4 flex items-center justify-center gap-24">
          <div className="w-full">
            <h1 className="text-5xl text-white font-bold">Key features</h1>
            <div className="mt-4 flex gap-12 min-h-[30rem]">
              {cardsData?.map((data, index) => {
                return (
                  <div
                    className={`${
                      index % 2 === 0 ? "translate-y-[18%]" : ""
                    } border-[1px] p-4 rounded-lg shadow-md shadow-gray-300`}
                  >
                    <div className="h-[16rem] aspect-[4/3]">
                      <img
                        src={data?.imageSrc}
                        alt=""
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    <div className="text-gray-400 text-xl mt-4">
                      <h1 className="text-white font-semibold text-2xl">
                        {data?.title}
                      </h1>
                      {data?.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </HorizontalScroll>
      <div className="w-[90%] mx-auto">
        <div className="mt-32 relative">
          <video
            className="w-full aspect-video object-cover"
            playsInline={true}
            autoPlay
            loop
            muted
          >
            <source
              src={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/Innovation/eFlexPine/SRBS.mp4`}
              type="video/mp4"
            />
          </video>
          <div className=" absolute bottom-0 z-2 right-0">
            <img
              src={`${
                import.meta.env.VITE_REACT_APP_API_URL
              }/Innovation/eFleXpine-logo.svg`}
              className="aspect-auto w-52 bg-white"
            />
          </div>
        </div>

        <section className="w-full pt-24">
          <div className="w-full aspect-video flex flex-col gap-16">
            <img
              src={`${import.meta.env.VITE_REACT_APP_API_URL}/image 6.png`}
              className="object-cover w-full acpect-[16/9] mx-auto"
            ></img>

            <h1 className=" text-5xl font-semibold text-white">
              SPINAL ROD BENDING SOLUTION
            </h1>
            <p className="text-3xl text-white">
              SARACA is proud to introduce our innovative Automated Spinal Rod
              Bending Solution, a game-changing system designed to transform the
              treatment of degenerative disorders, deformities, and trauma
              indications in the human spine. Our cutting-edge technology
              empowers surgeons to precisely bend metal rods to meet each
              patient's specific anatomical needs and conditions,
              revolutionizing spinal surgery.
            </p>
          </div>
        </section>
        <section className="pt-24">
          <div className="overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/2xSn3Ws44bw?si=3elqruy-L8g06FcR"
              className="aspect-video object-cover w-full"
            ></iframe>
          </div>
        </section>
      
        
        <section className="flex flex-col">
          <div className="w-full pt-24">
            <h1 className="text-5xl text-white font-bold">Key features</h1>
            <div className="mt-16 flex flex-col gap-16 min-h-[30rem]">
              {cardsData?.map((data, index) => {
                return (
                  <div className={`p-4 w-full`}>
                    <div className="w-[60%] aspect-[4/3] mx-auto">
                      <img
                        src={data?.imageSrc}
                        alt=""
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    <div className="text-gray-400 text-3xl mt-16">
                      <h1 className="text-white font-semibold text-5xl text-center mb-16">
                        {data?.title}
                      </h1>
                      {data?.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudies;
