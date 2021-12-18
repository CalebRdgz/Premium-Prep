// findSmallestElement
// Write a function called "findSmallestElement".
// Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.
// Notes:
// If the given array is empty, it should return 0.
function findSmallestElement(arr) {
    // your code here
    if (arr.length === 0){
        return 0;
    }
    
    var smallest = arr[0];
    
    for (var i = 0; i < arr.length; i++){
        if (smallest > arr[i]){
            smallest = arr[i];
        }
    }
    return smallest;
  }
//test cases:
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

// findShortestElement
// Write a function called "findShortestElement".
// Given an array, "findShortestElement" returns the shortest string within the given array.
// Notes:
// If there are ties, it should return the first element to appear.
// If the given array is empty, it should return an empty string.
function findShortestElement(arr) {
    // your code here
    if (arr.length === 0){
        return '';
    }
    var shortest = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i].length < shortest.length){
            shortest = arr[i];
        }
    }
    return shortest;
}
//test cases:
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

