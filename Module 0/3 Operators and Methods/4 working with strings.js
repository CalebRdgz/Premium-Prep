//Creating a String:
//In order to create a string, we assign a variable to a series of characters wrapped with single or double quotes
var newString = "a series of characters";
console.log('newString:', newString);

//challenge
function createString() {
    // create a result variable,
    // assign it to a new string
    var result = "deez nutz";
    return result;
    // return the result variable
  }
//test case:
var resultString = createString();
console.log('should be a string type:', typeof resultString); //logs should be a string type: string

//----------------------------------------------------------------------------------------------------

//Accessing a Character in a String:
//Let us consider the case of wanting to access a specific character from within a string
//Recall that strings are zero-indexed

//This means that we can access a given character within a string, but these characters begin at 0:
var name = "Robert Smalls";
var firstCharacter = name[0];
var eighthCharacter = name[7];

console.log('firstCharacter:',firstCharacter); // should log "R"
console.log('eighthCharacter:', eighthCharacter); // should log "S"

//We can also do this with variables for the indexes:

var name = "Robert Smalls";
var index = 1;
var secondCharacter = name[index];

console.log('secondCharacter:',secondCharacter); // should log "o"

//challenge:
function accessACharacter(string, index) {
    // create a result variable,
    // assign it to an expression that accesses the character within string at the index
    var result = string[index]; //ex.) var name = "caleb"; -> var result = name[3]; = 'e'
    return result;
    // return the result variable
  }
//test case:
var resultCharacter = accessACharacter('Computer', 3);
console.log('should be "p":', resultCharacter); //logs should be "p": p

//----------------------------------------------------------------------------------------------------

//Reassigning a String:
//Let us consider the case of wanting to change a string
//Strings are immutable
//This means that we cannot change them once they are created

//This is not a large problem, as we can certainly reassign a variable from one string to another without much difficulty:
var job = "Shipping Coordinator";
console.log('job before reassignment:', job);

// we reassign a variable by leaving off the keyword 'var' (provided variable name already exists)
job = "Director of Shipping";
console.log('job after reassignment:', job);

//challenge:
function reassignAString(string) {
  // reassign input string to described string
  input = "reassigned";
  return input;
  // return the input string
}
//test cases:
var resultString1 = reassignAString('Computer Science');
console.log('should be "reassigned":', resultString1);

var resultString2 = reassignAString('Software Engineering');
console.log('should also be "reassigned":', resultString2);

//----------------------------------------------------------------------------------------------------

//Add together or concatenate two or more Strings:
//Frequently, you will be asked to add strings together in order to create a new string of some kind

//We can do so using the + operator:
var firstName = "Robert";
var lastName = "Smalls";

var fullName = firstName + lastName;
console.log('fullName without space:', fullName);

//In the previous example, we crated the string "RobertSmalls", which is not perfectly precise. To fix this, we will need to add a third string with just a space:
var firstName = "Robert";
var lastName = "Smalls";

var fullName = firstName + " " + lastName;
console.log('fullName with space:', fullName);

//challenge:
function addTogetherTwoStrings(string1, string2) {
  // create a result variable
  // assign it to an expression which adds together string1 and string2
  var result = string1 + string2;
  return result;
  // return the result variable
}
//test cases:
var resultString1 = addTogetherTwoStrings('Comp', 'uter');
console.log('should be "Computer":', resultString1);

var resultString2 = addTogetherTwoStrings('Engin', 'eering');
console.log('should also be "Engineering":', resultString2);

//----------------------------------------------------------------------------------------------------

//String Interpolation:
//Let us consider the case in which we want to build a message around the values of a variable
//This is called string interpolation

//We can do this using the + operator (note -> there are newer ways to do this - research template literals):
var food = "pizza";
var methodOfTransport = "the train";

var sentence = "The best way to travel to get " + food + " is surely to take " + methodOfTransport;
console.log("Resulting sentence:", sentence);
//challenge:
function interpolateAString(activity, dayOfTheWeek) {
  // create a result variable
  // assign it to an expression which interpolates the input parameters into the described message
  var result = "We will go " + activity + " on " + dayOfTheWeek + ".";
  return result;
  // return the result variable
}
//test cases:
var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log("should log 'We will go hiking on Tuesday.':", resultMessage1);

var resultMessage2 = interpolateAString('dancing', 'Friday');
console.log("should log 'We will go dancing on Friday.':", resultMessage2);

