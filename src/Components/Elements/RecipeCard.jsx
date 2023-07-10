import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/globalContext';
import { Link, useNavigate } from 'react-router-dom';
import { TYPES } from '../../Contexts/globalReducer';
import Heart from './heart';


const RecipeCard = ({ recipe, index}) => {
    /* ----using global context---- */
    const [globalState, dispatch ] = useContext(GlobalContext);
    const loginState = globalState.loginState;

    /* ---- navigation-----*/
    const navigate = useNavigate()

    return (
        <div key={ index } className='recipe-card'>
            <img 
                src={ recipe.image } 
                alt={ recipe.description } />
            <div  className='recipe-card-description'>
                <Link 
                    to={ `/recipes/recipe/${recipe._id}` } 
                    className='recipe-card-description-title'
                    onClick={() => {
                        dispatch({ type : TYPES.SHOW_RECIPE, payload : recipe._id})
                        }}
                >
                    <h4> { recipe.name } </h4>
                </Link>
                <div className='ratings'>
                    {
                        loginState
                        ?                    
                        <Heart 
                            id = { recipe._id }
                        ></Heart>                                       
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
