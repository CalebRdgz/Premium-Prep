// Write a function called "removeFromBack".
// Given an array, "removeFromBack" returns the given array with its last element removed.
// Notes:
// You should be familiar with the method 'pop'.
function removeFromBack(arr) {
    // your code here
    arr.pop();
    return arr;
  }
  
var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]