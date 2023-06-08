import React from 'react';
import ScrollContainer from '../../Terciary/ScrollContainer';

const Recomendations = () => {
     
     /* ---- recomendations list ----*/
     const recomendationList = [
        {
            name: "Lasaña",
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
            name: "Sajeta",
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
        
    ];
    /* ---- login state ---- */
    const loginState = true;


    return (
        <section className='subsection-container'>
            <h2 className='subsection-title'>Recomendaciones</h2>
           <ScrollContainer
                loginState = { loginState }
                list={ recomendationList }
           ></ScrollContainer>
        </section>
    );
}

export default Recomendations;
