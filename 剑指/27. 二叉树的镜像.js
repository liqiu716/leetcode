var mirrorTree = function(root) {
    if(root === null) return root
    let queue = [root]
    while(queue.length !== 0) {
        let node = queue.shift()
        if(node !== null) {
            let left = node.left, right = node.right
            node.left = right
            node.right = left
            queue.push(left)
            queue.push(right)
        }
    }
    return root;
};