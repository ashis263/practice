var destCity = function (paths) {

    if(paths.length === 1){
        return paths[0][1];
    }

  for (let i = 0; i < paths.length; i++) {
    let destination = null;
    let count = 0;

    for (let j = 0; j < paths.length; j++) {
      if (paths[i][1] === paths[j][0]) {
        break;
      } else {
        count++;
        destination = paths[i][1];
      }
    }
    if (count === paths.length) return destination;
  }
};