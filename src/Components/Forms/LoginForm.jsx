import React, { useRef } from 'react';
import { loginRequest } from '../../Requests/userRequests';

const LoginForm = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    async function login(values){
        await loginRequest(values)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error));
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
                <button type='submit' className='submit-button'> Ingresar </button>
            </form>
        </div>
    );
}

export default LoginForm;
