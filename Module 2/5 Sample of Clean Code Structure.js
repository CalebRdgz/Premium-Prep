// Notes
// Although we have not discussed assert, hopefully you can carefully parse its function body and 
//make use of it by thoroughly consulting the following example code:

// // FUNCTION DEFINITION(S)
// function addOne(val) {
//   return val + 1;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assert(condition, testName) {
//   if (condition) {
//     console.log('passed');
//   } else {
//     console.log('FAILED [' + testName + ']');
//   }
// }

// // TESTS FOR isOne
// var result1 = addOne(1);
// assert(result1 === 2, 'should return result of a positive input number added to 1');

// var result2 = addOne(-2);
// assert(result2 === 1, 'should return result of a negative input number added to 1');

// Please take careful note of the spacing, indentation, and consistency of the code. Run this 
//code in a console to get a sense of what is going on. The code starts with the function 
//definitions, followed by any assertion functions that makes sense given the function under test. 
//We wrap up the code with our "test suite" or "test cases", which in this case is a collection of 
//variables (we may eventually need functions to use here), as well as calls to our assertion 
//function, all of which together can be easily run in a console to verify that our code works as 
//expected. For more in depth information on testing, please consult our documentation on Testing 
//and Test Driven Development. Both of these can be found in the Reference Answers and In Depth 
//Documentation section at end of this Module.

// For nearly every challenge for the remainder of the course, you will get the most out of the 
//situation if you follow the directions and build a robust test suite (similar to the above, as 
//well as those described in the Testing documentation) that fully verifies that your code works 
//as expected. When you "Run Tests" you can see a console output for each challenge. Making diligent 
//use of this feature will improve your understanding and execution of these concepts.

