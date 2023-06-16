import React from 'react';
import Menu from '../Secondary/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='navbar px-3'>
            <img src='/img/logotipo - El Recetario.png' alt='Logotipo de El Recetario'/>
            <Link 
                className='navbar-title'
                to={ "/" }
            >
                <h1 className='navbar-title'>El Recetario</h1>
            </Link>
            <Menu className="navbar-menu"></Menu>

        </header>
    );
}

export default Navbar;
