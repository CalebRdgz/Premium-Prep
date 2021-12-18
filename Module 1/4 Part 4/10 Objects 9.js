
// getOddLengthWordsAtProperty
// Write a function called "getOddLengthWordsAtProperty".
// Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.
// Notes:
// If the array is empty, it should return an empty array.
// If it contains no odd length elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the given key, it should return an empty array.
function getOddLengthWordsAtProperty(obj, key) {
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
      var result = [];
      for (var i = 0; i < obj[key].length; i++){
          if (obj[key][i].length %2 !== 0){
              result.push(obj[key][i]);
          }
      }
      return result;
  }
//test cases:
var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

// getAverageOfElementsAtProperty
// Write a function called "getAverageOfElementsAtProperty".
// Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.
// Notes:
// If the array at the given key is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.
function getAverageOfElementsAtProperty(obj, key) {
    // your code here
    if (obj[key] === undefined){
          return 0;
      }
      if (obj[key].length === 0){
          return 0;
      }
      if (Array.isArray(obj[key]) === false){
          return 0;
      }
      var sum = 0;
      for (var i = 0; i < obj[key].length; i++){
          sum += obj[key][i];
      }
      return sum/obj[key].length;
  }
//test cases:
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

// getEvenLengthWordsAtProperty
// Write a function called "getEvenLengthWordsAtProperty".
// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.
// Notes:
// If the array is empty, it should return an empty array.
// If it contains no even length elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
function getEvenLengthWordsAtProperty(obj, key) {
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
      var result = [];
      for (var i = 0; i < obj[key].length; i++){
          if (obj[key][i].length %2 === 0){
              result.push(obj[key][i]);
          }
      }
      return result;
  }
//test cases:
var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']