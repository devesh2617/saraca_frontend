import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Editor } from "@tinymce/tinymce-react"
import {
  Card,
  CardContent,
  CardDescription,
 
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
import { getApi, postApi } from '../api/adminApi';
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AdminDashboard = () => {
  const navigate = useNavigate()
  const industries = [
    "Automotive",
    "Aerospace and Defense",
    "Life Sciences",
    "Semiconductor",
    "Industrial",
    "Rail Transportation",
    "Consumer"
]
  const { id } = useParams()
  const [whitePaperImg, setWhitePaperImg] = useState<File | undefined>()
  const [whitePaperPdf, setWhitePaperPdf] = useState<File | undefined>()
  const [whitePaper, setWhitePaper] = useState()
  const htmlContentRegex = /[^\s]/;
  const imgFormats = ["jpg", "jpeg", "png", "svg", "webp"]
  // Example function to check HTML content
  const hasContent = (htmlString: string) => {
    // Strip HTML tags and &nbsp; entities
    const strippedString = htmlString.replace(/(<([^>]+)>|&nbsp;)/gi, '');
    // Check if any content remains
    return htmlContentRegex.test(strippedString);
  };
  const whitePaperSchema = z.object({
    title: z.string().refine((val) => val.trim().length, {
      message: "Title cannot be empty"
    }),
    content: z.string().refine((val) => hasContent(val), {
      message: "Content cannot be empty"
    }),
    industry: z.string({
      required_error: "Please select an industry"
    }),
    date: z.date().transform(date => date.toString()),
    description: z.string().refine((val) => val.trim().length, {
      message: "Description cannot be empty"
    }),
    img: z.string().refine((val) => !val.includes("_"), {
      message: "Filename should not include underscores"
    }).refine(val => imgFormats.includes(val?.split(".")[val?.split(".")?.length - 1])
      , { message: "Please select a image file" }),
    pdf: z.string().refine((val) => !val.includes("_"), {
      message: "Filename should not include underscores"
    }).refine(val => val?.split(".")[val?.split(".")?.length - 1] === "pdf"
      , { message: "Please select a pdf file" }),
  })

  const whitePaperForm = useForm<z.infer<typeof whitePaperSchema>>({
    resolver: zodResolver(whitePaperSchema)
  });

  const onSubmitWhitePaper = async (data) => {
    try{
    const { img, pdf, ...newData } = data
    newData.img = whitePaperImg
    newData.pdf = whitePaperPdf
    const res:any = await postApi("admin/edit_white_paper/"+id, newData)
    if(res?.data?.message) {
      toast.success(res.data.message)
      navigate(-1)
    }
    }catch(error:any){
      console.log(error.message)
    }
  }
  
  useEffect(()=>{
   getApi('api/get_white_paper/'+id).then(res=>{
    const data = res?.data?.whitePaper
    setWhitePaper(data)
    whitePaperForm.reset({
        title: data?.title,
        description: data?.description,
        img:data?.img?.split("__")[1],
        date:new Date(data?.date),
        pdf:data?.pdf?.split("__")[1],
        content:data?.content,
        industry:data?.industry
    })
   })
  }, [])

  return (
    <div>
      <AdminNavbar />
      <Card className=" max-w-3xl mx-auto mt-4">
            <CardHeader>
              <CardTitle>White Papers</CardTitle>
              <CardDescription>
                Add white papers to the database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form {...whitePaperForm}>
                <form onSubmit={whitePaperForm.handleSubmit(onSubmitWhitePaper)}>
                  <FormField
                    control={whitePaperForm.control}
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
                      control={whitePaperForm.control}
                      name="industry"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Industry</FormLabel>
                            <FormControl>
                              <Select  onValueChange={field.onChange} defaultValue={field.value} {...field}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Industry" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {industries?.map((industry) => (
                                      <SelectItem key={industry} value={industry}>
                                        {industry}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )
                      }}
                    >
                    </FormField>
                  <FormField
                    control={whitePaperForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  >
                  </FormField>
                  <FormField
                    control={whitePaperForm.control}
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
                              disabled={(date) =>
                                date > new Date()
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={whitePaperForm.control}
                    name="img"
                    render={({ field: { onChange }, ...rest }) => {
                       
                       
                      return (
                        <FormItem>
                          <FormLabel>Image</FormLabel>
                          <FormControl>
                            <Input type="file" accept="image/*" {...rest} onChange={e => {
                              onChange(e)
                              setWhitePaperImg(e?.target?.files?.[0])
                            }} />
                          </FormControl>
                          <FormMessage />
                          {!whitePaperImg?(<FormDescription>{whitePaper?.img?.split("__")[1]}</FormDescription>):""}
                        </FormItem>
                      )
                    }}
                  >
                   
                  </FormField>
                  <FormField
                    control={whitePaperForm.control}
                    name="pdf"
                    render={({ field: { onChange }, ...rest }) => {

                      return (
                        <FormItem>
                          <FormLabel>Pdf File</FormLabel>
                          <FormControl>
                            <Input type="file" accept="application/pdf" {...rest} onChange={e => {
                              onChange(e)
                              setWhitePaperPdf(e?.target?.files?.[0])
                            }} />
                          </FormControl>
                          <FormMessage />
                          {!whitePaperPdf?(<FormDescription>{whitePaper?.pdf?.split("__")[1]}</FormDescription>):""}
                        </FormItem>
                      )
                    }}
                  >
                  </FormField>
                  <FormField
                    control={whitePaperForm.control}
                    name="content"
                    render={() => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                        <Editor
                            onEditorChange={(a)=>whitePaperForm.setValue("content",a)}
                            value={whitePaperForm.getValues("content")}
                            apiKey='rqvkfybyhlu42exb1mlmf4stf273nps45memnsxdh6xsiu0h'
                            init={{
                              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                            }}
                          />
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

export default AdminDashboard
