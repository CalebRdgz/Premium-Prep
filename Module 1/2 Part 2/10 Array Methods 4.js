// Write a function called "getAllElementsButFirst".
// Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.
function getAllElementsButFirst(array) {
    // your code here
    return array.slice(1);
  }

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]

// Write a function called "getAllElementsButLast".
// Given an array, "getAllElementsButLast" returns an array with all the elements but the last.
function getAllElementsButLast(array) {
    // your code here
    var end = array.length -1;
    return array.slice(0,end);
  }

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

// Write a function called "removeFromFront".
// Given an array, "removeFromFront" returns the given array with its first element removed.
// Notes:
// You should be familiar with the method 'shift'.
function removeFromFront(arr) {
    // your code here
    arr.shift();
    return arr;
  }
var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]