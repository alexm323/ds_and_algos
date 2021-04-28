function findFirstZero(arr) {
    // find where  0 ends and 1 starts in sorted array 
    let left = 0;
    let right = arr.length - 1;
    if (arr[0] === 0) {
        return arr.length;
    }
    if (arr[right] === 1) {
        return 0;
    }
    while (left <= right) {
        
        let mid = left + Math.floor((right - left) / 2);

        if((mid === 0) || (arr[mid - 1] === 1 && arr[mid] === 0)){
            return mid;
        }else if(arr[mid] === 1){
            left = mid + 1;
        } else{
            right = mid - 1;
        }


    }
    return -1;
            
}
