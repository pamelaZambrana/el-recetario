export function filteringList (list, filter){
    return list.filter( recipe => {
        return recipe.category.some( cat => cat === filter );
    })
};