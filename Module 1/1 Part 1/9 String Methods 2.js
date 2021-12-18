//computeAverageLengthOfWords
//Write a function called "computeAverageLengthOfWords".
//Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
function computeAverageLengthOfWords(word1, word2) {
    // your code here
    var sum = word1.length + word2.length;
    var avg = sum/2;
    return avg;
  }
//test cases:
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6

