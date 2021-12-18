// Convert Object To Array 3
// Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

// Argument:

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
// Return value:

[['name', 'Holly'], ['age', 35], ['role', 'producer']]

function convertObjectToArray(obj) {
    // your code here
    var container = [];
    for (var key in obj){
        var innerArray = [key, obj[key]];
        container.push(innerArray);
    }
    return container;
  }