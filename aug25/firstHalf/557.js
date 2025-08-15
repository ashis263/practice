var reverseWords = function(s) {
    const wordsArr = s.split(" ");

    const splitedResult = [];
    for(let i=0; i<wordsArr.length; i++){
        const lettersArr = wordsArr[i].split("");

        let reversedLetterArr = [];
        for(let j=0; j<lettersArr.length; j++){
            reversedLetterArr.unshift(lettersArr[j])
        }
        
        splitedResult.push(reversedLetterArr.join(""));
    }

    const result = splitedResult.join(" ");
    
    return result;

};