var firstUniqChar = function(s) {
    for(let i=0; i<s.length; i++) {
        let m = s.indexOf(s[i]);
        let n = s.indexOf(s[i], m+1);
        if(n === -1) return s[i];
    }
    return ' ';
};