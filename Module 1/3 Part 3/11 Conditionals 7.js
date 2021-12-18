// areValidCredentials
// Write a function called "areValidCredentials".
// Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.
function areValidCredentials(name, password) {
    // your code here
    if (name.length > 3 && password.length >= 8){
        return true;
    }else{
        return false;
    }
  }
//test cases:
var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true

// findMinLengthOfThreeWords
// Write a function called "findMinLengthOfThreeWords".
// Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.
function findMinLengthOfThreeWords(word1, word2, word3) {
    // your code here
    var array = [word1, word2, word3];
    var minLength = word1.length;
    for (var i = 1; i < array.length; i++){
        if (array[i].length < minLength){
        minLength = array[i].length;
        }
    }
    return minLength;
}
//test cases:
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

// findMaxLengthOfThreeWords
// Submitted on Today at 3:06 AM
// Write a function called "findMaxLengthOfThreeWords".
// Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.
function findMaxLengthOfThreeWords(word1, word2, word3) {
    // your code here
    var array = [word1, word2, word3];
    var maxLength = word1.length;
    for (var i = 1; i < array.length; i++){
        if (array[i].length > maxLength){
            maxLength = array[i].length;
        }
    }
    return maxLength;
}
//test cases:
var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3

// getLongestOfThreeWords
// Submitted on Today at 3:05 PM
// Write a function called "getLongestOfThreeWords".
// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.
// Notes:
    // If there is a tie, it should return the first word in the tie.
function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    var array = [word1, word2, word3];
    var longest = array[0];
    for (var i = 1; i < array.length; i++){
        if (longest.length < array[i].length){
            longest = array[i];
        }
    }
    return longest;
}
//test cases:
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

// findShortestOfThreeWords
// Write a function called "findShortestOfThreeWords".
// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.
// Notes:
// If there are ties, it should return the first word in the parameters list.
function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    var words = [word1, word2, word3];
    var shortest = words[0];
    
    for (var i = 1; i < words.length; i++){
        if (words[i].length < shortest.length){
            shortest = words[i];
        }
    }
    return shortest;
}
//test cases:
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'