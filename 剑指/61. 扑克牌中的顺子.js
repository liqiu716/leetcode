const isStraight = function (nums) {
    let max = 0, min = 14, dp = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue
        max = Math.max(max, nums[i])
        min = Math.min(min, nums[i])
        if (dp.indexOf(nums[i]) !== -1) {
            return false
        } else {
            dp.push(nums[i])
        }
    }
    return max - min < 5
};
console.log(isStraight([10,11,0,12,6]))