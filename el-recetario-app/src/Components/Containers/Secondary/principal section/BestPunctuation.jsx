import React from 'react';
import ScrollContainer from '../../Terciary/ScrollContainer';

const BestPunctuation = () => {
   

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


    return (
        <section className='subsection-container'>
            <h2 className='subsection-title'>Las 10 recetas con mejores puntuaciones</h2>
           <ScrollContainer
                loginState = { loginState }
                list={ bestPunctuationList }
           ></ScrollContainer>
        </section>
    );
};

export default BestPunctuation;
