import { filterList } from "../Components/option lists.js/filterList";

export function title(filterArray){
    let title = filterList.find(filter => filter.filter === filterArray[0]).name;
        for(let i=1; i < filterArray.length; i++){
            if(filterArray[i]){
                let secondTitle = filterList.find(filter => filter.filter === filterArray[i]).name;
                title = `${title}/ ${secondTitle}`;
            }
        };
        return title;
};
