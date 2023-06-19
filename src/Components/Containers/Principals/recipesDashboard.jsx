import React from 'react';
import RecipesGrill from '../Secondary/recipesDashboar/recipesGrill';

import { title } from '../../../functions/setTitles';
import { useSearchParams } from 'react-router-dom';

const RecipeDashboard = () => {
    const [searchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const typeFilter2 = searchParams.get("type2");

    return (
        <div className='recipes-dashboard'>
            <h1>{ title([typeFilter, typeFilter2]) }</h1>
            <RecipesGrill></RecipesGrill>
        </div>
    );
}

export default RecipeDashboard;

