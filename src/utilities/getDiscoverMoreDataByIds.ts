import { postApi } from "@/api/adminApi"

export default async (array:string[]) => {
const obj = {ids:array}

const formData = {object:JSON.stringify(obj)}
try {
    const res = await postApi("api/get_discover_more_by_ids", formData)
    return res   
} catch (error) {
    console.log(error)
}
}