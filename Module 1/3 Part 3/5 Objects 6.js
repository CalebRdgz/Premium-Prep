// removeArrayValues
// Write a function called "removeArrayValues".

// Given an object, "removeArrayValues" removes any properties whose values are arrays.
function removeArrayValues(obj) {
  // your code here
  for (var key in obj){
      if (Array.isArray(obj[key]) === true){
          delete obj[key];
      }
  }
}
//test cases:
var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }

// removeNumberValues
// Write a function called "removeNumberValues".
// Given an object, "removeNumberValues" removes any properties whose values are numbers.
function removeNumberValues(obj) {
  // your code here
  for (var key in obj){
      if (typeof obj[key] === 'number'){
          delete obj[key];
      }
  }
}
//test cases:
var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

// removeStringValues
// Write a function called "removeStringValues".
// Given an object, "removeStringValues" removes any properties on the given object whose values are strings.
function removeStringValues(obj) {
  // your code here
  for (var key in obj){
      if (typeof obj[key] === 'string'){
          delete obj[key];
      }
  }
}
//test cases:
var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }

