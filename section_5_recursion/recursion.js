/** product: calculate the product of an array of numbers. */
 
function product(nums) {
  if (nums.length === 0) return 1;
 
  return nums[0] * product(nums.slice(1))
}
 
/** longest: return the length of the longest word in an array of words. */
 
function longest(words, longestWord = '') {
  // console.log(`longest word ${longestWord}`)
  // with iteration
  // let longestWord = '';
  // for (word of words) {
  //   if (word.length > longest.length) {
  //     longest = word;
 
  //   }
 
  // }
  // return longest.length
  if (words.length === 0) return longestWord.length;
 
  let popped = words.pop()
  // console.log(popped)
  if (popped.length > longestWord.length) {
    longestWord = popped
 
  }
 
  return longest(words, longestWord)
}
 
/** everyOther: return a string with every other letter. */
 
function everyOther(str,idx=0,newString='') {
  if(idx+1 > str.length) return newString
  if(idx%2 ===0){
    newString = newString+str[idx]
  }
  idx = idx + 1;

  return everyOther(str,idx,newString)

}
 
/** isPalindrome: checks whether a string is a palindrome or not. */
 
function isPalindrome(str,startIdx=0,endIdx=(str.length-1),backwardsStr='') {
  if(startIdx > str.length){
    // console.log(str)
    // console.log(backwardsStr)
    return (backwardsStr===str ? true:false);
  }
  
  startIdx = startIdx + 1;
  if(str[endIdx]){
    backwardsStr = backwardsStr + str[endIdx]
    endIdx = endIdx - 1;
  }
 return isPalindrome(str,startIdx,endIdx,backwardsStr)
}
/** findIndex: return the index of val in arr (or -1 if val is not present). */
 
function findIndex(arr, val, idx=0) {
  if(val === arr[idx]) return idx
  if(idx+1 === arr.length){
    return (val === arr[idx] ? idx : -1)
  }
 return findIndex(arr,val,idx+1)
}
 
/** revString: return a copy of a string, but in reverse. */
 
function revString(str,startIdx=0,endIdx=(str.length-1),backwardsStr='') {
  if(startIdx > str.length) return backwardsStr
  
  startIdx = startIdx + 1;
  if(str[endIdx]){
    backwardsStr = backwardsStr + str[endIdx]
    endIdx = endIdx - 1;
  }
 return revString(str,startIdx,endIdx,backwardsStr)
}
 
/** gatherStrings: given an object, return an array of all of the string values. */
 
function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}
 
/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
 

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings
};
