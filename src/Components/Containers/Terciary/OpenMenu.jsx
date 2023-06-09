import React, { useContext } from 'react';
import SearchBox from '../../Elements/SearchBox';
import { GlobalContext } from '../../../Contexts/globalContext';
import { menuOptionList } from '../../option lists.js/Menu options';
import { Link } from 'react-router-dom';
import { TYPES } from '../../../Contexts/globalReducer';


const OpenMenu = () => {
    /* ----using global state */
    const [globalState, dispatch] = useContext(GlobalContext);
    const loginState =  globalState.loginState;
    const userName = globalState.user.name;
    const userRol = globalState.user.rol;
    
    function closeSession(){
        localStorage.removeItem("user");
        return TYPES.CLOSE_SESION;
    };
    return (
        <div className='open-menu-container'>
           <ul>
                <li>
                    {
                        loginState ?
                            <div className='user-container'>
                                <i className="bi bi-person-fill"></i>
                                <span className='user-name'>{ userName }</span>
                            </div>
                        :
                        null
                    }
                </li>
                <li>
                    <span className='search-box-option'>
                        ENCUENTRA UNA RECETA
                    </span>
                        <SearchBox></SearchBox>
                </li>
                {
                    menuOptionList.map((option, index) => (
                        option.secOptions ? 
                        <li key={ index }>
                            <Link 
                                className={ `${option.class}`}
                                to={`recipes?type=${ option.filter}`}
                                onClick={() => dispatch({ type : option.action })}
                            >
                                { option.name }

                            </Link>
                            <ul>
                                {
                                    option.secOptions.items.map((item, index) => (
                                        <li 
                                            key={ index } 
                                        >
                                            <Link 
                                                className={ `${option.secOptions.class}`}
                                                onClick={() => dispatch({ type : option.action })}
                                                to={`recipes?type=${ option.filter }&type2=${ item.filter }` }
                                            > 
                                                { item.itemName } 
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                        :
                        option.logged === loginState? 
                        <li key={ index }>
                            <Link 
                                className={ `${option.class}`}
                                onClick={ () => {
                                    dispatch({ type: option.action});
                                    if(option.name === "CERRAR SESIÓN"){
                                        closeSession();
                                    }
                                }}
                                to={`${option.path}`}
                            >
                                    { option.name }
                            </Link>
                        </li>
                        :
                        null
                        )
                    )
                }
                {
                    loginState && userRol === "admin"
                    ?
                    <li >
                        <Link 
                            to={"/nueva-receta"}
                            className='principal-option'
                            onClick={() => dispatch({ type : TYPES.CLOSE_OPEN_MENU})}
                        >CREAR NUEVA RECETA</Link>
                    </li>
                    : null
                }
                <li className='principal-option'>
                    <span >
                        COMPARTE
                    </span>
                </li>
        
           </ul>
        </div>
    );
}

export default OpenMenu;
