import axios from "axios";

export function allRecipesRequest(){
    return(
        axios.get(
            "https://api-el-recetario.vercel.app/api/recipes",
        )
    )
}