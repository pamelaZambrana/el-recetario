import React, { useContext, useEffect } from 'react';
import Hero from '../Secondary/principal section/Hero';
import Filters from '../Secondary/principal section/Filters';
import BestPunctuation from '../Secondary/principal section/BestPunctuation';
import Recomendations from '../Secondary/principal section/Recomendations';
import { userFavoritesRequest } from '../../../Requests/recipesRequests';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';
const PrincipalSection = () => {
    const [ globalState, dispatch ] = useContext(GlobalContext);
    const login = globalState.loginState;
    
    useEffect(() => {
        if(login){
            async function getFavoriteList(){
                await userFavoritesRequest()
                    .then(response => {
                        const favorites = response.data.body.favorites
                        dispatch({
                            type : TYPES.SET_FAVORITES_USER_LIST,
                            payload : [...favorites],
                        })
                    })
                    .catch(error => console.log(error));
            }; 
            getFavoriteList()
        }
    }, [dispatch, login] );

    return (
        <div className='home-principal-section'>
            <Hero></Hero>
            <Filters></Filters>
            <BestPunctuation></BestPunctuation>
            <Recomendations></Recomendations>
        </div>
    );
}

export default PrincipalSection;

