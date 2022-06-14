var add = function(a, b) {
    while(b) {
        let num = a & b
        a = a ^ b
        b = num << 1
    }
    return a
};

console.log(add(1,1))