// Convert Array To Object 1
// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
// the first element of the array as the object's key, and
// the last element of the array as that key's value.

// Example input:
var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];

// Function's return value (output):
{
  Queen : 'Beyonce'
}
// Do not change the input array. Assume all elements in the input array will be of type 'string'.
// Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

// E.g. it should handle input like:
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']

// Function's return value (output):
{
  Kevin : 'Coleman'
}

function transformFirstAndLast(array) {
  // your code here
  var result = {}; //make an empty object
  var key = array[0]; //key = first element in array
  var value = array[array.length -1]; //value = last element in array
  result[key] = value; //key: value inside result object
  return result;
}