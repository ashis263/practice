/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let count = 0,
    isInsideBars = false;

  for (let i = 0; i < s.length; i++) {
    if (!isInsideBars && s[i] === "|") {
      //if starting bar, then set isInsideBars true
      isInsideBars = true;
    } else if (isInsideBars && s[i] === "|") {
      //if ending bar, then set isInsideBars false
      isInsideBars = false;
    }
    if (!isInsideBars) {
      //if not inside of bar and is asteric increment the count
      if (s[i] === "*") {
        count++;
      }
    }
  }
  return count;
};