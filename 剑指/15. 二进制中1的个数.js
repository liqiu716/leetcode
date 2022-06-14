const hammingWeight = (n) => {
    // res记录1的个数
    let res = 0
    // 循环（n !== 0）
    while(n) {
        // n-1：二进制减1，最后一个1变成了0，这个1后面的0变成1
        // 为了把后面的1变回0，把n与n-1相与
        n &= n - 1
        // 个数加1
        res ++
    }
    return res
};
console.log(hammingWeight('00000000000000000000000000001011'))