import axios from "axios";

export function loginRequest(values){
    return(
        axios.post("https://api-el-recetario.vercel.app/api/auth", values)
    )
};
export function newUserRequest( values ){
    return(
        axios.post("https://api-el-recetario.vercel.app/api/users", values)
    )
};