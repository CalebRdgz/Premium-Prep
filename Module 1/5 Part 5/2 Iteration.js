// getStringLength
// Write a function called "getStringLength".
// Given a string, "getStringLength" returns the length of the given string.
// Notes:
// Do NOT use any native 'length' methods.
// You might consider using 'substring' or 'slice' as alternatives.
function getStringLength(string) {
    // your code here
    var count = 0;
    while (string !== ''){
      //chop the first char of the string using slice
      string = string.slice(1);
      count++;
    }
    return count;
  }
//test cases:
var output = getStringLength('hello');
console.log(output); // --> 5