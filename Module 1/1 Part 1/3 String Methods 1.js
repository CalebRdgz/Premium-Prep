//getFullName
//Write a function called "getFullName". Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
function getFullName(firstName, lastName) {
    // your code here
    return firstName + " " + lastName;
  }
//test cases:
var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'

//----------------------------------------------------------------------------------------------------

//getLengthOfWord
//Write a function called "getLengthOfWord". Given a word, "getLengthOfWord" returns the length of the given word.
function getLengthOfWord(word) {
    // your code here
    return word.length;
  }
//test cases:
var output = getLengthOfWord('some');
console.log(output); // --> 4

//----------------------------------------------------------------------------------------------------

//getLengthOfTwoWords
//Write a function called "getLengthOfTwoWords". Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
function getLengthOfTwoWords(word1, word2) {
    // your code here
    return word1.length + word2.length;
  }
//test cases:
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9