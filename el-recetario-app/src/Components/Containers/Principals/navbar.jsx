import React from 'react';
import Menu from '../Secondary/Menu';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src='/img/logotipo - El Recetario.png' alt='Logotipo de El Recetario'/>
            <p>El Recetario2</p>
            <Menu></Menu>

        </div>
    );
}

export default Navbar;
