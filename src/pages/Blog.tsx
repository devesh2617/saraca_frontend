import { getApi } from '@/api/adminApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Medical = () => {
    const {id} = useParams()
    const [blogData, setBlogData] = useState()
    useEffect(()=>{
    getApi(`api/get_blog/${id}`).then((res:any)=>{
        setBlogData(res?.data?.blog)
    }).catch(e=>console.log(e))
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
            <div aria-label='content-section' dangerouslySetInnerHTML={{__html:blogData?.content}} className='container mx-auto py-24 text-2xl'>
               
               
            </div>


        </div>
    )
}

export default Medical