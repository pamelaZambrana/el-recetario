import React, { useContext, useRef, useState } from 'react';
import { loginRequest } from '../../Requests/userRequests';
import { useNavigate } from 'react-router';
import { GlobalContext } from '../../Contexts/globalContext';
import { TYPES } from '../../Contexts/globalReducer';

const LoginForm = () => {
    /* ---- using ref to save the changes ---- */
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    /* ---- using globalState ---- */
    const [globalState, dispatch] = useContext(GlobalContext);
    const loginState = globalState.loginState;
    console.log(loginState);
    /*---- using localstate ----- */
    const [error, setError] = useState(null);

    async function login(values){
        await loginRequest(values)
            .then(response => {
                const user = {
                    userName : response.data.body.name,
                    rol : response.data.body.rol,
                    token : response.data.body.token
                }
                localStorage.setItem("user", `${JSON.stringify(user)}`);
                console.log(response);
                navigate(-1);
                dispatch({
                    type : TYPES.INIT_SESSION,
                })
                setError(null);
            })
            .catch(err => {
                console.log("error",err.response.data.message);
                setError(err.response.data.message);
                console.log(error)
            });
    };
    function userlogin(e){
        e.preventDefault();
        const values = {
            email : emailRef.current.value,
            password : passwordRef.current.value,            
        };
        console.log(values);
        login(values);
    };
    return (
        <div>
            <form onSubmit={ userlogin } className='form'>
                <h1>Iniciar sesión</h1>
                {
                    error !== null 
                    ?
                    <p>{ `${error}` }</p>
                    :
                    null
                }
                <label className='input-label'>Email</label>
                <input 
                    type='email'    
                    id='email' 
                    name='email' 
                    required 
                    className='input'
                    ref={ emailRef }
                />
                <label className='input-label'>Contraseña</label>
                <input 
                    type='password' 
                    id='password' 
                    name='password' 
                    required 
                    className='input'
                    ref={ passwordRef }
                />
                <div className='buttons-container'>
                    <button type='submit' className='submit-button'> Ingresar </button>
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

export default LoginForm;
