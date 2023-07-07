import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import DinamicIputs from './components/DinamicIputs';
import { newRecipeRequest } from '../../Requests/recipesRequests';

const NewRecipe = () => {
    /* ---- using local state---- */
    const [error, setError] = useState(null);
    const [confirmation, setConfirmation] = useState(false);
    const navigate = useNavigate();
    /* ---- refs ---- */
    const nameRef = useRef("");
    const imgRef = useRef("");
    const principalRef = useRef(false);
    const secondaryRef = useRef(false);
    const timeRef = useRef(0);
    const difficultyRef = useRef("easy");

    /* ---- posting a new recipte---- */
    async function addNewRecipe(values){
        await newRecipeRequest(values)
            .then(response => {
                setConfirmation(true);
                console.log(response);
                setError(null);
                setConfirmation(false);

                navigate("/");
            })
            .catch(err => { 
                console.log(err);
                setError(err.response.data.message);
            })
    };
   
    function saveRecipe(e){
        e.preventDefault();
        const ingredientInputs = document.querySelectorAll('.ingredient');
        const ingredientsValues = Array.from(ingredientInputs).map((input) => input.value);
        const stepsInputs = document.querySelectorAll('.step');
        const stepsValues = Array.from(stepsInputs).map((input) => input.value);   
        const recipeValues = {
            name: nameRef.current.value,
            image: imgRef.current.value,
            favorite : 0,
            time : timeRef.current.value,
            difficulty : difficultyRef.current.value,
            recommended : false,
            category : [ principalRef.current.value, secondaryRef.current.value],
            ingredients : ingredientsValues,
            process : stepsValues
        };
        addNewRecipe(recipeValues);

    }
    return (
        <div>
            <form className='form' onSubmit={saveRecipe}>
                {
                    error ?
                    <p className='error-message'>{ error }</p>
                    : null
                }
                <h1>Crear nueva receta</h1>
                <label className='input-label'>Título de la receta</label>
                <input 
                    type='text'    
                    id='name' 
                    name='name' 
                    required 
                    className='input'
                    ref={ nameRef }
                />
                 <label className='input-label'>Añadir ingredientes</label>
                <DinamicIputs 
                    inputType = { "ingredient " }
                ></DinamicIputs>
                <label className='input-label'>Añadir pasos para la preparación</label>
                <DinamicIputs 
                    inputType = { "step" }
                ></DinamicIputs>
                <label className='input-label'>Tiempo estimado de preparación</label>
                <select     
                    id='time' 
                    name='time' 
                    required 
                    className='input-short'
                    ref={ timeRef }
                    defaultValue={`DEFAULT`}
                >
                <option value="DEFAULT" disabled hidden>Selecciona una opción</option>
                <option value="15 min">15 min</option>
                <option value="30 min">30 min</option>
                <option value="1 hora">1 hora</option>
                <option value="1 hora y 30 min">1 hora y 30 min</option>
                <option value="2 horas o más">2 horas o más</option>
                </select>
                <label className='input-label'>Dificultad</label>
                <select     
                    id='difficulty' 
                    name='difficulty' 
                    required 
                    className='input-short'
                    ref={ difficultyRef }
                    defaultValue={`DEFAULT`}
                >
                <option value="DEFAULT" disabled hidden>Selecciona una opción</option>
                <option value="easy">Fácil</option>
                <option value="hard">Difícil</option>
                <option value="veryHard">Muy difícil</option>
                </select>
                <label className='input-label'>Categoría Principal</label>
                <select     
                    id='principal' 
                    name='principal' 
                    required 
                    className='input'
                    ref={ principalRef }
                    defaultValue={`DEFAULT`}
                >
                <option value="DEFAULT" disabled hidden>Selecciona una opción</option>
                <option value="tipico">Comida típica</option>
                <option value="popular">Comida popular</option>
                </select>
                <label className='input-label'>Categoría Secundaria</label>
                <select     
                    id='secondary' 
                    name='secondary' 
                    required 
                    className='input'
                    ref={ secondaryRef }
                    defaultValue={`DEFAULT`}
                >
                <option value="DEFAULT" disabled hidden>Selecciona una opción</option>
                <option value="principales">Platillos principales</option>
                <option value="bebidas">Bebidas</option>
                <option value="postres">Postres</option>
                </select>
                <label className='input-label'>Sube una imagen (opcional)</label>
                <input 
                    type='file'    
                    alt='imagen de la receta'
                    id='img' 
                    name='img' 
                    className='input-file'
                    accept='image/png, image/jpg'
                    ref={ imgRef }
                />
                <div className='buttons-container'>
                    <button type='submit' className='submit-button'> Guardar </button>
                    <button 
                        type='button' 
                        className='cancel-button'
                        onClick={() => navigate(-1)}
                    > Cancelar </button>
                </div>
            </form>
            {
                confirmation ?
                <div className="confirmation-message">
                    <p>Iniciando sesión...</p>
                    <div className="progress" role="progressbar" aria-label="Animated striped " aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "95%"}}></div>
                    </div>
                </div>
                : null
            }
        </div>
    );
}

export default NewRecipe;
