
 export const getUserFromStorage = ()=>{
    const response = JSON.parse(localStorage.getItem("userData"))
    return response?.token
}