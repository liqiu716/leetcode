function convert(s, numRows) {
    let arr = [], last = "", goDown = false, i = 0,j = 0;
    for (let i = 0; i < numRows; i++) {
        arr[i] = [];
        for (let j = 0; j < s.length; j++) {
            arr[i][j] = 0;
        }
    }
    if (numRows === 1) {
        return s;
    }
    for (let k=0; k<s.length; k++) {
        if (goDown === false) {
            arr[i++][j] = s.substr(k,1);
        }
        else if (goDown === true) {
            arr[i--][j++] = s.substr(k, 1);
        }
        if (i === 0 || i === numRows-1) {
            goDown = !goDown;
        }
    }
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < s.length; j++) {
            if (arr[i][j] !== 0) {
                last += arr[i][j];
            }
        }
    }
    return last;
}




// console.log(convert("PAYPALISHIRING", 3))
console.log(convert("PAYPALISHIRING", 4))
// console.log(convert("A", 1))