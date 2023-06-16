import React from 'react';
import RecipesGrill from '../Secondary/recipesDashboar/recipesGrill';
import { useParams } from "react-router";
import { title } from '../../../functions/setTitles';

const RecipeDashboard = () => {
    const params = useParams();
   
    return (
        <div className='recipes-dashboard'>
            <h1>{ title(params) }</h1>
            <RecipesGrill></RecipesGrill>
        </div>
    );
}

export default RecipeDashboard;

