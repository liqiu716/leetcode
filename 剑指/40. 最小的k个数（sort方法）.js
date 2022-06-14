let getLeastNumbers = (arr, k) => {
    arr.sort((a, b) => a-b)
    return arr.slice(0, k)
}

console.log(getLeastNumbers([3,2,1],2))