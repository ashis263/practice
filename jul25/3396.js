/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let totalOperation = 0;
  let uniqueArr = [];
  let isUnique = false;
  let iteration = 0;

  while (!isUnique && iteration < nums.length) {
    if (!uniqueArr.includes(nums[iteration])) {
      uniqueArr.push(nums[iteration]);
      if (nums.length === uniqueArr.length) {
        break;
      }
      iteration++;
    } else {
      if (nums.length < 3) {
        totalOperation += 1;
        isUnique = true;
      } else {
        nums.splice(0, 3);
        totalOperation += 1;
        uniqueArr = [];
        iteration = 0;
      }
    }
  }

  return totalOperation;
};