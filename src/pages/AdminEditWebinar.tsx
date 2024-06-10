import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import AdminNavbar from "../components/AdminNavbar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { postApi, getApi } from '../api/adminApi';
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom"

const AdminDashboard = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [webinarImg, setWebinarImg] = useState<File | undefined>()
  const [webinar, setWebinar] = useState();
  

  const htmlContentRegex = /[^\s]/;
  const imgFormats = ["jpg", "jpeg", "png", "svg", "webp"]
  // Example function to check HTML content
  const hasContent = (htmlString: string) => {
    // Strip HTML tags and &nbsp; entities
    const strippedString = htmlString.replace(/(<([^>]+)>|&nbsp;)/gi, '');
    // Check if any content remains
    return htmlContentRegex.test(strippedString);
  };


  const WebinarSchema = z.object({
    title: z.string().refine((val) => val.trim().length, {
      message: "Title cannot be empty"
    }),
    link: z.string().refine((val) => val.trim().length, {
      message: "Link cannot be empty"
    }),
    date: z.date().transform(date => date.toString()),
    img: z.string().refine((val) => !val.includes("_"), {
      message: "Filename should not include underscores"
    }).refine(val => imgFormats.includes(val?.split(".")[val?.split(".")?.length - 1])
      , { message: "Please select a image file" }),
  })

  const webinarForm = useForm<z.infer<typeof WebinarSchema>>({
    resolver: zodResolver(WebinarSchema)
  });

  const onSubmitWebinar = async (data) => {
    try {
    const { img, ...newData } = data
    newData.img = webinarImg
    const res:any = await postApi("admin/edit_webinar/"+id, newData)
    if(res?.data?.message){
      toast.success(res.data.message)
      navigate(-1)
    } 
    } catch (error:any) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getApi('api/get_webinar/'+id).then(res=>{
     const data = res?.data?.webinar
     setWebinar(data)
     webinarForm.reset({
         title: data?.title,
         img:data?.img?.split("__")[1],
         link: data?.link,
         date: new Date(data?.date)
     })
    })
   }, [])
  
  return (
    <div>
      <AdminNavbar />
      <Card className="max-w-3xl mx-auto mt-4">
            <CardHeader>
              <CardTitle>Webinars</CardTitle>
              <CardDescription>
                Add more webinars to the database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {
                <Form {...webinarForm}>
                  <form onSubmit={webinarForm.handleSubmit(onSubmitWebinar)}>
                    <FormField
                      control={webinarForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    >
                    </FormField>

                    <FormField
                      control={webinarForm.control}
                      name="link"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Link</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    >
                    </FormField>
                    <FormField
                    control={webinarForm.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <FormLabel>Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal w-full",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              className="w-full"
                              selected={field.value}
                              onSelect={field.onChange}                           
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                    <FormField
                      control={webinarForm.control}
                      name="img"
                      render={({ field: { onChange }, ...rest }) => {

                        return (
                          <FormItem>
                            <FormLabel>Image</FormLabel>
                            <FormControl>
                              <Input type="file" accept="image/*" {...rest} onChange={e => {
                                onChange(e)
                                setWebinarImg(e?.target?.files?.[0])
                              }} />
                            </FormControl>
                            <FormMessage />
                            {!webinarImg?(<FormDescription>{webinar?.img?.split("__")[1]}</FormDescription>):""}

                          </FormItem>
                        )
                      }}
                    >
                    </FormField>

                    <Button type="submit" className="mt-4">Submit</Button>
                  </form>
                </Form>
              }
            </CardContent>
            <CardFooter>

            </CardFooter>
          </Card>
    </div>
  )
}

export default AdminDashboard
