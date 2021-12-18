// isEvenWithoutModulo
// Write a function called "isEvenWithoutModulo".
// Given a number, "isEvenWithoutModulo" returns whether it is even.
// Notes:
// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
function isEvenWithoutModulo(num) {
    // your code here
    if (num === 0){
        return true;
    }

    num = Math.abs(num);
    //subtract 2 from input until it reaches either 1 or 0
    while (num >= 2){
        num = num - 2;
    }
    //if num = 1: false, if num = 0: true because even
    if (num === 1){
        return false;
    }else{
        return true;
    }
  }
//test cases:
var output = isEvenWithoutModulo(8);
console.log(output); // --> true