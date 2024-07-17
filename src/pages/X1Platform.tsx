import HorizontalScroll from 'react-scroll-horizontal';
import {Helmet} from "react-helmet"
const CaseStudies = () => {

  const cardsData = [
    {
      title: "Touch Screen",
      content: "Enjoy an intuitive and interactive experience with our touch screen instrument cluster, allowing easy access to various functions and information on Full HD display. It is an capacitive touchscreen, providing a responsive and seamless user experience responsive and seamless user experience",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/X1Platform/1.svg`
    },
    {
      title: "Display Size",
      content: "Our instrument cluster supports various display sizes, including 5, 7, and 10 inches, providing flexibility to suit different vehicle models and driver preferences.",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/X1Platform/2.svg`
    },
    {
      title: "Wi-Fi/Bluetooth Enabled",
      content: "Stay connected on the go with built-in Wi-Fi and Bluetooth connectivity, enabling you to access online services and connect with your smart devices effortlessly.",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/X1Platform/3.svg`
    },
    {
      title: "Media Player",
      content: "Seamlessly connect your mobile devices and enjoy your favourite music or podcasts through the instrument cluster's Bluetooth media player support.",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/X1Platform/4.svg`
    },
    {
      title: "Google Support",
      content: "On-demand basis, our instrument cluster can integrate with Google services, expanding your access to a wealth of information and functionality.",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/X1Platform/5.svg`
    },
    {
      title: "Navigation Support",
      content: "Our instrument cluster supports reliable navigation services, helping you navigate with confidence and reach your destination efficiently.",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/X1Platform/6.svg`
    },
    {
      title: "OTA Updates",
      content: "Our instrument cluster architecture supports Over-The-Air (OTA) updates, ensuring you receive the latest software enhancements and features conveniently.",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/X1Platform/7.svg`
    },
    {
      title: "Customized Themes",
      content: "Personalize your driving experience with various customized themes, allowing you to tailor the instrument cluster's appearance to your liking.      ",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/X1Platform/8.svg`
    }
  ]

  return (
    <div className='h-screen lg:overflow-y-hidden overflow-x-hidden bg-black'>
      <Helmet>
        <title>Introducing X1 Platform: Automotive Innovation by SARACA</title>
        <meta
          property="og:title"
          content="Introducing X1 Platform: Automotive Innovation by SARACA"
        />
        <meta
          name="description"
          content="Discover SARACA's revolutionary X1 platform, an Automotive Grade Linux (AGL) based solution redefining the automotive industry. Designed for OEMs and Tier 1 suppliers, the X1 platform offers unparalleled flexibility and customization for instrument clusters, infotainment, and telematics systems. Explore its features including TFT screen, Wi-Fi/Bluetooth connectivity, Google integration, and OTA updates, transforming driver experiences with advanced functionality and user-friendly interfaces."
        />
        <meta
          name="keywords"
          content="X1 platform, Automotive Grade Linux, instrument cluster, infotainment system, telematics system, TFT screen, Wi-Fi Bluetooth connectivity, Google integration, OTA updates, SARACA automotive solutions"
        />
        <meta
          property="og:description"
          content="Discover SARACA's revolutionary X1 platform, an Automotive Grade Linux (AGL) based solution redefining the automotive industry. Designed for OEMs and Tier 1 suppliers, the X1 platform offers unparalleled flexibility and customization for instrument clusters, infotainment, and telematics systems. Explore its features including TFT screen, Wi-Fi/Bluetooth connectivity, Google integration, and OTA updates, transforming driver experiences with advanced functionality and user-friendly interfaces."
        />
        <meta
          property="og:keywords"
          content="X1 platform, Automotive Grade Linux, instrument cluster, infotainment system, telematics system, TFT screen, Wi-Fi Bluetooth connectivity, Google integration, OTA updates, SARACA automotive solutions"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <HorizontalScroll reverseScroll={true} className='hidden lg:block'>
        <section className='w-[100vw] h-[100vh] relative flex items-center justify-center'>
          <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/x1-logo.svg`} className='w-full h-[60%] object-contain'>

          </img>
         
        </section>
        <section className='w-screen h-screen p-4'>
          <div className='h-full w-full flex gap-4 items-center'>
            <section className='flex-[2] relative'>

              <h1 className=" text-8xl font-semibold text-white absolute origin-bottom-left -rotate-90 translate-x-[60%]">
                DIGITAL INSTRUMENT CLUSTER
              </h1>

            </section>
            <section className='flex-[6]'>
              <iframe src="https://www.youtube.com/embed/k0TpoaiZGb0?si=brztd2wseyrUgIWf" className='w-[70%] aspect-[16/9] mx-auto'></iframe>
              <div className='text-2xl text-white mt-8 px-12'>
                Automotive Grade Linux (AGL) is an automotive OS platform that aims to revolutionize the automotive industry by creating a standardized Linux-based platform for automotive applications. AGL enables the development of advanced infotainment systems, instrument clusters, telematics, ADAS, autonomous driving, fleet management, and car-sharing platforms. It leverages open-source software and promotes collaboration among carmakers, suppliers, and technology companies. AGL's Software Defined Vehicle (SDV) concept integrates virtualization, partitioning, over-the-air updates, advanced connectivity, data analytics, and AI to enhance vehicle functionality and transform it into a software-driven platform. SDV encourages collaboration, standardization, and interoperability within the automotive ecosystem, fostering rapid innovation and customization.
              </div>
            </section>
            <section className='flex-[1] relative'>
              <h1 className=" text-8xl font-semibold text-white absolute origin-bottom-left -rotate-90 translate-x-[30%] translate-y-[50%]">
                AGL TECHNOLOGY
              </h1>
            </section>
          </div>
        </section>
        <section className='w-screen h-screen p-4'>
          <div className='h-full w-full flex gap-4 items-center'>
            <section className='flex-[2] relative'>

              <h1 className=" text-8xl font-semibold text-white absolute origin-bottom-left -rotate-90 translate-x-[60%]">
                2 WHEELER INSTRUMENT CLUSTER
              </h1>

            </section>
            <section className='flex-[6]'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/ic3.png`} className='aspect-[16/9] object-cover w-[80%] mx-auto'></img>

            </section>

          </div>
        </section>
        <section className='w-screen h-screen p-4'>
          <div className='h-full w-full flex gap-4 items-center'>
            <section className='flex-[2] relative'>

              <h1 className=" text-8xl font-semibold text-white absolute origin-bottom-left -rotate-90 translate-x-[60%]">
                4 WHEELER INSTRUMENT CLUSTER
              </h1>

            </section>
            <section className='flex-[6]'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/ic1.png`} className='aspect-[16/9] object-cover w-[80%] mx-auto'></img>
            </section>

          </div>
        </section>
        {/* <section className='w-screen h-screen p-4'>
          <div className='h-full w-full flex gap-4 items-center'>
            <section className='flex-[2] relative'>

              <h1 className=" text-8xl font-semibold text-white absolute origin-bottom-left -rotate-90 translate-x-[60%]">
                4 WHEELER INFOTAINMENT SYSTEM
              </h1>

            </section>
            <section className='flex-[6]'>
              <iframe src="https://www.youtube.com/embed/EvL3eBZCh4Q?si=PSzQljyNTZK3JnmQ" className='aspect-[16/9] object-cover w-[80%] mx-auto'></iframe>
            </section>

          </div>
        </section> */}
        <section className='h-screen w-screen p-4 flex items-center justify-center gap-24'>
          <div className='w-[40%]'>
            <h1 className='text-5xl text-white font-bold'>Product Overview</h1>
            <p className='text-white text-3xl mt-8'>
              Introducing a cutting-edge instrument cluster based on the Automotive Grade Linux (AGL) platform. This remarkable advancement in automotive technology revolutionizes the way drivers interact with their vehicles and access vital information through a TFT (Thin Film Transistor) screen.
              <br />
              <br />
              The instrument cluster serves as the primary interface between the driver and the vehicle's essential data. Traditionally, instrument clusters were built with proprietary software, limiting their flexibility and functionality. However, with the adoption of the AGL platform, instrument clusters have undergone a remarkable transformation, offering enhanced features and capabilities.
             
            </p>
          </div>
          <div className='w-[60%]'>
            <h1 className='text-5xl text-white font-bold'>
              Key features
            </h1>
            <div className='mt-4 flex gap-12 min-h-[30rem]'>
              
                  {cardsData?.map((data, index) => {
                    return (
                      <div className={`${index % 2 === 0 ? "translate-y-[18%]" : ""} border-[1px] p-4 rounded-lg shadow-md shadow-gray-300`}>
                    <div className="h-[16rem] aspect-[4/3]">
                      <img src={data?.imageSrc} alt="" className='w-full h-full object-contain rounded-md' />
                    </div>
                    <div className='text-gray-400 text-xl mt-4'>
                      <h1 className='text-white font-semibold text-2xl'>{data?.title}</h1>
                      {data?.content}
                    </div>
                  </div>
                    )
                  })}
                

            </div>

          </div>
        </section>
      </HorizontalScroll>
      <div className='w-[90%] mx-auto'>
     
          <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/x1-logo.svg`} className='w-full aspect-square object-contain'>

          </img>
         

        <section className='w-full pt-24'>
          <div className='h-full w-full flex flex-col gap-16'>
            <section className='relative'>

              <h1 className=" text-5xl font-semibold text-white">
                DIGITAL INSTRUMENT CLUSTER
              </h1>

            </section>
            <section className=''>
              <iframe src="https://www.youtube.com/embed/k0TpoaiZGb0?si=brztd2wseyrUgIWf" className='w-full aspect-[16/9]'></iframe>
              <p className='text-3xl text-white mt-16'>
                Automotive Grade Linux (AGL) is an automotive OS platform that aims to revolutionize the automotive industry by creating a standardized Linux-based platform for automotive applications. AGL enables the development of advanced infotainment systems, instrument clusters, telematics, ADAS, autonomous driving, fleet management, and car-sharing platforms. It leverages open-source software and promotes collaboration among carmakers, suppliers, and technology companies. AGL's Software Defined Vehicle (SDV) concept integrates virtualization, partitioning, over-the-air updates, advanced connectivity, data analytics, and AI to enhance vehicle functionality and transform it into a software-driven platform. SDV encourages collaboration, standardization, and interoperability within the automotive ecosystem, fostering rapid innovation and customization.
              </p>
            </section>
            <section className='relative'>
              <h1 className=" text-9xl font-semibold text-white">
                AGL TECHNOLOGY
              </h1>
            </section>
          </div>
        </section>
        <section className='w-full pt-24'>
          <div className='h-full w-full flex flex-col gap-16'>
            <section className='relative'>

              <h1 className=" text-5xl font-semibold text-white">
                2 WHEELER INSTRUMENT CLUSTER
              </h1>

            </section>
            <section className=''>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/ic3.png`} className='aspect-[16/9] object-cover w-full'></img>

            </section>

          </div>
        </section>
        <section className='w-full py-24'>
          <div className='h-full w-full flex flex-col gap-16'>
            <section className='relative'>

              <h1 className=" text-5xl font-semibold text-white">
                4 WHEELER INSTRUMENT CLUSTER
              </h1>

            </section>
            <section className=''>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/ic1.png`} className='aspect-[16/9] object-cover w-full'></img>
            </section>

          </div>
        </section>
        {/* <section className='w-full py-24'>
          <div className='h-full w-full flex flex-col gap-16'>
            <section className='flex-[2] relative'>

              <h1 className=" text-5xl font-semibold text-white">
                4 WHEELER INFOTAINMENT SYSTEM
              </h1>

            </section>
            <section className='flex-[6]'>
              <iframe src="https://www.youtube.com/embed/EvL3eBZCh4Q?si=PSzQljyNTZK3JnmQ" className='aspect-[16/9] object-cover w-full'></iframe>
            </section>

          </div>
        </section> */}
        <section className='flex flex-col'>
          <div className='w-full'>
            <h1 className='text-5xl text-white font-bold'>Product Overview</h1>
            <p className='text-white text-3xl mt-16'>
              Introducing a cutting-edge instrument cluster based on the Automotive Grade Linux (AGL) platform. This remarkable advancement in automotive technology revolutionizes the way drivers interact with their vehicles and access vital information through a TFT (Thin Film Transistor) screen.
              <br />
              <br />
              The instrument cluster serves as the primary interface between the driver and the vehicle's essential data. Traditionally, instrument clusters were built with proprietary software, limiting their flexibility and functionality. However, with the adoption of the AGL platform, instrument clusters have undergone a remarkable transformation, offering enhanced features and capabilities.
             
            </p>
          </div>
          <div className='w-full pt-24'>
            <h1 className='text-5xl text-white font-bold'>
              Key features
            </h1>
            <div className='mt-16 flex flex-col gap-16 min-h-[30rem]'>
              
                  {cardsData?.map((data, index) => {
                    return (
                      <div className={`p-4 w-full`}>
                    <div className="w-[60%] aspect-[4/3] mx-auto">
                      <img src={data?.imageSrc} alt="" className='w-full h-full object-contain rounded-md' />
                    </div>
                    <div className='text-gray-400 text-3xl mt-16'>
                      <h1 className='text-white font-semibold text-5xl text-center mb-16'>{data?.title}</h1>
                      {data?.content}
                    </div>
                  </div>
                    )
                  })}
                

            </div>

          </div>
        </section>
        </div>
    </div>
  );
};

export default CaseStudies;
