import React, { useRef } from 'react';
import { useNavigate } from 'react-router';

const RegisterForn = () => {
    /* ----navigation ----- */
    const navigate = useNavigate();
    /* ----refs---- */
    const userNameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const passConfirmRef = useRef("");
    return (
        <div>
            <form className='form'>
                <h1>Regístrate gratis</h1>
                <label>Ingresa tu nombre de usuario</label>
                <input 
                    type ="text"    
                    id ="userName"
                    required
                    name = "userName"
                    className = "input"
                    ref = { userNameRef }
                ></input>
                <label>Ingresa tu correo electrónico</label>
                <input 
                    type ="email"    
                    id ="email"
                    required
                    name = "email"
                    className = "input"
                    ref = { emailRef }
                ></input>
                <label>Crea una contraseña</label>
                <input 
                    type ="password"    
                    id ="password"
                    required
                    name = "password"
                    className = "input"
                    ref = { passwordRef }
                ></input>
                <label>Repite tu contraseña|</label>
                <input 
                    type ="password"    
                    id ="passConfirm"
                    required
                    name = "passConfirm"
                    className = "input"
                    ref = { passConfirmRef }
                ></input>
                <div className='buttons-container'>
                    <button type='submit' className='submit-button'> Guardar </button>
                    <button 
                        type='submit' 
                        className='cancel-button'
                        onClick={() => navigate(-1)}
                    > Cancelar </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForn;
