var isPowerOfThree = function (n) {
  let i = 0;

  let powerOfThree;
  let result;

  function verifier() {
    powerOfThree = 3 ** i;
    if (powerOfThree > n) {
      result = false;
      return;
    }
    if (powerOfThree === n) {
      result = true;
      return;
    } else {
      i++;
      verifier();
    }
  }

  verifier();

  return result;
};