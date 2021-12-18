// getLargestElement
// Write a function called "getLargestElement".
// Given an array, "getLargestElement" returns the largest number in the given array.
// Notes:
// It should return 0 if the array is empty.
function getLargestElement(arr) {
    // your code here
    if (arr.length === 0){
        return 0;
    }
    var largest = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}
//test cases:
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

// computeSumOfAllElements
// Submitted on Yesterday at 11:14 PM
// Write a function called "computeSumOfAllElements".
// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.
function computeSumOfAllElements(arr) {
    // your code here
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
  }
//test cases:
var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6