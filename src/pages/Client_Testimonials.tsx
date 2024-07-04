import ClientTestimonialCards from "../components/ClientTestimonialCards"

const Client_Testimonials = () => {
  const TestmonialCardsData = [
    {
      name:"Saurabh Aggarwal",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Saurabh_Aggarwal.png`,
      designation: "Head, Napier Development Centre at Napier Healthcare",
      content: "Saraca was extremely helpful to our Product Team’s understanding of the requirements of ISO 13485 by presenting it to them in a simple and effective manner. They have also done a commendable job in helping us to align our deliverables in-line with the ISO 13485 requirements. With their help, our team was able to understand & implement the ISO 13485:2016 requirements effectively within a short duration. Their planning and execution methodology is superb. Overall, we are very happy with the outcome of our association with Saraca Solutions.",
      link:"https://www.linkedin.com/in/saurabh-agrawal-a434465/"
    },
    {
      name:"Dr. Eduardo Gonzalez",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Educardo.jpg`,
      designation: "CEO-Toby Orthopaedics",
      content: "Toby has had a smooth journey with Saraca Solutions.  They have provided us with both a highly experienced Quality Manager and a very energetic Quality Engineer.  Specifically, I would like to thank Saraca for closing our NCs in a timely manner while simultaneously performing a gap analysis on our entire QMS. Additionally, in preparation for an upcoming ISO audit, Saraca performed an internal audit on all of our major Quality subsystems.  Lastly, Saraca Solutions faced our  2017 ISO audit, hand in hand with our staff, at Toby headquarters. I appreciate the end to end support provided by Saraca Solutions.  This magnitude of interaction is unique among engineering services companies in the area of medical devices.",
      link:"https://www.linkedin.com/in/eduardo-gonzalez-hernandez-9913a120/"
    },
    {
      name:"Patrick Ireland",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Patrick.jpg`,
      designation: "Vice President-Grace Medical",
      content: "Our team has partnered well with SARACA Solutions as we continue the development process for submitting one of ENT products for 510(k) review with US FDA. They constructed and maintain a Design History. They are also working on Risk Analysis as defined by our Quality Management System. The SARACA team has shown the depth of their experience working in the industry while seamlessly integrating well with us. In addition, their methods of collaboration ensure effectively developing the documentation and processes for our product management.",
      link:"https://www.linkedin.com/in/patrick-ireland-6b045b30/"
    },
    {
      name:"Manoj Kumar",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Manoj_Kumar.png`,
      designation: "VP, Head Engineering",
      content: "SARACA's commitment to delivering high-quality automotive ADAS solutions has significantly contributed to the success of our projects. Their instrument cluster technical expertise, attention to detail, and proactive approach exceeded our expectations. Despite the tight timelines, Saraca's impressive speed in completing the project showcased their efficiency and dedication. I highly recommend Saraca for their professionalism, technical competence, and client satisfaction commitment. Our collaboration has been crucial in achieving project goals.",
      link:"https://www.linkedin.com/in/manoj-tewari-ba508b1/"
    }
  ]
  return (
    <div className="flex flex-col py-24 mt-12 gap-12">
      {TestmonialCardsData.map((data, index)=> <ClientTestimonialCards cardsData={data}/>)}
    </div>
  )
}

export default Client_Testimonials
