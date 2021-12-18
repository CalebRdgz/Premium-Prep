// filterEvenElements
// Write a function called "filterEvenElements".
// Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.
function filterEvenElements(arr) {
    // your code here
    var evenArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] %2===0){
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}
//test cases:
var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]

// getLengthOfShortestElement
// Write a function called "getLengthOfShortestElement".
// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.
// Notes:
// It should return 0 if the array is empty.
function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0){
        return 0;
    }
    
    var shortest = arr[0];
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i].length < shortest.length){
            shortest = arr[i];
        }
    }
    return shortest.length;
}
//test cases:
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

// getLongestElement
// Write a function called "getLongestElement".
// Given an array, "getLongestElement" returns the longest string in the given array.
// Notes:
// If there are ties, it returns the first element to appear.
// If the array is empty, it should return an empty string.
function getLongestElement(arr) {
    // your code here
    var empty = '';
    if (arr.length === 0){
          return empty;
      }
      
      var longest = arr[0];
      
      for (var i = 0; i < arr.length; i++){
          if (arr[i].length > longest.length){
              longest = arr[i];
          }
      }
      return longest;
  }
//test cases:
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'