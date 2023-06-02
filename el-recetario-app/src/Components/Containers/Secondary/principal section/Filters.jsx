import React from 'react';

const Filters = () => {
    return (
        <section>
            <h2>Encuentra la mejor receta para hoy</h2>
            <div id="carouselExample" className="carousel slide">
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/carousel/platillos-principales.jpg" className="d-block w-100" alt="..."/>
                        <h4>Platillos principales</h4>
                    </div>
                    <div className="carousel-item active">
                        <img src="/img/carousel/platillos-principales.jpg" className="d-block w-100" alt="..."/>
                        <h4>Platillos principales</h4>
                    </div>
                    <div className="carousel-item active">
                        <img src="/img/carousel/platillos-principales.jpg" className="d-block w-100" alt="..."/>
                        <h4>Platillos principales</h4>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Filters;
