import React, { useContext, useRef, useState } from 'react';
import { loginRequest } from '../../Requests/userRequests';
import { useNavigate } from 'react-router';
import { GlobalContext } from '../../Contexts/globalContext';
import { TYPES } from '../../Contexts/globalReducer';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

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
    const [confirmation, setConfirmation] = useState(false);
    async function login(values){
        await loginRequest(values)
        .then(response => {
            setConfirmation(true);
            const user = {
                id : response.data.body.id,
                name : response.data.body.name,
                rol : response.data.body.rol,
                token : response.data.body.token,
                favorites : response.data.body.favorites,
                email : response.data.body.email,
            }
            localStorage.setItem("user", `${JSON.stringify(user)}`);
            console.log(response);
            dispatch({
                type : TYPES.INIT_SESSION,
            });
            dispatch({
                type : TYPES.SET_USER,
                payload : {
                    id : user.id,
                    rol : user.rol,
                    name : user.name,
                    email : user.email,
                    favorites : [2,3,8,1],
                }
            })
            setError(null);
            setConfirmation(false);
            navigate(-1);  
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
        login(values);

    };
    return (
        <div>
            <form onSubmit={ userlogin } className='form'>
                <h1>Iniciar sesión</h1>
                {
                    error !== null 
                    ?
                    <p className='error-message'>{ `${error}` }</p>
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
                    autoFocus
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
                <p>Si no tienes cuenta aún <Link to={"/registro"}> haz click aquí</Link> para crear una.</p>
                <div className='buttons-container'>
                    <button type='submit' className='submit-button'> Ingresar </button>
                    <button 
                        type='button' 
                        className='cancel-button'
                        onClick={() => navigate(-1)}
                    > Cancelar </button>
                </div>
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
            </form>
        </div>
    );
}

export default LoginForm;
