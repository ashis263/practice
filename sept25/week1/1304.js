/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  //taking the middle element of arr
  const arr = [0];

  if (n === 1) {
    return arr;
  } else if (n === 2) {
    return [-1, 1];
  }

  //get the quotient of 2
  const twoQuotient = n / 2;

  //take a variable to add in arr before and after middle element
  let nextElement = 1;

  //for odd n
  if (n % 2 === 1) {
    for (let i = twoQuotient - 1; i >= 0; i--) {
      arr.unshift(-nextElement);
      arr.push(nextElement);
      nextElement++;
    }
  } else {
    //for even n
    let i = twoQuotient - 1;
    while (i > 0) {
      //calculations for unique values
      if (arr.length === 1) {
        nextElement = n - 1;
        arr.unshift(-nextElement);
        arr.push(twoQuotient - 1);
        arr.push(twoQuotient);
        nextElement = twoQuotient - 2;
      } else {
        arr.unshift(-nextElement);
        arr.push(nextElement);
        nextElement--;
      }
      i--;
    }
  }

  return arr;
};