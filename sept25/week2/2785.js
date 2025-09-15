/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const splitted = s.split("");
  const vowelArr = [];
  for (let i = 0; i < splitted.length; i++) {
    switch (splitted[i]) {
      case "a":
        vowelArr.push(splitted[i]);
        break;
      case "A":
        vowelArr.push(splitted[i]);
        break;
      case "e":
        vowelArr.push(splitted[i]);
        break;
      case "E":
        vowelArr.push(splitted[i]);
        break;
      case "i":
        vowelArr.push(splitted[i]);
        break;
      case "I":
        vowelArr.push(splitted[i]);
        break;
      case "o":
        vowelArr.push(splitted[i]);
        break;
      case "O":
        vowelArr.push(splitted[i]);
        break;
      case "u":
        vowelArr.push(splitted[i]);
        break;
      case "U":
        vowelArr.push(splitted[i]);
        break;
    }
  }
  if (!vowelArr.length) {
    return s;
  }
  vowelArr.sort();
  let vowelIndex = 0;
  for (let i = 0; i < splitted.length; i++) {
    if (vowelIndex < vowelArr.length) {
      switch (splitted[i]) {
        case "a":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
        case "A":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
        case "e":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
        case "E":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
        case "i":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
        case "I":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
        case "o":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
        case "O":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
        case "u":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
        case "U":
          splitted[i] = vowelArr[vowelIndex];
          vowelIndex++;
          break;
      }
    }
  }

  return splitted.join("");
};