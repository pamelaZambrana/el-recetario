import React, { useContext } from 'react';
import { filterList } from '../../option lists.js/filterList';
import { Link, useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';

const SecondOpenMenu = () => {
    /* ----using global state---- */
    const [globalState, dispatch] = useContext(GlobalContext);
    console.log(globalState);
    /* ----using query params---- */
    const [searchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    /* ----filtering the list---- */
    const paramsLevel = filterList.filter(filter => filter.filter === typeFilter)[0].level;
    console.log(paramsLevel)
    const list = filterList.filter(filter => (filter.level !== paramsLevel && filter.level !== 0));



    return (
        <div className='second-navbar-button-list'>
                {list.map((item,index) => {
                    return(
                        <Link 
                            to={ `?type=${typeFilter}&type2=${item.filter}` }
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
