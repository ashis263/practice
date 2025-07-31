var plusOne = function (digits) {
  const integer = BigInt(digits.join(""));
  const resultInteger = integer + BigInt(1);
  console.log(resultInteger);
  const resultArr = resultInteger.toString().split("");
  const resultDigitsArr = [];
  for (let i = 0; i < resultArr.length; i++) {
    resultDigitsArr.push(parseInt(resultArr[i]));
  }
  return resultDigitsArr;
};