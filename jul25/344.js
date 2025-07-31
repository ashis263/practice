/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let copied =[];
    for(let i =0; i<s.length; i++){
        copied.push(s[i]);
    }
    for(let i=0, j=s.length-1; i<copied.length, j>=0; i++, j--){
        s[j] = copied[i];
    }
    return s;
};