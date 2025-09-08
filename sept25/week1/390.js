/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  //getting the array of integer from 1 to n
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let stepCount = 0;

  while (arr.length > 1) {
    //another array to find the remainings of each step, later will copy this to the originalRemaining
    let newArr = [];

    //left to right
    if (stepCount % 2 === 0) {
      for (let i = 1; i < arr.length; i += 2) {
        newArr.push(arr[i]);
      }
      arr = newArr.slice();

      //rightToLeft
    } else {
      for (let i = arr.length - 2; i >= 0; i -= 2) {
        newArr.unshift(arr[i]);
      }
      arr = newArr.slice();
    }

    stepCount++;
  }

  return arr[0];
};