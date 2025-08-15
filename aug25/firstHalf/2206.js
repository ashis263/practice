/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  let pairs = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === null) {
      continue;
    }
    const pairFirst = nums[i];
    nums[i] = null;
    const pair2ndIndex = nums.indexOf(pairFirst);
    if (pair2ndIndex > 0) {
      nums[pair2ndIndex] = null;
      pairs += 1;
    }
  }

  if (pairs === nums.length / 2) {
    return true;
  } else {
    return false;
  }
};