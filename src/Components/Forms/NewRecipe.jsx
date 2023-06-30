import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import DinamicIputs from './components/DinamicIputs';

const NewRecipe = () => {
    const navigate = useNavigate();
    /* ---- refs ---- */
    const nameRef = useRef("");
    const imgRef = useRef("");
    const recommendedRef = useRef(false);
   
    function saveIngredients(){
        const ingredientInputs = document.querySelectorAll('.ingredient');
        const ingredientsValues = Array.from(ingredientInputs).map((input) => input.value);
        const stepsInputs = document.querySelectorAll('.step');
        const stepsValues = Array.from(stepsInputs).map((input) => input.value);
        console.log(ingredientsValues);
        console.log(stepsValues);    
    }
    return (
        <div>
            <form className='form'>
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
                <button 
                    type='button' 
                    onClick={saveIngredients} 
                    className='secondary-button'
                >Guardar ingredientes</button>
                <label className='input-label'>Procedimiento</label>
                <DinamicIputs 
                    inputType = { "step" }
                ></DinamicIputs>
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
                <fieldset>
                    <label className='input-label'>¿Recomiendas esta receta?</label>
                    <input 
                        type='checkbox'    
                        id='recommended' 
                        name='recommended' 
                        required 
                        className='input-short'
                        ref={ recommendedRef }
                    />
                </fieldset>
                <div className='buttons-container'>
                    <button type='submit' className='submit-button'> Guardar </button>
                    <button 
                        type='button' 
                        className='cancel-button'
                        onClick={() => navigate(-1)}
                    > Cancelar </button>
                </div>
            </form>
        </div>
    );
}

export default NewRecipe;
