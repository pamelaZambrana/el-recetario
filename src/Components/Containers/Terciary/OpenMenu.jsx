import React, { useContext } from 'react';
import SearchBox from '../../Elements/SearchBox';
import { GlobalContext } from '../../../Contexts/globalContext';
import { menuOptionList } from '../../option lists.js/Menu options';
import { Link } from 'react-router-dom';
import { TYPES } from '../../../Contexts/globalReducer';


const OpenMenu = () => {
    const [globalState, dispatch] = useContext(GlobalContext);
    const loginState =  globalState.loginState;

    return (
        <div className='open-menu-container'>
           <ul>
                <li>
                    {
                        loginState ?
                            <div className='user-container'>
                                <i className="bi bi-person-fill"></i>
                                <span className='user-name'>Bellota Saltarina</span>
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
                                onClick={() => dispatch({ type: TYPES.SET_TITLE, payload : option.name })}
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
                                                to={`recipes?type=${ option.filter }&type2=${ item.filter }` }
                                                onClick={() => dispatch({ type: TYPES.SET_TITLE, payload : `${option.name}/ ${item.itemName}` })}
                                                className={ `${option.secOptions.class}`}
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
                                onClick={ () => dispatch({ type: option.action})}
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
                <li>
                    <span className='principal-option'>
                        COMPARTE
                    </span>
                </li>
        
           </ul>
        </div>
    );
}

export default OpenMenu;
