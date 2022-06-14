var sumNums = function(n) {
    // 逻辑中断（短路运算）
    return n > 0 && n + sumNums(n - 1)
    // 上述代码等同于
    // if(n > 0) {
    //     return n + sumNums(n - 1)
    // }
};
console.log(sumNums(3))