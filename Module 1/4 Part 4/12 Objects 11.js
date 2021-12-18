// getSmallestElementAtProperty
// Write a function called "getSmallestElementAtProperty".
// Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.
// Notes:
// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
function getSmallestElementAtProperty(obj, key) {
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
      var smallest = obj[key].length -1;
      for (var i = 0; i < obj[key].length; i++){
          if (obj[key][i] < smallest){
              smallest = obj[key][i];
          }
      }
      return smallest;
  }
//test cases:
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

// getLargestElementAtProperty
// Write a function called "getLargestElementAtProperty".
// Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.
// Notes:
// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
function getLargestElementAtProperty(obj, key) {
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
        var largest = obj[key].length -1;
        for (var i = 0; i < obj[key].length; i++){
            if (obj[key][i] > largest){
                largest = obj[key][i];
            }
        }
        return largest;
  }
//test cases:
var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4

// getAllButLastElementOfProperty
// Write a function called "getAllButLastElementOfProperty".
// Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.
// Notes:
// If the array is empty, it should return an empty array.
// If the property at the given key is not an array, it return an empty array.
// If there is no property at the key, it should return an empty array.
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (obj[key] === undefined){
              return [];
        }
        if (obj[key].length === 0){
              return [];
        }
        if (Array.isArray(obj[key]) === false){
              return [];
        }
        obj[key].pop();
        return obj[key];
  }
//test cases:
var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]

// getElementOfArrayProperty
// Write a function called "getElementOfArrayProperty".
// Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.
// Notes:
// If the array is empty, it should return undefined.
// If the given index is out of range of the array located at the given key, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
function getElementOfArrayProperty(obj, key, index) {
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
          return obj[key][index];
  }
//test cases:
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'