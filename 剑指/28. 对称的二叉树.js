var isSymmetric = function(root) {
    //递归方式求解
    const isEqual=(A,B) => {
        //如果左右节点都不存在，则表示对称，返回true
        if(!A && !B) return true
        //如果左右节点有一个不存在，有一个存在，则表示不对称，返回false
        if(!A || !B) return false
        //如果左右节点的值不相等，则表示不对称，返回false
        if(A.val !== B.val) return false
        //否则，左右节点存在，且值相等，
        //则递归判断左节点的左指针是否等于右节点的右指针
        //递归判断左节点的右指针是否等于右节点的左指针
        return isEqual(A.left,B.right) && isEqual(A.right, B.left)
    }
    //如果根节点存在，则把根节点的左右节点传入递归函数进行递归判断
    //若根节点不存在，则返回true
    return root?isEqual(root.left, root.right):true
};