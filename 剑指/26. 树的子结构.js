var isSubStructure = function(A, B) {
    //A为空直接返回false，且(约定空树不是任意一个树的子结构，因此B也不能为空)
    if(!A || !B) return false
    const dfs = (A, B) =>{
        //如在递归中，B的子节点为空，则匹配成功，返回true
        if(!B) return true
        //如果!A（A走到底了，但是B还有子节点），或者A的节点值不等于B的节点值，则返回false
        if(!A || A.val !== B.val) return false
        //节点匹配成功且还有子节点，继续递归
        return dfs(A.left, B.left) && dfs(A.right, B.right)
    }
    //当前节点递归匹配成功，或者左节点递归匹配成功，或者右节点递归匹配成功
    return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};