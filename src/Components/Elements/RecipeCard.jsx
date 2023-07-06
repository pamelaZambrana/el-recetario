import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/globalContext';
import { Link } from 'react-router-dom';
import { TYPES } from '../../Contexts/globalReducer';


const RecipeCard = ({ recipe, index}) => {
    /* ----using global context---- */
    const [globalState, dispatch ] = useContext(GlobalContext);
    const user = globalState.user;
    const loginState = globalState.loginState;
    //console.log(searchParams.toString())
    /* ---- heart icon ---- */
    function fullHeart(favoriteArray, recipeId){
        const favorite = favoriteArray.find(id => id === recipeId);
        if(favorite ){
            return(
                <i className="bi bi-heart-fill"></i>
            )
        }else{
            return(
                <i className = { `bi bi-heart`}></i>
            )
        };
    };
    //console.log(recipe);
    return (
        <div key={ index } className='recipe-card'>
            <img src={ recipe.image } alt={ recipe.description } />
            <div  className='recipe-card-description'>
                <Link 
                    to={ `/recipes/recipe/${recipe.name}` } 
                    className='recipe-card-description-title'
                    onClick={() => dispatch({ type : TYPES.SHOW_RECIPE, payload : recipe.id})}
                >
                    <h4> { recipe.name } </h4>
                </Link>
                <div className='ratings'>
                    {
                        loginState
                        ?                    
                        fullHeart(user.favorites, recipe.id)                                       
                        :
                        <i className = "bi bi-heart"></i>
                    } 
                    <h4 className='punctuation'> { `${recipe.favorite}` } </h4>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
