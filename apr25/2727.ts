type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    const objArr: any =[]
    if(!Array.isArray(obj)){
        for(let i in obj){
            objArr.push(i);
        }
    }
    if(objArr.length){
        return false;
    }
    if(obj.length){
        return false;
    }
    return true;
};