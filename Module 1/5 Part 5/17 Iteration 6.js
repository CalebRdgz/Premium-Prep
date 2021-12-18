// multiplyBetween
// Write a function called "multiplyBetween".
// Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.
// Notes:
// The product between 1 and 4 is 1 * 2 * 3 = 6.
// If num2 is not greater than num1, it should return 0.
function multiplyBetween(num1, num2) {
    // your code here
    if (num2 <= num1){
        return 0;
    }
    var product = 1;
    for (var i = num1; i < num2; i++){
        product = product * i;
    }
    return product;
  }
//test cases:
var output = multiplyBetween(2, 5);
console.log(output); // --> 24


// computeSumBetween
// Write a function called "computeSumBetween".
// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.
// Notes:
// The sum between 1 and 4 is 1 + 2 + 3 = 6.
// If num2 is not greater than num1, it should return 0.

//test cases:
var output = computeSumBetween(2, 5);
console.log(output); // --> 9