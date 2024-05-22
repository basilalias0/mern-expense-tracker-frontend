import { getUserFromStorage } from "../../utils/getUserFromStorage";
import { BASE_URL } from "../../utils/url";
import axios from 'axios'

axios.defaults.withCredentials = true;



export const listTransactionAPI = async()=>{
    const token = getUserFromStorage()
    const response = await axios.get(`${BASE_URL}/transaction`,{
        headers:{

            Authorization:`Bearer ${token}`
        }
    })

    return response.data
}

export const createTransactionAPI = async({category,transactionType,amount,date,description})=>{
    const token = getUserFromStorage()
    const response = await axios.post(`${BASE_URL}/transaction/create`,{
        category,
        type:transactionType,
        amount,
        date,
        description
    },{
        headers:{

            Authorization:`Bearer ${token}`
        }
    })
    return response.data
}


export const listCategoryAPI = async()=>{
    const token = getUserFromStorage()
    const response = await axios.get(`${BASE_URL}/category`,{
        headers:{

            Authorization:`Bearer ${token}`
        }
    })

    return response.data
}

export const deleteTransactionAPI = async(id)=>{
    const token = getUserFromStorage()
    const response = await axios.delete(`${BASE_URL}/transaction/delete/${id}`,{
        headers:{

            Authorization:`Bearer ${token}`
        } 
    })
    return response.data
} 

export const deleteCategoryAPI = async(id)=>{
    const token = getUserFromStorage()
    const response = await axios.delete(`${BASE_URL}/category/delete/${id}`,{
        headers:{

            Authorization:`Bearer ${token}`
        } 
    })
    return response.data
} 