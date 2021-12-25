// Part 2 Skeletons
// Skeletons are essentially functions that have an outline built into them, but no actual code yet. 
//They are presented in a half-completed form, and your task will be to complete the code based on 
//the outline, then use an assertion function that makes sense based on the return value of the 
//function(s) we are asking you to create. You will then write code for something we will call a 
//test suite. A test suite, to say in once more, will be a collection of variables, calls to our 
//function, and calls to an assertion function, which together will demonstrate that your code is 
//working as expected in all applicable cases. With the ideas of stubbing (declaring a function 
//with parameters, but leaving the body of the function blank temporarily), outlining a skeleton, 
//writing an assertion function, and designing a test suite, we embark on what can be viewed as the 
//culmination of this prep course.

// Let us take a quick look at the last problem in the previous section. We will first be looking 
//at a fully implemented solution, then we will look at what we will describe as a "skeleton", from 
//which we could generate the solution:

// SOLUTION

// FUNCTION DEFINITION
function addFullNameProp(obj) {
  var firstName = obj['firstName'];
  var lastName = obj['lastName'];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if ( actual === expected ) {
  	console.log('passed');
  } else {
  	console.log('FAILED [' + testName + '], expected "' + expected + '", but got "' + actual + '"')
  }
}

// TESTS FOR ADD FULL NAME PROP
var person = {
  firstName: 'Chris',
  lastName: 'Riccolo'
};
var actualResult1 = addFullNameProp(person);
var expectedResult1 = {
  firstName: 'Chris',
  lastName: 'Riccolo',
  fullName: 'Chris Riccolo'
};
assertObjectsEqual(actualResult1, expectedResult1, 'should add fullName property when firstName and lastName are defined');

var missingValues1 = {
  firstName: 'Chris'
};
var actualMissing1 = addFullNameProp(missingValues1);
var expectedMissing1 = {
  firstName: 'Chris'
};
assertObjectsEqual(actualMissing1, expectedMissing1, 'should not add fullName property when lastName is undefined');

var missingValues2 = {
  lastName: 'Riccolo'
};
var actualMissing2 = addFullNameProp(missingValues2);
var expectedMissing2 = {
  lastName: 'Riccolo'
};
assertObjectsEqual(actualMissing2, expectedMissing2, 'should not add fullName property when firstName is undefined');

// From this solution, we can mentally work backwards by looking at a skeleton from which this solution could be constructed:

// SKELETON

// FUNCTION DEFINITION
function addFullNameProp(obj) {
  // set variable equal to firstName property within input object
  // set variable equal to lastName property within input object
  // if firstName and lastName are both defined
    // add a property to input object - key: fullName, value firstName and lastName with space in between

  // return input object
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  // Write assertObjectsEqual because function returns an object
}

// TESTS FOR ADD FULL NAME PROP
// Test object with both first and last name is defined in input object
// Test object with last name missing
// Test object with first name missing