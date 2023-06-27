import React from 'react';
import RecipeCard from '../../../Elements/RecipeCard';



const RecipesGrill = ({ filteredList, loading }) => {
    return (
        <>
            {
                 loading?
                 <p>Cargando...</p>
                :
                <section className='grill-recipes-container'>
                    {
                        filteredList.length > 0 ?
                        filteredList?.map(recipe =>(
                            <div className='grill-recipe-content' key={recipe._id}>
                                <RecipeCard 
                                    recipe = { recipe }
                                    index={ recipe._id }
                                ></RecipeCard>
                            </div>
                        )
                        )
                        :
                        <h1 className='message'>No hay recetas en esta categoría...</h1>
                    }
                </section>
            }
        </>
    );
}

export default RecipesGrill;
