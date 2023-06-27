import React, { useContext, useEffect, useState } from 'react';
import RecipesGrill from '../Secondary/recipesDashboar/recipesGrill';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';
import { useSearchParams } from 'react-router-dom';
import { filteringList } from '../../../functions/filteringList';


const Favorites = () => {
    /* ---- using local state---- */
    const [loading, setLoading] = useState(true);
    /* ---- Using blobal state ---- */
    const [globalState, dispatch] = useContext(GlobalContext);
    const favorites = globalState.user.favorites;
    const recipes = globalState.recipes;
    const favoriteRecipes = globalState.favoriteRecipes;
    /* ----Usins searchParams---- */
    const [searchParams] = useSearchParams();
    const typeFilter2 = searchParams.get("type2");
    const searcher2 = typeFilter2;
    let filteredList = [];
    if(searcher2){
        filteredList = filteringList([...favoriteRecipes], searcher2);
    }else{
        filteredList = [...favoriteRecipes];
    };

    useEffect(() => {
        const favoriteRecipes = recipes.filter(recipe => {
            let confirm = favorites.some(favoriteID => ( favoriteID === recipe._id));
            return confirm
        });
        dispatch({
            type : TYPES.SET_FAVORITES,
            payload : [...favoriteRecipes],
        })
        setLoading(false);
    }, [dispatch, recipes, favorites]);

    return (
        <section className='recipes-dashboard'>
            <h1>Mis recetas favoritas</h1>
            <RecipesGrill
                filteredList={ filteredList }
                loading={ loading }
            ></RecipesGrill>
        </section>
    );
}

export default Favorites;
