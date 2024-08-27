import { getApi } from "@/api/adminApi"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Bars } from "react-loader-spinner"
import { ShieldCheck, ShieldOff } from "lucide-react"

const VerifyEmail = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        return () => {
            getApi(`api/career/verify_email/${id}`)
                .then((res) => {
                    if (res instanceof Error) setError(res)
                })
                .catch((e) => {
                    setError(e)
                })
                .finally(() => setLoading(false))
        }

    }, [])
    return (
        <div className="container flex justify-center items-center min-h-screen">
            {
                loading ? (<Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperClass=""
                    visible={true}
                />) : (error ? (<div className="lg:text-7xl text-5xl flex items-center gap-4 text-red-600 justify-center">
                    <ShieldOff size="4.5rem"/> Error Verifying
                </div>) : (<div className="lg:text-7xl text-5xl flex gap-4 text-green-600 justify-center">
                    <ShieldCheck size="4.5rem" /> Verified
                </div>))
            }
        </div>
    )
}

export default VerifyEmail
