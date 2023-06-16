import React, { useContext } from 'react';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';
import { Link } from 'react-router-dom';

const Footer = () => {
const [globalState, dispatch] = useContext( GlobalContext );
const loginState = globalState.loginState;
const socialMedia = [
    {
        name: "Facebook",
        icon: "bi bi-facebook"
    },
    {
        name: "Instagram",
        icon: "bi bi-instagram"
    }
];

const buttons = [
    {
        state : `${!loginState}`,
        text : "REGÍSTRATE",
        goto : "/",
    },
    {
        state : `${!loginState}`,
        text : "INICIAR SESIÓN",
        goto : "/",
        action : TYPES.INIT_SESSION
    },
    {
        state : `${loginState}`,
        text : "CERRAR SESIÓN",
        goto : "/",
        action : TYPES.CLOSE_SESION
    }
]


    return (
        <footer className='footer'>
            <section className='social-media-section'>
                <p>SÍGUENOS POR:</p>
                {
                    socialMedia.map((site, index) => (
                        <div key={index} className='d-flex gap-2'>
                            <i className= {`${site.icon}`}></i>
                            <p>{ site.name }</p>
                        </div>
                    ))
                }
            </section>
            <section className="actions-section">
                    {
                        buttons.map((button, index) => (
                            <div key={index} >
                            {
                                button.state === "true" 
                                ? (
                                    <Link
                                        className= { `register-link-${button.state}` } 
                                        to={ `${button.goto}` }
                                        onClick = {() => dispatch({type: button.action})}
                                    >
                                        { button.text }
                                    </Link>
                                )  
                                : null
                            }
                                
                            </div>
                        ))
                    }
            </section>
        </footer>
    );
}

export default Footer;
