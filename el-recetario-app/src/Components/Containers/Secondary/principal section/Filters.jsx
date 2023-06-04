import React, { useEffect, useRef, useState } from 'react';

const Filters = () => {

    const scrollContainerRef = useRef(null);
    const [scrollValues, setScrollValues] = useState({
        left: 0,
        containerWidth: 0,
        contentWidth: 0,
    });
    useEffect(() => {
        function updateWidth() {
            const containerWidth = scrollContainerRef.current.clientWidth;
            const contentWidth = scrollContainerRef.current.scrollWidth;
            setScrollValues({
                left: 0,
                containerWidth : containerWidth,
                contentWidth : contentWidth,
            })
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        }
    }, []);
    const scrollRigth = () =>{
        const newvalueRigth = scrollContainerRef.current.scrollLeft+200;
        scrollContainerRef.current.scrollBy({
            left: 200,
            behavior: "smooth",
        });
        setScrollValues({
            ...scrollValues,
            left: newvalueRigth,

        });
    };
    const scrollLeft = () =>{
        const newvalueleft = scrollContainerRef.current.scrollLeft-200;
        scrollContainerRef.current.scrollLeft = newvalueleft;
        scrollContainerRef.current.scrollBy({
            left: -200,
            behavior: "smooth",
        });
        setScrollValues({
            ...scrollValues,
            left: newvalueleft,

        });

    };
    function arrowRigth(){
        console.log(scrollValues);
        if (scrollValues.left + scrollValues.containerWidth < scrollValues.contentWidth){
            return (
                <i 
                    className="bi bi-chevron-compact-right arrow-active"
                    onClick={ scrollRigth }
                ></i> 
            );
        }else{
            return (
                    <i 
                        className="bi bi-chevron-compact-right arrow-inactive"
                        onClick={ scrollRigth }
                    ></i> 
            )
        }
        ;
    };
    function arrowLeft(){
        console.log(scrollValues);
        if (scrollValues.left > 0 ){
            return(
                <i 
                    className="bi bi-chevron-compact-left arrow-active"
                    onClick={ scrollLeft }
                ></i>                
            )
        }else{
            return(
                <i 
                    className="bi bi-chevron-compact-left arrow-inactive"
                    onClick={ scrollLeft }
                ></i>                
            )
        };
    };
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
            name: "Mejores puntuaciones",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar por puntuaciones",
        },
    ];
    return (
        <section className='subsection-container'>
            <h2 className='subsection-title'>Encuentra la mejor receta para hoy</h2>
            <div className='scroll'>
                { arrowLeft () }
                <div className='scroll-content' ref={ scrollContainerRef }>
                    {
                        filtersList.map((filter,index) => (
                            <div key={ index } className='scroll-card'>
                                <img src={ filter.image } alt={ filter.description } />
                                <h4> { filter.name } </h4>
                            </div>
                        ))
                    }
                </div>
                
                { arrowRigth() }  
            </div>
        </section>
    );
};

export default Filters;
