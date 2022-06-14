var twoSum = function(nums, target) {
    let left = nums[0], right = nums[nums.length-1], res = []
    while (left < right){
        if(left + right > target) {
            nums.pop()
            right = nums[nums.length-1]
        } else if(left + right < target) {
            nums.shift()
            left = nums[0]
        } else {
            res.push(left, right)
            break
        }
    }
    return res
};

console.log(twoSum([2,7,11,15],9))