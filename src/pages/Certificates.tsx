import CertificateCards from "../components/CertificateCards"

const Client_Testimonials = () => {
  const CertificatesCards = [ 
    {
      name:"ISO 27001",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Certificates/ISO 27001.webp`,
      content: "",
    },
    {
      name:"ISO 13485",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Certificates/ISO 13485.webp`,
      content: "",
    },
    {
      name:"ISO 9001",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Certificates/ISO 9001.webp`,
      content: "",
    },
    {
      name:"Appendix to ISO 27001",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Certificates/Appendix ISO 27001.webp`,  
      content: "",
    },
  ]
  return (
    <div className="grid grid-col-1 md:grid-cols-2 container py-24 mt-12 gap-12">
      {CertificatesCards.map((data, index)=> <CertificateCards key={index} imageSrc={data.imageSrc} name={data.name}/>)}
    </div>
  )
}

export default Client_Testimonials
