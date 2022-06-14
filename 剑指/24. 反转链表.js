var reverseList = function(head) {
    //pre为当前节点的前一个结点，当前节点为1；所以pre的初始值为null
    //temp为当前节点的下一个节点，先定义为null
    let pre = null,temp = null;
    //当head头节点不为空的时候，执行循环
    while(head != null) {
        //初始化temp的值，使temp指针指向当前节点的下一个节点（即head.next）
        temp = head.next;
        //然后改变当前节点的指针使之指向当前节点的上一个节点
        head.next = pre;
        //让pre指针指向当前节点，作为下一个节点的上一个节点
        pre = head;
        //让下一个节点成为当前节点
        head = temp;
    }
    return pre;
};