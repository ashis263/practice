var isPowerOfFour = function (n) {
  let i = 0;

  let powerOfFour = 0;

  while (powerOfFour <= n) {
    powerOfFour = 4 ** i;
    if (powerOfFour === n) {
      return true;
    } else {
      i++;
    }
  }

  return false;
};