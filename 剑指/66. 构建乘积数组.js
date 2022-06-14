const constructArr = (a) => {
    let res = [], left = new Array(a.length), right = new Array(a.length)
    for(let j = a.length - 1; j >= 0; j--) {
        if(j === a.length - 1) {
            right[j] = 1
        } else{
            right[j] = right[j + 1] * a[j + 1]
        }
    }
    for(let i = 0; i < a.length; i++) {
        if(i === 0) {
            left[i] = 1
        } else {
            left[i] = left[i - 1] * a[i - 1]
        }
        res.push(left[i] * right[i])
    }
    return res
};

console.log(constructArr([1,2,3,4,5]))