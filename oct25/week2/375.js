/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  let amount = 0;
  let rangeStart = 1;
  let rangeEnd = n;
  let gotResult = false;

  //let computer guess a number
  const comGuess =
    Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;

  while (gotResult !== true) {
    //user guessing
    const userGuess =
      Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
    console.log(rangeStart, rangeEnd);
    if (userGuess === comGuess) {
      gotResult = true;
    } else if (userGuess < comGuess) {
      amount += userGuess;
      rangeStart = userGuess + 1;
    } else {
      amount += userGuess;
      rangeEnd = userGuess - 1;
    }
  }

  return amount;
};

console.log(getMoneyAmount(10));
