function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }
    let max = strs[0];
    for (let i=1; i<strs.length; i++) {
        while (!strs[i].startsWith(max)) {
            max = max.slice(0, max.length-1);
        }
    }
    return max;
}
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
