var getIntersectionNode = function(headA, headB) {
    let [nodeA, nodeB] = [headA, headB]
    while(nodeA !== nodeB) {
        nodeA = nodeA ? nodeA.next : headB
        nodeB = nodeB ? nodeB.next : headA
    }
    return nodeA
};