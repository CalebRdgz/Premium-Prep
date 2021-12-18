//First let us look at an object with boolean values
var booleanObj = {
    isObject: true,
    isString: false
  };
//next, let us look at an object with number values
  var numbersObj = {
    count: 4,
    remaining: 7
  };
//finally, let us look at an object with string values
  var stringsObj = {
    name: 'Daisy',
    currentTitle: 'pupper',
    futurePosition: 'doggo'
  };

//----------------------------------------------------------------------------------------------------

//accessing a value of an object:
  var stringsObj = {
    name: 'Daisy',
    currentTitle: 'pupper',
    futurePosition: 'doggo'
  };
  
//to access a value within an object:
  var valueOfName = stringsObj.name; //stringsObj['name'] does the same thing (dot notation and bracket notation) @ name
  console.log('accessed using dot notation:', valueOfName);

//----------------------------------------------------------------------------------------------------

//Typeof issue
console.log(typeof undefined); // we have left off the label for this message, but will include it for the rest
console.log('type of true:', typeof true); //boolean
console.log('type of false:', typeof false); //boolean
console.log('type of 9', typeof 9); //number
console.log('type of 4.0:', typeof 4.0); //number
console.log('type of "a string of characters":', typeof "a string of characters"); //string

//----------------------------------------------------------------------------------------------------

//Find difference between arrays and objects:
console.log('Is an array?:', Array.isArray([3, 4, 5])); //Array.isArray is a method

console.log('Is an array?:', Array.isArray({a: 1})); //a: 1 is an object

//----------------------------------------------------------------------------------------------------

//next we will declare a function that takes in an object, and a key, and returns the value located at the inputted key:
function returnAValue(obj, key) {
  return obj[key];
}

var computer = {
  name: "MacBook Pro",
  version: "10.14.6",
  processor: "2 GHz Intel Core i7",
  memory_gb: 8
};
var nameOfKey = "version"; //variable nameofKey is now version, which is a variable inside the computer object^
var valueAtKey = returnAValue(computer, nameOfKey); //(object, value inside object)
console.log('valueAtKey:', valueAtKey);

//----------------------------------------------------------------------------------------------------

//let us write a function that returns the type of argument the function has been called with (assume the argument will be scalar - not a collection)
function getType(param) {
  return typeof param;
}

var numType = getType(56);
console.log('numType:', numType);

var stringType = getType('serial number');
console.log('stringType:', stringType);

var undefinedType = getType();
console.log('undefinedType:', undefinedType); //think carefully about what is happening here

//----------------------------------------------------------------------------------------------------

//let us write a function that returns true if the argument is an Array, and returns false if it is not

function determineIsAnArray(input) {
  var isAnArray = Array.isArray(input);
  return isAnArray;
}

var affirmative = determineIsAnArray([1, 2, 3]);
console.log('affirmative:', affirmative);

var negative = determineIsAnArray({a: 1}); //a: 1 is an object, not an array
console.log('negative:', negative);
