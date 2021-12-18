// getElementsGreaterThan10AtProperty
// Write a function called "getElementsGreaterThan10AtProperty".
// Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.
// Notes:
// If the array is empty, it should return an empty array.
// If the array contains no elements greater than 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
function getElementsGreaterThan10AtProperty(obj, key) {
    // your code here
    if (obj[key] === undefined){
        return [];
    }
    if (Array.isArray(obj[key]) === false){
        return [];
    }
    if (obj[key].length === 0){
        return [];
    }
    var result = [];
    for (var i = 0; i < obj[key].length; i++){
        if (obj[key][i] > 10){
            result.push(obj[key][i]);
        }
    }
    return result;
    
  }
//test cases:
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]

// getFirstElementOfProperty
// Write a function called "getFirstElementOfProperty".
// Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key.
// Notes:
// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
function getFirstElementOfProperty(obj, key) {
    // your code here
    if (obj[key] === undefined){
        return undefined;
    }
    if (obj[key].length === 0){
        return undefined;
    }
    if (Array.isArray(obj[key]) === false){
        return undefined;
    }
    return obj[key][0];
  }
//test cases:
var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1

// getNthElementOfProperty
// Write a function called "getNthElementOfProperty".
// Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.
// Notes:
// If the array is empty, it should return undefined.
// If n is out of range, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
function getNthElementOfProperty(obj, key, n) {
    // your code here
    if (obj[key] === undefined){
        return undefined;
    }
    if (obj[key].length === 0){
        return undefined;
    }
    if (Array.isArray(obj[key]) === false){
        return undefined;
    }
    return obj[key][n];
  }
//test cases:
var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2

// getLastElementOfProperty
// Submitted on Today at 9:01 AM
// Write a function called "getLastElementOfProperty".
// Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.
// Notes:
// If the array is empty, it should return undefined.
// if the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
function getLastElementOfProperty(obj, key) {
    // your code here
    if (obj[key] === undefined){
        return undefined;
    }
    if (obj[key].length === 0){
        return undefined;
    }
    if (Array.isArray(obj[key]) === false){
        return undefined;
    }
    var n = obj[key].length - 1;
    return obj[key][n];
  }
//test cases:
var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5