var fib = function(n) {
    if(n < 2) return n
    let a = 0, b = 1, res = 0
    for( let i=2; i<=n; i++) {
        res = (a + b) % 1000000007
        a = b
        b = res
    }
    return res
};