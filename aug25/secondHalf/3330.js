/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let count = 1; //because there could be no mistake
    let prev = null;

    for(let i=0; i<word.length; i++){
        if(prev === null){
            prev = word[i];
        }else{
            if(prev === word[i]){
                count +=1;
            }else{
                prev = word[i];
            }
        }
    }
    
    return count;
};