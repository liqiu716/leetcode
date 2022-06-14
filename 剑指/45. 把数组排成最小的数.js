var minNumber = function(nums) {
    // res存储返回值
    let res = ""
    // 自定义比较函数
    const compare = (x, y) => {
        console.log(x, y)
        // 注意:这里的比较方式为对两个数进行拼接比较大小,所以要把参数值转换为字符串
        let a = String(x) + String(y), b = String(y) + String(x)
        // 返回正数表示两者需要交换位置
        // if(a > b) return 1
        // 返回负数表示两者不需要交换位置
        // else if(a < b) return -1
        // 返回0则表示两者相等，也不需要操作
        // else return 0
        // 用上面的三行代码或下面的一行代码皆可
        return a - b
    }
    // 对用自定义函数对数组进行排序
    nums.sort(compare)
    // 把排好序的数组的每一项拼接起来
    while(nums.length !== 0) {
        res += nums.shift()
    }
    // 最后返回拼接的字符串
    return res
};
console.log(minNumber([3,30,34,5,9]))