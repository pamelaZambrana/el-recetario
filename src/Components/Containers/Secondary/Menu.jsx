import React, { useContext } from 'react';
import OpenMenu from '../Terciary/OpenMenu';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';

const Menu = () => {
    const [ globalState, dispatch ] = useContext(GlobalContext) ;
    const open = globalState.openMenu;

    return (
        <nav className='navbar-menu'>
            <i 
                className="bi bi-list menu-icon"
                onClick={ () => dispatch({ type: TYPES.CLOSE_OPEN_MENU })}
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
