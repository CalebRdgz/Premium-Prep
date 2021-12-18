// computeSummationToN
// Write a function called "computeSummationToN".
// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.
// Notes:
// If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
function computeSummationToN(n) {
    // your code here
    var arr = [];
    
     while (n > 0){
         arr.push(n);
         n--;
     }
     
     var sum = 0;
     
     for (var i = 0; i < arr.length; i++){
         sum += arr[i];
     }
     return sum;
  }
//or:
function computeSummationToN(n) {
    // your code here
    var sum = 0;
    
     for (var value = 0; value <= n; value++){
         sum += value;
     }
     return sum;
  }
//test cases:
var output = computeSummationToN(6);
console.log(output); // --> 21