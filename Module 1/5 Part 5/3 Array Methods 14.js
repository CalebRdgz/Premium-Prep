// joinArraysOfArrays
// Write a function called "joinArrayOfArrays".
// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.
// You should be familiar with the "concat" method for this problem.
function joinArrayOfArrays(arr) {
    // your code here
    var result = [];
    for (var i = 0; i < arr.length; i++){
        result = result.concat(arr[i]);
    }
    return result;
  }
//test cases:
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
