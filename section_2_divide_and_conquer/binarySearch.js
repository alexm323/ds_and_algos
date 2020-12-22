// function binarySearch(orderedArr, target) {
//     let halfIndex = Math.floor(orderedArr.length / 2)
//     if (orderedArr[halfIndex] === target) {
//         return halfIndex
//     } else if (orderedArr[halfIndex] < target) {
//         orderedArr = orderedArr.slice(halfIndex)
//         halfIndex = Math.floor(orderedArr.length / 2)
//         // console.log(orderedArr)
//         // console.log(halfIndex)
//         // return 'bigger than half'
//         binarySearch(orderedArr, target)
//     } else {
//         orderedArr = orderedArr.slice(1, halfIndex)
//         halfIndex = Math.floor(orderedArr.length / 2)
//         binarySearch(orderedArr, target)
//     }
// }

// let orderedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function binarySearch(arr, val) {
    // getting the middle index, we subtract arr.length by 1 because thats the greatest possible index
    // const middleIdx = Math.floor((arr.length - 1) / 2)
    // console.log(middleIdx)
    // if (arr[middleIdx] === val) { return middleIdx } else if(arr[middleIdx]>val){

    // }else{

    // }
    // instead of all of that logic we are going to define a left and right index
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        // instead of hardcoding the array length we are getting the average of the left and the right to find the middle index
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx]
        if (middleVal < val) {
            leftIdx = middleIdx + 1
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1
        } else {
            return middleIdx
        }
    }
    // if we break out of that loop and we didnt find it
    return -1
}
[3, 4, 6, 9, 10, 12, 15, 22, 30, 31]
