/* ---- closing session ---- */

import { TYPES } from "../../Contexts/globalReducer";

export const menuOptionList = [
    {
        class : "principal-option",
        name : "Comida típica",
        items: {
            class : "secondary-option",
            itemName : [
                "Platillos principales",
                "Postres",
                "Bebidas"
            ],
            action : TYPES.CLOSE_SESION,
        },
        action : TYPES.CLOSE_SESION,
    },
    {
        class : "principal-option",
        name : "Comida popular",
        items : {
            class : "secondary-option",
            itemName : [
                "Platillos principales",
                "Postres",
                "Bebidas"
            ],
            action : TYPES.CLOSE_SESION,
        },
        action : TYPES.CLOSE_SESION,
    },
    {
        logged : false,
        class : "principal-option",
        name : "REGÍSTRATE",
        action : TYPES.CLOSE_SESION,
    },
    {
        logged : false,
        class : "principal-option",
        name : "INICIAR SESIÓN",
        action : TYPES.INIT_SESSION,
    },
    {
        logged : true,
        class : "principal-option",
        name : "MIS FAVORITOS",
        action : TYPES.CLOSE_SESION,

    },
    {
        logged : true,
        class : "principal-option",
        name : "EDITAR USUSARIO",
        action : TYPES.CLOSE_SESION,
    },
    {
        logged : true,
        class : "principal-option",
        name : "CERRAR SESIÓN",
        action : TYPES.CLOSE_SESION,
    },
];