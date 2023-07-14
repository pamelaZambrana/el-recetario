import React, {  useContext, useEffect, useState  } from 'react';
import { useNavigate, useParams } from 'react-router';

import { GlobalContext } from '../../../Contexts/globalContext';
import { recipeDetailRequest, userFavoritesRequest } from '../../../Requests/recipesRequests';
import Heart from '../../Elements/heart';
import { TYPES } from '../../../Contexts/globalReducer';

const RecipeDetail = () => {
    const params = useParams();
    /* ----using global context ----- */
    const [ globalState, dispatch] = useContext(GlobalContext);
    const loginState = globalState.loginState; 

    /* ----- using local context ----- */
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState([]);
    const [countLikes, setCountLikes] = useState(0);
    /* ---- navigation-----*/
    const navigate = useNavigate()

    useEffect(() => {

        async function getFavoriteList(){
            await userFavoritesRequest()
                .then(response => {
                    const favorites = response.data.body.favorites
                    dispatch({
                        type : TYPES.SET_FAVORITES_USER_LIST,
                        payload : [...favorites],
                    })
                    console.log(response)
                })
                .catch(error => console.log(error));
        }; 
        async function getRecipeDetail(id){
            setLoading(true);
            await recipeDetailRequest(id)
            .then(response => {
                const recipeDetail = response.data.body[0];
                console.log(response.data.body[0]);
                setRecipe(recipeDetail);
                setCountLikes(recipeDetail.favorite);
                setLoading(false);
            })
            .catch(error => console.log(error));
        }
        getRecipeDetail(params.recipeName);
        
        if(loginState){
            getFavoriteList();
        }
    }, [ params, dispatch, loginState]);
    return (
        <>
            {
                !loading 
                ?
                <div className='recipe-detail'>
                    <h1 className='recipe-detail-title'>{ recipe.name }</h1>
                    <section className='recipe-detail-charact' >
                        <ul className='recipe-detail-others'>
                            <li>Tiempo estimado de preparación: <span>{recipe.time}</span></li>
                            <li>Dificultad: <span>{recipe.difficulty}</span></li>
                        </ul>
                        <div className='recipe-detail-img-icons'>
                            <img src={recipe.image} alt={`Imagen de ${recipe.name}`}/>
                            <div className='recipe-icons-container'>
                            {
                                !loginState?
                                <div className='recipe-detail-icons '>
                                    <i 
                                        className="bi bi-heart"
                                        onClick={() => navigate("/login")}
                                    ></i>
                                    <p> Añadir a favoritos</p>

                                </div>
                                :
                                <div className='recipe-detail-icons'>
                                    <Heart 
                                        id={ recipe._id }
                                        countLikes = { countLikes }
                                        setCountLikes = { setCountLikes }
                                    ></Heart>
                                    <p>{ countLikes }</p>
                                </div>
                                
                            }
                                <div className='recipe-detail-icons'>
                                    <i 
                                        className="bi bi-share-fill"
                                    ></i>
                                    <p>Compartir</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='recipe-detail-content'>
                        <div className='recipe-detail-content-item'>
                            <h3>Ingredientes: </h3>
                            <ol  className='recipe-ingredients'>
                            {
                                recipe.ingredients?.map((ingredient, index) => {
                                    return(
                                        <li key={index}> { ingredient } </li>
                                    )
                                })
                            }
                            </ol>
                        </div>
                        <div className='recipe-detail-content-item'>
                            <h3>Procedimiento: </h3>
                            <ol className='recipe-process'>
                            {
                                recipe.process?.map((step, index) => {
                                    return(
                                        <li key={index}> { step } </li>
                                    )
                                })
                            }
                            </ol>
                        </div>
                        <p className='recipe-detail-author'>
                            Autor/a: { recipe.autor }
                        </p> 
                    </section>
                    
                </div>
                :
                <div className='d-flex justify-content-center gap-3'>
                    <div className="spinner-one spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-two spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-three spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                 </div>
            }
        </>
    );
}

export default RecipeDetail;
