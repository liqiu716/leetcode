var verifyPostorder = function(postorder) {
    // 后序遍历，最后遍历到的节点为根节点
    // 二叉搜索树，左子树的所有节点<根节点<右子树的所有节点
    const rescur = (postorder, left, right) => {
        // 如果节点数小于1，即当前节点没有后续子节点，直接返回true
        if(left >= right) return true
        // m记录左子树的大小
        let m = 0
        // 从头开始遍历数组，数组的前m个比数组最后一个元素小的元素就是该二叉搜索树的左子树的节点
        while(postorder[m] < postorder[right]) m += 1
        // 接着在数组中遍历剩下的数，确定右子树中的元素
        for(let n = m; n < right; n++) {
            // 如果有元素小于数组最后一个元素
            // 则该数组破坏了二叉搜索树的有序性，返回false
            if(postorder[n] < postorder[right]) return false
        }
        // 递归，继续在左子树的节点和右子树的节点中重复以上操作
        // 若左右子树中的节点都符合二叉搜索数的性质，则该数组是二叉搜索数的后序遍历结果，否则不是
        return rescur(postorder, left, m - 1) && rescur(postorder, m, right - 1)
    }
    // 调用递归函数并返回
    return rescur(postorder, 0, postorder.length - 1)
};