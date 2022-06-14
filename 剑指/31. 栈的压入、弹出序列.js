var validateStackSequences = function(pushed, popped) {
    let stack = [], i = 0
    // 循环pushed数组
    for (let num of pushed) {
        // 把循环得到的元素加到stack
        stack.push(num)
        // 如果stack不为空且stack的最后一个元素与popped的第i个元素相等
        while (stack.length !== 0 && stack[stack.length-1] === popped[i]) {
            // 就把这个元素从stack中pop掉
            stack.pop()
            // 出栈指针加一
            i ++
        }
        // 否则继续把循环得到的元素加到stack中
    }
    // 如果pushed中的元素push完后stack中的元素还没有pop完，则说明popped不是pushed的出栈序列
    return stack.length === 0
}

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))