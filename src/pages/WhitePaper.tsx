import { getApi, postApi } from '@/api/adminApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';


const WhitePaper = () => {
    const schema = z.object({
        name: z.string().refine((val)=>val,{
            message: 'Name is required'
        }),
        email: z.string().email({ message: 'Email is not valid' }),
        organisationName: z.string(),
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
    const onSubmit = async (data) => {
    try {
        const res:any = await postApi(`api/send_white_paper/${id}`, data)
        if(res.data.message) toast.success(res?.data?.message)
    } catch (error) {
        console.log(error)
    }
    }
    const { id } = useParams()
    const [blogData, setBlogData] = useState()
    useEffect(() => {
        getApi(`api/get_white_paper/${id}`).then((res: any) => {
            setBlogData(res?.data?.whitePaper)
        }).catch(e => console.log(e))
    }, [])
    return (
        <div>
            <div aria-label='landing-image' className="h-[100vh] w-full relative">
                <div
                    aria-label="overlay-container"
                    className="bg-gradient-to-r from-black to-transparent absolute z-[1] w-full h-[100vh]"
                >
                    <div className="md:w-2/3 h-full flex justify-start items-center p-24">
                        <div aria-label="content" className="md:text-left">
                            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold text-left">
                                {blogData?.title}
                            </h1>
                        </div>
                    </div>
                </div>

                <img
                    src={import.meta.env.VITE_REACT_APP_API_URL+blogData?.img}
                    className="h-full w-full object-cover">
                </img>

            </div>
            <div aria-label='content-section' className='flex flex-col-reverse gap-4 lg:flex-row my-4 container'>
                <div dangerouslySetInnerHTML={{ __html: blogData?.content }} className='mx-auto text-2xl flex-1'>
                </div>
                <div className='w-[30rem] mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-200 rounded-lg py-8 px-4 flex flex-col gap-8">
                        <Input {...register('name')} placeholder="Name" className='h-16'/>
                        {errors.name && <p className=' text-sm text-red-500'>{errors?.name?.message}</p>}

                        <Input {...register('email')} placeholder="Email" className='h-16'/>
                        {errors.email && <p className='text-sm text-red-500'>{errors?.email?.message}</p>}

                        <Input {...register('organisationName')} placeholder="Organisation Name" className='h-16'/>
                        {errors.organisationName && <p className='text-sm text-red-500'>{errors?.organisationName?.message}</p>}

                        <Button type="submit" className='h-16'>
                            Download your White Paper
                        </Button>
                    </form>
                </div>

            </div>



        </div>
    )
}

export default WhitePaper