import React, { useContext } from 'react';
import { filterList } from '../../option lists.js/filterList';
import { Link, useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';

const SecondOpenMenu = () => {
    /* ----using query params---- */
    const [searchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    /* ----using global state---- */
    const [globalState, dispatch] = useContext(GlobalContext);
    console.log(globalState);
    

    /* ----filtering the list---- */
    let paramsLevel = 0;
    let list = [];
    if ( !typeFilter ){
        paramsLevel = 0;
    }else{
        paramsLevel = filterList.filter(filter => filter.filter === typeFilter)[0].level;
    };
    list = filterList.filter(filter => (filter.level !== paramsLevel && filter.level !== 0));
    


    return (
        <div className='second-navbar-button-list'>
                {list.map((item,index) => {
                    return(
                        <Link 
                            to={ `?${typeFilter?`type=${typeFilter}&`:""}type2=${item.filter}` }
                            key={index} 
                            onClick={() => dispatch({type: TYPES.CLOSE_SECOND_OPEN_MENU})}
                        >
                            { item.name }
                        </Link>
                    )
                }
                )}
                <Link 
                    to={ `?type=${typeFilter}` }
                    //state={ {search : searchParams} }
                    onClick={() => dispatch({type: TYPES.CLOSE_SECOND_OPEN_MENU})}
                >
                    Ver todo
                </Link>
            </div>
    );
}

export default SecondOpenMenu;
