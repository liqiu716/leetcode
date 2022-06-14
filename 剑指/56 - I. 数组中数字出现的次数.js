const singleNumbers = (nums) => {
    let res = 0
    // res保存数组所有元素的异或结果
    for (let num of nums) res ^= num
    // 找到res中为1的位,表示在做异或时这一位上的数不同(即数组中不同的两个数),所以才会为1
    let bit = (res & -res)
    // 用m和n分别记录两个不同的数
    let m = 0, n = 0
    // 遍历数组
    for (let num of nums) {
        // 通过if判断把在res中1位置上相同的元素分在一起,这样可以把两个不同的数分别与m或n相与
        // 因为相同的元素相与会抵消,所以最后m与n分别是数组中两个不同的元素
        if ((num & bit) === 0) m ^= num
        else n ^= num
    }
    return [m, n]
};

console.log(singleNumbers([4,1,4,6]))