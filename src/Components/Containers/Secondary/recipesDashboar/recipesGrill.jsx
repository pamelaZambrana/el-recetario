import React, { useContext } from 'react';
import { GlobalContext } from '../../../../Contexts/globalContext';
import RecipeCard from '../../../Elements/RecipeCard';
import { useParams } from 'react-router';

const RecipesGrill = () => {
    const [ globalState ] = useContext(GlobalContext);
    const recipes = globalState.recipes;
    const params = useParams();

    const searcher = params.filter;

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
