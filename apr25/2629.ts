type F = (x: number) => number;

function compose(functions: F[]): F {

    return function(x) {
        let composedNumber: number = x;
        for(let i=functions.length-1; i>=0; i--){
            composedNumber = functions[i](composedNumber)
        }
        return composedNumber;
    }
};