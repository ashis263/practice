var scoreOfString = function (s) {
  let score = 0;

  for (let i = 0; i < s.length - 1; i++) {
    let absAdjDiff = s[i].charCodeAt(0) - s[i + 1].charCodeAt(0);
    score += Math.abs(absAdjDiff);
  }

  return score;
};