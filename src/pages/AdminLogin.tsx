import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChangeEvent, useState } from "react"
import { postApi } from "@/api/adminApi"
import { useNavigate } from "react-router-dom"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
export default function AdminLogin() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedRole, setSelectedRole] = useState("admin")
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleRoleSelect = () => {
        navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/${selectedRole}/dashboard`)
    }
    const handleChange = (e: ChangeEvent) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        const res:any = await postApi('login', data)
        
        if(res?.data?.message) {
        toast.success(res?.data?.message) 
        localStorage.setItem('token', res?.data?.token)
        if (res.data.role === "superuser") setDialogOpen(true)
        else navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/${res.data.role}/dashboard`)
    }}
    return (
        <div className="grid min-h-screen place-items-center bg-black">
            <Card className="mx-auto max-w-sm bg-slate-700 border-none">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-white">Login</CardTitle>
                    <CardDescription className="text-white">Enter your email and password to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input name="email" value={data.email} onChange={handleChange} required type="email" autoComplete="off" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-white">Password</Label>
                            <Input name="password" value={data.password} onChange={handleChange} required type="password" autoComplete="off" />
                        </div>
                        <Button className="w-full bg-black" type="submit">
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <AlertDialog open={dialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Please select a dashboard</AlertDialogTitle>
          <RadioGroup defaultValue={selectedRole} onValueChange={(value)=>{setSelectedRole(value)}}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="admin" id="r1" />
        <Label htmlFor="r1">Admin</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="TAadmin" id="r2" />
        <Label htmlFor="r2">TA Admin</Label>
      </div>
    
    </RadioGroup>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={()=>setDialogOpen(false)}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRoleSelect}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        </div>
    )
}

