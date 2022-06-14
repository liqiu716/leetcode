const majorityElement = (nums) => {
    // rating记录当前相同元素的个数，res记录最终结果
    let rating = 0, res = 0
    // 遍历数组
    for(let num of nums) {
        // 如果rating为0了，则直接把当前元素前面的元素舍去
        // 让res直接等于当前元素不会影响最终结果
        if (rating === 0) res = num
        // 如果当前元素与第一个元素相等，则rating加1
        if (num === res) rating += 1
        // 否则rating减1
        else rating -= 1
        // 这样到最后rating一定是>=1的，也就是说到最后res记录的就是要找的那个元素
    }
    return res
};
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))