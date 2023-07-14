import React, { useContext, useEffect, useState } from 'react';
import RecipesGrill from '../Secondary/recipesDashboar/recipesGrill';

import { title } from '../../../functions/setTitles';
import { useSearchParams } from 'react-router-dom';
import { allRecipesRequest, getFavoriteRecipes, getRecipeByCatRequest } from '../../../Requests/recipesRequests';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';
import { filteringList } from '../../../functions/filteringList';


const RecipeDashboard = () => {
     /* ---- using local state---- */
     const [loading, setLoading] = useState(true);
     /* ---- Using the global context---- */
     const [ globalState, dispatch] = useContext(GlobalContext);
     const allRecipes = globalState.allRecipes;
     const recipesByCat = globalState.searchedRecipes;
     const favoriteCommunityRecipes = globalState.favoriteCommunityRecipesList;
    /* ----Usins searchParams---- */
    const [searchParams] = useSearchParams();
    const typeFilter = searchParams.toString()?searchParams.get("type"):"todas";
    const typeFilter2 = searchParams.get("type2");
    
    const searcher = typeFilter;
    const searcher2 = typeFilter2;
    let filteredList =[];
    
    /* ---- using loaders ---- */
    
    useEffect(() => {
        async function getAllRecipes(){
            await allRecipesRequest()
                .then(response => {
                    console.log(response);
                    dispatch({type: TYPES.SET_ALL_RECIPES, payload : response.data.body});
                    setLoading(false);
                })
                .catch(error => console.log(error))
        };
        async function getRecipesByCat(comida){
            await getRecipeByCatRequest(comida)
                .then(response => {
                    console.log(response.data.body)
                    dispatch({type: TYPES.SET_RECIPES_BY_CAT, payload : response.data.body});
                    setLoading(false);
                })
                .catch(error => console.log(error))
        };
        if (searcher === "todas"){
            getAllRecipes();
        }else{
            if(searcher !== "mejores"){
                console.log(searcher);
                if(searcher !== "names"){
                    getRecipesByCat(searcher);
                }else{
                    setLoading(false);
                }
            }else{
                async function bestScores(){
                    await getFavoriteRecipes()
                        .then(response => {
                            const list = response.data.body;
                           
                            dispatch({
                                type : TYPES.SET_FAVORITES_COMMUNITY_LIST,
                                payload : list
                            })
                        })
                        .catch(error => console.log(error));
                };
                if(favoriteCommunityRecipes.length < 1 ){
                    bestScores();
                };
                setLoading(false);
            };

        };
    }, [dispatch, searcher, favoriteCommunityRecipes]);

    /* ----- filteringList---- */
    if(searcher !== "todas" ){
        if(searcher !== "mejores"){
            console.log(recipesByCat);
            filteredList  = [...recipesByCat] ;
            if(searcher2){
                filteredList  = filteringList([...recipesByCat], searcher2);
            };
        }else{
            console.log(favoriteCommunityRecipes);
            filteredList = [...favoriteCommunityRecipes];
            if(searcher2){
                filteredList  = filteringList([...favoriteCommunityRecipes], searcher2);
            };
        };
    }else if(searcher === "todas" && searcher2){
        filteredList  = filteringList([...allRecipes], searcher2);
    }else{
       filteredList = [...allRecipes];
    };

    return (
        <div className='recipes-dashboard'>
            <h1>{ title([typeFilter, typeFilter2]) }</h1>
            <RecipesGrill
                filteredList = { filteredList }
                loading = { loading }
            ></RecipesGrill>
        </div>
    );
}

export default RecipeDashboard;

