/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  let distanceFromOne = Math.abs(x - z),
    distanceFromTwo = Math.abs(y - z);
  if (distanceFromOne === distanceFromTwo) {
    return 0;
  } else if(distanceFromOne < distanceFromTwo) {
    return 1;
  }else{
    return 2;
  }
};