import React from 'react';
import SearchBox from '../../Elements/SearchBox';

const OpenMenu = () => {
    return (
        <div className='open-menu-container'>
           <ul>
            <li>
                ENCUENTRA UNA RECETA
                <SearchBox></SearchBox>
            </li>
            <li>
                COMIDA TÍPICA
                <ul>
                    <li>Platillos principales</li>
                    <li>Postres</li>
                    <li>Bebidas</li>
                </ul>
            </li>
            <li>
                COMIDA POPULAR
                <ul>
                    <li>Platillos principales</li>
                    <li>Postres</li>
                    <li>Bebidas</li>
                </ul>
            </li>
            <li>REGÍSTRATE</li>
            <li>INICIAR SESIÓN</li>
            <li>COMPARTE</li>
           </ul>
        </div>
    );
}

export default OpenMenu;
