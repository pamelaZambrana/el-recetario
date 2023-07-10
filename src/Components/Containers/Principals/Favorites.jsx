import React, { useContext } from 'react';
import RecipesGrill from '../Secondary/recipesDashboar/recipesGrill';
import { GlobalContext } from '../../../Contexts/globalContext';

import { useSearchParams } from 'react-router-dom';
import { filteringList } from '../../../functions/filteringList';



const Favorites = () => {
    /* ---- Using blobal state ---- */
    const [globalState] = useContext(GlobalContext);
    const favorites = globalState.favoriteUserRecipesList;

    /* ----Usins searchParams---- */
    const [searchParams] = useSearchParams();
    const typeFilter2 = searchParams.get("type2");
    const searcher2 = typeFilter2;
    let filteredList = [];
    if(searcher2){
        filteredList = filteringList([...favorites], searcher2);
    }else{
        filteredList = [...favorites];
    };
 /*    useEffect(){

    }; */
    console.log(filteredList)
    return (
        <section className='recipes-dashboard'>
            <h1>Mis recetas favoritas</h1>
            <RecipesGrill
                filteredList={ filteredList }
                loading={false}
            ></RecipesGrill>
        </section>
    );
}

export default Favorites;
