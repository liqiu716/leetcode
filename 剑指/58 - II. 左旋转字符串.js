var reverseLeftWords = function(s, n) {
    if(s.length === 0) return s;
    let temp = s.slice(0,n);
    s = s.slice(n);
    s = s + temp;
    return s;
};