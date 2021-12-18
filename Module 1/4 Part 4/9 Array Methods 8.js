// removeElement
// Write a function called "removeElement".
// Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.
// Notes:
// If all the elements match, it should return an empty array.
// If an empty array is passed in, it should return an empty array.
function removeElement(array, discarder) {
    // your code here
    for (var i = 0; i < array.length; i++){
        if (array[i] === discarder){
            array.splice(i,1); //.splice(where to delete, how many to delete)
            i--;
        }
        
    }
    return array;
  }
//test cases:
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

// keep
// Write a function called "keep".
// Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.
// Notes:
// If no elements match, "keep" should return an empty array.
function keep(array, keeper) {
    // your code here
    for (var i = 0; i < array.length; i++){
        if (array[i] !== keeper){
            array.splice(i,1);
            i--;
        }
    }
    return array;
  }
//test cases:
var output = keep([1, 2, 3, 2, 1], 2)
console.log(output); //--> [2, 2]

// computeAverageOfNumbers
// Submitted on Today at 9:35 AM
// Write a function called "computeAverageOfNumbers".
// Given an array of numbers, "computeAverageOfNumbers" returns their average.
// Notes:
// If given an empty array, it should return 0.
function computeAverageOfNumbers(nums) {
    // your code here
    if (nums.length === 0){
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum/nums.length;
  }
//test cases:
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3