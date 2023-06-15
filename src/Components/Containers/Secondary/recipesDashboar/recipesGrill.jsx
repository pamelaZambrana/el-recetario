import React, { useContext } from 'react';
import { GlobalContext } from '../../../../Contexts/globalContext';
import RecipeCard from '../../../Elements/RecipeCard';
import { useParams } from 'react-router';

const RecipesGrill = () => {
    const [ globalState ] = useContext(GlobalContext);
    const recipes = globalState.recipes;
    const params = useParams();

    const searcher = params.filter;
    const searcher2 = params.filter2;
    
    let filteredList  = [...recipes].filter( recipe => {
        return recipe.category.some( cat => cat === searcher );
    })
    if(searcher2){
        filteredList  = [...filteredList].filter( recipe => {
            return recipe.category.some( cat => cat === searcher2 );
        })
    };



    return (
        <section className='grill-recipes-container'>
            {
                filteredList?
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
                <h1>No hay recetas en esta categoría...</h1>
            }
        </section>
    );
}

export default RecipesGrill;
