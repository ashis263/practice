/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  let prefixCommonArr = [];

  for (let i = 0; i < A.length; i++) {
    let subArrOfA = A.slice(0, i + 1),
      subArrOfB = B.slice(0, i + 1),
      count = 0;

    for (let j = 0; j < subArrOfA.length; j++) {
      if (subArrOfB.includes(subArrOfA[j])) {
        count += 1;
      }
    }

    prefixCommonArr.push(count);
  }

  return prefixCommonArr;
};