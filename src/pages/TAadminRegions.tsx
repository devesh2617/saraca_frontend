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
import { useNavigate } from "react-router-dom";

const AdminWebinar = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const itemsPerPage = 6;
    const [currentData, setCurrentData] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const totalPages = Math.ceil(data.length/itemsPerPage)
    const [firstTime, setFirstTime] = useState(true)
    useEffect(() => {
        if(firstTime){
        getApi(`api/get_regions`).then((res:any) => {
            setData(res?.data?.regions)
            setCurrentData(res.data.regions.slice(0,itemsPerPage))
            setFirstTime(false)
        })}
        setCurrentData(data?.slice(((pageNo-1)*itemsPerPage), ((pageNo-1)*itemsPerPage)+itemsPerPage))
    }, [pageNo])
    return (
        <div>
            <TAadminNavbar/>
            <Table className="mt-4 container">
                <TableHeader className=" bg-gray-100">
                    <TableRow>
                        <TableHead>Region Name</TableHead> 
                        <TableHead>Edit</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentData?.map((item) => (
                        <TableRow key={item?.id}>
                            <TableCell>{item?.name}</TableCell> 
                            
                            <TableCell onClick={() => { navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/TAadmin/edit_region/${item?.id}`) }}><Button variant="ghost"><Pencil /></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter className="container">
                 <TableRow>
                    <TableCell colSpan={6}>
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
