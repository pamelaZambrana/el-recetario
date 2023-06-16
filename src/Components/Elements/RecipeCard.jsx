import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/globalContext';
import { Link, useParams } from 'react-router-dom';
import { TYPES } from '../../Contexts/globalReducer';


const RecipeCard = ({ recipe, index}) => {
    const [globalState, dispatch ] = useContext(GlobalContext);
    const user = globalState.user;
    const loginState = globalState.loginState;
    const params = useParams();
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
    /* ---- filling the path ----- */
    function path(){
        if( params.filter){
            if(params.filter2){
                return `/recipes/${params.filter}/${params.filter2}/recipe/${recipe.name}`;
            }else{
                return `/recipes/${params.filter}/recipe/${recipe.name}`;
            };
        }else{
            return `/recipe/${recipe.name}`
        };
    };
    return (
        <div key={ index } className='recipe-card'>
            <img src={ recipe.image } alt={ recipe.description } />
            <div  className='recipe-card-description'>
                <Link 
                    to={ path() } 
                    className='recipe-card-description'
                    onClick={() => dispatch({ type : TYPES.SHOW_RECIPE, payload : recipe.id})}
                >
                    <h4> { recipe.name } </h4>
                </Link>
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
            </div>
        </div>
    );
};

export default RecipeCard;
