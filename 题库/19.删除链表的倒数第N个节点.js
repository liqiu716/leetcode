const removeNthFromEnd = function(head, n) {
    let len = 0, node = head
    while(node !== null) {
        len += 1
        node = node.next
    }
    node = head
    let temp = len-n, next = null  //temp = 3
    if(temp === 0) return head.next
    if(temp === 1) {
        head.next = node.next.next
        return head
    }
    for(let i=0; i<temp-1; i++) {
        next = node.next
        node = next
    }
    next.next = next.next.next
    return head
};

console.log(removeNthFromEnd())