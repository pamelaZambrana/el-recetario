import React from 'react';
import RecipeCard from '../../../Elements/RecipeCard';



const RecipesGrill = ({ filteredList, loading }) => {
    return (
        <>
            {
                 loading?
                 <div className='d-flex justify-content-center gap-3'>
                    <div className="spinner-one spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-two spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-three spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                 </div>
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
