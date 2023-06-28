import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { newUserRequest } from '../../Requests/userRequests';

const RegisterForn = () => {
    /* ---- using local state ---- */
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error,setError] =useState(null);
    /* ----navigation ----- */
    const navigate = useNavigate();
    /* ----refs---- */
    const userNameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const passConfirmRef = useRef("");
    /* ---- user register---- */
    async function newUser(values){
        await newUserRequest(values)
            .then(response => {
                console.log(response);
                setError(null);
                navigate("/login")
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
    };
    function userRegister(e){
        e.preventDefault();
        if( passConfirmRef.current.value === passwordRef.current.value ){
            const values = {
                name : userNameRef.current.value,
                email : emailRef.current.value,
                password : passwordRef.current.value,
            };
            setPasswordConfirm("");
            newUser(values);
        }else{
            setPasswordConfirm("Las contraseñas no coinciden, por favor, intente denuevo.");
        };

    }
    return (
        <div>
            <form className='form' on onSubmit={ userRegister }>
                <h1>Regístrate gratis</h1>
                {
                    error !== null
                    ?
                        <p className='error-message'>{ error }</p>
                    :
                    null
                }
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
                <label>Confirma tu contraseña</label>
                <input 
                    type ="password"    
                    id ="passConfirm"
                    required
                    name = "passConfirm"
                    className = "input"
                    ref = { passConfirmRef }
                ></input>
                <p className='error-message'>{ passwordConfirm }</p>
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
