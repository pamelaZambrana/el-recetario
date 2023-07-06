import React, { useContext, useEffect } from 'react';
import ScrollContainer from '../../Terciary/ScrollContainer';
import { GlobalContext } from '../../../../Contexts/globalContext';
import { getRecommendedRecipes } from '../../../../Requests/recipesRequests';
import { TYPES } from '../../../../Contexts/globalReducer';

const Recomendations = () => {
     const [ globalState, dispatch ] = useContext(GlobalContext);
     const recommendedList = globalState.recommendedList;

     /* ---- recomendations list ----*/
    useEffect(() => {
        async function recommended(){
            await getRecommendedRecipes()
                .then(response => {
                    //console.log(response);
                    const reco = response.data.body;
                    dispatch({
                        type: TYPES.SET_RECOMMENDED_LIST,
                        payload : reco
                    })
                    
                })
                .catch(error => console.log(error));
        };
        if(recommendedList.length < 1){
            recommended();
        };
    }, [dispatch, recommendedList]);

    return (
        <section className='subsection-container'>
            <h2 className='subsection-title'>Recomendaciones</h2>
           <ScrollContainer
                list={ recommendedList }
           ></ScrollContainer>
        </section>
    );
}

export default Recomendations;
