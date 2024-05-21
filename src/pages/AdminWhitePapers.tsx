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
import { Pencil, FileText, Trash2 } from 'lucide-react'
import { useEffect, useState } from "react";
import AdminNavbar from '../components/AdminNavbar'
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminWhitePapers = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const itemsPerPage = 6;
    const [currentData, setCurrentData] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const totalPages = Math.ceil(data.length/itemsPerPage)
    const [firstTime, setFirstTime] = useState(true)
    const handleDelete = async(id) => {
        try {
           const res:any = await getApi(`admin/delete_white_paper/${id}`)
           if(res?.data?.message) {
               toast.success(res.data.message) 
           }
        } catch (error:any) {
           console.log(error.message)
        }
       }

    useEffect(() => {
        if(firstTime){
        getApi(`api/get_white_papers`).then((res:any) => {
            setData(res.data.whitePapers)
            setCurrentData(res.data.whitePapers.slice(0,itemsPerPage))
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
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Industry</TableHead>

                        <TableHead>Date</TableHead>                
                        <TableHead>Img</TableHead>
                        <TableHead>PDF File</TableHead>
                        <TableHead>Edit</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentData?.map((item) => (
                        <TableRow key={item?.id}>
                            <TableCell>{item?.title}</TableCell>
                            <TableCell>{item?.description?.slice(0, 20)}{item?.description?.length > 20 ? "..." : ""}</TableCell>
                            <TableCell>{item?.industry}</TableCell>
                            <TableCell>{item?.date?.split("00:00:00")[0]}</TableCell>
                            <TableCell>
                                <img src={import.meta.env.VITE_REACT_APP_API_URL+item?.img} alt={item?.title} width="100" className="aspect-square object-cover" />
                            </TableCell>
                            <TableCell>
                                <a href={import.meta.env.VITE_REACT_APP_API_URL+item?.pdf} target="_blank" rel="noopener noreferrer"><FileText /></a>
                            </TableCell>
                            <TableCell onClick={() => {navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/admin/edit_white_paper/${item?.id}`)}}><Button variant="ghost"><Pencil /></Button></TableCell>
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

export default AdminWhitePapers
