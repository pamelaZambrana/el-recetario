export const TYPES = {
    SET_TITLE : "set title",
    CLOSE_SESION : "close sesion",
    INIT_SESSION: "init session",
    CLOSE_OPEN_MENU : "close, open menu",
    CLOSE_SECOND_OPEN_MENU : "close, second open menu",
    SET_ALL_RECIPES : "set all recipes",
    SET_RECIPES_BY_CAT : "set recipes by category",
    SET_FAVORITES_COMMUNITY_LIST : "set community favorites list",
    SET_FAVORITES_USER_LIST : " set favorites user list",
    SET_USER : "set user",
    SET_RECOMMENDED_LIST : "set recommended list",
    SET_COUNT_LIKES : "set count likes",
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
            };
        case TYPES.SET_USER:
            return{
                ...state,
                user : action.payload,
            }
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
        case TYPES.SET_FAVORITES_COMMUNITY_LIST:
            return{
                ...state,
                favoriteCommunityRecipesList : action.payload,
            }
        case TYPES.SET_FAVORITES_USER_LIST:
            return{
                ...state,
                favoriteUserRecipesList : action.payload,
            }
        case TYPES.SET_RECOMMENDED_LIST:
            return{
                ...state,
                recommendedList : action.payload,
            }
        case TYPES.SET_COUNT_LIKES:
            return{
                ...state,
                countLikes : action.payload,
            }
        default:
            return state
    }
}