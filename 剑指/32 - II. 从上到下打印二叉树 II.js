var levelOrder = function(root) {
    let res = [], queue = []
    if(root === null) return res
    queue.push(root)
    while(queue.length !== 0) {
        let temp = [], len = queue.length
        for(let i=0; i<len; i++) {
            let node = queue.shift()
            temp.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        res.push(temp)

    }
    return res
};