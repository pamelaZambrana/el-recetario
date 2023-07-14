import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Contexts/globalContext';
import { TYPES } from '../../Contexts/globalReducer.js';
import { allRecipesRequest } from '../../Requests/recipesRequests.js';
import { useNavigate } from 'react-router';
const SearchBox = () => {
    /* ----navigat---- */
    const navigate = useNavigate();
    /* ---- using global state ---- */
    const [globalState, dispatch] = useContext(GlobalContext);
    const allRecipes = globalState.allRecipes;
    /* ---- using local state ----- */
    const [searchedRecipe, setSearchedRecipe] = useState("");
    const [recipes, setRecipes] = useState([]);

    /* ----searching ----- */
    function search(event){
        console.log(event.target.value)
        setSearchedRecipe(event.target.value);
    };
    useEffect(() => {
        if(searchedRecipe.length > 0){
            let searchList=allRecipes.filter((recipes)=>{
                const nameValue=recipes.name.toLowerCase();
                const searchValue=searchedRecipe.toLowerCase();
                return (nameValue.includes(searchValue));
            });
            setRecipes(searchList);
            console.log(searchList)
            console.log(allRecipes)
        };
    }, [allRecipes,searchedRecipe]);

    useEffect(() => {
         /* ---- requesting all recipes ---- */
        async function getAllRecipes(){
            await allRecipesRequest()
                .then(response => {
                    console.log(response);
                    dispatch({type: TYPES.SET_ALL_RECIPES, payload : response.data.body});
                })
                .catch(error => console.log(error))
        };
        if(allRecipes.length < 1){
            getAllRecipes()
        }
    }, [allRecipes, dispatch]);
    function goTo(){
        if (recipes.length > 1){
            dispatch({
                type: TYPES.SET_RECIPES_BY_CAT,
                payload: recipes
            })
            navigate(`/recipes?type=names`)
        }else{
            navigate(`/recipes/recipe/${recipes[0]._id}`)
        }
    }
    return (
        <div className='search-box-container'>
            <i 
                className="bi bi-search"
                onClick={ goTo}
            ></i>
            <input 
                id='search-box'
                name='search-box'
                list='searchRecipes'
                className='form-select'
                onChange={search}
                onMouse
            ></input>
            <datalist id='searchRecipes'>
            {
                recipes?.map((recipe) => (
                    <option 
                        key={recipe._id} 
                        value={recipe.name}
                        >
                        {recipe.name}
                    </option>
                ))
            }
            </datalist>
        </div>
    );
}

export default SearchBox;
