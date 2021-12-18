//What is Data Modeling?
//Let's talk about a few things:

//A user on a website
//A kitchen in a restaurant
//A plane in an airport
//A book in a library

//Free Form Practice on your own:
//Pick something from your life, or the list above
//Consider its context
//Model some data related to it

//describing a kitchen:
var kitchen = 'a place where food is made, there are several employees, it operates from a certain time to another time, a place where dishes are done, managers, cooks, servers, dishwashers, repositories for ingredients, stoves, ovens, microwave, surfaces to finish preparing food'

var kitchen = {
    hoursInOperation: '1030am - 900pm', 
    servesBreakfast: false,
    employeeList: ['cooks', 'chef', 'servers', 'dish washer', 'manager'],
    serveLunch: function(){

    }
}

//----------------------------------------------------------------------------------------------------

//Using an Object to Count Elements
//Let us consider the case of wanting to count several totals at once

//We can do so using an object:
// an array of items to count
var arrayOfItemsToCount = ['a', 'b', 'a', 'b', 'c', 'b'];
// an object to store the counts
var objectOfCounts = {};

// we loop over the array of items to count
for (var i = 0; i < arrayOfItemsToCount.length; i++) {
  var currentItem = arrayOfItemsToCount[i];
  // if we have not counted current item
  if (objectOfCounts[currentItem] === undefined) {
    // add it to count object with a value of 1
    objectOfCounts[currentItem] = 1;
  // otherwise (we have counted it at least once)
  } else {
    // increment value in count object by 1
    objectOfCounts[currentItem]++;
  }
}
console.log(objectOfCounts);

//----------------------------------------------------------------------------------------------------

//We can also do so with variables, and actual code.
var attendingOutput = ['Dr. J', 'Dr. K', 'Dr. J', 'Dr. M', 'Dr. J', 'Dr. K', 'Dr. C'];

var objectOfDoctorsCounts = {};

for (var i = 0; i < attendingOutput.length; i++) {
  var currentDoc = attendingOutput[i];
  // if current doc has not been counted yet
  if (objectOfDoctorsCounts[currentDoc] === undefined) {
    objectOfDoctorsCounts[currentDoc] = 1;
  } else {
    objectOfDoctorsCounts[currentDoc]++;
  }
}
console.log(objectOfDoctorsCounts);

//----------------------------------------------------------------------------------------------------

//Using an Object to Count Elements Coding Challenge (1)
//Use an object to count words in a sentence

//Write a function called "countWords".
//Given a string (words separated by spaces), "countWords" returns an object where each key is a 
//word in the given string, with its value being how many times that word appeared in the given string. 
//If given an empty string, your function should return an empty object.
function countWords(stringOfWords) {
    // your code here
    if (stringOfWords === ''){ //cant do this with an array (array.length === 0 is correct instead)
        return {};
    }
    //create result count object
    var counts = {};

    //split the input string into an array of words
    var words = stringOfWords.split(' '); //words separated by spaces inside the string into an array ('word0, word1' -> [word0, word1])
    //iterate over the array of words
    for (var i = 0; i < words.length; i++){
        var currentWord = words[i];
        //check if current word is not in result object
        if (counts[currentWord] === undefined){
            //if not, instantiate current word in object with value of 1
            counts[currentWord] = 1;
            //otherwise
    }else{
                //increment value of current word in object by 1
                counts[currentWord]++;
    }
    }
    //return the result count object
    return counts;
  }
//test cases:
var result1 = countWords('ask a bunch get a bunch');
console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);

var result2 = countWords('');
console.log('should log "{}":', result2);

//----------------------------------------------------------------------------------------------------

//Using an Object to Count Elements Coding Challenge (2):
//Use an object to count letters in a word:

//Write a function called "countAllCharacters".
//Given a string of characters, "countAllCharacters" returns an object where each key is a character 
//in the given string, with its value being how many times that character appeared in the given string. 
//If given an empty string, your function should return an empty object.
function countAllCharacters(string) {
    // your code here
    if(string === ""){
        return {};
    }
    //create a counts variable
    var counts = {};
    //iterate over the input string
    for (var i = 0; i < string.length; i++){
        //if current letter is undefined in the new counts object^
        if (counts[ string[i] ] === undefined){
            //set the value of current letter to 1
            counts[string[i]] = 1;
            //otherwise
        }else{
            //increment value of current letter by 1
            counts[string[i]]++;
        }
    }
    return counts;
  }
//test cases:
var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);