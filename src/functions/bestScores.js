export function bestScores(initialList, finalList){
    const orderedList = [...initialList].sort((a,b) => {
        return b.punctuation - a.punctuation;
    });
    for( let i=0; i<10 ;i++){
        finalList.push(orderedList[i]);
    }; 
    return finalList;
}