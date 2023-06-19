import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { GlobalContext } from '../../../Contexts/globalContext';

const RecipeDetail = () => {
    const params = useParams();
    const [ globalState ] = useContext(GlobalContext);
    const user = globalState.user;
    const loginState = globalState.loginState;
    const recipes = globalState.recipes;
    const id = globalState.selectedRecipe;
    const recipeToShow = recipes.filter(recipe => recipe.id === id)[0];
    console.log(recipeToShow)

    return (
        <section className='recipe-detail'>
            <h1 className='recipe-detail-title'>{ params.recipeName }</h1>
            <div className='recipe-detail-img'>
                <img src={recipeToShow.image} alt={`Imagen de ${recipeToShow.name}`}/>
            </div>
            <h3>Ingredientes: </h3>
            <ol  className='recipe-ingredients'>
            {
                recipeToShow.ingredients.map((ingredient, index) => {
                    return(
                        <li key={index}> { ingredient } </li>
                    )
                })
            }
            </ol>
            <h3>Procedimiento: </h3>
            <ol className='recipe-process'>
            {
                recipeToShow.process.map((step, index) => {
                    return(
                        <li key={index}> { step } </li>
                    )
                })
            }
            </ol>
            <p className='recipe-detail-author'>
                Autor/a: { recipeToShow.author }
            </p>
            <div className='recipe-icons-container'>
            {
                !loginState?
                <div className='recipe-detail-icons'>
                    <i className="bi bi-heart"></i>
                    <p>Añadir a favoritos</p>
                </div>
                :
                user.favorites.some(favoriteId => favoriteId === id)?
                <div className='recipe-detail-icons'>
                    <i className="bi bi-heart-fill"></i>
                    <p>Añadir a favoritos</p>
                </div>
                :
                <div className='recipe-detail-icons'>
                    <i className="bi bi-heart"></i>
                    <p>Quitar de favoritos</p>
                </div>
            }
            {
                !loginState?
                <div className='recipe-detail-icons'>
                    <p>Calificacion esta receta</p>
                </div>
                :
                <div className='recipe-detail-icons'>
                    <span>{recipeToShow.punctuation}/10</span>
                    <p>Calificacion general</p>
                </div>
            }
                <div className='recipe-detail-icons'>
                    <i className="bi bi-share-fill"></i>
                    <p>Compartir link</p>
                </div>
            </div>

        </section>
    );
}

export default RecipeDetail;
