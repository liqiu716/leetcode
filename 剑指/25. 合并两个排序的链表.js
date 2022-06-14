//迭代解法
var mergeTwoLists = function(l1, l2) {
    //定义一个新的链表
    let res = new ListNode(0)
    //为res定义一个伪头节点
    let head = res
    //当l1与l2都不为空链表时，遍历两个链表
    while(l1 && l2) {
        //如果l1的头节点的值比l2的头节点的值小
        if(l1.val <= l2.val) {
            //就让res伪头节点指向l1的头节点
            head.next = l1
            //同时l1的头节点向后移动一位
            l1 = l1.next
        } else {       //否则当l1的头节点值比l2的头节点值大
            //则让res的伪头节点指向l2的头节点
            head.next = l2
            //同时l2的头节点向后移动一位
            l2 = l2.next
        }
        //每次移动都会让res的伪节点指向一个新的节点(即把l1与l2中较大的头节点压入res)
        //所以res的伪头节点向后移动一位，使这个伪头节点始终指向在res链表的伪节点
        head = head.next
    }
    //当l1与l2任意一个链表为空则跳出循环
    //此时l1与l2中还有一个链表至少有一个节点，则让res伪节点head指向这个链表的头节点
    head.next = l1 === null ? l2 : l1
    return res.next
};