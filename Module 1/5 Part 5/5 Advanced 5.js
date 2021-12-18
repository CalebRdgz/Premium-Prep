// sumDigits
// Write a function called "sumDigits".
// Given a number, "sumDigits" returns the sum of all its digits.
var output = sumDigits(1148);
console.log(output); // --> 14

// If the number is negative, the first digit should count as negative.
var output = sumDigits(-316);
console.log(output); // --> 4

// Notes:
// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

function sumDigits(num) {
    var inputIsNegative = false;
  // check if num is negative
  if (num < 0){
      //get rid of negative sign
      num = Math.abs(num);
      //save this info for later
      inputIsNegative = true;
  }
  
  var total = 0;
  //turn input num into a string
  var numString = num.toString();
  
  var firstValue = Number(numString[0]);
  //iterate over the string
  for (var i = 0; i < numString.length; i++){
      total += Number(numString[i]);
  }
  if (inputIsNegative){
      total -= 2*firstValue
      return total;
  }else{
      return total;
  }
}

