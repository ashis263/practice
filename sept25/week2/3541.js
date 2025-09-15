/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  //getting two variables
  const vowObj = {};
  const conObj = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" ||s[i]=== "u") {
      if (vowObj[s[i]]) {
        //if exists will increment
        vowObj[s[i]] = vowObj[s[i]] + 1;
      } else {
        //else 1st count and will be 1
        vowObj[s[i]] = 1;
      }
    } else {
      if (conObj[s[i]]) {
        conObj[s[i]] = conObj[s[i]] + 1;
      } else {
        conObj[s[i]] = 1;
      }
    }
  }

  //values array of freqs
  const vowFreqsArr = Object.values(vowObj);
  const conFreqsArr = Object.values(conObj);
  
  let result;
  if(!vowFreqsArr.length){
    result = Math.max(...conFreqsArr);
  }else if(!conFreqsArr.length){
        result = Math.max(...vowFreqsArr);
  }else{
    result = Math.max(...vowFreqsArr) + Math.max(...conFreqsArr);
  }

  //returning result inline with the sum of max freqs
  return result;
};