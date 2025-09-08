/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const result = [];

  //defining the rows
  const firstRow = "qwertyuiop",
    secondRow = "asdfghjkl",
    thirdRow = "zxcvbnm";

  for (let i = 0; i < words.length; i++) {
    //getting the rowNumber of thr 1st letter of the word
    const startingKey = words[i][0].toLowerCase();
    let row;
    if (firstRow.includes(startingKey.toLowerCase())) {
      row = 1;
    } else if (secondRow.includes(startingKey.toLowerCase())) {
      row = 2;
    } else {
      row = 3;
    }

    //variable to store whether of same row or not
    let satified = true;

    for (let j = 0; j < words[i].length; j++) {
      //checking if satified(other keys in the word are of same row  or not), if not then break loop and go to the next word
      if (row === 1) {
        if (!firstRow.includes(words[i][j].toLowerCase())) {
          satified = false;
          break;
        }
      } else if (row === 2) {
        if (!secondRow.includes(words[i][j].toLowerCase())) {
          satified = false;
          break;
        }
      } else if (row === 3) {
        if (!thirdRow.includes(words[i][j].toLowerCase())) {
          satified = false;
          break;
        }
      }
    }

    //if
    if (satified) {
      result.push(words[i]);
    }
  }

  return result;
};