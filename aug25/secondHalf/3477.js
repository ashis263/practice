/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  let placedCount = 0;

  for (let i = 0; i < fruits.length; i++) {
    for(let j=0; j<baskets.length; j++){
        if(fruits[i] <= baskets[j]){
            delete baskets[j];
            placedCount++;
            break;
        }
    }
  }

  return fruits.length-placedCount;
};