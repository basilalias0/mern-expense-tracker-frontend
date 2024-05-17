import { BASE_URL } from "../../utils/url";
import axios from 'axios'



 export const loginAPI = async({username,password})=>{
    const response = await axios.post(`${BASE_URL}/user/signIn`,{
        username,
        password
    })
    return response.data
}




