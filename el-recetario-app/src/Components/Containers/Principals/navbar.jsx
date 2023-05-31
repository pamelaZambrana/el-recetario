import React from 'react';
import Menu from '../Secondary/Menu';
import "../../../css/home.css";

const Navbar = () => {
    return (
        <div className='navbar px-3'>
            <img src='/img/logotipo - El Recetario.png' alt='Logotipo de El Recetario'/>
            <p>El Recetario</p>
            <Menu className="navbar-menu"></Menu>

        </div>
    );
}

export default Navbar;
