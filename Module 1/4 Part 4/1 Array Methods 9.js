// filterOddLengthWords
// Write a function called "filterOddLengthWords".
// Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.
function filterOddLengthWords(words) {
    // your code here
    var oddArray = [];
    for (var i = 0; i < words.length; i++){
        if (words[i].length%2 !== 0){
            oddArray.push(words[i]);
        }
    }
    return oddArray;
}
//test cases:
var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

// filterEvenLengthWords
// Write a function called "filterEvenLengthWords".
// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.
function filterEvenLengthWords(words) {
    // your code here
    var newArr = [];
    for (var i = 0; i < words.length; i++){
        if (words[i].length %2===0){
            newArr.push(words[i]);
        }
    }
    return newArr;
}
//test cases:
var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

// getLengthOfLongestElement
// Write a function called "getLengthOfLongestElement".
// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.
// Notes:
// It should return 0 if the array is empty.
function getLengthOfLongestElement(arr) {
    // your code here
   if (arr.length === 0){
    return 0;
}
  
    var longest = arr[0];
    
    for (var i = 1; i < arr.length; i++){
        if (longest.length < arr[i].length){
            longest = arr[i];
        }
    }
    return longest.length;
}
//test cases:
var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5