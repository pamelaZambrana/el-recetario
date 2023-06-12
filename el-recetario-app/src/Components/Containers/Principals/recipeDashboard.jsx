import React, { useContext } from 'react';
import { GlobalContext } from '../../../Contexts/globalContext';

const RecipeDashboard = () => {
    const [ globalState, dispatch ] = useContext(GlobalContext);
    const title = globalState.titles;
    return (
        <div>
            <h1>{ title }</h1>
        </div>
    );
}

export default RecipeDashboard;

