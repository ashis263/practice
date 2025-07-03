type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr: number[] = [];
    for(let i=0; i<arr.length; i++){
        const filteredElement = fn(arr[i], i);
        if(filteredElement){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};