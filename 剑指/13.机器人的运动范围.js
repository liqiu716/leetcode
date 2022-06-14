var movingCount = function(m, n, k) {
    //定义一个与题目方格等高等宽的二维数组，用来存储格子的访问状态（应为访问过的格子不能再次访问）
    let dp  = new Array(m).fill(false).map(_ => new Array(n).fill(false))
    //定义一个函数用来计算行坐标和列坐标的数位之和
    const sum = (i,j) => {
        let res = 0
        //计算行坐标数位之和
        while(i !== 0) {
            res += i % 10
            i = Math.floor(i / 10)
        }
        //计算列坐标数位之和
        while(j !== 0) {
            res += j % 10
            j = Math.floor(j / 10)
        }
        //返回行列坐标数位之和
        return res
    }
    //定义回溯函数
    const dfs = (i, j) => {
        //如果格子超出了界限，或者行列坐标数位之和大于给定的值K，或者该格子已经访问过了
        //则返回0，表示这个格子不符合条件（机器人无法移动到该格子）
        if(i >= m || j >= n || sum(i, j) > k || dp[i][j] === true) return 0
        //把本次到达的格子置为已访问
        dp[i][j] = true
        //进行回溯，回溯完成后返回一个数字（即机器人能够到达的格子数）
        return 1 + dfs(i+1, j) + dfs(i, j+1)
    }
    //调用回溯函数dfs()
    return dfs(0, 0)
};

console.log(movingCount(3,2, 17))