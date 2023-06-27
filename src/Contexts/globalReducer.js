export const TYPES = {
    SET_TITLE : "set title",
    CLOSE_SESION : "close sesion",
    INIT_SESSION: "init session",
    CLOSE_OPEN_MENU : "close, open menu",
    CLOSE_SECOND_OPEN_MENU : "close, second open menu",
    SHOW_RECIPE : "show recipe",
    SET_ALL_RECIPES : "set all recipes",
    SET_RECIPES_BY_CAT : "set recipes by category",
    SET_FAVORITES : "set favorites",
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
            };
            case TYPES.CLOSE_SECOND_OPEN_MENU:
                return{
                    ...state,
                    secondOpenMenu : !state.secondOpenMenu
                };
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
        case TYPES.SHOW_RECIPE:
            return{
                ...state,
                selectedRecipe : action.payload
            };
        case TYPES.SET_ALL_RECIPES:
            return {
                ...state,
                allRecipes : action.payload,
            };
        case TYPES.SET_RECIPES_BY_CAT:
            return{
                ...state,
                searchedRecipes : action.payload,
            }
        case TYPES.SET_FAVORITES:
            return{
                ...state,
                favoriteRecipes : action.payload,
            }
        default:
            return state
    }
}