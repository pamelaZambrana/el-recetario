import React, { useContext } from 'react';
import { putDislike, putLike } from '../../Requests/recipesRequests';
import { GlobalContext } from '../../Contexts/globalContext';
import { TYPES } from '../../Contexts/globalReducer';

const Heart = ({ id, countLikes, setCountLikes }) => {
    /* ----using global context---- */
    const [globalState, dispatch ] = useContext(GlobalContext);
    const favoritesList = globalState.favoriteUserList;

    /* ---- put like or dislike ---- */
    async function like(id){
        await putLike(id)
        .then( response => {
                const newFavListAdd = [...favoritesList, id];
                dispatch({
                    type : TYPES.SET_FAVORITES_USER_LIST,
                    payload : newFavListAdd
                })
                console.log(response);
                setCountLikes(countLikes + 1 )
            })
            .catch(error => console.log(error));
    };
    async function dislike(id){
        await putDislike(id)
        .then( response => {
                const newFavListRemove = favoritesList.filter(recipeID => recipeID !== id);
                dispatch({
                    type : TYPES.SET_FAVORITES_USER_LIST,
                    payload : newFavListRemove
                })
                console.log(response)
                setCountLikes(countLikes - 1 )
            })
            .catch(error => console.log(error));
    };
    /* ---- heart icon ---- */
    function fillingHeart( recipeId ){
        const favorite = favoritesList.find(id => id === recipeId);
        if(favorite){
            return(
                <i 
                    className="bi bi-heart-fill"
                    onClick={() => dislike(recipeId)}
                ></i>
            )
        }else{
            return(
                <i 
                    className = { `bi bi-heart`}
                    onClick={() => like(recipeId)}
                ></i>
            )
        };
    };
    return (
        <>
            {
                fillingHeart(id)
            }
        </>
    );
}

export default Heart;
