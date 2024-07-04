import { Button } from '@/components/ui/button'
import {
    Step,
    StepIcon,
    StepIndicator,
    StepDescription,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box,
    ChakraProvider
} from '@chakra-ui/react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import countryOptions from '@/utilities/countryCode'
import { codes as mobileCodes } from "../utilities/mobilecodes"
import { useEffect, useState } from 'react'
import { postApi } from '@/api/adminApi'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from "js-cookie"
import { toast } from 'sonner'

const ApplicationForm = () => {
    const { positionId } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const steps = [
        { description: 'Step 1', title: 'My Information', fields: ["where_did_you_hear_about_us", "previously_worked_for_saraca", "country", "name", "address", "mobile_no", "country_code"] },
        { description: 'Step 2', title: 'Education', fields: ["school_university", "degree", "field_of_study", "cgpa", "skills", "linkedin_account", "resume"] },
        { description: 'Step 3', title: "Experience", fields: ["relevant_experience", "relevant_experience_role_description", "total_experience", "total_experience_role_description"] },
        { description: 'Step 4', title: 'Application Question', fields: ["agreement_for_contact", "gender"] },
        { description: 'Step 5', title: 'Voluntary Disclosures', fields: ["terms_conditions"] }
    ]

    const { activeStep, goToNext, goToPrevious } = useSteps({
        index: 1,
        count: steps.length,
    })

    const genderOptions = ["Male", "Female", "Prefer not to say"]

    const applicationDataSchema = z.object({
        where_did_you_hear_about_us: z.string().optional(),
        previously_worked_for_saraca: z.string().refine((val) => val.trim(), { message: "Please select any one" }),
        country: z.string().refine((val) => val.trim(), { message: "Please select your country" }),
        name: z.string().refine((val) => val.trim(), { message: "Name is required" }),
        address: z.string().refine((val) => val.trim(), { message: "Address is required" }),
        country_code: z.string().refine((val) => val.trim(), { message: "Country Code is required" }),
        mobile_no: z.string().refine((val) => val.trim(), { message: "Mobile No is required" }),
        relevant_experience: z.number(),
        relevant_experience_role_description: z.string().optional(),
        total_experience: z.number(),
        total_experience_role_description: z.string().optional(),
        school_university: z.string().refine((val) => val.trim(), { message: "School/University is required" }),
        degree: z.string().refine((val) => val.trim(), { message: "Degree is required" }),
        field_of_study: z.string().optional(),
        cgpa: z.number().refine(val=>val>=0&&val<=10, {message: "Please enter between 0 to 10"}),
        skills: z.string().refine((val) => val.trim(), { message: "Skills are required" }),
        resume: z.string().refine((val) => val.trim(), { message: "Resume is required" }),
        linkedin_account: z.string().optional(),
        agreement_for_contact: z.string().refine((val) => val.trim(), { message: "Please select yes or no" }),
        gender: z.string().refine((val) => val.trim(), { message: "Please select a gender" }),
        terms_conditions: z.boolean().refine((val) => val, { message: "Please tick the checkbox" })
    })


    const hear_about_us_options = [
        "LinkedIn",
        "Naukri",
        "Others"
    ]

    const [resumeFile, setResumeFile] = useState(undefined)
    const applicationForm = useForm<z.infer<typeof applicationDataSchema>>({
        resolver: zodResolver(applicationDataSchema),
        defaultValues: {
            relevant_experience: 0,
            total_experience: 0,
            cgpa: 0
        }
    })

    const onSubmitApplication = async () => {
        try {
            const res = await postApi(`api/career/save_application_form`, { positionId, userId: Cookies.get("saraca_user_id") })
            if (res?.status === 201) {
                toast.success(res?.data?.message)
                navigate(-1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleNext = async () => {

        const output = await applicationForm.trigger(steps[activeStep - 1].fields, { shouldFocus: true })

        if (output) {
            const formData = {
                positionId,
                userId: Cookies.get("saraca_user_id")
            }
            steps[activeStep - 1]?.fields?.map((item: string) => {
                if (item !== "resume") formData[item] = applicationForm.getValues(item) || ""
                else {
                    formData["resume"] = resumeFile
                }
                formData["filename"] = applicationForm.getValues("resume") || ""
                
            })
            let res;
            if (activeStep === 1) res = await postApi(`api/career/save_my_information`, formData)
            else if (activeStep === 2) res = await postApi(`api/career/save_education`, formData)
            else if (activeStep === 3) res = await postApi(`api/career/save_experience`, formData)
            else if (activeStep === 4) res = await postApi(`api/career/save_agreement`, formData)
            if (res?.status === 201) goToNext()
        }
    }

    useEffect(() => {

        postApi(`api/career/get_my_application_details`, { userId: Cookies.get("saraca_user_id"), positionId })
            .then(res => {
                if (res?.status === 200) applicationForm.reset({
                    where_did_you_hear_about_us: res?.data?.userDetails?.where_did_you_hear_about_us || "",
                    previously_worked_for_saraca: res?.data?.userDetails?.previously_worked_for_saraca || "",
                    country: res?.data?.userDetails?.country || "",
                    name: res?.data?.userDetails?.name || "",
                    address: res?.data?.userDetails?.address || "",
                    country_code: res?.data?.userDetails?.country_code || "",
                    mobile_no: res?.data?.userDetails?.mobile_no || "",
                    school_university: res?.data?.userDetails?.school_university || "",
                    degree: res?.data?.userDetails?.degree || "",
                    field_of_study: res?.data?.userDetails?.field_of_study || "",
                    cgpa: res?.data?.userDetails?.cgpa || 0,
                    skills: res?.data?.userDetails?.skills || "",
                    resume: res?.data?.userDetails?.resume || "",
                    linkedin_account: res?.data?.userDetails?.linkedin_account || "",
                    total_experience: res?.data?.userDetails?.total_experience || 0,
                    total_experience_role_description: res?.data?.userDetails?.total_experience_role_description || "",
                    relevant_experience: res?.data?.userDetails?.relevant_experience || 0,
                    relevant_experience_role_description: res?.data?.userDetails?.relevant_experience_role_description || "",
                    agreement_for_contact: res?.data?.userDetails?.agreement_for_contact || "",
                    gender: res?.data?.userDetails?.gender || ""
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>{!loading ? (<div className='container mt-32'>
            <ChakraProvider>
                <Stepper index={activeStep}>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>
                            <Box>

                            </Box>
                            <Box flexShrink={0}>
                                <StepTitle>{step.title}</StepTitle>
                                <StepDescription>{step.description}</StepDescription>
                            </Box>

                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
                <Box>
                    <Card className='my-12'>
                        <CardHeader>
                            <CardTitle>{steps[activeStep - 1].title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {
                                <Form {...applicationForm}>
                                    <form onSubmit={applicationForm.handleSubmit(onSubmitApplication)}>
                                        <div className={`${activeStep === 1 ? "" : "hidden"}`}>
                                            <FormField
                                                control={applicationForm.control}
                                                name="where_did_you_hear_about_us"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Where did you hear about us?</FormLabel>
                                                        <FormControl>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        {
                                                                            hear_about_us_options.map(option => <SelectItem value={option}>{option}</SelectItem>)
                                                                        }
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="previously_worked_for_saraca"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Are you currently or have you previously worked for SARACA</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                defaultValue={field.value}
                                                                className="flex flex-col space-y-1"
                                                            >
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="yes" />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">
                                                                        Yes
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="no" />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">
                                                                        No
                                                                    </FormLabel>
                                                                </FormItem>

                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="country"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Country</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select country" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {countryOptions?.map(country => <SelectItem value={country.value}>{country.label}</SelectItem>)}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Name</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="address"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem>
                                                            <FormLabel>Address</FormLabel>
                                                            <FormControl>
                                                                <Input {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )
                                                }}
                                            >
                                            </FormField>
                                            <div className='flex gap-2 w-full'>
                                                <FormField
                                                    control={applicationForm.control}
                                                    name="country_code"

                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>
                                                                Country Code
                                                            </FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select code" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    {mobileCodes?.map(country => <SelectItem key={country.name} value={country.dial_code}>{country.dial_code} {country.flag}</SelectItem>)}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                ></FormField>
                                                <FormField
                                                    control={applicationForm.control}
                                                    name="mobile_no"
                                                    render={({ field }) => (
                                                        <FormItem className='flex-[3]'>
                                                            <FormLabel>Mobile No.</FormLabel>
                                                            <FormControl>
                                                                <Input {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                ></FormField>
                                            </div>

                                        </div>

                                        <div className={`${activeStep === 2 ? "" : "hidden"}`}>
                                            <FormField
                                                control={applicationForm.control}
                                                name="school_university"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>School or University</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            ></FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="degree"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Degree</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>

                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="field_of_study"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Field of Study</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="cgpa"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Overall CGPA</FormLabel>
                                                        <FormControl>
                                                            <Input type="number" {...field} {...applicationForm.register("cgpa", { valueAsNumber: true })} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="skills"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Skills</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                        <FormDescription>Please enter comma separated skills</FormDescription>
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>

                                            <FormField
                                                control={applicationForm.control}
                                                name="resume"
                                                render={({ field: { onChange }, ...rest }) => {
                                                    return (
                                                        <FormItem>
                                                            <FormLabel>Resume</FormLabel>
                                                            <FormControl>
                                                                <Input type="file" accept="application/pdf" {...rest} onChange={e => {
                                                                    onChange(e)
                                                                    setResumeFile(e?.target?.files?.[0])
                                                                }} />
                                                            </FormControl>
                                                            <FormMessage />
                                                            {!resumeFile ? (<FormDescription>{applicationForm.getValues("resume")?.split("__")[1]||""}</FormDescription>) : ""}
                                                        </FormItem>
                                                    )
                                                }}
                                            >
                                            </FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="linkedin_account"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>LinkedIn Account</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                        </div>



                                        <div className={`${activeStep === 3 ? "" : "hidden"}`}>
                                            <FormField
                                                control={applicationForm.control}
                                                name="relevant_experience"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Relevant Experience</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} {...applicationForm.register("relevant_experience", { valueAsNumber: true })} type='number' />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={applicationForm.control}
                                                name="relevant_experience_role_description"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Role Description</FormLabel>
                                                        <FormControl>
                                                            <Textarea {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={applicationForm.control}
                                                name="total_experience"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Total Experience</FormLabel>
                                                        <FormControl>
                                                            <Input {...field} {...applicationForm.register("total_experience", { valueAsNumber: true })} type='number' />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={applicationForm.control}
                                                name="total_experience_role_description"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Role Description</FormLabel>
                                                        <FormControl>
                                                            <Textarea {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>


                                        <div className={`${activeStep === 4 ? "" : "hidden"}`}>
                                            <FormField
                                                control={applicationForm.control}
                                                name="agreement_for_contact"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Do you agree with SARACA contacting you for future job positions? If yes, we will retain your personal data for a period of year.</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                defaultValue={field.value}
                                                                className="flex flex-col space-y-1"
                                                            >
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="yes" />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">
                                                                        Yes
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="no" />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal">
                                                                        No
                                                                    </FormLabel>
                                                                </FormItem>

                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                            <FormField
                                                control={applicationForm.control}
                                                name="gender"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Gender</FormLabel>

                                                        <FormControl>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        {
                                                                            genderOptions.map(option => <SelectItem value={option}>{option}</SelectItem>)
                                                                        }
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormMessage />


                                                    </FormItem>
                                                )}
                                            >
                                            </FormField>
                                        </div>
                                        <div className={`${activeStep === 5 ? "" : "hidden"}`}>
                                            <FormField
                                                control={applicationForm.control}
                                                name="terms_conditions"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md mt-4">
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                            />
                                                        </FormControl>
                                                        <div className="space-y-1 leading-none">
                                                            <FormLabel>
                                                                Agree to the Terms and Conditions
                                                            </FormLabel>

                                                        </div>
                                                    </FormItem>
                                                )}
                                            >

                                            </FormField>
                                        </div>


                                        <CardFooter className='mt-12 flex justify-end'>
                                            {activeStep > 1 && <Button variant="secondary" className='bg-white text-black' onClick={() => {
                                                console.log(activeStep)
                                                goToPrevious()
                                            }}>Previous</Button>}
                                            {activeStep < steps.length && <Button onClick={handleNext}>Next</Button>}
                                            {activeStep === 5 && <Button type='submit'>Submit</Button>}
                                        </CardFooter>
                                    </form>
                                </Form>
                            }
                        </CardContent>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                </Box>

            </ChakraProvider>
        </div>) : ""}</>

    )
}

export default ApplicationForm
