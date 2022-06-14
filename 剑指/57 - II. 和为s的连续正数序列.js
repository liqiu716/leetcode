const findContinuousSequence = (target) => {
    // target为1或2,无至少两个正整数相加的结果为1或2,返回空数组
    if(target === 1 || target === 2) return []
    // res保存结果,left:左边界,right:右边界
    let res = [], left = 1, right = 2
    // 右边界最大设为target/2向上取整,因为右边界大于这个值后,不可能再找到连续的数字相加等于target
    while (right <= Math.ceil(target/2)) {
        // 等差数列通项公式计算左边界到右边界各位数相加的值
        let sum = ((left + right) * (right - left + 1)) / 2
        // 如果小于target，右边界向右移动1
        if(sum < target) right += 1
        // 如果大于target，左边界向右移动1
        else if (sum > target) left += 1
        // 如果相等，就把左边界到右边界的各位数以数组形式添加到res中
        else {
            let tempArr = []
            for (let i = left; i <= right; i++) tempArr.push(i)
            res.push(tempArr)
            // 且左边界向右移动1
            left += 1
        }
    }
    return res
};

console.log(findContinuousSequence(9))