//challenge:
function createFullName(firstName, lastName) {
  // create a fullName variable
  // assign it to an expression adding first and last name with a space in between
  var fullName = firstName + " " + lastName;
  return fullName;
  // return the fullName variable
}
//test cases:
var resultFullName1 = createFullName("Duevyn", "Cooke");
console.log("should log Duevyn Cooke:", resultFullName1);

var resultFullName2 = createFullName("Ada", "Lovelace");
console.log("should log Ada Lovelace:", resultFullName2);

//----------------------------------------------------------------------------------------------------

//Get the length of a string:
//We can do so using the .length property (not a method, although vaguely similar in appearance):
var lengthOfName = "Alan Turing".length;
console.log('lengthOfName version 1:', lengthOfName);

//We can also do this with variables whose values are strings:
var name = "Alan Turing";
var lengthOfName = name.length;
console.log('lengthOfName version 2:', lengthOfName);

//challenge:
function getStringLength(string) {
  // create a length variable
  // assign it to the length of the string
  lengthName = string.length;
  return lengthName;
  // return the length variable
}
//test cases:
var resultLength1 = getStringLength('Apple');
console.log('should log 5:', resultLength1);

var resultLength2 = getStringLength('Microsoft');
console.log('should log 9:', resultLength2);

//----------------------------------------------------------------------------------------------------

//Get the last character of a string
//Were we to attempt to use an actual number index, we will be unsuccessful for the general case
//This is because we may not automatically know how long the string in question is

//We can do so using the .length property and the fact that a string's index start at 0:
var lastCharacter = "JavaScript"["JavaScript".length - 1];
console.log('last character:', lastCharacter);

//We can also do this with variables whose values are strings:
var language = "JavaScript";
var lastIndex = language.length - 1;

var lastCharacter = language[lastIndex];
console.log('lastCharacter:', lastCharacter);

//challenge:
function getLastCharacter(string) {
  // create a lastIndex variable
  // assign it to the last index in the string
  var lastIndex = string.length - 1;
  // create a lastCharacter variable
  // assign it to the last character in the string (make use of lastIndex)
  var lastCharacter = string[lastIndex];
  return lastCharacter;
  // return the lastCharacter variable
}
//test cases:
var resultLastCharacter1 = getLastCharacter('Banana');
console.log('should log "a":', resultLastCharacter1);

var resultLastCharacter2 = getLastCharacter('Macrofirm');
console.log('should log "m":', resultLastCharacter2);

//----------------------------------------------------------------------------------------------------

//Using the substring Method:
//Let us consider the case of wanting to get a portion of a string

//We can do so using the .substring() method (note -> there are other ways to do this - research the .substr() method):
var subString = "JavaScript".substring(2, 9);
console.log('portion of string from before index 2, up to, but not including, index 9:', subString);

var subString = "JavaScript".substring(1);
console.log('portion of string from before index 1, to the end of the string:', subString);

var subString = "JavaScript".substring();
console.log('portion which includes entire string:', subString);

//We can also do this with variables whose values are strings:
var language = "JavaScript";
var startIndex = 2;
var endIndex = 9;

var subString = language.substring(startIndex, endIndex);
console.log('portion of string from before startIndex, up to, but not including, endIndex:', subString);

//challenge:
function applySubString(string, start, end) {
  // create a subString variable
  // assign it to a portion of the string from before start, up to, but not including end
  var subString = string.substring(start,end);
  return subString;
  // return the subString variable
}
//test cases:
var string1 = 'Queue';
var resultSubString1 = applySubString(string1, 1, 4);
console.log('should log "ueu":', resultSubString1);

var string2 = 'Stack Trace';
var resultSubString2 = applySubString(string2, 2, 10);
console.log('should log "ack Trac":', resultSubString2);

//----------------------------------------------------------------------------------------------------

//Using the indexOf Method
//Let us consider the case of wanting to determine where in a string we can find a particular substring

//We can do so using the .indexOf() method for string
var indexOfSubString1 = "Google".indexOf('oog');
console.log('index where substring is found:', indexOfSubString1); //oog "o" begins at index 1

var indexOfSubString2 = "In defense of one's principles".indexOf('e');
console.log('index where substring is first found:', indexOfSubString2);

//We say "first found" in the last example, because we can also tell our call to indexOf that it should begin searching after a certain index:
var indexOfSubString = "In defense of one's principles".indexOf('e', 7);
console.log('index where substring is found, after a certain point in string:', indexOfSubString);

//If the substring is not found, the call to indexOf will return -1:
var indexOfSubStringNotPresent = "Oceanic".indexOf('xyz');
console.log('index if substring is not present:', indexOfSubStringNotPresent);
//We can also do this with variables whose values are strings:
var DNAStrand = "ATGCGCTAA";
var stopCodon = "TAA";
var indexOfStopCodon = DNAStrand.indexOf(stopCodon); //logs 6 because "TAA" starts at index 6 (stopCodon)

