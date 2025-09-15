/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let length =0;

    for (let i = 0; i < s.length; i++) {
        const subStrSet = new Set();
        let count = 0;
        for (let j = i; j < s.length; j++) {
            if(!subStrSet.has(s[j])){
                subStrSet.add(s[j])
                count++;
            }else{
                break;
            }
        }
        if(count>length){
            length = count;
        }
    }
    return length;
};