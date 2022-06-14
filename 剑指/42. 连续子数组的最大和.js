var maxSubArray = function(nums) {
    //贪心算法
    let curNum = 0, res = nums[0]
    for(let num of nums) {
        if(curNum <= 0) curNum = num
        else curNum  += num
        res = Math.max(res, curNum)
    }
    return res
};