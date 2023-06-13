import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/globalContext';
import { Link } from 'react-router-dom';


const RecipeCard = ({ recipe, index}) => {
    const [globalState, dispatch] = useContext(GlobalContext);
    const user = globalState.user;
    const loginState = user.loginState
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
    return (
        <div key={ index } className='recipe-card'>
            <img src={ recipe.image } alt={ recipe.description } />
            <Link to={ `/recipe/${recipe.id}`} className='recipe-card-description'>
                <h4> { recipe.name } </h4>
                <div className='ratings'>
                    <h4 className='punctuation'> { `${recipe.punctuation}/10` } </h4>
                    {
                        loginState
                        ?                    
                        fullHeart(user.favorites, recipe.id)                                       
                        :
                        <i className = "bi bi-heart"></i>
                    } 
                </div>
            </Link>
        </div>
    );
};

export default RecipeCard;
