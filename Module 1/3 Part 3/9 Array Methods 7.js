// joinThreeArrays
// Submitted on Today at 10:19 PM
// Write a function called "joinThreeArrays".
// Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.
// You should be familiar with the "concat" method for this problem.
function joinThreeArrays(arr1, arr2, arr3) {
    // your code here
    return arr1.concat(arr2, arr3);
  }
//test cases:
var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]

// addToFrontOfNew
// Write a function called "addToFrontOfNew".
// Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.
// Important: It should be a NEW array instance, not the original array instance.
function addToFrontOfNew(arr, element) {
    // your code here
    var newArr = arr.slice(); //slice() with no arguments slices (and copies) entire array into a new array
    newArr.unshift(element);
    return newArr;
  }
//test cases:
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]

// addToBackOfNew
// Write a function called "addToBackOfNew".
// Given an array and an element, "addToBackOfNew" returns a clone of the given array, with the given element added to the end.
// Important: It should be a NEW array instance, not the original array instance.
function addToBackOfNew(arr, element) {
    // your code here
    var clone = arr.slice();
    return clone.shift(element);
}
//test cases:
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]

// getAllElementsButNth
// Submitted on Today at 2:33 AM
// Write a function called "getAllElementsButNth".
// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.
function getAllElementsButNth(array, n) {
    // your code here
    array.splice(n, 1);
    return array;
  }
//test cases:
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
