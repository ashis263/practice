function countCompleteDayPairs(hours: number[]): number {
    let pairs = 0;
    for(let i=0; i<hours.length; i++){
        for(let j=0; j<hours.length; j++){
            if(j>i){
                if((hours[i] + hours[j]) % 24 === 0){
                    pairs += 1;
                }
            }
        }
    }
    return pairs;
};