/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const words = text.split(" ");
  let fullyTypedWordCount = 0;

  for (let i = 0; i < words.length; i++) {
    let j = 0;

    //let us assume that the word is fully typed, after checking if not we will update later
    let isFullyTyped = true;
    while (j < brokenLetters.length) {
      //if word includes any broken letter the word is not fully typed
      if (words[i].includes(brokenLetters[j])) {
        isFullyTyped = false;
        break;
      }
      j++;
    }

    if (isFullyTyped) {
      fullyTypedWordCount++;
    }
  }

  return fullyTypedWordCount;
};