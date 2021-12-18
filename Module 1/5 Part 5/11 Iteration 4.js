// computeFactorialOfN
// Write a function called "computeFactorialOfN".
// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.
function computeFactorialOfN(n) {
    // your code here
    var factorial = 1;
      
      for (var value = 1; value <= n; value++){
          factorial *= value;
      }
      return factorial;
  }
//test cases:
var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24

// repeatString
// Write a function called "repeatString".
// Given a string and a number, "repeatString" returns the given string repeated the given number of times.
function repeatString(string, num) {
    // your code here
    var result = '';
    for (var i = 0; i < num; i++){
        result += string;
    }
    return result;
}
//test cases:
var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'