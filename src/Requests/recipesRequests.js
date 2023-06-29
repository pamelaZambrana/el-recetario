import axios from "axios";

export function allRecipesRequest(){
    return(
        axios.get(
            "https://api-el-recetario.vercel.app/api/recipes",
        )
    )
};
export function getRecipeByCatRequest(comida){
    return(
        axios.get(
            `https://api-el-recetario.vercel.app/api/recipes?comida=${comida}`,
        )
    )
}