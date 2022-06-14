var deleteNode = function(head, val) {
    if(head && head.val === val) return head.next
    let pre = null, node = head
    //自己的做法
    // while (node !== null) {  ///遍历链表
    //     if(node.val === val) {   //如果当前节点值等于val
    //         node = node.next     //当前节点的上一节点指向当前节点的下一节点
    //         pre.next = node
    //         continue
    //     } else {
    //         pre = node       //否则当前节点成为上一节点，下一节点成为当前节点
    //         node = node.next
    //     }
    // }
    //题解的做法
    while(node && node.val !== val) {   //遍历链表，直到当前节点的值等于val
        pre = node
        node = node.next
    }
    pre.next = node.next   //当前节点的上一节点指向当前节点的下一节点
    //上下两句皆可
    // if(node) pre.next = node.next
    return head
};