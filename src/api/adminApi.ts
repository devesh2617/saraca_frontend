import { objectToFormData } from "@/utilities/objectToFormData"
import axios from "axios"
import { toast } from "sonner"
const extractError = (errorString:string) => {
    const errorMessageStartIndex = errorString.indexOf('Error: ');
const errorMessageEndIndex = errorString.indexOf('<br>');
const errorMessage = errorMessageStartIndex !== -1 && errorMessageEndIndex !== -1 ?
    errorString.substring(errorMessageStartIndex, errorMessageEndIndex).trim() :
    'Error message not found';

return errorMessage;
}
export const getApi = async (url: string) => {
    try {
        const res: any = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/${url}`, {headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }})
        return res;
    } catch (error: any) {
        
        if(error?.response?.data?.message) toast.error(error?.response?.data?.message)
        else if(error?.response?.data) toast.error(extractError(error?.response?.data))
        else toast.error(error?.message)
    return error
    }
}

export const postApi = async (url: string, data: any) => {
    try {
        const formData: FormData = objectToFormData(data)
        
        const res: any = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/${url}`, formData, {headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }})
        
        return res;
    } catch (error: any) {
        
        if(error?.response?.data?.message) toast.error(error?.response?.data?.message)
        else if(error?.response?.data) toast.error(extractError(error?.response?.data))
        else toast.error(error?.message)
    return error
    }
}