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
export function getFavoriteRecipes(){
    return(
        axios.get(
            `https://api-el-recetario.vercel.app/api/recipes/favorites`,
        )
    )
};

/* ----- recommended recipes ----- */
export function getRecommendedRecipes(){
    return(
        axios.get(
            `https://api-el-recetario.vercel.app/api/recipes/recommended`,
        )
    )
};

/* ----like the recipe---- */
export function putLike(id){
    const xtk = JSON.parse(localStorage.getItem("user")).token;
    //console.log(JSON.parse(localStorage.getItem("user")).token)
    const config = {
        method: 'put',
        url: `https://api-el-recetario.vercel.app/api/recipes?id=${id}&&action=like`,
        headers:  {'xtoken':xtk}
    }
    return axios(config);
};
/* ----dislike the recipe---- */
export function putDislike(id){
    const xtk = JSON.parse(localStorage.getItem("user")).token;
    const config = {
        method: 'put',
        url: `https://api-el-recetario.vercel.app/api/recipes?id=${id}&&action=dislike`,
        headers:  {'xtoken':xtk}
    }
    return axios(config);
};
/* ---- new recipe---- */
export function newRecipeRequest(values){
    const xtk = JSON.parse(localStorage.getItem("user")).token;
    return(
        axios.get(
            `https://api-el-recetario.vercel.app/api/recipes`,
            values,
            {headers: { "xtoken" : xtk }}
        )
    )
};
/* ---- recipe detail ----- */
export function recipeDetailRequest(id){
    console.log(id);
    const config = {
        method: 'get',
        url: `https://api-el-recetario.vercel.app/api/recipes`,
        data:  {'_id':id}
    };
    return axios(config);
};

/* ---- user favorites ----- */
export function userFavoritesRequest(){
    const xtk = JSON.parse(localStorage.getItem("user")).token;
    return(
        axios.get(
            "https://api-el-recetario.vercel.app/api/users/favorites",
            {headers: { "xtoken" : xtk }}
        )
    )
};

