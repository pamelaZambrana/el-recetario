import React, { useRef, useState } from 'react';

const NewRecipe = () => {
    
    /* ---- refs ---- */
    const nameRef = useRef("");
    const imgRef = useRef("");
    const recommendedRef = useRef(false);
    /* ---- local state ---- */
    const [inputArrayState,setInputArrayState] = useState({
        quantity : 0,
        inputs : [],
        values : [],
        addButtonActive : true,
    });
    const [ onChangeValue, setOnChangeValue] = useState("");
    /* ---- adding new ingredient---- */
    function addInput(id){
        function adding(state){
           const inputState = {
            ...state,
            quantity: state.quantity+1,
            inputs : [
                ...state.inputs,
                {
                    id:state.quantity+1,
                    confirmButtonActive: true, 
                    addButtonActive : true,
                }],
            addButtonActive : false,
            };
            return inputState;
        };
            if(id){
                let newState = {...inputArrayState};
                const targetInput = newState.inputs.find(input => input.id === id);
                if(targetInput){
                    targetInput.addButtonActive = false;
                };
                setInputArrayState(adding(newState));
            }else{
                setInputArrayState(adding(inputArrayState));
            };
        };
        
    console.log(inputArrayState)
    function removeInput(id){
        console.log("id", id)
        const auxArrInputs = [...inputArrayState.inputs].filter(input => input.id !== id);
        const auxArrValues = [...inputArrayState.values].filter(value => value.id !== id);
        const targetInput = [...inputArrayState.inputs].find(input => input.id === id);
        const addButtonVal = targetInput.addButtonActive;
        console.log("AB", addButtonVal)
        const newState = {...inputArrayState};
        console.log(newState);
        if(addButtonVal){
            console.log("hi")
            newState.addButtonActive = true;
        };
        newState.inputs = auxArrInputs;
        newState.values = auxArrValues;
        setInputArrayState( newState );
    }
    function handleChange(event){
        setOnChangeValue(event.target.value);
    }
    function addValue(id){
        let newState = {...inputArrayState};
        const targetInput = newState.inputs.find(input => input.id === id);
        if(targetInput){
            targetInput.confirmButtonActive = false;
        };
        setInputArrayState({
            ...newState,
            values : [...newState.values, 
                {
                id : id,
                value : onChangeValue,
                }
            ],
        });
    };

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
                
                 <ul className='ingredient-list'>
                    {
                    inputArrayState.inputs.map( (input) => (
                        <li key={`${input.id}`}>
                            <div className='d-flex gap-3'>
                                <input 
                                    type='text'    
                                    id={`name${input.id}`} 
                                    name='name' 
                                    required 
                                    className='input'
                                    onBlur={handleChange}
                                />
                                {
                                    input.confirmButtonActive 
                                    ?
                                    <button 
                                        type='button'
                                        className="confirm-button-active"
                                        onClick={() => addValue(input.id)}
                                    >
                                        <i className="bi bi-check"></i>
                                    </button>
                                    :
                                    <>
                                        <button 
                                            type='button'
                                            className={`remove-button-active`}
                                            onClick={() => removeInput(input.id)}
                                        >
                                            <i className="bi bi-x"></i>
                                        </button>
                                        {
                                            input.addButtonActive
                                            ?
                                            <button 
                                                type="button" 
                                                className='add-button'
                                                onClick={() => addInput(input.id) }
                                            >
                                                <i className="bi bi-plus"></i>
                                            </button> 
                                            : null
                                        }
                                    </>
                                }
                            </div>
                        </li>
                    ))
                    }
                </ul>
                {
                    inputArrayState.addButtonActive
                    ?
                    <button 
                        type="button" 
                        className='add-button'
                        onClick={() => addInput(null) }
                    >
                        <i className="bi bi-plus"></i>
                    </button>
                    : 
                    null
                }
                
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
            </form>
        </div>
    );
}

export default NewRecipe;
