//getNthElement
//Write a function called "getNthElement".
//Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
//Notes:
    //If the array has a length of 0, it should return 'undefined'.
function getNthElement(array, n) {
    // your code here
    return array[n];
}
//test cases:
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3

//getLastElement
//Write a function called "getLastElement".
//Given an array, "getLastElement" returns the last element of the given array.
//Notes:
    //If the given array has a length of 0, it should return 'undefined'.
function getLastElement(array) {
    // your code here
    var arrayLast = array.length - 1;
    return array[arrayLast];
  }
//test cases:
var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

//addToFront
//Write a function called "addToFront".
//Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.
//Notes:
    //It should be the SAME array, not a new array.
    //In order to do this you should be familiar with the 'unshift' method.
function addToFront(arr, element) {
    // your code here
    arr.unshift(element)
    return arr;
  }
//test cases:
var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//addToBack
//Write a function called "addToBack".
//Given an array and an element, "addToBack" returns the given array with the given element added to the end.
//Notes:
    //It should be the SAME array, not a new array.
    //In order to do this you should be familiar with the 'push' method.
function addToBack(arr, element) {
    // your code here
    arr.push(element);
    return arr;
  }
//test cases:
var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]