const lastRemaining = (n, m) => {
    // 正确但超时
    // if(n === 1) return 0
    // let num = [], cur = -1
    // for (let i = 0; i < n; i++) num.push(i)
    // while(num.length !== 1) {
    //     for(let i = 0; i < m; i++) {
    //         if(cur + 1 >= num.length) cur = 0
    //         else cur++
    //     }
    //     num.splice(cur, 1)
    //     cur--
    // }
    // return num[0]


    //正确但超时
    // if(n === 1) return 0
    // let num = [], cur = -1
    // for (let i = 0; i < n; i++) num.push(i)
    // while(num.length !== 1) {
    //     cur = (cur + m) % num.length
    //     num.splice(cur, 1)
    //     cur -= 1
    // }
    // return num[0]

    // 正确但超时
    // if(n === 1) return 0
    // let num = [], cur = -1
    // for (let i = 0; i < n; i++) num.push(i)
    // while(num.length !== 1) {
    //     cur += m
    //     if(cur >= num.length) {
    //         cur = cur % num.length
    //     }
    //     num.splice(cur, 1)
    //     cur -= 1
    // }
    // return num[0]

    // 约瑟夫环
    // res记录存活的人的下标
    let res = 0
    for(let i = 2; i <= n; i++) {
        res = (res + m) % i
    }
    return res
    // n = 5        m = 3
    // 1个人  f(1) = 0 只有一个人，这个人胜利      下标为0的人胜利
    // 2个人  f(2) = (f(1) + m) % 2 = 1      下标为1的人胜利
    // 3个人  f(3) = (f(2) + m) % 3 = 1      下标为1的人胜利
    // 4个人  f(4) = (f(3) + m) % 4 = 0      下标为0的人胜利
    // 5个人  f(5) = (f(4) + m) % 5 = 3      下标为3的人胜利
    // .
    // .
    // .
    // n个人  f(n)根据以上规律      下标为(f(n-1) + m) % n的人胜利
};

console.log(lastRemaining(61470,105136))