import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "../components/ui/button"
import { useEffect, useState } from "react"
import { getApi } from "@/api/adminApi"
import { useNavigate, useParams } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { formatDateDistance } from "@/utilities/calculateDays"
import { MapPin } from "lucide-react"

const PositionCards = () => {
  const { region_name } = useParams()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [positions, setPositions] = useState([])
  const [searchedPositions, setSearchedPositions] = useState([])
  const [firstTime, setFirstTime] = useState(true)
  useEffect(() => {
    if(firstTime){
    getApi(`api/get_positions_by_region/${region_name}`).then(
      res => setPositions(res?.data?.positions)
    ).catch((e) => console.log(e))
    setFirstTime(false)
  }
  const searchedpositions = positions?.filter(position=>position?.title?.toLowerCase().includes(searchTerm?.trim()?.toLowerCase()) || position?.location?.toLowerCase().includes(searchTerm?.trim()?.toLowerCase()) || position?.function?.toLowerCase().includes(searchTerm?.trim()?.toLowerCase()) || position?.role?.toLowerCase().includes(searchTerm?.trim()?.toLowerCase()) || position?.desiredExperience?.toLowerCase().includes(searchTerm?.trim()?.toLowerCase()) || position?.desiredQualification?.toLowerCase().includes(searchTerm?.trim()?.toLowerCase()))
  
  setSearchedPositions(searchedpositions)
  }, [searchTerm])
  return (
    
    <div className="mt-28 mb-4">
      <div className="flex items-center gap-4 mb-6 container">
        <Input
          type="text"
          placeholder="Search positions..."
          value={searchTerm}
          className=" p-8 text-lg"
          onChange={(e)=>{
            setSearchTerm(e.target.value)         
          }}
        />
      </div>
      {!positions.length?<h1 className="text-center lg:text-5xl text-3xl">No positions have been added till now</h1>:""}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container wrapper">
        {searchTerm?searchedPositions?.map((position) => (
          <Card key={position?.id} className="min-h-sm hover:shadow-md hover:-translate-y-1 duration-500 text-2xl subgrid">
            <CardHeader>
              <CardTitle className="text-4xl">{position?.title}</CardTitle>
              <CardDescription className="flex items-end text-2xl"><MapPin/>{position?.location}</CardDescription>
            </CardHeader>
            <CardContent>
            <p><strong>Job ID:</strong> {position?.jobId}</p>
              <p><strong>Function:</strong> {position?.function}</p>
              <p><strong>Role:</strong> {position?.role}</p>
              <p><strong>Desired Skills:</strong> {position?.desiredSkills}</p>
              <p><strong>Desired Qualification:</strong> {position?.desiredQualification}</p>
              <p><strong>Desired Experience:</strong> {position?.desiredExperience}</p>
              <p><strong>Region:</strong> {position?.Region?.name}</p>
            </CardContent>
            <CardFooter>
            <CardDescription className="text-xl">Posted {formatDateDistance(position?.createdAt)}</CardDescription>
              <Button variant="destructive" className="ml-auto" onClick={()=>navigate(`/Careers/position/${position?.id}`)}>Apply</Button>
            </CardFooter>
          </Card>
        )):positions?.map((position) => (
          <Card key={position?.id} className="min-h-sm hover:shadow-md hover:-translate-y-1 duration-500 text-2xl subgrid">
            <CardHeader>
              <CardTitle className="text-4xl">{position?.title}</CardTitle>
              <CardDescription className="flex items-end text-2xl"><MapPin/>{position?.location}</CardDescription>
            </CardHeader>
            <CardContent>
            <p><strong>Job ID:</strong> {position?.jobId}</p>
              <p><strong>Function:</strong> {position?.function}</p>
              <p><strong>Role:</strong> {position?.role}</p>
              <p><strong>Desired Skills:</strong> {position?.desiredSkills}</p>
              <p><strong>Desired Qualification:</strong> {position?.desiredQualification}</p>
              <p><strong>Desired Experience:</strong> {position?.desiredExperience}</p>
              <p><strong>Region:</strong> {position?.Region?.name}</p>
              
            </CardContent>
            <CardFooter>
            <CardDescription className="text-xl">Posted {formatDateDistance(position?.createdAt)}</CardDescription>
              <Button variant="destructive" className="ml-auto" onClick={()=>navigate(`/Careers/position/${position?.id}`)}>Apply</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>

  )
}

export default PositionCards