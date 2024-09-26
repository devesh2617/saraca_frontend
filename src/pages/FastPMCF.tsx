import { Helmet } from "react-helmet";
import HorizontalScroll from "react-scroll-horizontal";

const CaseStudies = () => {
  
  const cardsData = [
    {
      title: "Manage survey(s) for multiple devices on a single platform",
      content:
        "Surveys of all variants of devices in your portfolio can be tracked to help you prioritize per deadlines of audits",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/FastPMCF/1.webp`,
    },
    {
      title: "Custom questionnaire per PMCF plan",
      content:
        "Get flexibility to create various types of questions per PMCF plan of the device and requirement of survey analysis",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/FastPMCF/2.webp`,
    },
    {
      title: "User friendly dashboard and real-time status for manufacturers",
      content:
        "View the progress of survey starting from creation of questions, approval, launch, receipt of responses, dynamic analysis and survey completion.",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/FastPMCF/3.webp`,
    },
    {
      title: "Survey analysis report based on geography",
      content:
        "Get dynamic survey analysis reports with slice and dice based on geography and profession of the survey participants to help you take critical decisions on the performance & safety of device",
      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/FastPMCF/4.webp`,
    },
    {
      title: "Unique link ensures data integrity",
      content:
        "A unique survey link for each participant ensures data integrity and restricts each participant to submit survey response only once.",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/FastPMCF/5.webp`,
    },
    {
      title: "Launch survey to large number of participants in a single click",
      content:
        "Get rid of travels and in-person meetings by sending the survey to bulk participants. Also reduce your lead time of conducting PMCF surveys.",

      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/FastPMCF/6.webp`,
    },
    {
      title: "Data encryption at rest and on the fly",
      content:
        "Ensure data security with encrypted data of survey questions, device details, participant details, survey responses and survey analysis",
      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/FastPMCF/7.webp`,
    },
    {
      title: "In built review and approval process",
      content:
        "FastPMCFTM allows medical device manufacturer to review and approve the survey details (questions, device details, participant list etc.) before survey launch.",
      imageSrc: `${
        import.meta.env.VITE_REACT_APP_API_URL
      }/Innovation/FastPMCF/8.webp`,
    },
  ];

 

  return (
    <div className="lg:h-screen lg:overflow-y-hidden overflow-x-hidden bg-black">
      <Helmet>
        <title>
          FastPMCF™: Streamlined PMCF Surveys for Medical Device Manufacturers
        </title>
        <meta
          property="og:title"
          content="FastPMCF™: Streamlined PMCF Surveys for Medical Device Manufacturers"
        />
        <meta
          name="description"
          content="FastPMCF™ by SARACA is your comprehensive solution for managing Post-Market Clinical Follow-up (PMCF) surveys efficiently. Designed to streamline the entire survey lifecycle, it empowers medical device manufacturers to collect real-world evidence swiftly. Benefit from a single platform to manage multiple device surveys, customizable questionnaires, real-time status updates, dynamic analysis reports, and robust data security features. Launch surveys effortlessly, gather insights, and ensure compliance with confidence."
        />
        <meta
          name="keywords"
          content="FastPMCF, PMCF surveys, medical device manufacturers, real-world evidence collection, survey management platform, dynamic survey analysis, data security in PMCF, survey lifecycle management."
        />
        <meta
          property="og:description"
          content="FastPMCF™ by SARACA is your comprehensive solution for managing Post-Market Clinical Follow-up (PMCF) surveys efficiently. Designed to streamline the entire survey lifecycle, it empowers medical device manufacturers to collect real-world evidence swiftly. Benefit from a single platform to manage multiple device surveys, customizable questionnaires, real-time status updates, dynamic analysis reports, and robust data security features. Launch surveys effortlessly, gather insights, and ensure compliance with confidence."
        />
        <meta
          property="og:keywords"
          content="FastPMCF, PMCF surveys, medical device manufacturers, real-world evidence collection, survey management platform, dynamic survey analysis, data security in PMCF, survey lifecycle management."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <HorizontalScroll reverseScroll={true} className="hidden lg:block">
        <section className="w-[100vw] h-[100vh] relative flex justify-center items-center">
          <img
            src={`${
              import.meta.env.VITE_REACT_APP_API_URL
            }/Innovation/Fastpmcf Logo.webp`}
            className="w-full h-full object-contain"
          ></img>
        </section>
        <section className="w-screen h-screen p-4 relative overflow-hidden flex justify-center items-center">
          <div
            className="absolute z-1 w-full scale-110 h-full bg-[#353535] bottom-[50%]"
            style={{ borderRadius: "50%" }}
          ></div>
          <p className="z-[2] text-3xl text-white container text-center flex flex-col items-center w-[80%]">
          FastPMCF&trade; manages end-to-end cycle of the PMCF survey and
                enables the medical device manufacturers to get the feedback on
                clinical evidence from market in a quick turnaround time.
            <div className=" w-96 aspect-square bg-white rounded-full mt-8">
              <img
                src={`${import.meta.env.VITE_REACT_APP_API_URL}/image 5.png`}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </p>
        </section>
        <section className="w-screen h-screen p-4">
          <div className="h-full w-full flex gap-4 items-center">
            <section className="flex-[2]">
              <iframe
                src="https://www.youtube.com/embed/ipMa3uSgFMY?si=JFR6ksgCKHKGW9tr"
                className="object-cover w-[80%] aspect-[16/9] mx-auto"
              ></iframe>
            </section>
            <section className="flex-1 pt-24">
              <h1 className=" text-5xl font-semibold text-white">
                Single Platform to manage all your PMCF Surveys
              </h1>
              <p className="text-3xl text-white mt-12">
                FastPMCF<sup>TM</sup> enables medical device manufacturers manage their
                PMCF needs and collect real world evidence in a quick turn
                around time. The platform is uniquely designed to manage
                multiple surveys and ensure a smooth data capture process.
              </p>
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
        <img
          src={`${
            import.meta.env.VITE_REACT_APP_API_URL
          }/Innovation/Fastpmcf Logo.webp`}
          className="w-full aspect-square object-contain"
        ></img>

        <section className="w-full pt-24">
          <div className="h-full w-full flex flex-col gap-16">
            <section className="">
              <p className="text-3xl text-white mt-16">
                FastPMCF<sup>TM</sup> manages end-to-end cycle of the PMCF survey and
                enables the medical device manufacturers to get the feedback on
                clinical evidence from market in a quick turnaround time.
              </p>
              <div className=" w-[70%] aspect-square bg-white rounded-full mx-auto mt-16">
                <img
                  src={`${import.meta.env.VITE_REACT_APP_API_URL}/image 5.png`}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </section>
          
          </div>
        </section>
     
        
        <section className="w-full pt-24">
          <div className="h-full w-full flex flex-col gap-16">
            
            <section className="flex-[6]">
            <iframe
                src="https://www.youtube.com/embed/ipMa3uSgFMY?si=JFR6ksgCKHKGW9tr"
                className="object-cover w-full aspect-[16/9] mx-auto"
              ></iframe>
            </section>
          </div>
        </section>
        <section className="w-full pt-24">
          <div className="h-full w-full flex flex-col gap-16">
          <h1 className=" text-5xl font-semibold text-white">
                Single Platform to manage all your PMCF Surveys
              </h1>
              <p className="text-3xl text-white mt-12">
                FastPMCF<sup>TM</sup> enables medical device manufacturers manage their
                PMCF needs and collect real world evidence in a quick turn
                around time. The platform is uniquely designed to manage
                multiple surveys and ensure a smooth data capture process.
              </p>
          
          </div>
        </section>
        <section className="flex flex-col">
          
          <div className="w-full py-24">
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
