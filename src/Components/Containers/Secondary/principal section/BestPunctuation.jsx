import React, { useContext, useEffect } from 'react';
import ScrollContainer from '../../Terciary/ScrollContainer';
import { GlobalContext } from '../../../../Contexts/globalContext';

const BestPunctuation = () => {
   const [globalState, dispatch] = useContext(GlobalContext);
    const { recipes } = globalState;

    let bestPunctuationList = [];
    /* ---- best punctuation list ----*/
    const orderedList = [...recipes].sort((a,b) => {
        return b.punctuation - a.punctuation;
    });
    for( let i=0; i<10 ;i++){
        bestPunctuationList.push(orderedList[i]);
    };  
    

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
