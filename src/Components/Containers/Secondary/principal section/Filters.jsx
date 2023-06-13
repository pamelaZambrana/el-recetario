import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { arrowLeft, arrowRigth, scrollLeft, scrollRigth } from './carouselFunctions';
import { GlobalContext } from '../../../../Contexts/globalContext';
import { TYPES } from '../../../../Contexts/globalReducer';

const Filters = () => {
    /* ----using global context ---- */
    const [globalState, dispatch ] = useContext(GlobalContext);
    const { titles } = globalState.titles;
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
    
    
    const filtersList = [
        {
            name: "Comida típica",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
        },
        {
            name: "Comida popular",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida popular",
        },
        {
            name: "Platillos principales",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar por platillos principales",
        },
        {
            name: "Bebidas",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar por bebidas",
        },
        {
            name: "Postres",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar por postres",
        },
        {
            name: "Mejores calificaciones",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar por puntuaciones",
        },
    ];

    /* ----navigating to recipes page and setting title ---- */
    const navigate = useNavigate();
    function setTitle(title) {
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
                        filtersList.map((filter,index) => (
                            <Link
                                key={ index } 
                                className='filter-card'
                                to={`/recipes/${filter.name}`}
                                onClick={() => setTitle(filter.name)}
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
