import React, { useState } from 'react';


const DinamicIputs = ({inputType}) => {
     
     /* ---- local state ---- */
     const [inputArrayState,setInputArrayState] = useState({
         quantity : 0,
         inputs : [],
         addButtonActive : true,
     });
     /* ---- adding new ingredient---- */
     function addInput(id){
         function addingInputs(state){
            let inputState = {
             ...state,
             quantity: state.quantity+1,
             inputs : [
                 ...state.inputs,
                 {
                     id:state.quantity+1,
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
                 setInputArrayState(addingInputs(newState));
             }else{
                 setInputArrayState(addingInputs(inputArrayState));
             };
         };
 
     function removeInput(id){
         const auxArrInputs = [...inputArrayState.inputs].filter(input => input.id !== id);
         const targetInput = [...inputArrayState.inputs].find(input => input.id === id);
         const addButtonVal = targetInput.addButtonActive;
         const newState = {...inputArrayState};
         if(addButtonVal){
             newState.addButtonActive = true;
         };
         newState.inputs = auxArrInputs;
         setInputArrayState( newState );
     };
     const handleChange = (event) => {
        const textarea = event.target;
        textarea.style.height = `${textarea.scrollHeight}px`;
      };
    return (
        <>
        <ul className='ingredient-list'>
            {
            inputArrayState.inputs.map( (input) => (
                <li key={`${input.id}`}>
                    <div className='d-flex gap-3'>
                    {
                        inputType === "ingredient"
                        ?
                        <input 
                            type='text'    
                            id={`name${input.id}`} 
                            name='name' 
                            required 
                            className={ `input ${inputType}` }
                        />
                        :
                        <textarea
                            id={`name${input.id}`} 
                            name='name'
                            rows={1}
                            required 
                            className={ `input ${inputType}` }
                            onChange={handleChange}
                        ></textarea>
                    }
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
                                onClick={() => { 
                                    addInput(input.id) ;
                                    }}
                            >
                                <i className="bi bi-plus"></i>
                            </button> 
                            : null
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
        </>
    );
}

export default DinamicIputs;
