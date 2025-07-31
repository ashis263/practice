var romanToInt = function (s) {
  let number = 0;
  let iterator = 0;

  while (iterator < s.length) {
    switch (s[iterator]) {
      case "M":
        number += 1000;
        iterator++;
        break;
      case "D":
        number += 500;
        iterator++;
        break;
      case "C":
        if (s[iterator + 1] === "M") {
          number += 900;
          iterator += 2;
          break;
        } else if (s[iterator + 1] === "D") {
          number += 400;
          iterator += 2;
          break;
        } else {
          number += 100;
          iterator++;
          break;
        }
      case "L":
        number += 50;
        iterator++;
        break;
      case "X":
        if (s[iterator + 1] === "L") {
          number += 40;
          iterator += 2;
          break;
        } else if (s[iterator + 1] === "C") {
          number += 90;
          iterator += 2;
          break;
        } else {
          number += 10;
          iterator++;
          break;
        }
      case "V":
        number += 5;
        iterator++;
        break;
      case "I":
        if (s[iterator + 1] === "V") {
          number += 4;
          iterator += 2;
          break;
        } else if (s[iterator + 1] === "X") {
          number += 9;
          iterator += 2;
          break;
        } else {
          number += 1;
          iterator++;
          break;
        }
    }
  }

  return number;
};