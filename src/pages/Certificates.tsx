import CertificateCards from "../components/CertificateCards"

const Client_Testimonials = () => {
  const CertificatesCards = [
    {
      name:"Saurabh Aggarwal",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Saurabh_Aggarwal.png`,  
      content: "Saraca was extremely helpful to our Product Team’s understanding of the understading",
    },
    {
      name:"Dr. Eduardo Gonzalez",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Educardo.jpg`,
      content: "Toby has had a smooth journey with Saraca Solutions. ",
    },
    {
      name:"Patrick Ireland",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Patrick.jpg`,
      content: "Our team has partnered well with SARACA Solutions as ",
    },
    {
      name:"Manoj Kumar",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Manoj_Kumar.png`,
      content: "SARACA's commitment to delivering high-quality automotive",
    }
  ]
  return (
    <div className="grid grid-col-1 md:grid-cols-2 container py-24 mt-12 gap-12">
      {CertificatesCards.map((data, index)=> <CertificateCards key={index} cardsData={data}/>)}
    </div>
  )
}

export default Client_Testimonials
