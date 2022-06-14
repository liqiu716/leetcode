var isBalanced = function(root) {
    // res记录返回值，初始为true
    let res = true
    // 如果根节点是空，直接返回true
    if(!root) return true
    // 定义递归函数，中序遍历二叉树
    const deep = (root) => {
        // 如果当前节点为空，返回深度为0
        if(!root) return 0
        // 用两个变量记录当前节点的左节点和右节点的深度
        let Left = deep(root.left), Right = deep(root.right)
        // 如果左节点的深度与右节点的深度相差大于1
        if(Math.abs(Left - Right) > 1) {
            // 改变返回值为false
            res = false
            // 直接返回，切断递归
            return
        }
        console.log(Left,Right)
        // 否则继续遍历
        return Math.max(Left, Right) + 1
    }
    // 调用递归函数
    deep(root)
    // 返回
    return res
};