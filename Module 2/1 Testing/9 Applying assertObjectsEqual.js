// Write an "assertObjectsEqual" function once more, from memory. Please DO NOT simply PASTE in from 
//before (If you have to go back and look at your previously-implemented code once, that is 
//certainly okay, but come back here and write it from memory). Then use your assertion function 
//in a series of test cases to thoroughly test the code. Use categorical reasoning to consider all 
//the useful cases. The only automated test will be one to ensure that you have created a function 
//that is named assertObjectsEqual. It is up to you to construct the rest of the "test suite".

// Similarly to last time, the first step will be to set up some tests for the code, then correct 
//the errors in the implementation. Be sure to organize tests for both functions. If you are truly 
//stumped, please feel free to consult the reference answers in the last section of the module. 
//Ideally, you should eventually complete the problem on your own.

function addFullNameProp(obj) {
    var firstName = obj.firstName;
    var lastName = obj['lastName'];
  
    if (firstName && lastName) {
      obj['fullName'] = firstName + ' ' + lastName;
    }
  
    return obj;
  }

function assertObjectsEqual (actual, expected, testName){
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);

    if (actual === expected){
        console.log('passed');
    }else{
        console.log('FAILED ['+testName+'] Expected '+expected+', but got '+actual);
    }
}

//test cases (everything working):
var inputObject = {
    firstName: 'David',
    lastName: 'Coleman'
}

var outputObject = addFullNameProp(inputObject);
var expectedObject = {
    firstName: 'David',
    lastName: 'Coleman',
    fullName: 'David Coleman'
}
assertObjectsEqual(outputObject, expectedObject, 'should add fullName property to input object');

//test cases (missing firstName):
var inputObject = {
    lastName: 'Coleman'
}

var outputObject = addFullNameProp(inputObject);
var expectedObject = {
    lastName: 'Coleman'
}
assertObjectsEqual(outputObject, expectedObject, 'should not add fullName property to input object if firstName is missing');

//test cases (missing lastName):
var inputObject = {
    firstName: 'David'
}

var outputObject = addFullNameProp(inputObject);
var expectedObject = {
    firstName: 'David'
}
assertObjectsEqual(outputObject, expectedObject, 'should not add fullName property to input object if lastName is missing');