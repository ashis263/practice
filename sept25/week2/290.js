/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  //to save which pattern follows which word
  let mapForChecking = new Map([]);
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  //checking with pattern
  for (let i = 0; i < pattern.length; i++) {
    if (!mapForChecking.get(pattern[i])) {
      //if not there in map, add the bijection
      mapForChecking.set(pattern[i], words[i]);
    } else {
      if (mapForChecking.get(pattern[i]) !== words[i]) {
        //if don't match, return false
        return false;
      }
    }
  }

  //reassigning map to check with words again
  mapForChecking = new Map([]);
  //checking with words
  for (let i = 0; i < words.length; i++) {
    if (!mapForChecking.get(words[i])) {
      //if not there in map, add the bijection
      mapForChecking.set(words[i], pattern[i]);
    } else {
      if (mapForChecking.get(words[i]) !== pattern[i]) {
        //if don't match, return false
        return false;
      }
    }
  }

  return true;
};