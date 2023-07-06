import axios from "axios";

/* ----- all recipes----- */
export function allRecipesRequest(){
    return(
        axios.get(
            "https://api-el-recetario.vercel.app/api/recipes",
        )
    )
};
/* ---- recipes by category----- */
export function getRecipeByCatRequest(comida){
    return(
        axios.get(
            `https://api-el-recetario.vercel.app/api/recipes?comida=${comida}`,
        )
    )
}
/* ----- favorite recipes----- */
export function getFavoriteRecipes(comida){
    return(
        axios.get(
            `https://api-el-recetario.vercel.app/api/recipes/favorites`,
        )
    )
}