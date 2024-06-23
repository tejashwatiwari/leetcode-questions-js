/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let newAns = title.toLowerCase();
    let newArray = newAns.split(' ')
    let res = []
    for(let i = 0;i<newArray.length;i++){
        if(newArray[i].length>2){
            let capitalizedWord = newArray[i][0].toUpperCase() + newArray[i].slice(1)
            res.push(capitalizedWord)
        }else{
            res.push(newArray[i])
        }
    }
    return res.join(' ');
};