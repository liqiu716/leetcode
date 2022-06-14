const singleNumber = (nums) => {
    // bitMask是一个最高位为1的32为整数， res记录结果初始位0
    let bitMask = 1 << 31, res = 0
    // nums中的元素最大为2^31-1，所以设定每一个元素都有32位
    // 这里是要对每一个元素的每一位进行处理,所以是[0,32)
    for (let i = 0; i < 32; i++) {
        // 统计在这一位上的1的个数
        let bitSum = 0
        // 循环数组中的没哟个元素
        for (let num of nums) {
            // 如果当前元素与bitMask相与结果是1,就表示当前元素在当前位上的值是1,计数器自加1
            // if(bitMask & num) bitSum ++
        }
        // 改变res的值,先把res左移一位,再加上计数器与3的余数
        // bitSum%3: 根据题意,数组中只有一个数出现一次,其他的数字出现3次
        // 所以这个位置上的1的个数即bitSum为3的倍数,如果不是3的倍数
        // 则说明这个位置上的1的个数与3取余的数就是这个只出现一次的数字在这个位置上的值
        res = (res << 1) + bitSum % 3
        // 把bitMask右移一位,继续对下一位进行操作
        bitMask >>>= 1
    }
    return res
};

console.log(singleNumber([3,4,3,3]))