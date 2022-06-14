var lowestCommonAncestor = function(root, p, q) {
    // 如果树为空，直接的返回空树
    if(!root) return root
    // 如果p或者q中任意一个等于根节点，则直接返回根节点
    if(root.val === p.val || root.val === q.val) return root
    // 递归遍历左子树，只要在左子树中找到了p或者q，先找到谁就返回谁
    let left = lowestCommonAncestor(root.left, p, q)
    // 递归遍历右子树，只要在右子树中找到了p或者q，先找到谁就返回谁
    let right = lowestCommonAncestor(root.right, p, q)
    // 如果left和right都不为空，就说明p和q分别在当前节点的左边和右边，返回当前节点
    if(left && right) return root
    // 如果左子树中p和q都没有找到，则说明在右子树中，在右子树中先遍历到的那个就是最近公共祖先
    else if (!left) return right
    // 如果右子树中p和q都没有找到，则说明在左子树中，在左子树中先便利到的那个就是最近公共祖先
    else if (!right) return left
};