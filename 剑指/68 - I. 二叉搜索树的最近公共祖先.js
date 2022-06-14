const lowestCommonAncestor = function(root, p, q) {
    // 递归解法
    // 若p和q都比root小，则在root的左边继续寻找
    // if(p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q)
    // 若p和q都比root大，则在root的右边寻找
    // if(p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q)
    // 否则一个比root小，一个比root大，则当前节点就是p和q的最近公共祖先
    // return root

    // 迭代解法
    // 若还存在节点，则进入while
    while(root) {
        if(p.val < root.val && q.val < root.val) return root = root.left
        if(p.val > root.val && q.val > root.val) return root = root.right
        break
    }
    return root
};

console.log(lowestCommonAncestor())