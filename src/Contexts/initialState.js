export const initialState ={
    user : {
        id: "123",
        name : "Bellota Saltarina",
        email : "belloti@gmail.com",
        favorites : [2,3,7]
    },
    loginState: true,
    openMenu: false,
    recipes:  [
        {   id:1,
            name: "Piquemacho",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 7,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["Comida típica", "Platillos principales"]

        },
        {
            id:2,
            name: "Huminta",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 9,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : false,
            category: ["Comida típica", "Postres"]
        },
        {
            id:3,
            name: "Salteña",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 10,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["Comida típica", "Postres"]
        },
        {
            id:4,
            name: "Salchipapa",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 10,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : false,
            category: ["Comida popular", "Platillos principales"]
        },
        {
            id:5,
            name: "Ají de fideo",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 5,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["Comida popular", "Platillos principales"]
        },
        {
            id:6,
            name: "Ají de papa",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 1,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["Comida típica", "Platillos principales"]
        },
        {
            id:7,
            name: "Hamburguesa de quinua",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 5,
            favorite: false,
            time: 2,
            difficulty : 8,
            category: ["Comida popular", "Platillos principales"]
        },
        {
            id:8,
            name: "Plato paceño a la potosina",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 5,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : false,
            category: ["Comida típica", "Platillos principales"]
        },
        {
            id:9,
            name: "Api morado",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 4,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["Comida típica", "Bebidas"]
        },
        {
            id:10,
            name: "Mocochinchi",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 3,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["Comida típica", "Bebidas"]
        },
        {
            id:11,
            name: "Llaucha",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 10,
            favorite: false,
            time: 2,
            difficulty : 5,
            category: ["Comida típica", "Postres"]
        },
        {
            id:12,
            name: "Alfajor",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 7,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["Comida popular", "Postres"]
        },

    ],
    titles : "",
};
    /* const searcher = "Comida popular";
    const searcher2 = "Platillos principales";
    
    let filteredList  = [...initialState.recipes].filter( recipe => {
        return recipe.category.some( cat => cat === searcher );
    })
    console.log(searcher2)
    if(searcher2){
        filteredList  = [...filteredList].filter( recipe => {
            return recipe.category.some( cat => cat === searcher2 );
        })
    };
    console.log(filteredList) */