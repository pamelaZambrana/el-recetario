import React, { useContext } from 'react';
import { GlobalContext } from '../../../Contexts/globalContext';

const Footer = () => {
const [globalState] = useContext( GlobalContext );
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
    },
    {
        state : `${loginState}`,
        text : "CERRAR SESIÓN",
        goto : "/",
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
                                    <a 
                                        className= { `register-link-${button.state}` } 
                                        href={ `${button.goto}` }
                                    >
                                        { button.text }
                                    </a>
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
