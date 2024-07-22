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
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ReactQuill from "react-quill"

const AdminDashboard = () => {

  const {id} = useParams();
  const [caseStudyImg, setCaseStudyImg] = useState<File | undefined>()
  const [caseStudy, setCaseStudy] = useState();
  const navigate = useNavigate();
  const industries = [
    "Automotive",
    "Aerospace and Defense",
    "Life Sciences",
    "Semiconductor",
    "Industrial",
    "Rail Transportation",
    "Consumer"
]
  const htmlContentRegex = /[^\s]/;
  const imgFormats = ["jpg", "jpeg", "png", "svg", "webp"]
  // Example function to check HTML content
  const hasContent = (htmlString: string) => {
    // Strip HTML tags and &nbsp; entities
    const strippedString = htmlString.replace(/(<([^>]+)>|&nbsp;)/gi, '');
    // Check if any content remains
    return htmlContentRegex.test(strippedString);
  };


  const caseStudySchema = z.object({
    title: z.string().refine((val) => val.trim().length, {
      message: "Title cannot be empty"
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
    industry: z.string({
      required_error: "Please select an industry"
    }),
    img: z.string().refine((val) => !val.includes("_"), {
      message: "Filename should not include underscores"
    }).refine(val => imgFormats.includes(val?.split(".")[val?.split(".")?.length - 1])
      , { message: "Please select a image file" }),
  })




  const caseStudiesForm = useForm<z.infer<typeof caseStudySchema>>({
    resolver: zodResolver(caseStudySchema)
  });

  

  const onSubmitCaseStudy = async (data) => {
    try {
    const { img, ...newData } = data
    newData.img = caseStudyImg
    const res:any = await postApi("admin/edit_case_study/"+id, newData)
    if(res?.data?.message){
      toast.success(res.data.message)
      navigate(-1)
    }
    } catch (error:any) {
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


  useEffect(()=>{
    getApi('api/get_case_study/'+id).then(res=>{
     const data = res?.data?.caseStudy
     setCaseStudy(data)
     caseStudiesForm.reset({
         title: data?.title,
         project_scope: data?.project_scope,
         img:data?.img?.split("__")[1],
         project_deliverables: data?.project_deliverables,
         key_tools: data?.key_tools,
         customer:data?.customer,
         industry: data?.industry
     })
    })
   }, [])

  return (
    <div>
      <AdminNavbar />
      
        
        <Card className="max-w-3xl mx-auto mt-4">
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
                          {!caseStudyImg?(<FormDescription>{caseStudy?.img?.split("__")[1]}</FormDescription>):""}
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
            
    </div>
  )
}

export default AdminDashboard
