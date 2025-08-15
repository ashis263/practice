var generate = function(numRows) {
    //numRows is always greater than or equal to 1, so let us add the first to triangle
    let triangle = [[1]];

    for(let i=1; i<numRows; i++){
        const lastRow = triangle[triangle.length - 1];

        //variable for getting the row, first one and last one will always be 1
        let row = [1]
        
        for(let j=1; j<=i; j++){
            if(lastRow.length === 1){
                row = [1,1]
            }
            row[j] = lastRow[j-1] + lastRow[j];
            row[i] = 1;
        }

        triangle.push(row);
    }

    return triangle;
};