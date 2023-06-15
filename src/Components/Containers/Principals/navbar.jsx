import React from 'react';
import Menu from '../Secondary/Menu';

const Navbar = () => {
    return (
        <header className='navbar px-3'>
            <img src='/img/logotipo - El Recetario.png' alt='Logotipo de El Recetario'/>
            <h1>El Recetario</h1>
            <Menu className="navbar-menu"></Menu>

        </header>
    );
}

export default Navbar;
