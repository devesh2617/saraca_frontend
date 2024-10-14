import { useState } from "react"
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
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
import { postApi } from '../api/adminApi';
import { toast } from "sonner";
import { useNavigate } from "react-router-dom"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Textarea } from "@chakra-ui/react"

const AdminDashboard = () => {
  const industries = [
    "Automotive",
    "Aerospace and Defense",
    "Life Sciences",
    "Semiconductor",
    "Industrial",
    "Rail Transportation",
    "Consumer"
  ]
  const navigate = useNavigate()
  const [whitePaperImg, setWhitePaperImg] = useState<File | undefined>()
  const [whitePaperPdf, setWhitePaperPdf] = useState<File | undefined>()
  const [caseStudyImg, setCaseStudyImg] = useState<File | undefined>()
  const [newsImg, setNewsImg] = useState<File | undefined>()
  const [blogImg, setBlogImg] = useState<File | undefined>()
  const [webinarImg, setWebinarImg] = useState<File | undefined>()
  const [eventImages, setEventImages] = useState();

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
    industry: z.string({
      required_error: "Please select an industry"
    }),
    content: z.string().refine((val) => hasContent(val), {
      message: "Content cannot be empty"
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

  const caseStudySchema = z.object({
    title: z.string().refine((val) => val.trim().length, {
      message: "Title cannot be empty"
    }),
    industry: z.string({
      required_error: "Please select an industry"
    }),
    project_scope: z.string().refine((val) => hasContent(val), {
      message: "Project Scope cannot be empty"
    }),
    project_deliverables: z.string().refine((val) => hasContent(val), {
      message: "Project Deliverables cannot be empty"
    }),
    key_tools: z.string().refine((val) => hasContent(val), {
      message: "Key Tools cannot be empty"
    }),
    customer: z.string().refine((val) => val.trim().length, {
      message: "Customer name cannot be empty"
    }),
    img: z.string().refine((val) => !val.includes("_"), {
      message: "Filename should not include underscores"
    }).refine(val => imgFormats.includes(val?.split(".")[val?.split(".")?.length - 1])
      , { message: "Please select a image file" }),
  })

  const newsSchema = z.object({
    title: z.string().refine((val) => val.trim().length, {
      message: "Title cannot be empty"
    }),
    link: z.string().refine((val) => val.trim().length, {
      message: "Link cannot be empty"
    }),
    date: z.date().transform(date => date.toString()),
    description: z.string().refine((val) => val.trim().length, {
      message: "Description cannot be empty"
    }),
    img: z.string().refine((val) => !val.includes("_"), {
      message: "Filename should not include underscores"
    }).refine(val => imgFormats.includes(val?.split(".")[val?.split(".")?.length - 1])
      , { message: "Please select a image file" }),

  })

  const BlogSchema = z.object({
    title: z.string().refine((val) => val.trim().length, {
      message: "Title cannot be empty"
    }),
    content: z.string().refine((val) => hasContent(val), {
      message: "Content cannot be empty"
    }),

    img: z.string().refine((val) => !val.includes("_"), {
      message: "Filename should not include underscores"
    }).refine(val => imgFormats.includes(val?.split(".")[val?.split(".")?.length - 1])
      , { message: "Please select a image file" }),
    date: z.date().transform(date => date.toString()),
  })

  const WebinarSchema = z.object({
    title: z.string().refine((val) => val.trim().length, {
      message: "Title cannot be empty"
    }),
    link: z.string().refine((val) => val.trim().length, {
      message: "Link cannot be empty"
    }),
    img: z.string().refine((val) => !val.includes("_"), {
      message: "Filename should not include underscores"
    }).refine(val => imgFormats.includes(val?.split(".")[val?.split(".")?.length - 1])
      , { message: "Please select a image file" }),
    date: z.date().transform(date => date.toString()),
  })

  const EventSchema = z.object({
  name: z.string().refine((val) => val.trim().length > 0, {
    message: "Title cannot be empty",
  }),
  description: z.string().refine((val) => val.trim().length > 0, {
    message: "Description cannot be empty",
  }),
  location: z.string().refine((val) => val.trim().length > 0, {
    message: "Location cannot be empty",
  }),
  images: z.string(),
  from_date: z.date().transform((date) => date.toString()),
  to_date: z.date().transform((date) => date.toString()),
});

  const whitePaperForm = useForm<z.infer<typeof whitePaperSchema>>({
    resolver: zodResolver(whitePaperSchema)
  });

  const blogForm = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema)
  });

  const webinarForm = useForm<z.infer<typeof WebinarSchema>>({
    resolver: zodResolver(WebinarSchema)
  });

  const eventForm = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema)
  });

  const newsForm = useForm<z.infer<typeof newsSchema>>({
    resolver: zodResolver(newsSchema)
  });

  const caseStudiesForm = useForm<z.infer<typeof caseStudySchema>>({
    resolver: zodResolver(caseStudySchema)
  });

  const onSubmitWhitePaper = async (data) => {
    try {
      const { img, pdf, ...newData } = data
      newData.img = whitePaperImg
      newData.pdf = whitePaperPdf
      console.log(newData)
      const res: any = await postApi("admin/create_white_paper", newData)
      if (res?.data?.message) {
        toast.success(res.data.message)
        navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/admin/white_papers`)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const onSubmitNews = async (data) => {
    try {
      const { img, ...newData } = data
      newData.img = newsImg
      const res: any = await postApi("admin/create_news", newData)
      if (res?.data?.message) {
        toast.success(res.data.message)
        navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/admin/news`)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const onSubmitBlog = async (data) => {
    try {
      const { img, ...newData } = data
      newData.img = blogImg
      const res: any = await postApi("admin/create_blog", newData)
      if (res?.data?.message) {
        toast.success(res.data.message)
        navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/admin/blogs`)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const onSubmitWebinar = async (data) => {
    try {
      const { img, ...newData } = data
      newData.img = webinarImg
      const res: any = await postApi("admin/create_webinar", newData)
      if (res?.data?.message) {
        toast.success(res.data.message)
        navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/admin/webinars`)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const onSubmitEvent = async (data) => {
    try {
      const { images, ...newData } = data
      newData.images = eventImages
      const res: any = await postApi("admin/create_event", newData)
      if (res?.data?.message) {
        toast.success(res.data.message)
        navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/admin/events`)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const onSubmitCaseStudy = async (data) => {
    try {
      const { img, ...newData } = data
      newData.img = caseStudyImg
      const res: any = await postApi("admin/create_case_study", newData)
      if (res?.data?.message) {
        toast.success(res.data.message)
        navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/admin/case_studies`)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ]
};


  return (
    <div>
      <AdminNavbar />
      <Tabs defaultValue="white papers" className="max-w-3xl mx-auto my-4">
        <TabsList className="grid w-full grid-cols-6 h-16 mb-4">
          <TabsTrigger className="h-12" value="white papers">White Papers</TabsTrigger>
          <TabsTrigger className="h-12" value="case studies">Case Studies</TabsTrigger>
          <TabsTrigger className="h-12" value="news">News</TabsTrigger>
          <TabsTrigger className="h-12" value="blogs">Blogs</TabsTrigger>
          <TabsTrigger className="h-12" value="webinar">Webinar</TabsTrigger>
          <TabsTrigger className="h-12" value="events">Events</TabsTrigger>
        </TabsList>
        <TabsContent value="white papers">
          <Card>
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
                            <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
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
                        <ReactQuill theme="snow" modules={modules} className="min-h-editor" onChange={(e)=>{
                          whitePaperForm.setValue("content",e)}}
                          value={whitePaperForm.getValues("content")}
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
        </TabsContent>
        <TabsContent value="case studies">
          <Card>
            <CardHeader>
              <CardTitle>Case Studies</CardTitle>
              <CardDescription>
                Add case studies to the database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form {...caseStudiesForm}>
                <form onSubmit={caseStudiesForm.handleSubmit(onSubmitCaseStudy)}>
                  <FormField
                    control={caseStudiesForm.control}
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
                    control={caseStudiesForm.control}
                    name="industry"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
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
                    control={caseStudiesForm.control}
                    name="customer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Customer</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  >
                  </FormField>

                  <FormField
                    control={caseStudiesForm.control}
                    name="img"
                    render={({ field: { onChange }, ...rest }) => {

                      return (
                        <FormItem>
                          <FormLabel>Image</FormLabel>
                          <FormControl>
                            <Input type="file" accept="image/*" {...rest} onChange={e => {
                              onChange(e)
                              setCaseStudyImg(e?.target?.files?.[0])
                            }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )
                    }}
                  >
                  </FormField>

                  <FormField
                    control={caseStudiesForm.control}
                    name="project_scope"
                    render={() => (
                      <FormItem>
                        <FormLabel>Project Scope</FormLabel>
                        <FormControl>
                        <ReactQuill theme="snow" modules={modules} className="min-h-editor" onChange={(e)=>{
                          caseStudiesForm.setValue("project_scope",e)}}
                          value={caseStudiesForm.getValues("project_scope")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  >
                  </FormField>
                  <FormField
                    control={caseStudiesForm.control}
                    name="project_deliverables"
                    render={() => (
                      <FormItem>
                        <FormLabel>Project Deliverables</FormLabel>
                        <FormControl>
                        <ReactQuill theme="snow" modules={modules} className="min-h-editor" onChange={(e)=>{
                          caseStudiesForm.setValue("project_deliverables",e)}}
                          value={caseStudiesForm.getValues("project_deliverables")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  >
                  </FormField>
                  <FormField
                    control={caseStudiesForm.control}
                    name="key_tools"
                    render={() => (
                      <FormItem>
                        <FormLabel>Key Tools</FormLabel>
                        <FormControl>
                        <ReactQuill theme="snow" modules={modules} className="min-h-editor" onChange={(e)=>{
                          caseStudiesForm.setValue("key_tools",e)}}
                          value={caseStudiesForm.getValues("key_tools")}
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
        </TabsContent>
        <TabsContent value="blogs">
          <Card>
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
                          <ReactQuill theme="snow" modules={modules} className="min-h-editor" onChange={(e)=>{
                          blogForm.setValue("content",e)}}
                          value={blogForm.getValues("content")}
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
            <CardFooter>

            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="webinar">
          <Card>
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
        </TabsContent>
        <TabsContent value="news">
          <Card>
            <CardHeader>

              <CardTitle>News</CardTitle>
              <CardDescription>
                Add more news to the database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {
                <Form {...newsForm}>
                  <form onSubmit={newsForm.handleSubmit(onSubmitNews)}>
                    <FormField
                      control={newsForm.control}
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
                      control={newsForm.control}
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
                      control={newsForm.control}
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
                      control={newsForm.control}
                      name="img"
                      render={({ field: { onChange }, ...rest }) => {

                        return (
                          <FormItem>
                            <FormLabel>Image</FormLabel>
                            <FormControl>
                              <Input type="file" accept="image/*" {...rest} onChange={e => {
                                onChange(e)
                                setNewsImg(e?.target?.files?.[0])
                              }} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )
                      }}
                    >
                    </FormField>
                    <FormField
                      control={newsForm.control}
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
                    <Button type="submit" className="mt-4">Submit</Button>
                  </form>
                </Form>
              }
            </CardContent>
            <CardFooter>

            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Events</CardTitle>
              <CardDescription>
                Add a new Event!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {
                <Form {...eventForm}>
                <form onSubmit={eventForm.handleSubmit(onSubmitEvent)}>
                  
                  {/* Title Field */}
                  <FormField
                    control={eventForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Description Field */}
                  <FormField
                    control={eventForm.control}
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
                  />

                  {/* From Date Field */}
                  <FormField
                    control={eventForm.control}
                    name="from_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>From Date</FormLabel>
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
                                {field.value ? format(field.value, "PP") : <span>Pick a start date</span>}
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

                  {/* To Date Field */}
                  <FormField
                    control={eventForm.control}
                    name="to_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>To Date</FormLabel>
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
                                {field.value ? format(field.value, "PP") : <span>Pick an end date</span>}
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

                  {/* Location Field */}
                  <FormField
                    control={eventForm.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Multiple Images Field */}
                  <FormField
                    control={eventForm.control}
                    name="images"
                    render={({ field: { onChange }, ...rest }) => (
                      <FormItem>
                        <FormLabel>Images</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*"
                            multiple
                            {...rest}
                            onChange={e => {
                              onChange(e);
                              const files = e.target.files
                              console.log(files)
                              setEventImages(files); // Store raw File objects for further processing
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button type="submit" className="mt-4">Submit</Button>
                  
                </form>
              </Form>

              }
            </CardContent>
            <CardFooter>

            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminDashboard
