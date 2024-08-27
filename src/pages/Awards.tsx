import CertificateCards from "../components/CertificateCards"

const Awards = () => {
  const AwardsData = [ 
    {
      name:"The ADAS Show",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Awards/ADAS.jpg`
    },
  ]
  return (
    <div className="grid grid-col-1 md:grid-cols-2 container py-24 mt-12 gap-12">
      {AwardsData.map((data, index)=> <CertificateCards key={index} imageSrc={data.imageSrc} name={data.name}/>)}
    </div>
  )
}

export default Awards
