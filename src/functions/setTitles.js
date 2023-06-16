export function title(params){
    const valuesArray = Object.values(params);
    if( params.filter ){
        let title = params.filter;
        for(let i=1; i < valuesArray.length; i++){
            title = `${title}/ ${valuesArray[i]}`;
        };
        return title;
    }else{
        return `${params.recipeName}`
    };
};
