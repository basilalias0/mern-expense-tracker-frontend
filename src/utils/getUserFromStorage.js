export const getUserFromStorage=()=>{
    const token = JSON.parse(localStorage.getItem("userData")) || null
    console.log(token?.token);
    return token?.token
}