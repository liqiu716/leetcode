var reversePrint = function(head) {
    //nums数组用作最后的输出
    let nums = [];
    //头节点存在（不为空）
    while (head !== null) {
        //把head中的元添加到数组中，由于head是链表（先进先出）所以nums数组要向头部添加数据
        nums.unshift(head.val);
        //头节点指向下一节点
        head = head.next;
    }
    return nums;
};