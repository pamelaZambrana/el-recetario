import React from 'react';
import SearchBox from '../../Elements/SearchBox';

const OpenMenu = () => {
    const loginState =  false;
    const optionList = [
        {
            class : "principal-option",
            name : "COMIDA TÍPICA",
            items: {
                class : "secondary-option",
                itemName : [
                    "Platillos principales",
                    "Postres",
                    "Bebidas"
                ]
            },
        },
        {
            class : "principal-option",
            name : "COMIDA POPULAR",
            items : {
                class : "secondary-option",
                itemName : [
                    "Platillos principales",
                    "Postres",
                    "Bebidas"
                ]
            },
        },
        {
            logged : false,
            class : "principal-option",
            name : "REGÍSTRATE",
        },
        {
            logged : false,
            class : "principal-option",
            name : "INICIAR SESIÓN",
        },
        {
            logged : true,
            class : "principal-option",
            name : "MIS FAVORITOS",
        },
        {
            logged : true,
            class : "principal-option",
            name : "EDITAR USUSARIO",
        },
        {
            logged : true,
            class : "principal-option",
            name : "CERRAR SESIÓN",
        },
    ];

    return (
        <div className='open-menu-container'>
           <ul>
                <li>
                    {
                        loginState ?
                            <div className='user-container'>
                                <i className="bi bi-person-fill"></i>
                                <span className='user-name'>Bellota Saltarina</span>
                            </div>
                        :
                        null
                    }
                </li>
                <li>
                    <span className='search-box-option'>
                        ENCUENTRA UNA RECETA
                    </span>
                        <SearchBox></SearchBox>
                </li>
                {
                    optionList.map((option, index) => (
                        option.items ? 
                        <li key={ index }>
                            <span className={ `${option.class}`}>
                                { option.name }

                            </span>
                            <ul>
                                {
                                    option.items.itemName.map((item, index) => (
                                        <li key={ index } className={ `${option.items.class}`}>{ item }</li>
                                    ))
                                }
                            </ul>
                        </li>
                        :
                        option.logged === loginState? 
                        <li key={ index }>
                            <span className={ `${option.class}`}>
                                    { option.name }
                            </span>
                        </li>
                        :
                        null
                        )
                    )
                }
                <li>
                    <span className='principal-option'>
                        COMPARTE
                    </span>
                </li>
        
           </ul>
        </div>
    );
}

export default OpenMenu;
