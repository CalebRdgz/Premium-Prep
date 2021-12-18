// multiply
// Write a function called "multiply".
// Given 2 numbers, "multiply" returns their product.
// Notes:
// It should not use the multiply operator - *
function multiply(num1, num2) {
    // your code here
    var resultPositive = true;
    if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)){
        resultPositive = false;
    }
    
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    
    var result = 0;
    for (var i = 0; i < num2; i++){
        result += num1;
    }
    
    if (resultPositive){
        return result;
    }else{
        return -result;
    }
  }
var output = multiply(4, 7);
console.log(output); // --> 28