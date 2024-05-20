import { BASE_URL } from "../../utils/url";
import axios from 'axios'
import { getUserFromStorage } from "../../utils/getUserFromStorage";
const token = getUserFromStorage()
axios.defaults.withCredentials = true;



export const listTransactionAPI = async()=>{
    const response = await axios.get(`${BASE_URL}/transaction`,{
        headers:{

            Authorization:`Bearer ${token}`
        }
    })

    return response.data
}

export const createTransactionAPI = async({category,transactionType,amount,date})=>{
    const response = await axios.post(`${BASE_URL}/transaction/create`,{
        category,
        type:transactionType,
        amount,
        date
    },{
        headers:{

            Authorization:`Bearer ${token}`
        }
    })
    return response.data
}
