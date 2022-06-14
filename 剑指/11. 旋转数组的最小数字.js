var minArray = function(numbers) {
    let left = 0, right = numbers.length-1;
    while(left<right) {
        if(numbers[left] < numbers[right]) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return numbers[left];
};