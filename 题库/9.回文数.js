function isPalindrome(x) {
    let num = x.toString(), newNum = "";
    for (let i=num.length-1; i>=0; i--) {
        newNum += num.slice(i, i+1);
    }
    return num === newNum;
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))