const spiralOrder = (matrix) => {
    // 矩阵为空，返回空数组
    if (matrix.length === 0) return []
    let res = [], top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1, left = 0
    // 如果还有
    while(left <= right || top <= bottom) {
        // 走第一行，向右走
        for(let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        top ++
        // 如果这一行走完就没有下一行了（不能向下走了），退出循环
        if (left > right) break
        // 走最后一列，向下走
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        right --
        // 如果这一列走完没有上一列了（不能向左走了），退出循环
        if (top > bottom) break
        // 走最后一行，向左走
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i])
        }
        bottom --
        // 如果走完这一行没有上一行了（不能向上走了），退出循环
        if (right < left) break
        // 走第一列，向上走
        for(let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        left ++
        // 如果走完这一列没有下一列了（不能向右走了），退出循环
        if (bottom < top) break
        // 一圈走完
    }
    return res
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))