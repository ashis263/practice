/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let lowercase = s.toLowerCase();

  let nonAlphaNumericChars = [];

  //pushing to nonAlphaNumericChars arr by checking ascii
  for (let i = 0; i < lowercase.length; i++) {
    const asciiVal = lowercase[i].charCodeAt(0);
    if (
      (asciiVal >= 48 && asciiVal <= 57) ||
      (asciiVal >= 97 && asciiVal <= 122)
    ) {
      nonAlphaNumericChars.push(lowercase[i]);
    }
  }

  //checking if palindrome or not
  for (
    let i = 0, j = nonAlphaNumericChars.length - 1;
    i < nonAlphaNumericChars.length, j >= 0;
    i++, j--
  ) {
    if (nonAlphaNumericChars[i] !== nonAlphaNumericChars[j]) {
      return false;
    }
  }

  return true;
};