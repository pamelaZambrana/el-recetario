import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='not-found-page'>
            <h1>Página no encontrada</h1>
            <Link to = "/" > Volver al inicio </Link>
        </div>
    );
}

export default NotFoundPage;
