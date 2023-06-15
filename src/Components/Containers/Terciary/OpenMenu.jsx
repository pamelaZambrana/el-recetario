import React, { useContext } from 'react';
import SearchBox from '../../Elements/SearchBox';
import { GlobalContext } from '../../../Contexts/globalContext';
import { menuOptionList } from '../../option lists.js/Menu options';


const OpenMenu = () => {
    const [globalState, dispatch] = useContext(GlobalContext);
    const user = globalState.user;
    const loginState =  user.loginState;

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
                        option.items ? 
                        <li key={ index }>
                            <span className={ `${option.class}`}>
                                { option.name }

                            </span>
                            <ul>
                                {
                                    option.items.itemName.map((item, index) => (
                                        <li key={ index } className={ `${option.items.class}`}>{ item }</li>
                                    ))
                                }
                            </ul>
                        </li>
                        :
                        option.logged === loginState? 
                        <li key={ index }>
                            <span className={ `${option.class}`}>
                                    { option.name }
                            </span>
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
