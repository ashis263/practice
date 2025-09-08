/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sortedS = s.split("").sort().join(""), sortedT = t.split("").sort().join("");
    for (let i = 0; i < t.length; i++) {
      if(sortedS[i]!==sortedT[i]){
        return sortedT[i];
      }
    }
};