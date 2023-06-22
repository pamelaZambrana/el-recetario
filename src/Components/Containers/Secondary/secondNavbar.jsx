import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../Contexts/globalContext';
import { TYPES } from '../../../Contexts/globalReducer';
import SecondOpenMenu from '../Terciary/SecondMenu';
import SearchBox from '../../Elements/SearchBox';
const SecondNavbar = () => {
    const [globalState, dispatch] = useContext(GlobalContext);
    const open = globalState.secondOpenMenu;
    /* ---- using params---- */
    const params = useParams();

    /* ---- using location ----- */
    /* const location = useLocation();
    console.log(location); */
     /* function path(){
        if (location.state.search === ""){
            return ".."
        }else if(location.state.path === "recipes" && location.state.search === ""){
            return `..`
        }else if(location.state.path === "recipes" && location.state.search !== ""){
            return `/recipes?${location.state.search}`
        }else{
            return `?${location.state.search}`
        };
        
     }; */
     const navigate = useNavigate();
    return (
        <nav className='second-navbar'>
            <Link to="/">
                <i 
                    className="bi bi-house"
                ></i>
            </Link>
            <div>
    
                <i 
                    className="bi bi-chevron-left"
                    onClick={() => navigate(-1)}
                ></i>
                <i 
                    className="bi bi-chevron-right"
                    onClick={() => navigate(1)}
                ></i>
            </div>
            {
                params.recipeName?
                null
                :
                <div className='second-open-menu'>
                    <h3>Filtros</h3>
                    <i 
                        className="bi bi-chevron-compact-down"
                        onClick={() => dispatch({type: TYPES.CLOSE_SECOND_OPEN_MENU})}
                    ></i>
                </div>
            }
            {
                open?
                <SecondOpenMenu></SecondOpenMenu>
                : null
            }
            <SearchBox></SearchBox>
        </nav>
    );
}

export default SecondNavbar;
