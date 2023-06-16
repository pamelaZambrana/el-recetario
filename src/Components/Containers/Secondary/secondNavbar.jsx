import React from 'react';
import { Link } from 'react-router-dom';

const SecondNavbar = () => {
    return (
        <nav className='second-navbar'>
            <Link to="/">
                <i 
                    className="bi bi-house"
                ></i>
            </Link>
            <div>
                <i className="bi bi-chevron-left"></i>
                <i className="bi bi-chevron-right"></i>
            </div>
        </nav>
    );
}

export default SecondNavbar;
