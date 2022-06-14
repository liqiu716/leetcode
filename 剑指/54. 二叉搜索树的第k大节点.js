var kthLargest = function(root, k) {
    // 如果二叉搜索树为空，返回根节点
    if(!root) return root
    // count用来计数，res用来记录结果
    let count = 0, res = null
    // 后序遍历二叉搜索树，倒叙排列，第K个节点的值即为第k大的节点的值
    const dfs = (root) => {
        // 如果当前节点没有右节点或左节点，停止寻找
        if(!root) return
        // 寻找当前节点的右节点
        dfs(root.right)
        // 判断计数器count是否等于k，若等于k，不继续遍历二叉树
        if(count === k) return
        // 每找到一个节点，计数器加1
        count += 1
        // 如果计数器等于k，即找到了第k个大的节点，就把这个节点的值赋值给res
        if(count === k) res = root.val
        // 右子节点找完之后开始找左子节点
        dfs(root.left)
    }
    // 把二叉搜索树根节点带入dfs()函数进行后序遍历
    dfs(root)
    // 最后返回结果
    return res
};