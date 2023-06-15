import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Containers/Principals/navbar';
import Footer from '../Components/Containers/Principals/Footer';
const LayoutPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </>
    );
}

export default LayoutPage;
