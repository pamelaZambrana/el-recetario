import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/globalContext';
import { Link, useNavigate } from 'react-router-dom';
import { TYPES } from '../../Contexts/globalReducer';
import { putDislike, putLike, recipeDetailRequest } from '../../Requests/recipesRequests';


const RecipeCard = ({ recipe, index}) => {
    /* ----using global context---- */
    const [globalState, dispatch ] = useContext(GlobalContext);
    const favoritesList = globalState.favoriteUserRecipesList;
    const loginState = globalState.loginState;

  
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

    /* ---- navigation-----*/
    const navigate = useNavigate()

    /* ---- get recipe Detail---- */
    async function getRecipeDetail(id){
        await recipeDetailRequest(id)
            .then(response => {
                console.log(response);
                const recipeDetail = response.data.body;
                dispatch({
                    type : TYPES.SET_RECIPE_DETAIL,
                    payload : recipeDetail
                })
            })
        .catch(error => console.log(error));
    }
    return (
        <div key={ index } className='recipe-card'>
            <img 
                src={ recipe.image } 
                alt={ recipe.description } />
            <div  className='recipe-card-description'>
                <Link 
                    to={ `/recipes/recipe/${recipe.name}` } 
                    className='recipe-card-description-title'
                    onClick={() => {
                        getRecipeDetail(recipe._id);
                        dispatch({ type : TYPES.SHOW_RECIPE, payload : recipe._id})
                        }}
                >
                    <h4> { recipe.name } </h4>
                </Link>
                <div className='ratings'>
                    {
                        loginState
                        ?                    
                        fillingHeart( recipe._id )                                       
                        :
                        <i 
                            className = "bi bi-heart"
                            onClick={() => navigate("/login")}
                        ></i>
                    } 
                    <h4 className='punctuation'> { `${recipe.favorite}` } </h4>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
