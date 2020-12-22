function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[leftIdx] === 0) {
        return arr.length
    } else if (arr[rightIdx] === 1) {
        return 0
    }
    while (leftIdx + 1 !== rightIdx)

}

module.exports = countZeroes