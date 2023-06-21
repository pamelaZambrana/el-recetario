import React, { useContext } from 'react';
import { filterList } from '../../option lists.js/filterList';
import { Link, useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';

const SecondOpenMenu = () => {
    const [globalState, dispatch] = useContext(GlobalContext);
    const [searchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    console.log(typeFilter);
    console.log(globalState);


    const paramsLevel = filterList.filter(filter => filter.filter === typeFilter)[0].level;

    const list = filterList.filter(filter => (filter.level !== paramsLevel && filter.level !== 0));


    return (
        <div className='second-navbar-button-list'>
                {list.map((item,index) => {
                    return(
                        <Link 
                            key={index} 
                            to={ `?type=${typeFilter}&type2=${item.filter}` }
                            onClick={() => dispatch({type: TYPES.CLOSE_SECOND_OPEN_MENU})}
                        >
                            { item.name }
                        </Link>
                    )
                }
                )}
                <Link 
                    to={ `?type=${typeFilter}` }
                    onClick={() => dispatch({type: TYPES.CLOSE_SECOND_OPEN_MENU})}
                >
                    Ver todo
                </Link>
            </div>
    );
}

export default SecondOpenMenu;