console.log('index where stop codon is found with gene sequence:', indexOfStopCodon);

//Let us further complicate the issue by looking for the second stop codon, based upon where we find the first.
var DNAStrand = "ATGCGCTAACATCGCAGCTAGTTAAGCGATTGCAT";
var stopCodon = "TAA";
var indexOfFirstStopCodon = DNAStrand.indexOf(stopCodon); //index of TAA is 6

var indexOfSecondStopCodon = DNAStrand.indexOf(stopCodon, indexOfFirstStopCodon + 1) //logs 22 because the second "TAA" is at index 22

console.log('index where second stop codon is found with gene sequence:', indexOfSecondStopCodon);

//And once again, if the substring is not present, the call to indexOf will return -1:=
var DNAStrand = "ATGCGCATTCCGCATT";
var stopCodon = "TAA"; //there is no "TAA" (stopCodon) in the line above^
var indexOfStopCodon = DNAStrand.indexOf(stopCodon);

console.log("return value when substring is not present:", indexOfStopCodon); //logs -1 because there is no "TAA" in DNAStrand

//challenge:
function applyIndexOf(string, subString) {
  // create an index variable
  // assign it to the index inside of string where subString can first be found
  var index = string.indexOf(subString);
  return index;
  // return the index variable
}
//test cases:
var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1);

var string2 = 'size,color,cut,price';
var subString2 = 'cut';
var resultIndex2 = applyIndexOf(string2, subString2);
console.log('should log 11:', resultIndex2);

//----------------------------------------------------------------------------------------------------

//Using the toString Method
//Let us consider the case of wanting to turn a value, other than a string, into a string

//We can do so using the .toString() method (note -> there are other, albeit slightly different ways to do this - research the JSON.stringify() method)::
var num = 17;
var stringNum = num.toString(); //num.toString() turns the integer num(17) into a string "17"
console.log('stringNum:', stringNum);
console.log('type of stringNum:', typeof stringNum);

var bool = true;
var stringBool = bool.toString(); //bool.toString() turns the boolean true into a string "true"
console.log('stringBool:', stringBool);
console.log('type of stringBool:', typeof stringBool);

//Quick Note (may seem odd, but a glance now will be useful later):
//17.toString(); // this will throw an error
Number(17).toString(); // this will not

var num = 17;
num.toString(); //this will also not

//challenge:
function applyToString(param) {
  // create a stringVersion variable
  // assign it to the string version of the input param
  var stringVersion = param.toString();
  return stringVersion;
  // return the stringVersion variable
}
//test cases:
var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1);
console.log('type should be "string":', typeof resultString1);

var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false":', resultString2);
console.log('type should be "string":', typeof resultString2);

//Escape Characters
//In computing and telecommunication, an escape character is a character which invokes an alternative interpretation on subsequent characters in a character sequence
//Let us consider two cases:
//The first is having an apostrophe as part of a string wrapped in single quotes
//The second will be a character called a newline symbol, which will alter the behavior of the string when it is printed out
//USE + "\n" (IN QUOTATIONS) WHEN ADDING NEW LINE TO VARIABLES
//We can do both of these, and more, using escape characters:
//Escaping apostrophe:
console.log('sample:', 'It\'s raining'); // <- how to use apostrophe without ending the string. logs "sample: It's raining"

//Newline symbol:
console.log('multiline string:', 'First Line\nSecond Line\nThird Line');

//We can also do this with variables:
var message = 'That is Jubal\'s Mother\'s favorite, isn\'t it?';
console.log('message containing escaped apostrophes:', message);

var haiku = 'An old silent pond...\nA frog jumps into the pond,\nsplash! Silence again.';
console.log('A haiku from Matsuo Basho:\n', haiku);

//challenge:
function generateHaiku(firstLine, secondLine, thirdLine) {
  // create a haiku variable
  // assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
  var haiku = firstLine + "\n" + secondLine + "\n" + thirdLine;
  return haiku;
  // return the haiku variable
}
//test cases:
var resultHaiku1 = generateHaiku('In the twilight rain', 'these brilliant-hued hibiscus -', 'A lovely sunset.');
console.log('should log formatted haiku:\n', resultHaiku1);

var resultHaiku2 = generateHaiku('The lamp once out', 'Moves west, flowers\' shadows', 'Creep eastward.');
console.log('should also log formatted haiku:\n', resultHaiku2);