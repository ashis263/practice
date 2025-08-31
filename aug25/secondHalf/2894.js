var differenceOfSums = function (n, m) {
  let divisableSum = 0,
    nonDivisibleSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      divisableSum += i;
    } else {
      nonDivisibleSum += i;
    }
  }

  return nonDivisibleSum - divisableSum;
};