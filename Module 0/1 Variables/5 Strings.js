// What are Strings?
// A JavaScript string stores a series of characters, like "Excelsior!"
// A string can be any text inside of double or single quotes: 'SpongeBob' or "SpongeBob"
// It is possible to access an entire string, or an individual character within it
// To that end, the characters in a string are "indexed", and the indexes start at 0
// For a demonstration of this concept, open the developer console once more, and paste the following code:

var testString = 'words';

var firstCharacter = testString[0]; // accesses the first character: 'w'
var thirdCharacter = testString[2]; // accesses the third character: 'r'
console.log(firstCharacter); // will log 'w'
console.log(thirdCharacter); // will log 'r'

// Empty Strings
// A string does not need to have anything in it to still be considered a string
// In some cases, it might be useful to establish a variable as a string, without actually adding any characters to it
var emptyString = "";
console.log(emptyString);

// Return Values for Functions, and multiple parameters
// first we will declare a function that takes a string parameter and returns it
function returnString(string) {
  return string;
}
var resultString = returnString('hooray for programming');
console.log('resultString:', resultString); // we have added console.log messages to help us identify which variable is which when this code is run in the console
// next, we will declare a function that takes a string parameter and returns the first letter
function returnFirstCharacter(string) {
  return string[0];
}
var firstCharacter = returnFirstCharacter('coffee');
console.log('firstCharacter:',firstCharacter);
// lastly, we will declare a function that takes a string and a number parameter and returns the character located at the given index within the string
function returnACharacter(string, index) {
  return string[index];
}
var character = returnACharacter('tea', 1);
console.log('character:', character);

// A Brief Commentary on Naming Variables
// A variable is a named location for storing a value
// It is important to consider that this value we are storing will have a "type"
// The name we choose can help, or it can hurt, our understanding of the program
// Let us consider a few examples for each of the previously mentioned data types:
// Numbers
var count = 9;
var whatever = 6398;

// Strings
var name = "Charlemagne";
var something = "Head Chef";

// Booleans
var hasBeenDelivered = true;
var blah = false;
// For each of the previous three examples, we have provided one good variable name, and one bad variable name. While there are syntactical considerations associated with naming a variable (no spaces, no !, %, etc.), as programmers we must go further than that.

// Consider the example for Boolean type variables. We have two variable names, "hasBeenDelivered", and "blah". If we consider that part of writing excellent code is its future readability, it is simple to understand that while "hasBeenDelivered" gives us a good picture of what this variable represents in the context of our program, "blah" does nothing of the sort. It is highly likely that the utility of the variable "blah" would be lost after a small interval of time.

function returnACharacter(string, index) {
    // returns string character at given index
    return string[index];
  }