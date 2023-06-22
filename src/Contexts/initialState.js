    /* ----using localStorage---- */
const userName = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")).userName : "";
const loginState = JSON.parse(localStorage.getItem("user"))!== null? true : false;
export const initialState ={
    user : {
        id: "123",
        name : userName,
        email : "belloti@gmail.com",
        favorites : [2,3,7]
    },
    loginState: loginState,
    openMenu: false,
    secondOpenMenu: false,
    recipes:  [
        {   _id: 1,
            name: "Piquemacho",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 7,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["tipica", "principales"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"

        },
        {
            _id: 2,
            name: "Huminta",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 9,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : false,
            category: ["tipica", "postres"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 3,
            name: "Salteña",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 10,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["tipica", "postres"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"]
        },
        {
            _id: 4,
            name: "Salchipapa",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 10,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : false,
            category: ["popular", "principales"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 5,
            name: "Ají de fideo",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 5,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["popular", "principales"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 6,
            name: "Ají de papa",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 1,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["tipica", "principales"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 7,
            name: "Hamburguesa de quinua",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 5,
            favorite: false,
            time: 2,
            difficulty : 8,
            category: ["popular", "principales"],
            ingredients : ["quinua", "bebolla", "morrón", "huevo"],
            process : ["Lavar y hervir la quinua","mezclar los ingredientes", "Freir la hamburgues", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 8,
            name: "Plato paceño a la potosina",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 5,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : false,
            category: ["tipica", "principales"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 9,
            name: "Api morado",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 4,
            favorite: true,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["tipica", "bebidas"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 10,
            name: "Mocochinchi",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 3,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["tipica", "bebidas"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 11,
            name: "Llaucha",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 10,
            favorite: false,
            time: 2,
            difficulty : 5,
            category: ["tipica", "postres"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 12,
            name: "Alfajor",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 7,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["popular", "postres"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },
        {
            _id: 13,
            name: "Chairo",
            image: "/img/carousel/platillos-principales.jpg",
            punctuation: 7,
            favorite: false,
            time: 2,
            difficulty : 10,
            recommended : true,
            category: ["tipica", "principales"],
            ingredients : ["cebolla", "carne", "salchicha", "papas"],
            process : ["Cortar todos los ingredientes", "Freir los ingredientes", "Servir"],
            author : "Ana Foronda"
        },

    ],
    titles : "",
    selectedRecipe : "",
    allRecipes : [],
    searchedRecipes : [],
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