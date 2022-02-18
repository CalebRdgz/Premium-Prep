// Write a function called "joinArrays".
// Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2".
// You should be familiar with the "concat" method for this problem.
function joinArrays(arr1, arr2) {
    // your code here
    return arr1.concat(arr2);
  }

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

//   Write a function called "getElementsAfter".
//   Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.
//   Notes:
//   In order to do this you should be familiar with the 'slice' method.
function getElementsAfter(array, n) {
    // your code here
      return array.slice(n+1);
  }

  var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
  console.log(output); // --> ['d', 'e']

