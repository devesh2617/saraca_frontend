import { getApi, postApi } from "@/api/adminApi";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from 'lucide-react'
import { useEffect, useState } from "react";
import AdminNavbar from '../components/AdminNavbar'
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminEvents = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate();
    const itemsPerPage = 6;
    const [currentData, setCurrentData] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const totalPages = Math.ceil(data.length/itemsPerPage)
    const [firstTime, setFirstTime] = useState(true)
    const handleDelete = async(id) => {
        try {
           const res:any = await getApi(`admin/delete_event/${id}`)
           if(res?.data?.message) {
               toast.success(res.data.message)
               
           }
        } catch (error:any) {
           console.log(error.message)
        }
       }
    
    useEffect(() => {
        if(firstTime){
        getApi(`api/get_all_events`).then((res:any) => {
            setData(res?.data?.data)
            setCurrentData(res.data.data.slice(0,itemsPerPage))
            setFirstTime(false)
        })}
        setCurrentData(data?.slice(((pageNo-1)*itemsPerPage), ((pageNo-1)*itemsPerPage)+itemsPerPage))
    }, [pageNo])
    return (
        <div>
            <AdminNavbar />
            <Table className="mt-4 container">
                <TableHeader className=" bg-gray-100">
                    <TableRow>
                        <TableHead>Event Name</TableHead>
                       
                        <TableHead>Event Schedule</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Edit</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentData?.map((item) => (
                        <TableRow key={item?.id}>
                            <TableCell>{item?.name}</TableCell> 
                            <TableCell>
                            {new Date(item?.from_date).toLocaleString('en-IN', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                                timeZone: 'Asia/Kolkata', // Setting the timezone to IST
                            })} 
                            {item?.to_date ? ` - ${new Date(item?.to_date).toLocaleString('en-IN', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                                timeZone: 'Asia/Kolkata',
                            })}` : ''}
                            </TableCell>
                            <TableCell>{item?.location}</TableCell> 
                            <TableCell>{item?.description}</TableCell> 
                            <TableCell>
                                <img src={import.meta.env.VITE_REACT_APP_API_URL+item?.images[0]} alt={item?.name} width="100" className="aspect-square object-cover" />
                            </TableCell>
                            <TableCell onClick={() => { navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/admin/edit_event/${item.id}`) }}><Button variant="ghost"><Pencil /></Button></TableCell>
                            <TableCell onClick={() => {handleDelete(item?.id)}}><Button variant="ghost"><Trash2 color="red"/></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter className="container">
                 <TableRow>
                    <TableCell colSpan={20}>
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

export default AdminEvents
