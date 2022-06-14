var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length === 0) return false;
    let m=matrix.length-1, n=matrix[0].length-1, j=0;
    while(m>=0 && j<=n) {
        let x = matrix[m][j];
        if(x === target) return true;
        if(x > target) {
            m -= 1;
        } else {
            j += 1;
        }
    }
    return false;
};