import React, { useContext, useEffect, useState } from 'react';
import RecipesGrill from '../Secondary/recipesDashboar/recipesGrill';
import { GlobalContext } from '../../../Contexts/globalContext';

import { useSearchParams } from 'react-router-dom';
import { filteringList } from '../../../functions/filteringList';
import { userFavoritesRecipesRequest } from '../../../Requests/recipesRequests';
import { TYPES } from '../../../Contexts/globalReducer';



const Favorites = () => {
    /* ---- Using global state ---- */
    const [globalState, dispatch] = useContext(GlobalContext);
    const favorites = globalState.favoriteUserRecipesList;
    /* ---- use local state ---- */
    const [loading, setLoading] = useState(false);

    /* ----Usins searchParams---- */
    const [searchParams] = useSearchParams();
    const typeFilter2 = searchParams.get("type2");
    const searcher2 = typeFilter2;
    let filteredList = [];
    if(searcher2){
        filteredList = filteringList([...favorites], searcher2);
    }else{
        filteredList = [...favorites];
    };
    useEffect(() => {
        setLoading(true);
        async function getUserFavoritesRecipes(){
            await  userFavoritesRecipesRequest()
                .then(response => {
                    console.log(response.data.body)
                    dispatch({
                        type : TYPES.SET_FAVORITES_USER_RECIPES_LITS,
                        payload : response.data.body
                    })
                    setLoading(false);
                })
                .catch(error => console.log(error))           
        };
        getUserFavoritesRecipes()
    }, [dispatch]);

    return (
        <>
            {
                loading ?
                <div className='d-flex justify-content-center gap-3'>
                    <div className="spinner-one spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-two spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-three spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                 </div>
                 :
                <section className='recipes-dashboard'>
                    <h1>Mis recetas favoritas</h1>
                    <RecipesGrill
                        filteredList={ filteredList }
                        loading={false}
                    ></RecipesGrill>
                </section>
            }
        </>
    );
}

export default Favorites;
