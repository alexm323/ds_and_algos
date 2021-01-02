
// helper function to find the first instance of a zero
// the params here are the sorted array to search, the left and right indices here which we use as arguments with defaults because it allows use to use recursion later
function findFirstZero(arr, leftIndex = 0, rightIndex = arr.length - 1) {
    // while the right index is higher than the left index we will keep searching for a zero
    if (rightIndex >= leftIndex) {
        // find the middle index by using math.floor on the right index subtracted by the lower index and cutting that in half
        let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2)
        // if the middle index is the first value in the array or the middle index and one to the left are equal to one AND the value of the array at the middle index is equal to zero then we know that this is the first instance of zero to occur
        if ((middleIndex === 0 || arr[middleIndex - 1] === 1) && arr[middleIndex] === 0) {
            return middleIndex
            // if that isnt the first instance of zero to occur then we are going to use recursion to call this function again which will run this whole process once more but it depends on whether we need to move the left or right pointers
            // if the value at the middle index was 1 then we know we need to move our left pointer further to the right 
        } else if (arr[middleIndex] === 1) {

            return findFirstZero(arr, middleIndex + 1, rightIndex)
        }
        // this moves the right pointer further to tyhe left
        return findFirstZero(arr, leftIndex, middleIndex - 1)
    }
    // we get to this point when the left index is greater than the right index which means we did not find the value we were looking for
    return -1;
}
function countZeroes(arr) {
    // find the first index of a zero value using our helper function
    let firstZero = findFirstZero(arr)
    // if the value is -1, that means there was no zeroes in that array
    if (firstZero === -1) {
        return 0
        // otherwise we have a positive integer value and so we take the length of the array and subtract the index to get how many values are zeroes in that array
    } else {
        return (arr.length - firstZero)
    }

}

module.exports = countZeroes