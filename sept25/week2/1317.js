/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {

    for (let first = 1; first < n; first++) {
        const second = n-first;
        const firstInStr = first.toString();
        const secondInStr = second.toString();
        if(!firstInStr.includes("0") && !secondInStr.includes("0")){
            return [first, second];
        };
    }
};