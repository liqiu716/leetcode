let letterCombinations = function (digits) {
    if (digits ==='' || digits.length === 0) {
        return digits;
    }
    let group = { 2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z'] };
    let stepGroup = [], res = [];
    for (let i=0; i<digits.length; i++) {
        stepGroup.push(group[digits.slice(i, i+1)])
    }
    console.log(stepGroup)
    return res;
}

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))
