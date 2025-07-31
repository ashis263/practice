/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  let x = num1,
    y = num2;
  let count = 0;
  let isZero = false;
  while (!isZero) {
    if(x ===0 || y ===0){
        break;
    }
    if (x >= y) {
        count += 1;
        x = x- y;
    } else {
        count += 1;
        y = y-x
    }
  }
  return count;
};