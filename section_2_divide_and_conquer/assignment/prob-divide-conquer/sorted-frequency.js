// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// How many times does a value appear?
// find the first instance of the target value
// find the last instance of the target value
// return LastInstance - FirstInstance indices and that will give you the value you are looking for 

function findFirstInstance(arr, targetValue, leftIndex = 0, rightIndex = arr.length - 1) {
    if (rightIndex >= leftIndex) {
        let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2)
        // lets check for the case that we get the right index right away
        if ((middleIndex === 0 || arr[middleIndex - 1] < arr[middleIndex]) && (arr[middleIndex] === targetValue)) {
            return middleIndex
        } else if (arr[middleIndex] < targetValue) {
            // console.log(middleIndex)
            return findFirstInstance(arr, targetValue, middleIndex + 1, rightIndex)

        }
        return findFirstInstance(arr, targetValue, leftIndex, middleIndex - 1)
    }
    return -1

}

function sortedFrequency(arr, target) {
    // find the first time the target value occurs
    let firstOccurence = findFirstInstance(arr, target)
    // find the last time by adding one to the target, since the array is sorted we can just find the first instance of the next value
    let lastOccurence = findFirstInstance(arr, target + 1)
    // as long as both the first and last occurance are not negative 1 , they exist within the array
    if ((firstOccurence !== -1) && lastOccurence === -1) {
        // in that case we just return the length of the array and subtract the first occurence because it goes to the end of the array
        return arr.length - firstOccurence
        // if the first occurence is -1 then we know the value is not in the array and we return -1
    } else if (firstOccurence === -1) {
        return -1
    } else {
        // otherwise we just want to subtract the last occurence index by the first and we will have the frequency
        return lastOccurence - firstOccurence
    }
}
module.exports = sortedFrequency
