// What are Booleans?
// Booleans are a logical value type
// Booleans can be true or false
// Consider the following code

// var isRaining = true;
// console.log(isRaining);

// var isVegetarian = false;
// console.log(isVegetarian);
// In the above examples, we have created two boolean values, one for each possible value that a boolean type variable can have: true, and false.

// Return Values for Functions
// Previously, we discussed a function that did not return anything, and therefore returned undefined by default
// Let us now examine two examples of functions that return a boolean type value:
// first we will declare a function that takes no parameters, does nothing, and returns true
function isTrue() {
  return true;
}
var trueResult = isTrue(); // this line "calls" the function and assigns the value returned to trueResult
console.log(trueResult); // if you run this code in the console, you can see that trueResult has been set to a value of true
// next, we will declare a function that takes no parameters, does nothing, and returns false
function isFalse() {
  return false;
}
var falseResult = isFalse(); // this line "calls" the function and assigns the value returned to falseResult
console.log(falseResult); // if you run this code in the console, you can see that falseResult has been set to a value of false

// Now we are going to complete a function that takes no parameters and returns true. 
// Add a statement that will cause this function to return true when ran.
function returnTrue() {
    // returns true
    var boolean = true;
    return boolean;
  }