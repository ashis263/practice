var largestGoodInteger = function (num) {
  if (num.length === 3 && num[0] === num[1] && num[1] === num[2]) {
    return num;
  }

  //let take count as 1, will compare to next, if same increment
  //and take an empty array in which we will push good integers and then find max
  let sameIntCount = 1,
    goodArr = [];

  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] === num[i + 1]) {
      sameIntCount += 1;
    } else {
      sameIntCount = 1;
      continue;
    }

    if (sameIntCount === 3) {
      goodArr.push(parseInt(num[i]));
      sameIntCount = 1;
    }
  }

  if (goodArr.length) {
    const max = Math.max(...goodArr);
    const splittedGood = new Array(3).fill(max.toString());
    const good = splittedGood.join("");
    return good;
  } else {
    return "";
  }
};