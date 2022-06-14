var MinStack = function() {
    this.xStack=[];        //定义存储压入数据的栈
    this.minStack = [Infinity];     //定义存储数据栈栈中最小元素的栈
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // 压栈（压入数据）
    this.xStack.push(x);
    // 压栈（压入数据栈中的最小数字）
    this.minStack.push(Math.min(this.minStack[this.minStack.length-1],x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.xStack.pop();      // 去除数据栈栈顶的数
    this.minStack.pop();    // 去除存储最小数据栈栈顶的数
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // 返回数据栈栈顶的数
    return this.xStack[this.xStack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    // 返回最小数据栈栈顶的数
    return this.minStack[this.minStack.length-1];
};