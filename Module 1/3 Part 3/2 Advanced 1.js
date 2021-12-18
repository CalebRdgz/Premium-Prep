// countWords
// Write a function called "countWords".
// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.
// Notes:
// If given an empty string, it should return an empty object.
function countWords(str){
    if (str === ''){
        return {};
    }
    //create a result object
    var result = {};
    //split input str into an array of words
    var words = str.split(' '); //created new array named words split words at every space
    //iterate over the array of words
    for (var i = 0; i < words.length; i++){
        //if we have not counted the current word yet
        if (result[words[i]] === undefined){
            //instantiate the count (at a value of 1) for the current word in the object
            result[words[i]] = 1;
        }else{
            //increment the value of the current word in the object
            result[words[i]] += 1;
        }
    }
    //return the result object
    return result;
}
//test cases:
var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}