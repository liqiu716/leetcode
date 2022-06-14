//快慢指针
var getKthFromEnd = function(head, k) {
    let node = head, pre = head
    //先让快指针向后移动k次
    for(let i = 0; i < k; i++) {
        if(node !== null) node = node.next
    }
    //再让慢指针跟着快指针移动，知道快指针到达链表尾部
    while(node) {
        pre = pre.next
        node = node.next
    }
    //返回慢指针
    return pre
};