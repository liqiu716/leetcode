function searchMatrix(matrix, target) {
    if(matrix.length === 0) return false;
    let m = matrix.length-1, n = matrix[0].length-1, j = 0;
    while (m >= 0 && j <= n) {
        let x = matrix[m][j];
        if(x === target) return true;
        if(x > target) {
            m -= 1;
        } else {
            j += 1;
        }
    }
    return false;
}

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],15))