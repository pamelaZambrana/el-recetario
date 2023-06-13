import React, { useContext } from 'react';
import ScrollContainer from '../../Terciary/ScrollContainer';
import { GlobalContext } from '../../../../Contexts/globalContext';

const Recomendations = () => {
     const [ globalState, dispatch ] = useContext(GlobalContext);
     const recipes = globalState.recipes;

     /* ---- recomendations list ----*/
     const recomendationList = [...recipes].filter(recipe => recipe.recommended === true);


    return (
        <section className='subsection-container'>
            <h2 className='subsection-title'>Recomendaciones</h2>
           <ScrollContainer
                list={ recomendationList }
           ></ScrollContainer>
        </section>
    );
}

export default Recomendations;
