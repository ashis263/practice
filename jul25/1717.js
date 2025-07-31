var maximumGain = function(s, x, y) {
    let points = 0;
    let subStr = s;
    // console.log(subStr);
    let hasSubStr = true;

    while(hasSubStr){
        let indexOfAB = subStr.indexOf('ab');
        // console.log(indexOfAB);
        let indexOfBA = subStr.indexOf('ba');

        if(indexOfAB === -1 && indexOfBA === -1){
            hasSubStr = false;
            break;
        }else if(x<y){
            if(indexOfBA !== -1){
                let subStrArr = subStr.split('')
                subStrArr.splice(indexOfBA, 2);
                subStr = subStrArr.join('')
                // console.log(subStr, y);
                points += y;
            }else if(indexOfAB !== -1){
                let subStrArr = subStr.split('')
                subStrArr.splice(indexOfAB, 2);
                subStr = subStrArr.join('')
                // console.log(subStr, x);
                points += x;
            }
        }else if(x>y){
            if(indexOfAB !== -1){
                let subStrArr = subStr.split('')
                subStrArr.splice(indexOfAB, 2);
                subStr = subStrArr.join('')
                // console.log(subStr, x);
                points += x;
            }else if(indexOfBA !== -1){
                let subStrArr = subStr.split('')
                subStrArr.splice(indexOfBA, 2);
                subStr = subStrArr.join('')
                // console.log(subStr, y);
                points += y;
            }
        }
    }

    return points;
};

// console.log(maximumGain("aabbaaxybbaabb", 5,4));