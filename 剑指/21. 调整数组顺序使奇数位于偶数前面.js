var exchange = function(nums) {
    //定义两个数组，一个用来存放奇数，一个用来存储偶数
    let nums1 = [], nums2 = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 !== 0) {
            nums1.push(nums[i])
        } else {
            nums2.push(nums[i])
        }
    }
    //将偶数数组加在奇数数组的后面
    for(let j = 0; j < nums2.length; j++) {
        nums1.push(nums2[j])
    }
    return nums1
};