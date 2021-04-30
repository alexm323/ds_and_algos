function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        // this is the magic line that subtracts from how many we search based on the amount of sorted values already in the correct positions 
        // we end up with a decerementing number of inner lops 
        let swapped = false;
        for(let j = 0; j < arr.length-i; j++){
            console.log(arr)
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
                swapped = true;
            }
        }
        if(!swapped) break;
        // take whatever element is at i and compare it to the element at i + 1
        
        
        
    }
    return arr;
}

module.exports = bubbleSort;