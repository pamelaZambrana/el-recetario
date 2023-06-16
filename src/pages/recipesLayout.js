import React from 'react';
import { Outlet } from 'react-router';
import SecondNavbar from '../Components/Containers/Secondary/secondNavbar';

const RecipesLayout = () => {
    return (
        <>
            <SecondNavbar></SecondNavbar>
            <Outlet></Outlet>
        </>
    );
}

export default RecipesLayout;
