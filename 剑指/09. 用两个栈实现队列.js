var CQueue = function() {
    this.inStack = [];      // 定义输入栈
    this.outStack = [];     // 定义输出栈
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value);          // 压栈
    return null;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 判断队列中有没有元素，若没有则返回-1
    if (!this.inStack.length && !this.outStack.length) return -1;
    // 判断输出栈是否为空，若为空，则先把输入栈中的元素压到输出栈
    if (!this.outStack.length) {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
    // 最后出栈（输出）
    return this.outStack.pop();
};