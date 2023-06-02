import React from 'react';
import Hero from '../Secondary/principal section/Hero';
import Filters from '../Secondary/principal section/Filters';
import BestPunctuation from '../Secondary/principal section/BestPunctuation';
import Recomendations from '../Secondary/principal section/Recomendations';
import "../../../css/home-principal-section.css";
const PrincipalSection = () => {
    return (
        <div className='home-principal-section'>
            <Hero></Hero>
            <Filters></Filters>
            <BestPunctuation></BestPunctuation>
            <Recomendations></Recomendations>
        </div>
    );
}

export default PrincipalSection;

