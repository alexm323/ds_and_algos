function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr)
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
            }
        }
        // take whatever element is at i and compare it to the element at i + 1
        
        
        
    }
    return arr;
}

function bubbleSort2(arr){
    for(let i = 0; i < arr.length; i++){
        // this is the magic line that subtracts from how many we search based on the amount of sorted values already in the correct positions 
        // we end up with a decerementing number of inner lops 
        for(let j = 0; j < arr.length-i; j++){
            console.log(arr)
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
            }
        }
        // take whatever element is at i and compare it to the element at i + 1
        
        
        
    }
    return arr;
}
function bubbleSort3(arr){
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

bubbleSort([45,6,7,23,1,19]);
bubbleSort2([45,6,7,23,1,19]);
bubbleSort3([45,6,7,23,1,19]);