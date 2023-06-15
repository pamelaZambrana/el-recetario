import React from 'react';
import { useParams } from 'react-router';

const RecipePrincipal = () => {
    const params = useParams();
    function title(){
        if( params.filter ){
            return `${params.filter}/ ${params.recipe}`
        }else{
            return `${params.recipe}`
        };
    };
    return (
        <section>
            <h1>{ title() }</h1>
        </section>
    );
}

export default RecipePrincipal;
