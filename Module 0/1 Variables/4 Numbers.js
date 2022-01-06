// JavaScript and Numbers
// There is one number type in JS, and it is called Number
// If a value is of type "number", it can be positive, negative, an integer, or a floating-point (decimal)
// In addition to being able to represent integers and floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number, see below for more information on NaN)
// Examples:
var integer = 4;
var float = 4.7;
var max = +Infinity;

// some operations with numbers
var sum = 4 + 5; // adding two numbers
var difference = 9 - 4; // subtracting two numbers
var product = 4 * 5; // multiplying two numbers
var quotient = 20 / 4; // dividing two numbers

// A quick note about NaN
// Examine the following code:
console.log(4 + 5);

// It is relatively easy to see that 9 will be logged to the console.
// With that in mind, consider this:
console.log(4 + undefined);

// As you can see, we now log NaN to the console. NaN is more a less a way for JavaScript to say "I think you meant to have a number here, but I cannot produce a number with what you gave me, so have NaN instead :)"
// A mention of Modulo (%)
// In addition to +, -, *, and /, corresponding to addition, subtraction, multiplication, and division, there is one more Mathematical concept we must visit.
// In practice % will return the remainder after division. Consider dividing 9 by 2. 2 "goes into" 9 four times, and there is a remainder of 1. Thus:
var remainder = 9 % 2;
console.log(remainder); // should log 1 to the console

// This concept will be featured later on, so a quick glance is all that is necessary at this point
// One thing for those of you reading every word of this course: in order to tell if a number is odd or even, we can use the modulo operator
// anyOddNumber % 2 will always evaluate to 1
// anyEvenNumber % 2 will always evaluate to 0
// Return Values for Functions, and our first parameter
// Let us walk through a function, this time with a parameter, as well as a return value.

// let us declare a function that takes one parameter, adds one to that parameter, and returns the result
function addOne(num) {
  return num + 1;
}

var incremented = addOne(6); // this line calls the function with an "argument" of 6, and assigns the value returned to `incremented`
console.log(incremented); // if you run this code in the console, you can see that `incremented` has been set to a value of 7

function addTwo(num) {
    // return the input number plus 2
    num += 2;
    return num;
  }