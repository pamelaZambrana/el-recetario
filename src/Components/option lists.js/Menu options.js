/* ---- closing session ---- */

import { TYPES } from "../../Contexts/globalReducer";

export const menuOptionList = [
    {
        class : "principal-option",
        name : "Comida típica",
        filter : "tipica",
        secOptions : {
            class : "secondary-option",
            items : [
                {
                    itemName : "Platillos principales",
                    filter : "principales"
                },
                {
                    itemName : "Postres",
                    filter : "postres"
                },
                {
                    itemName : "Bebidas",
                    filter : "bebidas"
                }              
            ],
            action : TYPES.CLOSE_SESION,
        },
        action : TYPES.CLOSE_SESION,
    },
    {
        class : "principal-option",
        name : "Comida popular",
        filter : "popular",
        secOptions : {
            class : "secondary-option",
            items : [
                {
                    itemName : "Platillos principales",
                    filter : "principales"
                },
                {
                    itemName : "Postres",
                    filter : "postres"
                },
                {
                    itemName : "Bebidas",
                    filter : "bebidas"
                }              
            ],
            action : TYPES.CLOSE_SESION,
        },
        action : TYPES.CLOSE_SESION,
    },
    {
        logged : false,
        class : "principal-option",
        name : "REGÍSTRATE",
        action : null,
        path : "/registro",
    },
    {
        logged : false,
        class : "principal-option",
        name : "INICIAR SESIÓN",
        action : TYPES.CLOSE_OPEN_MENU,
        path : "/login",
    },
    {
        logged : true,
        class : "principal-option",
        name : "MIS FAVORITOS",
        action : TYPES.CLOSE_SESION,
        path : "/recipes/favorites",

    },
    {
        logged : true,
        class : "principal-option",
        name : "EDITAR USUSARIO",
        action : TYPES.CLOSE_SESION,
        path : "/editUser",
    },
    {
        logged : true,
        class : "principal-option",
        name : "CERRAR SESIÓN",
        action : TYPES.CLOSE_SESION,
        path : "/",
    },
];


