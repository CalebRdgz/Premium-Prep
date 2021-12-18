// convertDoubleSpaceToSingle
// Write a function called "convertDoubleSpaceToSingle".
// Given a string, "convertDoubleSpaceToSingle" returns the passed in string, 
// with all the double spaces converted to single spaces.
// Notes:
    // In order to do this problem, you should be familiar with "String.split", and "Array.join".
function convertDoubleSpaceToSingle(str) {
    // your code here
    var split = str.split('  '); // splits the array at every double space
    var joined = split.join(' ') // joins the new array with single spaces instead
    return joined;
}

//also works:
function convertDoubleSpaceToSingle(str) {
    // your code here
    return str.split('  ').join(' ');
}

//test cases:
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
