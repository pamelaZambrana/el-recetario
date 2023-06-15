export const TYPES = {
    SET_TITLE : "set title",
    CLOSE_SESION : "close sesion",
    INIT_SESSION: "init session",
    CLOSE_OPEN_MENU : "close, open menu",
}

export function globalReducer(state, action){
    switch(action.type) {
        case TYPES.SET_TITLE:
            return {
                ...state,
                titles : action.payload,
                openMenu : false,
            };
        case TYPES.CLOSE_OPEN_MENU:
            return{
                ...state,
                openMenu : !state.openMenu
            }
        case TYPES.CLOSE_SESION:
            return {
                ...state,
                loginState : false,
                openMenu : false,
            };
        case TYPES.INIT_SESSION:
            return {
                ...state,
                loginState : true,
                openMenu : false,
            };
        default:
            return state
    }
}