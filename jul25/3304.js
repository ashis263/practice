/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = "a";
    while(word.length<k){
        let newStr = "";
        let arr = word.split("");
        for(let i =0; i<arr.length; i++){
            const code = arr[i].charCodeAt(0);
            newStr = newStr.concat(String.fromCharCode(code+1))
        }
        word = word.concat(newStr);
    }
    return word[k-1];
};