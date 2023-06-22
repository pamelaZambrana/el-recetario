import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../../Contexts/globalContext';
import RecipeCard from '../../../Elements/RecipeCard';
import { bestScores } from '../../../../functions/bestScores';
import { useSearchParams } from 'react-router-dom';
import { allRecipesRequest, getRecipeByCatRequest } from '../../../../Requests/recipes requests';
import { TYPES } from '../../../../Contexts/globalReducer';

const RecipesGrill = () => {
    /* ---- using local state---- */
    const [login, setLogin] = useState(true);
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

    
    useEffect(() => {
        async function getAllRecipes(){
            await allRecipesRequest()
                .then(response => {
                    console.log(response);
                    dispatch({type: TYPES.SET_ALL_RECIPES, payload : response.data.body});
                    setLogin(false);
                })
                .catch(error => console.log(error))
        };
        async function getRecipesByCat(comida){
            await getRecipeByCatRequest(comida)
                .then(response => {
                    console.log(response);
                    dispatch({type: TYPES.SET_RECIPES_BY_CAT, payload : response.data.body});
                    setLogin(false);
                })
                .catch(error => console.log(error))
        };
        if (searcher === "todas"){
            getAllRecipes();
            
        }else if(searcher !== "todas"){
            if(searcher !== "mejores"){
                console.log(searcher);
                getRecipesByCat(searcher);
            };
            //filteredList = [ ...recipes]
        }
    }, [dispatch, searcher]);
    if(searcher !== "todas" ){
        if(searcher !== "mejores"){
            filteredList  = [...recipesByCat] ;
            if(searcher2){
                filteredList  = [...recipesByCat].filter( recipe => {
                    return recipe.category.some( cat => cat === searcher2 );
                })
            }else;
        }else{
            bestScores(recipes, filteredList);
            if(searcher2){
                filteredList  = [...filteredList].filter( recipe => {
                    return recipe.category.some( cat => cat === searcher2 );
                })
            };
        };
    }else if(searcher === "todas" && searcher2){
        filteredList  = [...allRecipes].filter( recipe => {
            return recipe.category.some( cat => cat === searcher2 );
        })
    }else{
       filteredList = [...allRecipes];

    };


    return (
        <>
            {
                 login?
                 <p>Cargando...</p>
                :
                <section className='grill-recipes-container'>
                    {
                        filteredList.length >0 ?
                        filteredList?.map(recipe =>(
                            <div className='grill-recipe-content' key={recipe._id}>
                                <RecipeCard 
                                    recipe = { recipe }
                                    index={ recipe._id }
                                ></RecipeCard>
                            </div>
                        )
                        )
                        :
                        <h1 className='message'>No hay recetas en esta categoría...</h1>
                    }
                </section>
            }
        </>
    );
}

export default RecipesGrill;
