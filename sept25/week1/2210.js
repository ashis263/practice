/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let count = 0,
    i = 1;

  while (i < nums.length - 1) {
    if (nums[i] !== nums[i + 1]) {
      //checking if hill
      if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) {
        count++;

        //checking if valley
      } else if (nums[i - 1] > nums[i] && nums[i + 1] > nums[i]) {
        count++;
      }
      i++;
    } else {
      //if current element was before also
      if (nums[i] == nums[i - 1]) {
        i++;
        continue;
      }

      let prev, next;

      //getting prev(which is not same as current)
      for (let k = i - 1; k >= 0; k--) {
        if (nums[k] !== nums[i]) {
          prev = nums[k];
          break;
        }
      }

      //getting next(which is not same as current)
      for (let j = i + 2; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
          next = nums[j];
          break;
        }
      }

      if (prev && next) {
        //checking if hill
        if (prev < nums[i] && next < nums[i]) {
          count++;

          //checking if valley
        } else if (prev > nums[i] && next > nums[i]) {
          count++;
        }
      }
      i++;
    }
  }
  return count;
};