import React from 'react';
import RecipesGrill from '../Secondary/recipesDashboar/recipesGrill';
import { useParams } from "react-router";

const RecipeDashboard = () => {
    const params = useParams();
   
    return (
        <div className='recipes-dashboard'>
            {
                params.filter2?
                <h1>{ `${params.filter}/ ${params.filter2}` }</h1>
                :
                <h1>{ `${params.filter}` }</h1>
            }
            <RecipesGrill></RecipesGrill>
        </div>
    );
}

export default RecipeDashboard;

