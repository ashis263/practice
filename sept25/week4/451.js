/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freqObj = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in freqObj) {
      //if exist in obj, increment it
      freqObj[s[i]] = freqObj[s[i]] + 1;
    } else {
      //if not in the obj add with freq 1
      freqObj[s[i]] = 1;
    }
  }

  //sorting in decreasing order by converting into an array
  const freqArr = Object.entries(freqObj);
  const sortedFreqArr = freqArr.sort(([, a], [, b]) => b - a);

  //loop the sorted array and add it to the string of frequency time
  let finalSortedS = "";
  for (let i = 0; i < sortedFreqArr.length; i++) {
    for (let j = 0; j < sortedFreqArr[i][1]; j++) {
      finalSortedS += sortedFreqArr[i][0];
    }
  }

  return finalSortedS;
};

console.log(frequencySort("aggHggdhgggyyyyyyYddv"));
