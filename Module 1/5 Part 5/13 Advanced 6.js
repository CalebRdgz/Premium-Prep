// modulo
// Write a function called "modulo".
// Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.
// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
// Notes:
// Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
// 0 % ANYNUMBER = 0.
// ANYNUMBER % 0 = NaN.
// If either operand is NaN, then the result is NaN.
// Modulo always returns the sign of the first number, even if the remainder is 0.
function modulo(num1, num2) {
    // your code here
    //0 % ANYNUMBER = 0
    if (num1 === 0){
        return 0;
    }
    //ANYNUMBER % 0 = NaN
    if (num2 === 0){
        return NaN;
    }
    //this may need to go first^
    if (isNaN(num1) || isNaN(num2)){
        return NaN;
    }
    //create a resultIsPositive boolean flag
    var resultIsPositive = true;
    if (num1 < 0){
        resultIsPositive = false;
    }
    //make both num1 and num2 positive versions
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    
    //15-4 = 11-4 = 7-4 = 3-4
    //reassign num1 to be num1 - num2 until num1 is less than num2
    while (num1 >= num2){
        num1 = num1 - num2;
        //num1 -= num2;
    }
    
    //check if result is positive
    if (resultIsPositive){
      //if it is: just return num1
      return num1;
    }else{
    //otherwise
      //return -num1
      return -num1;
    }
    
}
//test cases:
var output = modulo(25, 4);
console.log(output); // --> 1