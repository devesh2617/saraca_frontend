import { getApi, postApi } from "@/api/adminApi"
import { useEffect, useState } from "react"
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import TAadminNavbar from '../components/TAAdminNavbar'
import { useNavigate } from "react-router-dom"

const TAadminDashboard = () => {
  const navigate = useNavigate()
  // const [regionData, setRegionData] = useState({
  //   region: ""
  // })

  const [regions, setRegions] = useState()
  const htmlContentRegex = /[^\s]/;

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


  const regionFormSchema = z.object({
    name: z.string().refine((val) => val.trim().length, {
      message: "Region cannot be empty"
    })
  })
  const positionsForm = useForm<z.infer<typeof positionFormSchema>>({
    resolver: zodResolver(positionFormSchema)
  });
  const regionForm = useForm<z.infer<typeof regionFormSchema>>({
    resolver: zodResolver(regionFormSchema)
  });
  const onSubmitPosition = async (data) => {
    const res: any = await postApi("TAadmin/add_position", data)
    if (res?.data?.message) {
      toast.success(res?.data?.message)
      navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/TAadmin/positions`)
    }
  }

  const onSubmitRegion = async (data) => {

    const res: any = await postApi("TAadmin/add_region", data)
    if (res?.data?.message) {
      toast.success(res?.data?.message)
      navigate(`/${import.meta.env.VITE_ADMIN_ROUTES_STRING}/TAadmin/regions`)
    }

  }
  useEffect(() => {
    getApi('api/get_regions').then(
      res => {
        setRegions(res.data.regions)
      }
    )
  }, [])
  return (
    <div>
      <TAadminNavbar/>
      <Tabs defaultValue="region" className="max-w-3xl mx-auto my-4">
        <TabsList className="grid w-full grid-cols-2 h-16 mb-4">
          <TabsTrigger className="h-12" value="region">Region</TabsTrigger>
          <TabsTrigger className="h-12" value="position">Position</TabsTrigger>
        </TabsList>
        <TabsContent value="region">
          <Card>
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
        </TabsContent>
        <TabsContent value="position">
          <Card>
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
                              <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
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
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                          <Editor
                            onEditorChange={(a)=>positionsForm.setValue("description",a)}
                            value={positionsForm.getValues("description")}
                            apiKey='rqvkfybyhlu42exb1mlmf4stf273nps45memnsxdh6xsiu0h'
                            init={{
                              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                              tinycomments_mode: 'embedded',
                              tinycomments_author: 'Author name',
                              mergetags_list: [
                                { value: 'First.Name', title: 'First Name' },
                                { value: 'Email', title: 'Email' },
                              ],
                              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
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
            <CardFooter>

            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TAadminDashboard
