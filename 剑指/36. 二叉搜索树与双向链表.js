var treeToDoublyList = function(root) {
    // 如果二叉树根节点为空，直接返回二叉树根节点
    if(!root) return root
    // head用来存储转换成链表后的头节点，last用来存储尾节点
    let head = null, last = null
    // 中序遍历二叉树（从左至右）
    const dfs = (root) => {
        // 在递归过程中，如果当前节点没有左节点或右节点了，则返回（停止寻找）
        if(!root) return
        // 寻找当前节点的左节点
        dfs(root.left)
        // 左节点找完后，如果尾节点还没有值（第一次把左节点找完，找到了中序遍历的第一个节点）
        if(last === null) {
            // 让链表的头节点指向当前节点，这条代码只在找到中序遍历的第一个节点时执行
            head = root
        } else {
            // 如果当前节点已经不是中序遍历的第一个节点，开始执行此代码块
            // 让尾节点的右指针指向当前节点
            last.right = root
            // 让当前节点的左指针指向尾节点
            root.left = last
        }
        // 让链表尾节点指向当前节点
        last = root
        // 寻找当前节点的右节点
        dfs(root.right)
    }
    // 把根节点带入dfs()函数中序遍历二叉树
    dfs(root)
    // 遍历完成后，head指向链表头节点，last指向链表尾节点
    // 为了让链表循环，还需要让头节点的左指针指向尾节点
    head.left = last
    // 让尾节点的右指针指向头节点
    last.right = head
    // 至此，已经将二叉树转换成了循环双向链表，返回循环双向链表的头节点head
    return head
};