var isPowerOfTwo = function (n) {
  let i = 0;

  let powerOfTwo = 0;

  while (powerOfTwo <= n) {
    powerOfTwo = 2 ** i;
    if (powerOfTwo === n) {
      return true;
    } else {
      i++;
    }
  }

  return false;
};