//What is a While Loop? (From MDN)
//The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true
//The condition is evaluated before executing the statement
//Will often be referred to as a "while loop"
//while (/*test condition*/) {
  /* specified statement */
//}
//Loop over sequence of numbers
//Let us consider the case of wanting to look at, or do something, to a range of numbers
//We can do so with a specific while loop:
var x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}

//We can also do this with variables:
var startOfRange = 1;
var endOfRange = 10;

while (startOfRange <= endOfRange) {
  console.log(startOfRange);
  startOfRange++;
}

//While loop over a series of numbers:
function loopASequence(start, end) {
    // create a loop which runs if start is less than or equal to end
    // log current value of start to console
    // increment value of start
    while (start <= end){
        console.log(start);
        start++;
    }
  }
//test cases:
loopASequence(2, 5);
// console output:
// 2
// 3
// 4
// 5

loopASequence(3, 7);
// console output:
// 3
// 4
// 5
// 6
// 7

//----------------------------------------------------------------------------------------------------

//Loop over an Array:
//Let us consider the case of wanting to look at, or do something, to the elements of an array
//We can do so with a specific while loop
//You will often hear this described as "iterating over the array"
var numsArray = [1, 2, 3, 4, 5];
var index = 0;

while ( index < numsArray.length ) {
  console.log('current index:', index);
  console.log('current element:', numsArray[index]);
  console.log('=============='); //gives context for when each iteration of loop ends
  index++;
}
//We can also do this with variables:

var restaurants = ['The Salad Bowl', 'The Steak Knife', 'The Ramen Spoon'];
var index = 0;

while (index < restaurants.length) {
  console.log(restaurants[index]);
  index++;
}

//While loop over an array:
function loopAnArray(array) {
    // create an index variable
    // create a loop which iterates over the input array
      // log current array element to the console
      // increment value of index variable
      var index = 0;
      while(index < array.length){
        console.log(array[index]);
        index++;
      }
  }
//test cases:
loopAnArray(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArray([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5

//----------------------------------------------------------------------------------------------------

//Loop over a String
//Let us consider the case of wanting to look at, or do something, to the characters in a string
//We can do so with a specific while loop
var string = 'I am a String!';
var index = 0;

while (index < string.length) {
  console.log(string[index]);
  index++;
}

//We can also do this with variables:
var noteSequence = 'abcdefg';
var index = 0;

while (index < noteSequence.length) {
  console.log(noteSequence[index]);
  index++;
}

//While loop over a string
function loopAString(string) {
    // create an index variable
    // create a loop which iterates over the input string
      // log current string character to the console
      // increment value of index variable
      var i = 0;
      while (i < string.length){
          console.log(string[i]);
          i++;
      }
  }
  
//test cases:
loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d