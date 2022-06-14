function threeSum(nums, target){
    nums = nums.sort((a, b) => a - b);
    let num = [];
    if (nums.length < 4) {
        return num;
    }
    for (let m = 0; m < nums.length-3; m++) {
        if (m > 0 && nums[m] === nums[m-1]) {
            continue;
        }
        for (let i=m+1; i<nums.length-2; i++) {
            if (i > m + 1 && nums[i] === nums[i-1]) {
                continue;
            }
            let l = i + 1, r = nums.length - 1;
            while (l < r) {
                let sum = nums[m] + nums[i] + nums[l] + nums[r];
                if (sum === target) {
                    num.push([nums[m], nums[i], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l+1]) {
                        l += 1;
                    }
                    while (l < r && nums[r] === nums[r-1]) {
                        r -= 1;
                    }
                    l += 1;
                    r -= 1;
                } else if (sum < target) {
                    l += 1;
                } else if (sum > target) {
                    r -= 1;
                }
            }
        }
    }
    return num;
}

console.log(threeSum([1,0,-1,0,-2,2], 0))
console.log(threeSum([2,2,2,2,2,2], 8))
console.log(threeSum([0,0,0,0], 1))
console.log(threeSum([-2,-1,-1,1,1,2,2], 0))

