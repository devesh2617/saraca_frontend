import { getApi } from "@/api/adminApi";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pencil } from 'lucide-react'
import { useEffect, useState } from "react";
import TAadminNavbar from '../components/TAAdminNavbar'
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react"
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AdminWebinar = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const itemsPerPage = 6;
    const [currentData, setCurrentData] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const totalPages = Math.ceil(data.length/itemsPerPage)
    const [firstTime, setFirstTime] = useState(true)
    const handleDelete = async(id) => {
     try {
        const res:any = await getApi(`TAadmin/delete_position/${id}`)
        if(res?.data?.message) {
            toast.success(res.data.message)
        }
     } catch (error:any) {
        console.log(error.message)
     }
    }

    const handleEdit = (id) => {
     navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/TAadmin/edit_position/${id}`)
    }

    useEffect(() => {
        if(firstTime){
        getApi(`api/get_positions`).then((res:any) => {
            setData(res?.data?.positions)
            setCurrentData(res?.data?.positions?.slice(0,itemsPerPage))
            setFirstTime(false)
        })}
        setCurrentData(data?.slice(((pageNo-1)*itemsPerPage), ((pageNo-1)*itemsPerPage)+itemsPerPage))
    }, [pageNo])
    return (
        <div>
            < TAadminNavbar/>
            <Table className="mt-4 container">
                <TableHeader className=" bg-gray-100">
                    <TableRow>
                        <TableCell>JobId</TableCell>
                        <TableHead>Title</TableHead> 
                        <TableHead>Region</TableHead>
                        <TableHead>Role</TableHead> 
                        <TableHead>Function</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Desired Experience</TableHead> 
                        <TableHead>Desired Qualification</TableHead>
                        <TableHead>Desired Skills</TableHead> 
                        <TableHead>Edit</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentData?.map((item) => (
                        <TableRow key={item?.id}>
                            <TableCell>{item?.jobId}</TableCell>
                            <TableCell>{item?.title}</TableCell>
                            <TableCell>{item?.Region?.name}</TableCell> 
                            <TableCell>{item?.role}</TableCell>
                            <TableCell>{item?.function}</TableCell>
                            <TableCell>{item?.location}</TableCell> 
                            <TableCell>{item?.desiredExperience}</TableCell> 
                            <TableCell>{item?.desiredQualification}</TableCell>
                            <TableCell>{item?.desiredSkills}</TableCell>
                            <TableCell onClick={() => {handleEdit(item?.id)}}><Button variant="ghost"><Pencil /></Button></TableCell>
                            <TableCell onClick={() => {handleDelete(item?.id)}}><Button variant="ghost"><Trash2 color="red"/></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter className="container">
                 <TableRow>
                    <TableCell colSpan={12}>
                   <div className="flex items-center py-2 justify-between">
                   <p>Showing {pageNo} out of {totalPages} pages</p>
                   <div className="flex flex-row gap-2">
                   <Button variant="outline" onClick={()=>setPageNo(prev=>prev>1?prev-1:prev)}> 
                    {"<"}
                   </Button>
                   <Button variant="outline" onClick={()=>setPageNo(prev=>prev<totalPages?prev+1:prev)}>
                    {">"}
                   </Button>
                   </div>
                   </div>
                   </TableCell>
                   </TableRow>
                </TableFooter>
            </Table>

        </div>
    )
}

export default AdminWebinar
