
import HorizontalScroll from 'react-scroll-horizontal';

const CaseStudies = () => {

  const cardsData = [
    {
      title: "Manage survey(s) for multiple devices on a single platform",
      content: "Surveys of all variants of devices in your portfolio can be tracked to help you prioritize per deadlines of audits",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/FastPMCF/1.png`
    },
    {
      title: "Custom questionnaire per PMCF plan",
      content: "Get flexibility to create various types of questions per PMCF plan of the device and requirement of survey analysis",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/FastPMCF/2.png`
    },
    {
      title: "User friendly dashboard and real-time status for manufacturers",
      content: "View the progress of survey starting from creation of questions, approval, launch, receipt of responses, dynamic analysis and survey completion.",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/FastPMCF/3.png`
    },
    {
      title: "Survey analysis report based on geography",
      content: "Get dynamic survey analysis reports with slice and dice based on geography and profession of the survey participants to help you take critical decisions on the performance & safety of device"
      ,imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/FastPMCF/4.png`
    },
    {
      title: "Unique link ensures data integrity",
      content: "A unique survey link for each participant ensures data integrity and restricts each participant to submit survey response only once.",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/FastPMCF/5.png`
    },
    {
      title: "Launch survey to large number of participants in a single click",
      content: "Get rid of travels and in-person meetings by sending the survey to bulk participants. Also reduce your lead time of conducting PMCF surveys.",

      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/FastPMCF/6.png`
    },
    {
      title: "Data encryption at rest and on the fly",
      content: "Ensure data security with encrypted data of survey questions, device details, participant details, survey responses and survey analysis",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/FastPMCF/7.png`
    },
    {
      title: "In built review and approval process",
      content: "FastPMCFTM allows medical device manufacturer to review and approve the survey details (questions, device details, participant list etc.) before survey launch.",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/FastPMCF/8.png`
    }
  ]

  return (
    <div className='h-screen overflow-y-hidden bg-black'>
      <HorizontalScroll reverseScroll={true}>
        <section className='w-[100vw] h-[100vh] relative flex justify-center items-center'>
        <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/Innovation/Fastpmcf Logo.svg`} className='w-full h-full object-contain'>

</img>
        </section>
        <section className='w-screen h-screen p-4 relative overflow-hidden flex justify-center items-center'>
          <div className='absolute z-1 w-full scale-110 h-full bg-[#353535] bottom-[50%]' style={{ borderRadius: "50%" }}>
          </div>
          <div className='z-[2] text-2xl text-white container text-center flex flex-col items-center'>
            FastPMCFTM manages end-to-end cycle of the PMCF survey and enables the medical device manufacturers to get the feedback on clinical evidence from market in a quick turnaround time.
            <div className=' w-96 aspect-square bg-white rounded-full mt-8'>
              <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/image 5.png`} alt="" className='w-full h-full object-contain' />
            </div>
          </div>

        </section>
        <section className='w-screen h-screen p-4'>
          <div className='h-full w-full flex gap-4 items-center'>

            <section className='flex-[2]'>
              <iframe src="https://www.youtube.com/embed/ipMa3uSgFMY?si=JFR6ksgCKHKGW9tr" className='h-[60vh] object-cover w-[80%] mx-auto'></iframe>
            </section>
            <section className='flex-1 pt-24'>

              <h1 className=" text-5xl font-semibold text-white">
                Single Platform to manage all your PMCF Surveys
              </h1>
              <p className='text-2xl text-white mt-12'>
                FastPMCF TM enables medical device
                manufacturers manage their PMCF needs
                and collect real world evidence in a quick
                turn around time. The platform is uniquely
                designed to manage multiple surveys and
                ensure a smooth data capture process.
              </p>
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
