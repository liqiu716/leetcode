//回溯法，递归求解，dfs（深度优先）
var exist = function(board, word) {
    let row = board.length, col = board ? board[0].length : 0
    //定义回溯函数
    const dfs = (k, i , j) => {
        //如果i或者j在回溯的过程中超出了界限，或者第k个字符与矩阵中当前位置的字符不同，则返回false
        if(!(i >= 0 && i < row) || !(j >= 0 && j < col) || (word[k] !== board[i][j])) return false
        //如果字符串中的字符在回溯中到达了最后一个，则表示找到了一条符合的路径，返回true
        if(k === word.length-1) return true
        //为了在找下一个字符时，不会寻找找过的位置，用temp存储矩阵中上一个位置的值
        let temp = board[i][j]
        //然后把矩阵中的这个值换成不存在的一个字符#
        board[i][j] = "#"
        //继续往下一个字符进行回溯，直到找到最后一个字符
        let res =  dfs(k+1, i-1, j) || dfs(k+1, i+1, j) || dfs(k+1, i, j-1) || dfs(k+1, i, j+1)
        //将矩阵中的上一个值还回去
        board[i][j] = temp
        //回溯完成后返回是否找到了符合的路径
        return res
    }
    //循环每一个元素对齐进行递归
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            //根据dfs中返回的结果，如果找到任意一条符合的路径，返回true
            if(dfs(0,i,j)) return true
        }
    }
    //如果循环完毕都还没有找到合适的路径，则返回false
    return false
};

console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],"ABCESEEEFS"))