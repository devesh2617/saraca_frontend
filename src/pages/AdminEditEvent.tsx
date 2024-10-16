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

const AdminEditEvent = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState();
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
    images: z.string().transform(val=>console.log("image is",val)),
    from_date: z.date().transform((date) => date.toString()),
    to_date: z.date().transform((date) => date.toString()).optional(),
  });

  const eventForm = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema)
  });

  const onSubmitEvent = async (data) => {
    try {
      const { images, ...newData } = data
      newData.images = eventImages
    const res:any = await postApi("admin/edit_event/"+id, newData)
    if(res?.data?.message){
      toast.success(res.data.message)
      navigate(-1)
    } 
    } catch (error:any) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getApi('api/get_event/'+id).then(res=>{
     const data = res?.data?.event

     setEvent(data)

     eventForm.reset({
         name: data?.name,
         description: data?.description,
         location: data?.location,
         from_date: new Date(data?.from_date),
         to_date: new Date(data?.to_date),

     })
    })
   }, [])
  
  return (
    <div>
      <AdminNavbar />
      <Card className="max-w-3xl mx-auto mt-4">
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
                              setEventImages(files); // Store raw File objects for further processing
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                        {!eventImages ? (
                          <FormDescription>
                            {
                              event?.images?.map((image) => {
                                return image.split("__")[1]
                              }).join(", ")
                            }
                        </FormDescription>) : ""}
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
    </div>
  )
}

export default AdminEditEvent

