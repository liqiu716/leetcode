const buildTree = (preorder, inorder) => {
    // 定义递归函数，传入的参数为：根节点下标、左边距、右边距
    const construct = (preRootId, inL, inR) => {
        // 如果左边距大于右边距，返回null
        if(inL > inR) return null
        // 获取根节点的值
        let rootVal = preorder[preRootId]
        // 获取先序遍历中根节点在中序遍历中的位置
        let inRootId = inorder.indexOf(rootVal)
        // 获取根节点左子树中的元素个数
        let leftLen = inRootId - inL
        // 用根节点创建树
        let root = new TreeNode(rootVal)
        // 左子树中的元素继续按照上面的步骤，直到左边距大于右边距
        root.left = construct(preRootId + 1, inL, inRootId - 1)
        // 右子树中的元素继续按照上面的步骤，直到左边距大于右边距
        root.right = construct(preRootId + leftLen + 1, inRootId + 1, inR)
        // 最后返回根节点
        return root
    }
    // 调用递归函数并返回
    // 传入第一个根节点的下标（先序遍历的第一个节点，所以下标为0）
    // 左边距初始在中序遍历结果的最左边为0
    // 右边距在中序遍历的最右边为中序遍历结果的长度减一
    return construct(0, 0, inorder.length - 1)
};