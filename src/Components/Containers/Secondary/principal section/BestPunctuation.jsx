import React, { useContext } from 'react';
import ScrollContainer from '../../Terciary/ScrollContainer';
import { GlobalContext } from '../../../../Contexts/globalContext';
import { bestScores } from '../../../../functions/bestScores';

const BestPunctuation = () => {
   const [globalState] = useContext(GlobalContext);
    const { recipes } = globalState;

    let bestPunctuationList = [];

    /* ---- best punctuation list ----*/
    bestScores(recipes, bestPunctuationList);

    return (
        <section className='subsection-container'>
            <h2 className='subsection-title'>Las 10 recetas con mejores puntuaciones</h2>
           <ScrollContainer
                list={ bestPunctuationList }
           ></ScrollContainer>
        </section>
    );
};

export default BestPunctuation;
