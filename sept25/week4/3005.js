/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  //getting frquency in an object
  const freqObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in freqObj) {
      freqObj[nums[i]] = freqObj[nums[i]] + 1;
    } else {
      freqObj[nums[i]] = 1;
    }
  }

  //getting the values and sorting descending for getting the maximum
  const freqArr = Object.values(freqObj);
  freqArr.sort((a, b) => b - a);

  //first element should be counted
  let totalFreqs = freqArr[0];

  //if same value as first we should add it
  for (let i = 1; i < freqArr.length; i++) {
    if (freqArr[i] === freqArr[0]) {
      totalFreqs += freqArr[i];
    } else {
      break;
    }
  }

  return totalFreqs;
};

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
