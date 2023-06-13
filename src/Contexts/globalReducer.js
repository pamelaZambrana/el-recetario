export const TYPES = {
    SET_TITLE : "setTitle",
}

export function globalReducer(state, action){
    switch(action.type) {
        case TYPES.SET_TITLE:
            return {
                ...state,
                titles : action.payload
            }
        default:
            return state
    }
}