    /* ----using localStorage---- */
    let user = "";
    let loginState = false;
    if(localStorage.length > 0){
        user = JSON.parse(localStorage.getItem("user"));
        loginState = true;

    };
    console.log(user.favorites)
export const initialState ={
    user : {
        ...user
    },
    loginState: loginState,
    openMenu: false,
    secondOpenMenu: false,
    titles : "",
    recipeDetail :"",
    allRecipes : [],
    searchedRecipes : [],
    favoriteCommunityRecipesList : [],
    favoriteUserRecipesList : [],
    recommendedList : [],
};
/* const recipes = initialState.recipes;
const favor = initialState.user.favorites;
const favoriteRecipes = recipes.filter(recipe => {
    let confirm = favor.some(favoriteID => ( favoriteID === recipe._id));
    return confirm
});
console.log(favoriteRecipes) */