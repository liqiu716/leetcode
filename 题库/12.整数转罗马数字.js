let intToRoman = function (num) {
    let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let reps = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let res = '';
    for (let i=0; i<values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            res += reps[i];
        }
    }
    return res;
}


console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(9))
console.log(intToRoman(58))
console.log(intToRoman(1994))