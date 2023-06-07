import React, { useEffect, useRef, useState } from 'react';
import { arrowLeft, arrowRigth, scrollLeft, scrollRigth} from './carousel';

const BestPunctuation = () => {
    /* -----Carousel ----- */
    const leap = 160;
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

    /* ---- best punctuation list ----*/
    const bestPunctuationList = [
        {
            name: "Piquemacho",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: false,
            time: 2,
            difficulty : 10,
        },
        {
            name: "Huminta",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: false,
            time: 2,
            difficulty : 10,
        },
        {
            name: "Salteña",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: true,
            time: 2,
            difficulty : 10,
        },
        {
            name: "Salchipapa",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: true,
            time: 2,
            difficulty : 10,
        },
        {
            name: "Ají de fideo",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: true,
            time: 2,
            difficulty : 10,
        },
        {
            name: "Ají de fideo",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: true,
            time: 2,
            difficulty : 10,
        },
        {
            name: "Hamburguesa de quinua",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: false,
            time: 2,
            difficulty : 10,
        },
        {
            name: "Plato paceño a la potosina",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: false,
            time: 2,
            difficulty : 10,
        },
        {
            name: "Ají de fideo",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: true,
            time: 2,
            difficulty : 10,
        },
        {
            name: "Hamburguesa de quinua",
            image: "/img/carousel/platillos-principales.jpg",
            description: "Buscar comida típica",
            punctuation: 5,
            favorite: false,
            time: 2,
            difficulty : 10,
        }
    ];

    /* ---- login state ---- */
    const loginState = true;

    /* ---- heart icon ---- */
    function fullHeart(state){
        if(state){
            return(
                <i className="bi bi-heart-fill"></i>
            )
        }else{
            return(
                <i className = { `bi bi-heart`}></i>
            )
        };
    };

    return (
        <section className='subsection-container'>
            <h2 className='subsection-title'>Las 10 recetas con mejores puntuaciones</h2>
            <div className='scroll-recipe'>
                { arrowLeft (scrollValues, () => scrollLeft(scrollContainerRef, scrollValues, setScrollValues,leap)) }
                <div className='scroll-content' ref={ scrollContainerRef }>
                    {
                        bestPunctuationList.map((recipe,index) => (
                            <div key={ index } className='scroll-card'>
                                <img src={ recipe.image } alt={ recipe.description } />
                                <div className='scroll-card-description'>
                                    <h4> { recipe.name } </h4>
                                    <div className='ratings'>
                                        <h4 className='punctuation'> { `${recipe.punctuation}/10` } </h4>
                                        {
                                            loginState
                                            ?                    
                                            fullHeart(recipe.favorite)                                       
                                            :
                                            <i className = "bi bi-heart"></i>
                                        }
                                    </div>
                                    

                                </div>
                            </div>
                        ))
                    }
                </div>
                
                { arrowRigth(scrollValues, () => scrollRigth(scrollContainerRef, scrollValues, setScrollValues, leap)) }  
            </div>
        </section>
    );
};

export default BestPunctuation;
