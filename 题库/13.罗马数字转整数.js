let romanToNum = function (str) {
    let map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let num=0;
    for (let i=0; i<str.length; i++) {
        if (map[str[i]] < map[str[i+1]]) {
            num -= map[str[i]];
        } else {
            num += map[str[i]];
        }
    }
    return num;
}

console.log(romanToNum('III'))
console.log(romanToNum('IV'))
console.log(romanToNum('IX'))
console.log(romanToNum('LVIII'))
console.log(romanToNum('MCMXCIV'))

