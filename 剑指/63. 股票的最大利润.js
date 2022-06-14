var maxProfit = function(prices) {
    // let max = 0, len = prices.length
    // for(let i=0; i<len-1; i++) {
    //     for(let j=i+1; j<len; j++) {
    //         max = i<j ? Math.max(max,prices[j] - prices[i]) : max
    //     }
    // }
    // return max
    let min = Number.MAX_VALUE, max = 0
    for(let price of prices) {
        max = Math.max(price - min, max)
        min = Math.min(min, price)
    }
    return max
};