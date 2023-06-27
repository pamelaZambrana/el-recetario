import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { arrowLeft, arrowRigth, scrollLeft, scrollRigth } from '../../../../functions/carouselFunctions';
import { GlobalContext } from '../../../../Contexts/globalContext';
import { TYPES } from '../../../../Contexts/globalReducer';
import { filterList } from '../../../option lists.js/filterList';

const Filters = () => {
    /* ----Usins searchParams---- */

    //console.log(searchParams.toString());
    /* ----using global context ---- */
    const [ globalState, dispatch ] = useContext(GlobalContext);
    /* ---- carousel ----*/
    const leap = 130;
    const scrollContainerRef = useRef(null);
    const [scrollValues, setScrollValues] = useState({
        left: 0,
        containerWidth: 0,
        contentWidth: 0,
    });
    useEffect(() => {
        function updateWidth(){
            const containerWidth = scrollContainerRef.current.clientWidth;
            const contentWidth = scrollContainerRef.current.scrollWidth;
            setScrollValues({
                left: 0,
                containerWidth : containerWidth,
                contentWidth : contentWidth,
            });
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        }
    }, [scrollValues.containerWidth]);
    

    /* ----navigating to recipes page and setting title ---- */
    function setTitle(title) {
        console.log(globalState);
        dispatch({
            type : TYPES.SET_TITLE,
            payload : title
        })
        //navigate("/recipes");

    };
    return (
        <section className='subsection-container'>
            <h2 className='subsection-title'>Encuentra la mejor receta para hoy</h2>
            <div className='scroll-filter'>
                { arrowLeft (scrollValues, () => scrollLeft(scrollContainerRef, scrollValues, setScrollValues, leap)) }
                <div className='scroll-content' ref={ scrollContainerRef }>
                    {
                        filterList.map((filter,index) => (
                            <Link
                                key={ index } 
                                className='filter-card'
                                to={`${filter.filter? `/recipes?type=${filter.filter}`: `${filter.path}`}`}
                               // state={{search : ""}}
                                onClick={() => setTitle(filter.level)}
                            >
                                <img src={ filter.image } alt={ filter.description } />
                                <h4> { filter.name } </h4>
                            </Link>
                        ))
                    }
                </div>
                
                { arrowRigth(scrollValues, () => scrollRigth(scrollContainerRef, scrollValues, setScrollValues,leap )) }  
            </div>
        </section>
    );
};

export default Filters;
