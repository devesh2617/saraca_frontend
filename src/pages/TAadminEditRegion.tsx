import { getApi, postApi } from "@/api/adminApi"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'


import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import TAadminNavbar from '../components/TAAdminNavbar'
import { useNavigate, useParams } from "react-router-dom"

const TAadminDashboard = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const regionFormSchema = z.object({
    name: z.string().refine((val) => val.trim().length, {
      message: "Region cannot be empty"
    })
  })
  
  const regionForm = useForm<z.infer<typeof regionFormSchema>>({
    resolver: zodResolver(regionFormSchema)
  });
  

  const onSubmitRegion = async (data) => {

    const res: any = await postApi("TAadmin/edit_region/"+id, data)
    if (res?.data?.message) {
      toast.success(res?.data?.message)
      navigate(-1)
    }

  }
  useEffect(() => {
    getApi('api/get_region/'+id).then(
      res => {
        regionForm.reset({
            name: res?.data?.region?.name
        })
      }
    )
  }, [])
  return (
    <div>
      <TAadminNavbar/>
          <Card className=" max-w-3xl mx-auto mt-4">
            <CardHeader>
              <CardTitle>Regions</CardTitle>
              <CardDescription>
                Add new regions to the database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form {...regionForm}>
                <form onSubmit={regionForm.handleSubmit(onSubmitRegion)}>
                  <FormField
                    control={regionForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Region</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  >
                  </FormField>
                  <Button type="submit" className="mt-4">Submit</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
    </div>
  )
}

export default TAadminDashboard
