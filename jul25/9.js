/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = x.toString().split("");

    for(let i=0, j=arr.length-1; i<arr.length, j>0; i++, j--){
        if(arr[i] !== arr[j]){
            return false;
        }
    }

    return true;
};