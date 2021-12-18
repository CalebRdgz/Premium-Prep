//A Boolean is a logical data type that can have one of two values: true or false

//Not(!):
var sense = true; //make the variable sense = true
var nonsense = !sense; //make the variable nonsense = not true (!sense = false)
console.log('nonsense:', nonsense);

var notNonsense = !nonsense; //make variable notNonense = not nonsense (!nonsense = true)
console.log('not nonsense:', notNonsense);

//challenge:
function opposite(boolean) {
  // returns the opposite of the inputted boolean value
  return !boolean;
}
//test cases:
var outputTrue = opposite(false);
console.log('should be true:', outputTrue);

var outputFalse = opposite(true);
console.log('should be false:', outputFalse);

//----------------------------------------------------------------------------------------------------

//Or(||):
//We can compare two boolean values and decide if at least ONE of them is true

//There are four cases to examine when comparing two boolean values:
console.log(true || true); // will log true
console.log(true || false); // will log true
console.log(false || true); // will log true
console.log(false || false); // will log false

//We can demonstrate this same idea by creating a variable, and assigning it to the result of comparing the two variables using the || operator
//if you have a car or busses are running, you can attend event. If you do NOT have a car and busses are NOT running, you cannot attend the event
var haveACar = true;
var bussesAreRunning = true;

var willAttendEvent = haveACar || bussesAreRunning;
console.log("I will attend the event:", willAttendEvent);

//challenge:
function eitherAreTrue(bool_1, bool_2) {
    // create a result variable
    // assign it to bool_1 OR bool_2
    var result = bool_1 || bool_2;
    // return the result variable
    return result;
  }
//test cases:
var outputTrue = eitherAreTrue(true, false);
console.log('should be true:', outputTrue);

var outputFalse = eitherAreTrue(false, false);
console.log('should be false:', outputFalse);

//----------------------------------------------------------------------------------------------------

//And ( && ):
/*
We can also compare two boolean values and decide if BOTH of them are true:
console.log(true && true); // will log true
console.log(true && false); // will log false
console.log(false && true); // will log false
console.log(false && false); // will log false
We can demonstrate this same idea by creating a variable, and assigning it to the result of comparing the two variables using the && operator
Run the code below, then change the values to examine how it works
*/

//will only be true if BOTH friendCanGo and iCanGo are TRUE:
var friendCanGo = true;
var iCanGo = true;

var weWillAttend = friendCanGo && iCanGo;
console.log("Both my friend and I will go:", weWillAttend);

function bothAreTrue(bool_1, bool_2) {
    // create a result variable
    // assign it to bool_1 AND bool_2
    var result = bool_1 && bool_2;
    // return the result variable
    return result;
  }
//test cases:
var outputTrue = bothAreTrue(true, true);
console.log('should be true:', outputTrue);

var outputFalse = bothAreTrue(false, true);
console.log('should be false:', outputFalse);

//----------------------------------------------------------------------------------------------------

//Combinations:
/*
We can have several scenarios where we compare more than two boolean values
Linking together combinations of boolean comparisons can give our programs complexity
*/

var storeIsOpen = true;
var isHungry = true;
var isThirsty = true;

var willGoToStore = storeIsOpen && (isHungry || isThirsty);
console.log(willGoToStore); // will log true

//challenge:
function combination(bool_1, bool_2, bool_3) {
  // create a result variable
  // assign it to bool_1 AND either bool_2 OR bool_3
  var result = bool_1 && (bool_2 || bool_3);
  // return the result variable
  return result;
}
//test cases:
var outputTrue = combination(true, true, false);
console.log('should be true:', outputTrue);

var outputFalse = combination(false, true, true);
console.log('should be false:', outputFalse);

//----------------------------------------------------------------------------------------------------

//Equal to ( === ):
/*
This operator allows us to compare two scalar values directly
Works with undefined, Booleans, Numbers, and Strings
*/

//in case of undefined:
var declared; //declared is an undefined variable
var undefinedMatch = declared === undefined;
console.log('undefinedMatch:',undefinedMatch); //this prints out true


//in case of booleans:
var isRaining = true;
var weatherPredictedRain = true;

var weathermanWasRight = isRaining === weatherPredictedRain;
console.log('weathermanWasRight:', weathermanWasRight);

//challenge:
function areEqual(param_1, param_2) {
  // create a result variable
  // assign it to a comparison between param_1 and param_2 using "equal to" operator
  var result = param_1 === param_2;
  return result;
  // return the result variable
}
//test cases:
var outputTrue = areEqual("happiness", "happiness");
console.log('should be true:', outputTrue);

var outputFalse = areEqual(0, false);
console.log('should be false:', outputFalse);

//----------------------------------------------------------------------------------------------------

//Not equal to ( !== )
/*
This operator allows us to compare two scalar values directly
Works with undefined, Booleans, Numbers, and Strings.
It works similarly (but exactly opposite) to the "equal to" operator ( === )
*/

//in case of undefined:
var declared = 'something';
var undefinedDoesNotMatch = declared !== undefined;
console.log('undefinedDoesNotMatch:',undefinedDoesNotMatch);


//in case of booleans:
var isRaining = true;
var weatherPredictedRain = false;

var weathermanWasNotRight = isRaining !== weatherPredictedRain;
console.log('weathermanWasNotRight:', weathermanWasNotRight);

//In the case of Numbers:
var expectedCount = 10;
var actualCount = 9;

var expectationsNotMet = expectedCount !== actualCount;
console.log('expectationsNotMet:', expectationsNotMet);

//In the case of Strings:
var currentString = 'happiness';
var nextString = 'sadness';

var stringsDoNotMatch = currentString !== nextString;
console.log('stringsDoNotMatch:', stringsDoNotMatch);

//challenge:
function areNotEqual(param_1, param_2) {
  // create a result variable
  // assign it to a comparison between param_1 and param_2 using "not equal to" operator
  var result = param_1 !== param_2;
  // return the result variable
  return result;
}
//test cases:
var outputTrue = areNotEqual("happiness", "sadness");
console.log('should be true:', outputTrue);

var outputFalse = areNotEqual(7, 3 + 4);
console.log('should be false:', outputFalse);

/*
A Quick Note about Truthy and Falsy
You may come across the idea of values' being truthy or falsy
Essentially, a truthy value is one that is considered true when encountered in a Boolean context
All values are truthy, unless explicitly defined as falsy
Falsy values:
false
0
""
null
undefined
NaN
Exploiting this dynamic can be useful for certain operations
*/