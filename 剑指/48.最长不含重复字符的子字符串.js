const lengthOfLongestSubstring = (s) => {
    if(s.length < 2) return s.length
    let res = 0
    //windows用来存储无重复字符
    let windows = []
    //遍历字符串中的每一个字符
    for(let i = 0; i<s.length; i++) {
        //记录当前字符是否出现在windows中
        let index = windows.indexOf(s.slice(i, i+1))
        //若不在，则把当前字符压到windows中
        if( index=== -1) {
            windows.push(s.slice(i, i+1))
        } else {
            //否则更新最长字符串的长度
            res = Math.max(res,windows.length)
            //然后删除windows中与当前字符重复及其之前的字符
            for(let j = 0; j <= index; j++) {
                windows.shift()
            }
            //再把当前字符压到windows中
            windows.push(s.slice(i, i+1))
        }
    }
    //最后，字符串遍历完毕，还需要对res进行一次更新
    //因为字符串遍历完毕之后，windows中一定还存在一个无重复字符串
    //因此还需要验证一下这个字符串是否比之前记录的最大长度值大
    res = Math.max(res,windows.length)
    return res
};

console.log(lengthOfLongestSubstring("pwwkew"))