import React, { useState } from 'react';
import OpenMenu from '../Terciary/OpenMenu';
const Menu = () => {
    const [open, setOpen] = useState(false);


    function openMenu() {
        setOpen(prev => !prev);
    }
    return (
        <nav className='navbar-menu'>
            <i 
                className="bi bi-list menu-icon"
                onClick={ openMenu }
            ></i>
            {
                open ?
                <OpenMenu></OpenMenu>
                :
                null

            }
        </nav> 
    );
}

export default Menu;
