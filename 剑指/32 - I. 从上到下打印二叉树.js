var levelOrder = function(root) {
    let res = [], queue  = []
    if(root === null) return res
    queue.push(root)
    while(queue.length !== 0) {
        let temp = queue.shift()
        res.push(temp.val)
        if(temp.left) queue.push(temp.left)
        if(temp.right) queue.push(temp.right)
    }
    return res
};