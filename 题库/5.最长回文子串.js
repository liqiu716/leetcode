function longestPalindrome(s) {
    let maxtext= [], m = 0, n = 0;
    if (s.length <= 1) {
        return s;
    }
    for (let i= 0; i<s.length; i++) {
        while (s[i - m] === s[i + m] && s[i - m] && s[i + m]) {
            m++;
        }
        maxtext.push(s.slice(i - m + 1, i + m));
        m = 0;
        while (s[i - n] === s[i + n + 1] && s[i - n] && s[i + n + 1]) {
            n++;
        }
        maxtext.push(s.slice(i - n + 1, i + n +1));
        n = 0;
    }
    return maxtext.sort((a, b) => {
        return b.length - a.length;
    })[0];
}



console.log(longestPalindrome("aacabdkacaa"))
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("abcd"))