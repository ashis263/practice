/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  let swapCount = 0;

  let i = 0;

  while (i < row.length) {
    if (row[i] % 2 === 0) {
      //for even id other person of the couple would be that id plus 1
      if (row[i + 1] !== row[i] + 1) {
        //first person of the couple is row[i], another person is on that id plus 1 holder index
        const indexOfAnotherPerson = row.indexOf(row[i] + 1);

        const prevPersonOfOtherCouple = row[i + 1];

        //swapping
        row[i + 1] = row[i] + 1;
        row[indexOfAnotherPerson] = prevPersonOfOtherCouple;

        //incrementing count
        swapCount++;
      }
    } else {
      //for odd id other person of the couple would be that id minus 1
      if (row[i + 1] !== row[i] - 1) {
        //first person of the couple is row[i], another person is on that id minus 1 holder index
        const indexOfAnotherPerson = row.indexOf(row[i] - 1);
        const prevPersonOfOtherCouple = row[i + 1];

        //swapping
        row[i + 1] = row[i] - 1;
        row[indexOfAnotherPerson] = prevPersonOfOtherCouple;

        //incrementing count
        swapCount++;
      }
    }
    i += 2;
  }

  return swapCount;
};