// Write a function called assertArraysEqual. It will be a function that takes three 
//parameters: actual will be an array of scalar values, and should ideally be the result of 
//calling a function that you are testing. (presumably the function being tested should return 
//an array of scalar values); expected, also an array of scalar values, should be the theoretical 
//result of calling your function (or, what you "expect" the function to return). Finally, testName 
//will be a string, and should describe what a call to assertArraysEqual is verifying about 
//the function being tested.

// Please DO NOT USE JSON.stringify(), Array.join(), or any other "convert both 
//arrays to strings so I can compare two strings" type of technique to implement this.

// We cannot simply compare an array directly to another array, as we could with scalar values. 
//Consider the following code:

// var scalar1 = 'equal';
// var scalar2 = 'equal';
// console.log("two scalars can be compared with each other using triple equals:," scalar1 === scalar2);

// var array1 = ['a', 'b' 'c'];
// var array2 = ['a', 'b' 'c'];
// console.log("two arrays can be compared with each other using triple equals"; array1 === array2);
//As this code demonstrates, we cannot compare arrays directly. For more information on this 
//topic, please consult the lesson named Notes on Memory, which can be found in the Reference 
//Answers and In Depth Documentation section at end of this Module. With that in mind, there 
//are typically two things that we must check in order to determine that two arrays of scalar 
//values are indeed equal to one another. Do they have the same length, and do they contain the 
//same values. Thus, your function must make a determination about these issues, then either log 
//a passing message to the console or else a failure message. See the examples below for precise 
//details on the messages to be logged to the console.

//Mentioned previously, but worth noting again: In general, these assertion functions will need 
//some kind of code or separate functions to test. For the first four Testing problems, we will 
//provide examples that include functions like generateFirstNFibonaccis. It is not necessary for 
//you to create these functions. Rather, they are presented to aid your understanding of how 
//assertArraysEqual should behave once you have built it.

//assertArraysEqual.md

function assertArraysEqual(actual, expected, testName) {
    // your code here
    var lengthsEqual = (actual.length === expected.length);
    var contentsEqual = true;
    for (var i = 0; i < actual.length; i++){
        if (actual[i] !== expected[i]){
            contentsEqual = false;
        }
    }
    
    if (contentsEqual && lengthsEqual){
        console.log('passed');
    }else{
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }

//test cases:
//Please pay close attention to the exact punctuation and contents of the success and failure messages.

// SUCCESS CASE
var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

// FAILURE CASE
var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7);
assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", 
// but got "2, 3, 5, 8, 13, 21, 34"
