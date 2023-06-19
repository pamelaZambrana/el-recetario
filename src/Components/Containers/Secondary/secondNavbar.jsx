import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';
import SecondOpenMenu from '../Terciary/SecondMenu';
const SecondNavbar = () => {
    const [globalState, dispatch] = useContext(GlobalContext);
    const open = globalState.secondOpenMenu;
    return (
        <nav className='second-navbar'>
            <Link to="/">
                <i 
                    className="bi bi-house"
                ></i>
            </Link>
            <div>
                <i className="bi bi-chevron-left"></i>
                <i className="bi bi-chevron-right"></i>
            </div>
            <div className='second-open-menu'>
                <h3>Filtros</h3>
                <i 
                    className="bi bi-chevron-compact-down"
                    onClick={() => dispatch({type: TYPES.CLOSE_SECOND_OPEN_MENU})}
                ></i>
            </div>
            {
                open?
                <SecondOpenMenu></SecondOpenMenu>
                : null
            }
        </nav>
    );
}

export default SecondNavbar;
