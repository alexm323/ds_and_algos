/**
 * Step 1 : Simplifying Expressions
 *
 *
 * 1. O(n+10)  => O(n)
 * 2. O(100*n) => O(n)
 * 3. O(25) => O(1)
 * 4. O(n^2 + n^3) => O(n^3)
 * 5. O(n+n+n+n) => O(n)
 * 6. O(1000 * log(n) + n) => O(log n) this one i got wrong it should be O(n)
 * 7. O(1000 * n * log(n) + n) => O(n log n)
 * 8. O(2^n + n^2) => O(2^n)
 * 9. O(5+3+1) => O(1)
 * 10.O(n + n^(1/2) + n^2 + n * log(n)^10) => O(n log n) got this one wrong it should be O(n^2) because that action takes longer than O( n log n)
 *
 */

function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
//   Time Complexity: O(n)

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
//   Time Complexity: O(n)

function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
//   Time Complexity: O(1)

function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//   Time Complexity:O(n)

function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
        let subtotal = 0;
        for (let j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray.push(subtotal);
    }
    return subtotalArray;
}
//   Time Complexity:O(n) I got this one wrong, it should be O(n^2) the length of the first loop is dependent on the length of the input array
// then the second loop is based on the length of the first loop which grows according to n times input so its n*n n^2 

function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            if (char in vowelCount) {
                vowelCount[char] += 1;
            } else {
                vowelCount[char] = 1;
            }
        }
    }

    return vowelCount;
}

//   Time Complexity:O(n) it loops but the fixed string means that the loop is capped at 10 and can only grow based on how long the string passed in is 



// True or false: n^2 + n is O(n^2). => True 
// True or false: n^2 * n is O(n^3). => True
// True or false: n^2 + n is O(n). => False O(n^2)
// What’s the time complexity of the .indexOf array method? O(n) depends on the length of the array
// What’s the time complexity of the .includes array method? O(n) dpends on the length
// What’s the time complexity of the .forEach array method? O(n) loops through the whole array again depends on length
// What’s the time complexity of the .sort array method? O(n)? depends on the implementation it says, which makes it O(n log n) i should get a better understanding of logs
// What’s the time complexity of the .unshift array method? O(1) constant just 1 element, i got this wrong should be O(n) because it still has to count the length of the array 
// What’s the time complexity of the .push array method? O(1) constant just 1 element
// What’s the time complexity of the .splice array method? O(n) depends on the number of items being added
// What’s the time complexity of the .pop array method? O(1) just 1 operation
// What’s the time complexity of the Object.keys() function?O(n) depends on how many items are in the object