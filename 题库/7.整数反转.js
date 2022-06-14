var reverse = function(x) {
    let num = x.toString(), newNum = "", flag = "";
    if (x === 0) {
        return x;
    } else if(x > 0) {
        for (let i=num.length-1; i>=0; i--) {
            newNum += num.slice(i, i+1);
            newNum = parseInt(newNum);
        }
    } else {
        flag = num.slice(0,1);
        for (let i=num.length-1; i>=1; i--) {
            newNum += num.slice(i, i+1);
        }
        newNum = flag + newNum;
        newNum = parseInt(newNum);
    }
    if ( newNum > Math.pow(2,31)-1 || newNum < -Math.pow(2,31)) {
        return 0;
    }
    return newNum;
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))
console.log(reverse(1534236469))
