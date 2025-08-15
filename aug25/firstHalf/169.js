var majorityElement = function (nums) {
  const elementMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (elementMap.has(nums[i])) {
      elementMap.set(nums[i], elementMap.get(nums[i]) + 1);
    } else {
      elementMap.set(nums[i], 1);
    }
  };

  const elements = elementMap.entries();
  let majority, highest = 0;

elements.forEach(element => {
    if(element[1] > highest){
      highest = element[1]
      majority = element[0];
    }
  })
  

  return majority;
};