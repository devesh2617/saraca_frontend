import { useState, useEffect } from "react"

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

import AdminNavbar from "../components/AdminNavbar"
import { getApi, postApi } from '../api/adminApi';
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

const AdminDashboard = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [blogImg, setBlogImg] = useState<File | undefined>()
  const [blog, setBlog] = useState();

  const htmlContentRegex = /[^\s]/;
  const imgFormats = ["jpg", "jpeg", "png", "svg", "webp"]
  // Example function to check HTML content
  const hasContent = (htmlString: string) => {
    // Strip HTML tags and &nbsp; entities
    const strippedString = htmlString.replace(/(<([^>]+)>|&nbsp;)/gi, '');
    // Check if any content remains
    return htmlContentRegex.test(strippedString);
  };


  const BlogSchema = z.object({
    title: z.string().refine((val) => val.trim().length, {
      message: "Title cannot be empty"
    }),
    content: z.string().refine((val) => hasContent(val), {
      message: "Content cannot be empty"
    }),
    date: z.date().transform(date => date.toString()),

    img: z.string().refine((val) => !val.includes("_"), {
      message: "Filename should not include underscores"
    }).refine(val => imgFormats.includes(val?.split(".")[val?.split(".")?.length - 1])
      , { message: "Please select a image file" }),
  })




  const blogForm = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema)
  });



  const onSubmitBlog = async (data) => {
    try {
      const { img, ...newData } = data
      newData.img = blogImg
      const res: any = await postApi(`admin/edit_blog/${id}`, newData)
      if (res?.data?.message) {
        toast.success(res.data.message)
        navigate(-1)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }


  useEffect(() => {
    getApi('api/get_blog/' + id).then(res => {
      const data = res?.data?.blog
      setBlog(data)
      blogForm.reset({
        title: data?.title,
        content: data?.content,
        img: data?.img?.split("__")[1],
        date: new Date(data?.date)
      })
    })
  }, [])

  return (
    <div>
      <AdminNavbar />


      <Card className="max-w-3xl mx-auto mt-4">
        <CardHeader>
          <CardTitle>Blogs</CardTitle>
          <CardDescription>
            Add more blogs to the database
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {
            <Form {...blogForm}>
              <form onSubmit={blogForm.handleSubmit(onSubmitBlog)}>
                <FormField
                  control={blogForm.control}
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
                  control={blogForm.control}
                  name="img"
                  render={({ field: { onChange }, ...rest }) => {

                    return (
                      <FormItem>
                        <FormLabel>Image</FormLabel>
                        <FormControl>
                          <Input type="file" accept="image/*" {...rest} onChange={e => {
                            onChange(e)
                            setBlogImg(e?.target?.files?.[0])
                          }} />
                        </FormControl>
                        <FormMessage />
                        {!blogImg ? (<FormDescription>{blog?.img?.split("__")[1]}</FormDescription>) : ""}

                      </FormItem>
                    )
                  }}
                >
                 
                </FormField>
                 <FormField
                    control={blogForm.control}
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
                  control={blogForm.control}
                  name="content"
                  render={() => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                      <Editor
                            onEditorChange={(a)=>blogForm.setValue("content",a)}
                            apiKey='rqvkfybyhlu42exb1mlmf4stf273nps45memnsxdh6xsiu0h'
                            value={blogForm.getValues("content")}
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
          }
        </CardContent>

      </Card>

    </div>
  )
}

export default AdminDashboard
