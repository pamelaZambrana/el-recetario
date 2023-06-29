import React, { useContext, useEffect, useState } from 'react';
import RecipesGrill from '../Secondary/recipesDashboar/recipesGrill';

import { title } from '../../../functions/setTitles';
import { useSearchParams } from 'react-router-dom';
import { allRecipesRequest, getRecipeByCatRequest } from '../../../Requests/recipesRequests';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';
import { filteringList } from '../../../functions/filteringList';
import { bestScores } from '../../../functions/bestScores';


const RecipeDashboard = () => {
     /* ---- using local state---- */
     const [loading, setLoading] = useState(true);
     /* ---- Using the global context---- */
     const [ globalState, dispatch] = useContext(GlobalContext);
     const recipes = globalState.recipes;
     const allRecipes = globalState.allRecipes;
     const recipesByCat = globalState.searchedRecipes;
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
                    console.log(response);
                    dispatch({type: TYPES.SET_RECIPES_BY_CAT, payload : response.data.body});
                    setLoading(false);
                })
                .catch(error => console.log(error))
        };
        if (searcher === "todas"){
            getAllRecipes();
        }else if(searcher !== "todas"){
            if(searcher !== "mejores"){
                console.log(searcher);
                getRecipesByCat(searcher);
            }else{
                dispatch({type: TYPES.SET_RECIPES_BY_CAT, payload : recipes});
                setLoading(false);
            };

        };
    }, [dispatch, searcher, recipes]);

    /* ----- filteringList---- */
    if(searcher !== "todas" ){
        if(searcher !== "mejores"){
            filteredList  = [...recipesByCat] ;
            if(searcher2){
                filteredList  = filteringList([...recipesByCat], searcher2);
            }else;
        }else{
            bestScores(recipesByCat, filteredList);
            console.log(filteredList);
            if(searcher2){
                filteredList  = filteringList([...recipesByCat], searcher2);
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

