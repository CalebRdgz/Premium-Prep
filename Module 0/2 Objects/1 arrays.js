//creating two arrays: fruits and scores
var fruits = ['oranges', 'bananas', 'apples'];
var scores = [98, 85, 91, 78, 82];

//accessing individual elements in the arrays above^
var firstFruit = fruits[0]; //fruits[0] = oranges
var thirdScore = scores[2]; //scores[2] = 91


console.log('firstFruit:', firstFruit);
console.log('thirdScore:', thirdScore);

//----------------------------------------------------------------------------------------------------

//Empty Arrays
//An array does not need to have anything in it to still be considered an array
//In some cases, it might be useful to establish a variable as an array, without actually adding any elements to it
var emptyArray = [];
console.log(emptyArray);

//----------------------------------------------------------------------------------------------------

//Return Values for Functions, and using a variable as an argument
// first, we will declare a function that takes an array parameter and returns it
function returnArray(array) {
  return array;
}

var fruits = ['oranges', 'bananas', 'apples']; // we are defining a variable that we will pass to our function as an argument
var resultArray = returnArray(fruits); // now, we call the function with 'fruits' as our argument
console.log('resultArray:', resultArray);

// next, we will declare a function that takes in an array and an index, and returns the element located at the inputted index
function returnAnElement(array, index) {
  return array[index];
}

var scores = [98, 85, 91, 78, 82];
var position = 3;
var positionElement = returnAnElement(scores, position);
console.log('positionElement:', positionElement);

//----------------------------------------------------------------------------------------------------

//Creating a variable inside of a Function definition
//Up until now, we have been dealing entirely with the parameters when defining our functions. Now, let us look at a case where we create a new variable inside of our function definition, then return it.

// we will declare a function that takes no parameters, creates an array, and returns the newly created array
function createAndReturnAnArray() {
  var newArray = ['some', 'elements', 4, 5];
  return newArray;
}

var resultArray = createAndReturnAnArray();
console.log('resultArray:', resultArray);

//challenge:
function returnArray(array) {
    // return the array
    return array;
  }