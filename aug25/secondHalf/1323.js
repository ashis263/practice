var maximum69Number = function (num) {
  const numStr = num.toString();
  if(!numStr.includes("6")){
    return num;
  }

  const replaced = numStr.replace("6", "9");

  return parseInt(replaced);
};