import { getApi, postApi } from "@/api/adminApi";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookie from "js-cookie"
import {
  Dialog,
  DialogContent,
  DialogDescription,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { toast } from "sonner";

function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

export default function PositionPage() {
  const { positionId } = useParams();
  const navigate = useNavigate()
  const [position, setPosition] = useState()
  const [loginLoading, setloginLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const SignUpSchema = z.object({
    name: z.string().refine(val => val.trim().length, {
      message: "Please enter a name"
    }),
    email: z.string().email('Invalid email'),
    password: z.string().refine(value => validatePassword(value), {
      message: "Password must be atleast 8 characters long, must contain one uppercase, lowercase, one digit and one special character"
    }),
    confirmPassword: z.string()
  }).refine(check => check.password === check.confirmPassword, {
    message: "Passwords dont match",
    path: ["confirmPassword"]
  });

  type SignUpSchemaType = z.infer<typeof SignUpSchema>;
  const loginFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  });

  const loginForm = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const SignUpForm = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = SignUpForm
  const onSubmit = async (data: SignUpSchemaType) => {
    // Handle form submission
    try {
      setLoading(true)
      const res = await postApi(`api/career/register_user`, data)
      
      if (res?.data?.message) {
        toast.success(res.data.message)
        reset({
          name: "",
          password: "",
          confirmPassword: "",
          email: ""
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  };
  const onSubmitLogin = async (data) => {
    try {
      setloginLoading(true)
      const res = await postApi(`api/career/login_user`, {...data, positionId})
      if (res instanceof Error) {
      //  toast.error(res?.response?.data?.message)
      console.log(res)
      }
      else if (res?.data?.message) {
        toast.success(res.data.message)
        reset({
          password: "",
          email: ""
        })
       
        Cookie.set("saraca_user_id", res?.data?.userId)
        navigate(`/Careers/ApplicationForm/${positionId}`)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setloginLoading(false)
    }
  }

  useEffect(
    () => {
      getApi(`api/get_position/${positionId}`).then(res => setPosition(res?.data.position))
        .catch(e => console.log(e))
    }
    , [])

  return (
    <div className="mt-28 container bg-white mb-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
        <div>
          <h1 className="text-5xl font-bold">{position?.title}</h1>
          <p className="mb-8 flex items-end text-gray-600 text-2xl"><MapPin /> {position?.location}</p>
        </div>


        <Sheet>
          <SheetTrigger asChild>
            <Button variant="destructive" className="ml-auto">Apply to this Position</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sign Up</SheetTitle>
              <SheetDescription>
                Sign up before applying to a position
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center gap-4">
                <Form {...SignUpForm} >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormDescription>
                            <FormMessage state={errors.name ? 'invalid' : 'valid'}>
                              {errors.name?.message}
                            </FormMessage>
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input placeholder="name@example.com" {...field} />
                          </FormControl>
                          <FormDescription>
                            <FormMessage state={errors.email ? 'invalid' : 'valid'}>
                              {errors.email?.message}
                            </FormMessage>
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormDescription>
                            <FormMessage state={errors.password ? 'invalid' : 'valid'}>
                              {errors.password?.message}
                            </FormMessage>

                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormDescription>
                            <FormMessage state={errors.confirmPassword ? 'invalid' : 'valid'}>
                              {errors.confirmPassword?.message}
                            </FormMessage>
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <Button type='submit' disabled={loading}>Register</Button>
                  </form>
                </Form>
              </div>
            </div>
            <SheetFooter className="flex items-center">
              <span>Already Registered? </span>
              <SheetClose asChild>

                <Dialog>
                  <DialogTrigger>
                    <Button variant="link">Login</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Login</DialogTitle>
                      <DialogDescription>
                        Sign In using your email and password
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...loginForm}>
                      <form onSubmit={loginForm.handleSubmit(onSubmitLogin)}>
                        <FormField
                          control={loginForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={loginForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>)}
                        />

                        <Button type="submit" disabled={loginLoading} className="mt-2">login</Button>

                      </form>
                    </Form>

                  </DialogContent>
                </Dialog>
              </SheetClose>

            </SheetFooter>
          </SheetContent>
        </Sheet>

      </div>


      <p className="text-2xl mb-4 flex items-center"><strong>Job ID:</strong>&nbsp;{position?.jobId}</p>
      <p className="text-2xl mb-4"><strong>Function:</strong> {position?.function}</p>
      <p className="text-2xl mb-4"><strong>Role:</strong> {position?.role}</p>
      <p className="text-2xl mb-4 flex gap-1"><strong>Desired Skills:</strong> <div className="flex flex-wrap gap-1">{position?.desiredSkills?.split(",").map(i => <Badge className=" bg-slate-500">{i}</Badge>)}</div></p>
      <p className="text-2xl mb-4"><strong>Desired Qualification:</strong> {position?.desiredQualification}</p>
      <p className="text-2xl mb-4"><strong>Desired Experience:</strong> {position?.desiredExperience}</p>

      <div className="text-2xl" dangerouslySetInnerHTML={{ __html: position?.description }} />

      {/* other position details */}
    </div>
  );
}