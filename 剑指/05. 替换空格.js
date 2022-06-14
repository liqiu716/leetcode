var replaceSpace = function(s) {
    let newStr = "";
    // 遍历字符串
    for(let i=0; i<s.length; i++) {
        // 一位一位截取字符串
        let temp = s.slice(i, i+1)
        // 若截取的字符串不是空格，则直接拼接到新定义的字符串变量中
        if(temp !== ' ') {
            newStr += temp
        } else {    //若为空格则在新定义的字符串变量中拼接‘%20’
            newStr += '%20';
        }
    }
    // 最后返回新字符串
    return newStr;
};