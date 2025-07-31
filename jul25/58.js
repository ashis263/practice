/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const splited = s.split(" ");
  let last;

  for (let i = splited.length - 1; i >= 0; i--) {
    if (splited[i] === "") {
      continue;
    } else {
      last = splited[i];
      break;
    }
  }
  return last.length;
};