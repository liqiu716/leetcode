var pathSum = function(root, target) {
    // res存储最后要返回的结果，path用来存储从二叉树的根节点到现在这个位置所经过的节点的值
    let res = [], path = []
    // 定义回溯函数，先序遍历二叉树
    const dfs = (root, target) => {
        // 如果root不存在了，则表示这条路找完了，直接返回
        if(!root) return
        // 如果root还存在，则表示还没有找完
        // 把当前节点（root）的值存入path数组
        path.push(root.val)
        // 用题目中的整数目标和target减去当前节点的值
        target -= root.val
        // 如果当前节点没有左子树和右子树，且整数目标和target已经等于0了
        // 就表示这条路径找完了，且这条路径符合题意
        // 就把存储这条路径的数组path复制并存储到结果数组res中
        if(!root.left && !root.right && target === 0) res.push(path.concat())
        // 如果还有左子树或右子树，继续回溯，直到没有左子树或右子树
        // （先序遍历）先找左子树
        dfs(root.left, target)
        // 再找右子树
        dfs(root.right, target)
        // 最后左右子树都有没有了，表示上一个节点的左子树遍历完毕
        // 就把路径中最后一个节点删除，返回上一个节点，遍历上一个节点的右子树
        path.pop()
    }
    // 主函数中调用回溯函数dfs()
    dfs(root, target)
    // 最后返回存储最终结果的数组res
    return res
};
