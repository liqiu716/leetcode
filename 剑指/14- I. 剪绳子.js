const cuttingRope = (n) => {
    // dp数组记录长度为0~n每一种长度的分段最大乘积,初始化都为0
    let dp = new Array(n+1).fill(0)
    // 绳子的最小长度为2,所以从2开始循环
    for (let i = 2; i < n + 1; i++) {
        // 至少切一刀(至少切长度1),所以j从1开始
        for (let j = 1; j < i; j++) {
            // 计算长度为i时的分段最大乘积
            // dp[i]是j++之前的dp[i]的最大乘积
            // i-j 与 dp[i-j]分别是剪了j长度之后剩下的是否继续剪
            // 不继续剪那后面的长度为i-j,继续剪的话后面的长度的分段最大乘积为dp[i-j](会发现dp[i-j]在这之前一定是已经被计算出来的)
            dp[i] = Math.max(dp[i], j * Math.max(i-j, dp[i - j]))
        }
    }
    return dp[n]
};

console.log(cuttingRope(10))