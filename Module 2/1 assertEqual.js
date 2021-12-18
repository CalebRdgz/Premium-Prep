// Write a function called assertEqual. It will be a function that takes three parameters: actual 
//will be a scalar value, and should ideally be the result of calling a function you are testing, 
//and which returns a scalar value. expected, also a scalar, should be the theoretical result of 
//calling your function (or, what you "expect" the function to return). Finally, testName will be 
//a string, and should describe what a call to assertEqual is verifying about the function being tested.

// Your function should compare actual and expected values with strict equality (triple equals ===), 
//then log one of two messages to the console. In general, these assertion functions will need 
//some kind of code or separate functions to test. For the first four Testing problems, we 
//will provide examples that include functions like multiplyByTwo. It is not necessary for 
//you to create these functions, but rather, they are presented to aid your understanding of 
//how assertEqual should behave once you have built it.

// assertEqual.md
// Please pay close attention to the exact punctuation and contents of the success and failure messages.
// Examples:

// SUCCESS CASE
function multiplyByTwo(n) {
  return n * 2;
}
var output = multiplyByTwo(2); // returns 4
assertEqual(output, 4, 'it doubles 2 to 4');
// console output:
// passed

// FAILURE CASE
function multiplyByTwo(n) {
  return (n * 2) + 1; // an incorrect implementation
}
var output = multiplyByTwo(2); // returns 5
assertEqual(output, 4, 'it doubles 2 to 4');
// console output:
// FAILED [it doubles 2 to 4] Expected "4", but got "5"

function assertEqual(actual, expected, testName) {
    // your code here
    if (actual === expected){
        return passed;
    }else{
        return 'FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"';
    }
  }