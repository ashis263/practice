var findLucky = function (arr) {
  const equalFrequentArr = [];
  let current = null,
    count = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length + 1; i++) {
    if (current === null) {
      current = arr[i];
      count += 1;
    } else {
      if (current === arr[i]) {
        count += 1;
      } else {
        if (count === arr[i - 1]) {
          equalFrequentArr.push(arr[i - 1]);
        }
        current = arr[i];
        count = 1;
      }
    }
  }

  if (!equalFrequentArr.length) {
    return -1;
  } else {
    return Math.max(...equalFrequentArr);
  }
};