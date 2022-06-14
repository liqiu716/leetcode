function threeSum(nums){
    nums = nums.sort((a, b) => a - b);
    let num = [];
    if (nums.length < 3) {
        return num;
    }
    for (let i=0; i<nums.length-2 && nums[i] <= 0; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                num.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l+1]) {
                    l += 1;
                }
                while (l < r && nums[r] === nums[r-1]) {
                    r -= 1;
                }
                l += 1;
                r -= 1;
            }else if (sum < 0) {
                l += 1;
            }else if (sum > 0) {
                r -= 1;
            }
        }
    }
    return num;
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,0,0,0]))
console.log(threeSum([0,0,0,0,0]))
console.log(threeSum([1,-1,-1,0]))
console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]
))
