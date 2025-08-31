/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
  const diagonalsArr = [];
  for (let i = 0; i < dimensions.length; i++) {
    const diagonal = Math.sqrt(dimensions[i][0] ** 2 + dimensions[i][1] ** 2);
    diagonalsArr.push(diagonal);
  }

  const maxDiagonal = Math.max(...diagonalsArr);
  let rectIndexWithMaxDiagonal = diagonalsArr.indexOf(maxDiagonal);
  const areaArr = [
    dimensions[rectIndexWithMaxDiagonal][0] *
      dimensions[rectIndexWithMaxDiagonal][1],
  ];
  while (rectIndexWithMaxDiagonal !== -1) {
    rectIndexWithMaxDiagonal = diagonalsArr.indexOf(maxDiagonal);
    if (rectIndexWithMaxDiagonal === -1) {
      break;
    }
    areaArr.push(
      dimensions[rectIndexWithMaxDiagonal][0] *
        dimensions[rectIndexWithMaxDiagonal][1]
    );
    delete diagonalsArr[rectIndexWithMaxDiagonal];
  }

  return Math.max(...areaArr);
};