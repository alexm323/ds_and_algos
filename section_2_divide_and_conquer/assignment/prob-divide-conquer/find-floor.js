function findFloor(arr, target, start = 0, end = arr.length - 1) {
    if (arr[start] > target) {
        return -1
    }
    if (arr[end] < target) {
        return arr[end]
    }
    if (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] > target && arr[mid - 1]) {
            return mid - 1
        } else if (arr[mid] < target) {
            return findFloor(arr, target, mid + 1, end)
        }
        return findFloor(arr, target, left, mid - 1)
    }
}

module.exports = findFloor

//            L M    R
//            L      M        R
// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1


module.exports = findFloor