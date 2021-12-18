// getProductOfAllElementsAtProperty
// Write a function called "getProductOfAllElementsAtProperty".
// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.
// Notes:
// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.
function getProductOfAllElementsAtProperty(obj, key) {
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
    var product = 1;
    for (var i = 0; i < obj[key].length; i++){
        product *= obj[key][i];
    }
    return product;
  }
//test cases:
var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24