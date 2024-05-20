import { useSelector } from "react-redux";
import { BASE_URL } from "../../utils/url";
import axios from 'axios'
import { getUserFromStorage } from "../../utils/getUserFromStorage";
const token = getUserFromStorage()
axios.defaults.withCredentials = true;



 export const loginAPI = async({username,password})=>{
    const response = await axios.post(`${BASE_URL}/user/signin`,{
        username,
        password
    },
    )
    return response.data
}
export const registerAPI = async({name,email,username,password})=>{
    const response = await axios.post(`${BASE_URL}/user/register`,{
        username,
        password,
        name,
        email
    })
    return response.data
}
export const updateNameAPI = async({name})=>{
    const response = await axios.put(`${BASE_URL}/user/updatename`,{
        name,
    },
    {
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data
}
export const updateUsernameAPI = async({username})=>{
    const response = await axios.put(`${BASE_URL}/user//updateusername`,{
        username
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data

}
export const updatePasswordAPI = async({newPassword,oldPassword})=>{
    console.log(token);
    const response = await axios.put(`${BASE_URL}/user/updatepassword`,{
        newPassword,
        oldPassword
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data
}





