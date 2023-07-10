import React, { useContext, useEffect } from 'react';
import ScrollContainer from '../../Terciary/ScrollContainer';

import { GlobalContext } from '../../../../Contexts/globalContext';
import { TYPES } from '../../../../Contexts/globalReducer';
import { getFavoriteRecipes } from '../../../../Requests/recipesRequests';

const BestPunctuation = () => {
    /* -----using global state---- */
   const [globalState, dispatch] = useContext(GlobalContext);
   let bestPunctuationList = globalState.favoriteCommunityRecipesList;

   
   useEffect(() => {
        async function bestScores(){
            await getFavoriteRecipes()
                .then(response => {
                    //console.log(response.data.body);
                    let finalList = [];
                    const initialList = response.data.body;
                    if(initialList.length >= 10){
                        const orderedList = [...initialList].sort((a,b) => {
                            return b.punctuation - a.punctuation;
                        });
                        for( let i=0; i<10 ;i++){
                            finalList.push(orderedList[i]);
                        }; 
                    }else{
                        finalList = [...initialList];
                    };
                    dispatch({
                        type : TYPES.SET_FAVORITES_COMMUNITY_LIST,
                        payload : finalList
                    })
                })
                .catch(error => console.log(error));
        };

        bestScores();         
    }, [dispatch, bestPunctuationList]);

    return (
        <section className='subsection-container'>
            <h2 className='subsection-title'>Las recetas favoritas de la comunidad</h2>
           <ScrollContainer
                list={ bestPunctuationList }
           ></ScrollContainer>
        </section>
    );
};

export default BestPunctuation;
