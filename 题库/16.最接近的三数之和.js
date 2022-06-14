var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){
        return a-b
    })
    let res =nums[0]+nums[1]+nums[2]
    for(let i=0; i<nums.length-1; i++) {
        let start = i + 1, end = nums.length-1
        while(start < end) {
            let sum = nums[i] + nums[start] + nums[end]
            if(Math.abs(target - sum) < Math.abs(target - res)) res = sum
            if(sum < target)
                start += 1
            else if(sum > target)
                end -= 1
            else
                return res
        }
    }
    return res
};