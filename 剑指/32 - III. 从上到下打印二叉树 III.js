var levelOrder = function(root) {
    let res = [], queue = [], isOrderLeft = true
    if(root === null) return res
    queue.push(root)
    while(queue.length !== 0) {
        let temp = [], len = queue.length
        for(let i=0; i<len; i++) {
            let node = queue.shift()
            if(isOrderLeft) {
                temp.push(node.val)
            } else {
                temp.unshift(node.val)
            }
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        res.push(temp)
        isOrderLeft = !isOrderLeft
    }
    return res
};