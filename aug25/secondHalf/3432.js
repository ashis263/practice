var countPartitions = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length-1; i++) {
    let leftSum = 0,
      rightSum = 0;
    for (let j = 0; j <= i; j++) {
      leftSum += nums[j];
    }

    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }

    console.log([leftSum, rightSum]);

    if (Math.abs(leftSum - rightSum) % 2 === 0) {
      count += 1;
    }
  }

  return count;
};