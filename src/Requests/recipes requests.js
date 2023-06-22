import axios from "axios";

export function allRecipesRequest(){
    const user = JSON.parse(localStorage.getItem("user"));
    return(
        axios.get(
            "https://api-el-recetario.vercel.app/api/recipes",
            {headers : { "x-token" : user.token } }
        )
    )
};
export function getRecipeByCatRequest(comida){
    const user = JSON.parse(localStorage.getItem("user"));
    return(
        axios.get(
            `https://api-el-recetario.vercel.app/api/recipes?comida=${comida}`,
            {headers : { "x-token" : user.token } }
        )
    )
}