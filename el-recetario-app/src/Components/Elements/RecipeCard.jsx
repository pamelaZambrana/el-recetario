import React from 'react';

const RecipeCard = ({ recipe, index, loginState }) => {
    /* ---- heart icon ---- */
    function fullHeart(state){
        if(state){
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
        <div key={ index } className='scroll-card'>
            <img src={ recipe.image } alt={ recipe.description } />
            <div className='scroll-card-description'>
                <h4> { recipe.name } </h4>
                <div className='ratings'>
                    <h4 className='punctuation'> { `${recipe.punctuation}/10` } </h4>
                    {
                        loginState
                        ?                    
                        fullHeart(recipe.favorite)                                       
                        :
                        <i className = "bi bi-heart"></i>
                    }
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
