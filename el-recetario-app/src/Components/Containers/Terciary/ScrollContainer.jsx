import React, { useEffect, useRef, useState } from 'react';
import { arrowLeft, arrowRigth, scrollLeft, scrollRigth } from '../Secondary/principal section/carouselFunctions';
import RecipeCard from '../../Elements/RecipeCard';

const ScrollContainer = ({ list, loginState}) => {
     /* -----Carousel ----- */
     const leap = 170;
     const scrollContainerRef = useRef(null);
     const [scrollValues, setScrollValues] = useState({
         left: 0,
         containerWidth: 0,
         contentWidth: 0,
     });
     useEffect(() => {
         function updateWidth(){
             const containerWidth = scrollContainerRef.current.clientWidth;
             const contentWidth = scrollContainerRef.current.scrollWidth;
             setScrollValues({
                 left: 0,
                 containerWidth : containerWidth,
                 contentWidth : contentWidth,
             });
         };
         updateWidth();
         window.addEventListener("resize", updateWidth);
         return () => {
             window.removeEventListener("resize", updateWidth);
         }
     }, [scrollValues.containerWidth]);
    return (
            <div className='scroll-recipe'>
                { arrowLeft (scrollValues, () => scrollLeft(scrollContainerRef, scrollValues, setScrollValues,leap)) }
                <div className='scroll-content' ref={ scrollContainerRef }>
                    {
                        list.map((recipe,index) => (
                            <RecipeCard
                                recipe={ recipe }
                                index={ index }
                                loginState={ loginState } 
                            ></RecipeCard>                          
                        ))
                    }
                </div>
                
                { arrowRigth(scrollValues, () => scrollRigth(scrollContainerRef, scrollValues, setScrollValues, leap)) }  
            </div>
    );
}

export default ScrollContainer;
