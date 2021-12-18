/*
OPERATOR:
- is used to perform specific computations or operations on operands
- We have seen a few so far: =,+, -, and typeof
- They can be unary: {operator} {operand} (e.g. typeof "username"), or:
- They can be binary: {operand1} {operator} {operand2} (e.g. 4 + 5), many more

METHOD:
- is a function that is a property of an object
- We have seen a few so far: console.log, and Array.isArray()

console.log and Expressions as Arguments:
- console.log() is a method (a function that is a property of an object)
- When we call console.log() we will typically pass it an argument, or sometimes several arguments, where each argument is separated by commas
- The commas are also operators
*/

//----------------------------------------------------------------------------------------------------

//A few details about console.log and Expressions as Arguments
//console.log() is a method (a function that is a property of an object)
//When we call console.log() we will typically pass it an argument, or sometimes several arguments, where each argument is separated by commas
//The commas are also operators
//In a few cases of calling console.log, we said something like:
console.log('some message:', typeof {a: 1});

//To be sure, we are calling this function, console.log, with two arguments. The first is a string:
//'some message:'
//and the second is an operator applied to an object:
typeof {a: 1}
//This second argument is an example of calling a function with an expression as an argument. Before the function runs, the expression is "evaluated". typeof {a: 1} evaluates to "object", thus the resulting message when this code is run in the console. Let us keep this concept in mind as we proceed through the material.

//----------------------------------------------------------------------------------------------------

//Expressions assigned to a Variable
//Let's think about the above example:
console.log('some message:', typeof {a: 1});

///One thing we have already been doing, is assigning the result of an expression to a variable, using =; which is an assignment operator. Let us do so now:
var typeOfOperand = typeof {a: 1};
console.log('some message:', typeOfOperand);
//Not a wildly fascinating example, but this concept will be invaluable in the following lessons, especially when dealing with Booleans.