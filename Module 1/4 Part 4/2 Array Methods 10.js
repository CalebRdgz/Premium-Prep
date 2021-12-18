// squareElements
// Write a function called "squareElements". Given an array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.
function squareElements(arr) {
    // your code here
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i]**2);
    }
    return newArr;
}
//test cases:
var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

// filterOddElements
// Write a function called "filterOddElements".
// Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.
function filterOddElements(arr) {
    // your code here
    var oddArray = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
        oddArray.push(arr[i]);
        }
    }
    return oddArray;
  }
//test cases:
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

// computeProductOfAllElements
// Write a function called "computeProductOfAllElements".
// Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.
// Notes:
// If given array is empty, it should return 0.
function computeProductOfAllElements(arr) {
    // your code here
    var product = 1;
    if (arr.length === 0){
        return 0;
    }
    for (var i = 0; i < arr.length; i++){
        product *= arr[i];
    }
    return product;
}
//test cases:
var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60