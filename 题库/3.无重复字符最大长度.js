function lengthOfLongestSubstring(s){
    let number = 0;
    if(s.length === 0){
        return 0;
    }
    for(let a=0; a<s.length; a++) {
        let data = "";
        data += s.slice(a, a + 1);
        for (let b = a + 1; b < s.length; b++) {
            if (data.indexOf(s.slice(b, b + 1)) === -1) {
                data += s.slice(b, b + 1);
            }else {
                break;
            }
        }
        if (number < data.length){
            number = data.length;
        }
    }
    return number;
}

console.log(lengthOfLongestSubstring(""))