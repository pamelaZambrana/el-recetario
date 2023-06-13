import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../../Contexts/globalContext';
import RecipeCard from '../../../Elements/RecipeCard';

const RecipesGrill = () => {
    const [ globalState, dispatch ] = useContext(GlobalContext);
    const recipes = globalState.recipes;
    const searcher = globalState.titles;

    const filteredList = [...recipes].filter( recipe => {
            return recipe.category.some( cat => cat === searcher);
        }
         );


    return (
        <section className='grill-recipes-container'>
            {
                filteredList.map(recipe =>(
                    <div className='grill-recipe-content' key={recipe.id}>
                        <RecipeCard 
                            recipe = { recipe }
                            index={ recipe.id }
                        ></RecipeCard>
                    </div>
                )
                )
            }
        </section>
    );
}

export default RecipesGrill;
