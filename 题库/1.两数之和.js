function twoSum(nums, target){
    let x, number = [];
    for(let a=0; a<nums.length; a++){
        x = target - nums[a];
        for(let b=a+1; b<nums.length; b++){
            if(x === nums[b]){
                number.push(a);
                number.push(b);
            }
        }
    }
    return number;
}

console.log(twoSum([2,7,11,15], 9))