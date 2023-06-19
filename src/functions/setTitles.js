export function title(filterArray){
        let title = filterArray[0];
        for(let i=1; i < filterArray.length; i++){
            if(filterArray[i]){
                title = `${title}/ ${filterArray[i]}`;
            }
        };
        return title;
};
