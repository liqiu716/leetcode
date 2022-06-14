var reverseWords = function(s) {
    //长度为0 输出空
    if(s.length === 0) return ""
    //strArr存储单词， res存储结果
    let strArr = [], i = s.length-1, res = ""
    //从字符串尾部倒着遍历
    while (i >= 0) {
        //如果不为空格，用j记录该单词的尾部
        if(s[i] !== " ") {
            let j = i
            //继续遍历字符串，遍历到下一个空格，则i为最后一个单词的头部
            while (i >= 0 && s[i] !== " ") i -= 1
            //将这个单词截取下来存储到strArr中
            strArr.push(s.slice(i+1,j+1))
        }
        //如果是空格则继续遍历
        i -= 1
    }
    //如果最终strArr中没有单词（即字符串s中全是空格） 返回空
    if(strArr.length === 0) return ""
    //初始化res为strArr中的第一个单词（即s中的最后一个单词）
    res += strArr[0]
    //接着遍历strArr数组
    for(let k = 1; k < strArr.length; k++) {
        //把strArr中剩下的单词拼接到res后面，用空格分开
        res += " " + strArr[k]
    }
    return res
};

console.log(reverseWords("abcd"))