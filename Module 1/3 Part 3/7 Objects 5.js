// removeEvenValues
// Write a function called "removeEvenValues".
// Given an object, "removeEvenValues" removes any properties whose values are even numbers.
// Do this in place and return the original object, do not construct a cloned object that omits the properties.
function removeEvenValues(obj) {
    // your code here
    for (var key in obj){
        if (obj[key] % 2 === 0){
            delete obj[key];
        }
    }
    return obj;
  }
// Example:
var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }

//countNumberOfKeys
// Write a function called "countNumberOfKeys".
// Given an object, "countNumberOfKeys" returns how many properties the given object has.
function countNumberOfKeys(obj) {
    // your code here
    var count = 0;
    for (var key in obj){
        count++
    }
    return count;
  }
//test cases:
var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3

// removeOddValues
// Write a function called "removeOddValues".
// Given an object, "removeOddValues" removes any properties whose values are odd numbers.
function removeOddValues(obj) {
    // your code here
    for (var keys in obj){
        if (obj[keys] % 2 !== 0){
            delete obj[keys];
        }
    }
  }
//test cases:
var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }