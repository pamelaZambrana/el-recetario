    /* ----using localStorage---- */
    let user = "";
    let loginState = false;
    if(localStorage.length > 0){
        user = JSON.parse(localStorage.getItem("user"));
        loginState = true;
    };
    //console.log(JSON.parse(localStorage.getItem("favorites")))
export const initialState ={
    user : {
        ...user
    },
    loginState: loginState,
    openMenu: false,
    secondOpenMenu: false,
    recipes:  [
        {   _id: 1,
            name: "Piquemacho",
            image: "/img/carousel/platillos-principales.jpg",
            favorite: 2,
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
            favorite: 5,
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
            favorite: 3,
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
            favorite: 2,
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
            favorite: 1,
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
            favorite: 6,
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
            favorite: 9,
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
            favorite: 0,
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
            favorite: 5,
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
            favorite: 12,
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
            favorite: 11,
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
            favorite: 15,
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
            favorite: 10,
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
    favoriteRecipesList : [],
};
/* const recipes = initialState.recipes;
const favor = initialState.user.favorites;
const favoriteRecipes = recipes.filter(recipe => {
    let confirm = favor.some(favoriteID => ( favoriteID === recipe._id));
    return confirm
});
console.log(favoriteRecipes) */