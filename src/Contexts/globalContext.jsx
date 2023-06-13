import React, { createContext, useReducer } from 'react';
import { initialState } from './initialState';
import { globalReducer } from './globalReducer';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [globalState, dispatch] = useReducer(globalReducer, initialState);
    return (
        <GlobalContext.Provider value={ [globalState, dispatch] }>
            { children }
        </GlobalContext.Provider>
    );
}
export default GlobalProvider;
