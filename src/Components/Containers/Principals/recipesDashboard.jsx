import React, { useContext } from 'react';
import { GlobalContext } from '../../../Contexts/globalContext';
import RecipesGrill from '../Secondary/recipesDashboar/recipesGrill';

const RecipeDashboard = () => {
    const [ globalState, dispatch ] = useContext(GlobalContext);
    const title = globalState.titles;
    return (
        <div className='recipes-dashboard'>
            <h1>{ title }</h1>
            <RecipesGrill></RecipesGrill>
        </div>
    );
}

export default RecipeDashboard;

