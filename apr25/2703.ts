type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    const argsArrLength = [...args].length;
    return argsArrLength;
};