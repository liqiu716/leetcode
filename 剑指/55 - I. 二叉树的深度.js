var maxDepth = function(root) {
    // 如果当前节点的左节点或右节点为空，则返回0
    if(!root) return 0
    // 递归，判断当前节点的左右孩子节点哪一个的深度更深，那么当前节点的深度为最深的那个子节点的深度加1
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
