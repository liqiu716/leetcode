//运行不了是因为ListNode是leetcode中定义的内部元素。
function addTwoNumbers(l1, l2) {
    let head = null, tail = null, carry = 0;
    while(l1 || l2){
        const n1 = l1 ? l1.values() : 0;
        const n2 = l2 ? l2.value() : 0;
        const sum = n1 + n2 + carry;
        if(!head){
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    if(carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
}

console.log(addTwoNumbers([2,4,3],[5,6,4]))
console.log(addTwoNumbers([0],[0]))
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))
