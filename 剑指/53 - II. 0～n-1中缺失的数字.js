var missingNumber = function(nums) {
    //若首元素是1，则返回0
    if(nums[0] === 1) return 0;
    for(let i=0; i<nums.length; i++) {
        //对比元素与下标，不相等则返回下标（因为数组从0开始，所以数组元素应等于对应的下标）
        if(nums[i] !== i) return i;
    }
    //否则返回数组的长度（即所有的元素都等于下标那就返回最后一个元素的下一个元素）
    return nums.length;
};