// removeNumbersLargerThan
// Write a function called "removeNumbersLargerThan".
// Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.
function removeNumbersLargerThan(num, obj) {
  // your code here
  for (var keys in obj){
      if (obj[keys] > num){
          delete obj[keys];
      }
  }
}
//test cases:
var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }

// removeNumbersLessThan
// Write a function called "removeNumbersLessThan".
// Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.
function removeNumbersLessThan(num, obj) {
  // your code here
  for (var key in obj){
      if (obj[key] < num){
          delete obj[key];
      }
  }
}
//test cases:
var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }

// removeStringValuesLongerThan
// Write a function called "removeStringValuesLongerThan".
// Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.
function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (var key in obj){
      if (obj[key].length > num){
          delete obj[key];
      }
  }
}
//test cases:
var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }