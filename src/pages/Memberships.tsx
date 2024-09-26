import MembershipCards from "../components/MembershipCards"

const Memberships= () => {
  const MembershipCardsData = [ 
    {
      name:"Automotive Component Manufacturers Association of India",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Memberships/ACMA Membership.webp`,
    },
    {
      name:"Society of Indian Defence Manufacturers",
      imageSrc: `${import.meta.env.VITE_REACT_APP_API_URL}/Memberships/SIDM Membership.webp`,
    }
  ]
  return (
    <div className="grid grid-col-1 container py-24 mt-12 gap-24">
      {MembershipCardsData.map((data, index)=> <MembershipCards key={index} imageSrc={data.imageSrc} name={data.name}/>)}
    </div>
  )
}

export default Memberships
