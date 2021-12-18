// isOddWithoutModulo
// Write a function called "isOddWithoutModulo".
// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.
// Note:
// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isOddWithoutModulo(17);
function isOddWithoutModulo(num) {
    // your code here
    if (num === 0){
        return false;
    }

    num = Math.abs(num);
    //subtract 2 from input until it reaches either 1 or 0
    while (num >= 2){
        num = num - 2;
    }
    //if num = 1: true, if num = 0: false because even
    if (num === 1){
        return true;
    }else{
        return false;
    }
  }
//test cases:
console.log(output); // --> true