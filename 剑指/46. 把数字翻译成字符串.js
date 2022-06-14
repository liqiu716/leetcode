//类似于青蛙跳台阶的问题，自己不过这里需要判断相邻两位数字组合而成的数字是否在10~25范围内
//如果是，则按照青蛙跳台阶的方法计算，若不在10~25范围内，则组合数量不变
var translateNum = function(num) {
    num = num.toString()
    let dp = new Array(num.length).fill(0)
    dp[0] = 1
    for(let i = 1; i < num.length; i++) {
        let temp = parseInt(num.slice(i-1,i+1))
        if(temp > 9 && temp <26) {
            if(i === 1) {
                dp[i] = 2
            } else {
                dp[i] = dp[i-2] + dp[i-1]
            }
        } else {
            dp[i] = dp[i-1]
        }
    }
    return dp[dp.length-1]
};