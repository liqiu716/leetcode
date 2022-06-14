var myPow = function(x, n) {
    // 常规写法，会炸
    // if(x === 0) return 0
    // if(n === 0) return 1
    // let flag = false, res = 1
    // if(n < 0) {
    //     n = -n
    //     flag = !flag
    // }
    // while(n !== 0) {
    //     res = res * x
    //     n -= 1
    // }
    // return flag ? 1/res : res

    // 快速幂算法
    if(x === 0) return 0
    const fastPow = (x, n) => {
        if(n === 0) return 1
        let res = fastPow(x, Math.floor(n/2))
        return n % 2 === 0 ? res * res : res * res * x
    }
    return n > 0 ? fastPow(x, n) : 1/fastPow(x, -n)
};