//What is a For Loop? (From MDN):
//The for statement creates a loop that consists of three optional expressions
//initialization - An expression or variable declaration that evaluated once before the loop begins
//condition - An expression to be evaluated before each loop iteration. If it evaluates to true, statement is executed
//final-expression - An expression to be evaluated at the end of each loop iteration
//These expressions are enclosed in parentheses and separated by semicolons
//They are followed by a statement to be executed in the loop
//Will often be referred to as a "for loop"
//for (/*initialization*/ ; /*condition*/ ; /*final-expression*/ ) {
  /* statement */
//}

//Loop over sequence of numbers again:
//Let us consider the case of wanting to look at, or do something, to a range of numbers
//We can do so with a specific for loop:
for (var x = 1; x <= 10; x++) {
  console.log(x);
}

//We can also do this with variables:
var endOfRange = 10;

for (var startOfRange = 1; startOfRange <= endOfRange; startOfRange++) {
  console.log(startOfRange);
}

//For loop over a series of numbers:
function loopASequenceAgain(start, end) {
  // create a loop which loops from start to end
    // log current value to console
    for (var i = start; i <= end; i++){
        console.log(i);
    }
}
//test cases:
loopASequenceAgain(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequenceAgain(3, 7);
// console output:
  // 3
  // 4
  // 5
  // 6
  // 7

//----------------------------------------------------------------------------------------------------

//Loop over an Array Again:
//Let us consider the case of wanting to look at, or do something, do the elements of an array
//We can do so with a specific for loop
//This example has more details, for a more robust demonstration
//You will often hear this described as "iterating over the array"
var numsArray = [1, 2, 3, 4, 5];

for (var i = 0; i < numsArray.length; i++) {
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  //gives context for when each iteration of loop ends
  console.log('==============');
}

//We can also do this with variables:
var restaurants = ['The Taco Shell', 'The Lobster Tail', 'The Vegetable Garden'];

for (var i = 0; i < restaurants.length; i++) {
  console.log(restaurants[i]);
}

//For loop over an array:
function loopAnArrayAgain(array) {
  // create a loop which iterates over the input array
    // log current array element to the console
  for (var i = 0; i < array.length; i++){
    console.log(array);
    array++
  }
}

//test cases:
loopAnArrayAgain(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArrayAgain([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5

//----------------------------------------------------------------------------------------------------

//Loop over a String Again:
//Let us consider the case of wanting to look at, or do something, to the characters in a string
//We can do so with a specific for loop
var string = 'I am a String!';

for (var i = 0; i < string.length; i++) {
  console.log(string[i]);
}

//We can also do this with variables:
var programmingLanguage = 'JavaScript';

for (var i = 0; i < programmingLanguage.length; i++) {
  console.log(programmingLanguage[i]);
}

//For loop over a string:
function loopAStringAgain(string) {
  // create a loop which iterates over the input string
    // log current string character to the console
  for (i = 0; i < string.length; i++){
    console.log(string[i]);
  }
}

//----------------------------------------------------------------------------------------------------

//A Few Things of Which to Take Note:
//while and for loops can be very similar
//Iterating over a string and an array can also be very similar
//The concepts below can work with both strings and arrays, and while and for loops
//Loop over every other value
//Let us consider the case of wanting to look at, or do something, to every other element in an array
//We can do so with a specific for loop
var numsArray = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < numsArray.length; i += 2) {
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  console.log('=============='); //gives context for when each iteration of loop ends
}

//We can also do this with variables:
var restaurantMixedData = ['The Pho King', '555-1834', 'The Cheese Plate', '555-8312'];

for (var i = 0; i < restaurantMixedData.length; i+= 2) {
  console.log(restaurantMixedData[i]);
}

//Loop over every other value:
function loopEveryOther(array) {
  // create a loop which iterates over every other element of the input array
  // log every other array element to the console
  for (var i = 0; i < array.length; i += 2){
    console.log(array[i]);
  }
}
//test cases:
loopEveryOther(['a', 'b', 'c', 'd']);
// console output:
  // a
  // c

loopEveryOther([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 3
  // 5

//----------------------------------------------------------------------------------------------------

//Loop starting somewhere in the middle:
//Let us consider the case of wanting to look at, or do something, to the elements in an array, starting at a specific index
//We can do so with a specific for loop
var numsArray = [-2, -1, 0, 1, 2, 3];

for (var i = 3; i < numsArray.length; i++) {
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  console.log('=============='); //gives context for when each iteration of loop ends
}

//We can also do this with variables:
var restaurantsAndBars = ['The Soup Ladle', 'The Steak Knife', 'The Salad Bowl', 'Bars:', 'The Beer Stein', 'The Brandy Snifter', 'The Martini Coupe'];

for (var i = 3; i < restaurantsAndBars.length; i++) {
  console.log(restaurantsAndBars[i]);
}

//Loop starting at a specific index:
function loopStartingAtIndex(array, index) {
  // create a loop which iterates from index to the end of the input array
  // log current array element to the console
  for (i = index; i < array.length; i++){
    console.log(array[i]);
  }
}
//test cases:
loopStartingAtIndex(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // c
  // d
  // e

loopStartingAtIndex([1, 2, 3, 4, 5], 3);
// console output:
  // 4
  // 5

//----------------------------------------------------------------------------------------------------

//Loop in "reverse" order:
//Let us consider the case of wanting to look at, or do something, to every element in an array, only in reverse order (end to start)
//We can do so with a specific for loop
var numsArray = [1, 2, 3, 4, 5];

for (var i = numsArray.length - 1; i > -1; i--) {
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  console.log('=============='); //gives context for when each iteration of loop ends
}

//We can also do this with variables:
var restaurantPreferences = ['Chinese', 'Vietnamese', 'Thai', 'Japanese', 'Texan'];

for (var i = restaurantPreferences.length - 1; i > -1; i--) {
  console.log(restaurantPreferences[i]);
}

//Loop in reverse order:
function loopInReverse(array) {
  // create a loop which iterates from back to front of the input array
    // log current array element to the console
  for (var i = array.length-1; i > -1; i--){
    console.log(array[i]);
  }
}
//test cases:
loopInReverse(['a', 'b', 'c', 'd']);
// console output:
  // d
  // c
  // b
  // a

loopInReverse([1, 2, 3, 4]);
// console output:
  // 4
  // 3
  // 2
  // 1

//----------------------------------------------------------------------------------------------------

//Using continue:
//Let us consider the case of wanting to move to the next iteration while looping
//Which is to say, we do not want to end the loop entirely, but we wish to move to the next iteration of the loop
//We can do so with the continue statement
var numsArray = [1, 2, 3, 4, 5];

// stipulation: do not print out element at index 2
for (var i = 0; i < numsArray.length; i++) {
  if (i === 2) {
    console.log('SKIPPED VALUE AT INDEX 2');
    continue; // this tells the loop to go to the next iteration
  }
  console.log('current index:', i);
  console.log('current element:', numsArray[i]);
  console.log('=============='); //gives context for when each iteration of loop ends
}

//We can also do this with variables:
var restaurants = ['The BBQ Pit', 'The Sushi Bamboo', 'Error-Error', 'The Pizza Oven'];

for (var i = 0; i < restaurants.length; i++) {
  if (i === 2) {
    continue;
  }
  console.log(restaurants[i]);
}
//But wait, could not we simply use an if/else statement to accomplish the same goal?
//Well, yes, but then we would not introduce the continue statement.

//Use a 'continue' statement:
function useContinue(array, index) {
  // create a loop which iterates over the input array
    // if current index is equal to input index
    // use described statement to skip to next iteration of loop (must include semi-colon!)
    // log current array element to the console
  for (var i = 0; 1 < array.length; i++){
    if (i === index){
      continue;
    }
    console.log(array[i]);
  }
}
//test cases:
useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
  // a
  // c
  // d


useContinue([1, 2, 3, 4], 2);
// console output:
  // 1
  // 2
  // 4

//----------------------------------------------------------------------------------------------------

//Using break:
//Let us consider the case of wanting to stop looping before the described end of a loop
//Which is to say, we want the loop to stop immediately, regardless of what the while/for statement says
//We can do so with the break statement
var numsArray = [1, 2, 3, 4, 5];

// stipulation: do not print out elements with index value greater than 2
for (var i = 0; i < numsArray.length; i++) {
  if (i > 2) {
    console.log('FOR LOOP BROKEN');
    break; // this tells the loop to end
  } else {
    console.log('current index:', i);
    console.log('current element:', numsArray[i]);
    console.log('=============='); //gives context for when each iteration of loop ends
  }
}

//We can also do this with variables:
var restaurantsAndPricePoints = ['The Oyster Pearl', 'The Salmon Plank', 'Price Points:', 'expensive', 'moderate', 'budget-conscious'];

for (var i = 0; i < restaurantsAndPricePoints.length; i++) {
  if (i > 1) {
    break;
  }
  console.log(restaurantsAndPricePoints[i]);
}
//But wait, could not we simply use an if/else statement to accomplish the same goal?
//Well, yes, but then we would not introduce the break statement.

//Use a 'break' statement:
function useBreak(array, index) {
  // create a loop which iterates over the input array
    // if current index is greater than input index
    // use described statement to stop the loop completely (must include semi-colon!)
    // log current array element to the console
  for (var i = 0; i < array.length; i++){
    if (i > index){
      break;
    }
    console.log(array[i]);
  }
}
//test cases:
useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4