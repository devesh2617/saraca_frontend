import { getApi, postApi } from "@/api/adminApi"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Editor } from "@tinymce/tinymce-react"
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
} from "@/components/ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import TAadminNavbar from '../components/TAAdminNavbar'
import { useNavigate, useParams } from "react-router-dom"
import ReactQuill from "react-quill"

const TAadminDashboard = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [regions, setRegions] = useState()
  const htmlContentRegex = /[^\s]/;
  const [loading, setLoading] = useState(true)
  const [firstTime, setFirstTime] = useState(true)
  // Example function to check HTML content
  const hasContent = (htmlString: string) => {
    // Strip HTML tags and &nbsp; entities
    const strippedString = htmlString.replace(/(<([^>]+)>|&nbsp;)/gi, '');
    // Check if any content remains
    return htmlContentRegex.test(strippedString);
  };
  const positionFormSchema = z.object({
    title: z.string().refine((val) => val.trim().length, {
      message: "Title cannot be empty"
    }),
    description: z.string().refine((val) => hasContent(val), {
      message: "Description cannot be empty"
    }),
    location: z.string().refine((val) => val.trim().length, {
      message: "Location cannot be empty"
    }),
    functional: z.string().refine((val) => val.trim().length, {
      message: "Function cannot be empty"
    }),
    role: z.string().refine((val) => val.trim().length, {
      message: "Role cannot be empty"
    }),
    desiredSkills: z.string().refine((val) => val.trim().length, {
      message: "Desired Skills cannot be empty"
    }),
    desiredQualification: z.string().refine((val) => val.trim().length, {
      message: "Desired Qualification cannot be empty"
    }),
    desiredExperience: z.string().refine((val) => val.trim().length, {
      message: "Desired Experience cannot be empty"
    }),
    region: z.string({
      required_error: "Please select a region"
    })
  })

  const onSubmitPosition = async (data) => {
    const res: any = await postApi("TAadmin/edit_position/"+id, data)
    if (res?.data?.message) {
      toast.success(res?.data?.message)
      navigate(-1)
    }
  }
 
  const positionsForm = useForm<z.infer<typeof positionFormSchema>>({
    resolver: zodResolver(positionFormSchema)
  });

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
 
  useEffect(() => {
    getApi('api/get_position/'+id).then(res=>{
        const data = res?.data?.position
        
        positionsForm.reset({
            title: data?.title,
            description: data?.description,
            desiredSkills: data?.desiredSkills,
            desiredExperience: data?.desiredExperience,
            region:data?.Region?.name,
            desiredQualification: data?.desiredQualification,
            role:data?.role,
            location:data?.location,
            functional:data?.function
        })
        
    })
    if(firstTime){
        getApi('api/get_regions').then(
            res => {
              setRegions(res?.data?.regions)
              setFirstTime(false)
            }
          ).finally(()=>setLoading(false))
          
    }
    
    
  }, [])
  return (
    <div>
      <TAadminNavbar/>
      {!loading?(<Card className=" max-w-3xl mx-auto mt-4">
            <CardHeader>
              <CardTitle>Positions</CardTitle>
              <CardDescription>
                Add more positions to the database
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {
                <Form {...positionsForm}>
                  <form onSubmit={positionsForm.handleSubmit(onSubmitPosition)}>
                    <FormField
                      control={positionsForm.control}
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
                      control={positionsForm.control}
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
                    >
                    </FormField>
                    <FormField
                      control={positionsForm.control}
                      name="functional"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Function</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    >
                    </FormField>
                    <FormField
                      control={positionsForm.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    >
                    </FormField>
                    <FormField
                      control={positionsForm.control}
                      name="region"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Region</FormLabel>
                            <FormControl>
                              <Select  onValueChange={field.onChange} defaultValue={field.value} {...field}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Region" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {regions?.map((region) => (
                                      <SelectItem key={region.id} value={region.name}>
                                        {region.name}
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
                      control={positionsForm.control}
                      name="desiredQualification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Desired Qualification</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={positionsForm.control}
                      name="desiredExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Desired Experience</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    ></FormField>
                    <FormField
                      control={positionsForm.control}
                      name="desiredSkills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Desired Skills</FormLabel>
                          <FormControl>
                            <Input {...field}/>
                          </FormControl>
                          <FormDescription>Please enter comma separated skills</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    >
                    </FormField>
                    <FormField
                      control={positionsForm.control}
                      name="description"
                      render={() => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                          <ReactQuill theme="snow" modules={modules} className="min-h-editor" onChange={(e)=>{
                          positionsForm.setValue("description",e)}}
                          value={positionsForm.getValues("description")}
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
      </Card>):""}
    </div>
  )
}

export default TAadminDashboard
