function intToRoman(num: number): string {
  let passedNum = num;
  let romanString = "";
  while (passedNum > 0) {
    if (passedNum >= 1000) {
      const quotient = Math.floor(passedNum / 1000);
      passedNum = passedNum - 1000 * quotient;
      for (let i = 0; i < quotient; i++) {
        romanString = romanString.concat("M");
      }
    } else if(passedNum>=900){
        romanString = romanString.concat("CM");
        passedNum = passedNum - 900;
    } else if(passedNum>=500){
        romanString = romanString.concat("D");
        passedNum = passedNum - 500;
    } else if(passedNum>=400){
        romanString = romanString.concat("CD");
        passedNum = passedNum - 400;
    } else if(passedNum>=100){
        romanString = romanString.concat("C");
        passedNum = passedNum - 100;
    } else if(passedNum>=90){
        romanString = romanString.concat("XC");
        passedNum = passedNum - 90;
    } else if(passedNum>=50){
        romanString = romanString.concat("L");
        passedNum = passedNum - 50;
    } else if(passedNum>=40){
        romanString = romanString.concat("XL");
        passedNum = passedNum - 40;
    } else if(passedNum>=10){
        romanString = romanString.concat("X");
        passedNum = passedNum - 10;
    } else if(passedNum>=9){
        romanString = romanString.concat("IX");
        passedNum = passedNum - 9;
    } else if(passedNum>=5){
        romanString = romanString.concat("V");
        passedNum = passedNum - 5;
    } else if(passedNum>=4){
        romanString = romanString.concat("IV");
        passedNum = passedNum - 4;
    } else if(passedNum>=1){
        romanString = romanString.concat("I");
        passedNum = passedNum - 1;
    }
  }
  return romanString;
}