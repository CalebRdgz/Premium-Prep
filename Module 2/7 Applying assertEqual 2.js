// Write an "assertEqual" function once more, from memory. Please DO NOT simply PASTE in from before
// (If you have to go back and look at your previously-implemented code once, that is certainly okay,
// but come back here and write it from memory). Then use your assertion function in a series of test
// cases to thoroughly test the code. Use categorical reasoning to consider all the useful cases. 
//The only automated test will be one to ensure that you have created a function that is named 
//assertEqual. It is up to you to construct the rest of the "test suite".

// The code under test is a function called every. every is an example of a "higher order" function, 
//meaning that it takes as a parameter, another function (higher order functions can also return 
//functions as values). This function takes two parameters; the first will be an array of scalar 
//values, and the second parameter will be callbackFunction. Thus, when you are creating a test 
//suite to verify that every works, you are going to need a function that you will use as an argument 
//when you call every. Think about it like this, every is going to iterate over an array of scalar 
//values, and apply a function to every value. This function MUST return a boolean value, mainly 
//because we want every to tell us whether or not, EVERY value in the array returns true when the 
//callbackFunction is called upon it.

// At this point, the general level of difficulty and complexity of the problems will increase. 
//With that in mind, do not be disheartened if this takes you some time to figure out solutions. 
//The first step will be to set up some tests for the code, then correct the errors in the 
//implementation. If you are truly stumped, please feel free to consult the reference answers in 
//the last section of the module. Ideally, you should eventually complete the problem on your own.

// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;
  
    for (var i = 0; i < array.length; i++) {
      doesEveryElementMatch = callbackFunction(array[i]);
    }
  
    return doesEveryElementMatch;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  
  // TESTS CASES