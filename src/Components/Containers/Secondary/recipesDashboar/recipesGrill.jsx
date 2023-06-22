import React, { useContext } from 'react';
import { GlobalContext } from '../../../../Contexts/globalContext';
import RecipeCard from '../../../Elements/RecipeCard';
import { bestScores } from '../../../../functions/bestScores';
import { useSearchParams } from 'react-router-dom';

const RecipesGrill = () => {
    /* ---- Using the global context---- */
    const [ globalState ] = useContext(GlobalContext);
    const recipes = globalState.recipes;

    /* ----Usins searchParams---- */
    const [searchParams] = useSearchParams();
    const typeFilter = searchParams.toString()?searchParams.get("type"):"todas";
    const typeFilter2 = searchParams.get("type2");

    const searcher = typeFilter;
    const searcher2 = typeFilter2;
    let filteredList =[];
    if(searcher !== "todas" ){
        if(searcher !== "mejores"){
            filteredList  = [...recipes].filter( recipe => {
                return recipe.category.some( cat => cat === searcher );
            })
            if(searcher2){
                filteredList  = [...filteredList].filter( recipe => {
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
        filteredList  = [...recipes].filter( recipe => {
            return recipe.category.some( cat => cat === searcher2 );
        })
    }else{
        filteredList = [...recipes];
    };



    return (
        <section className='grill-recipes-container'>
            {
                filteredList.length >0 ?
                filteredList?.map(recipe =>(
                    <div className='grill-recipe-content' key={recipe.id}>
                        <RecipeCard 
                            recipe = { recipe }
                            index={ recipe.id }
                        ></RecipeCard>
                    </div>
                )
                )
                :
                <h1 className='message'>No hay recetas en esta categoría...</h1>
            }
        </section>
    );
}

export default RecipesGrill;
