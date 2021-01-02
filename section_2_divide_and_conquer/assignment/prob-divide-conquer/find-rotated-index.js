

function findRotationStart(arr) {

    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) {
        return 0
    }
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((rightIndex - leftIndex) / 2)
        if (arr[middleIndex] > arr[middleIndex + 1]) {
            return middleIndex + 1
        } else if (arr[leftIndex] <= arr[middleIndex]) {
            leftIndex = middleIndex + 1
        } else {
            rightIndex = middleIndex - 1
        }
    }

}
function binarySearch(arr, num, leftIndex, rightIndex) {
    if (arr.length === 0) {
        return -1;
    }
    if (num < arr[leftIndex] || num > arr[rightIndex]) {
        return -1;
    }
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((rightIndex + leftIndex) / 2)
        if (arr[middleIndex] === num) {
            return middleIndex
        } else if (num < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
function findRotatedIndex(arr, num) {
    let pivot = findRotationStart(arr)
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        return binarySearch(arr, num, 0, pivot - 1);
    } else {
        return binarySearch(arr, num, pivot, arr.length - 1);
    }
}

module.exports = findRotatedIndex

