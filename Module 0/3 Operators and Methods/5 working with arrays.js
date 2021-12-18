//A Quick Refresher
//The Array "object" is used to store an ordered list of multiple values in a single variable
//The values of an Array can be of any type
//Array indexes, like string indexes, are zero-based: the first element in an array is located at index 0, the second at index 1, and so on
//Creating an Array

//In order to create an array, we can assign a variable to a set of square brackets, 
//which may or may not contain elements, each of which are separated by commas
var fruits = ['oranges', 'bananas', 'apples'];
var scores = [98, 85, 91, 78, 82];
var empty = [];

console.log('fruits:', fruits);
console.log('scores:', scores);
console.log('empty:', empty);

//challenge:
function createArray() {
    // create a result variable,
    // assign it to a new array
    var result = []; //empty array
    var result1 = [1,2,3]; //array with 3 elements, could also be variables and strings
    return result;
    // return the result variable
  }
//test case:
var resultArray = createArray();
console.log('should be an array:', Array.isArray(resultArray));

//----------------------------------------------------------------------------------------------------

//Accessing an Element in an Array
//Let us consider the case of wanting to access a specific element from within an array
//Recall that arrays are zero-indexed

//This means that we can access a given element, but these element begin at 0:
var array = [1, 2, 3, 4];

var secondElement = array[1];
console.log('secondElement:', secondElement)
//We can also do this with variables:
var breakFastOptions = ['eggs', 'bacon', 'pancakes', 'coffee', 'fruit'];
var index = 3;
var breakFastChoice = breakFastOptions[index];

console.log('breakFastChoice:', breakFastChoice);
//challenge:
function accessAnElement(array, index) {
    // create a result variable,
    // assign it to an expression that accesses the element within array at the index
    var result = array[index];
    return result;
    // return the result variable
  }
//test case:
var resultElement = accessAnElement(['Computer', 'Mouse', 'Ethernet Cable'], 1);
console.log('should be "Mouse":', resultElement);

//----------------------------------------------------------------------------------------------------

//Reassigning an Element in an Array
//Let us consider the case of wanting to reassign an element in an array
//Arrays are mutable
//This means that we can change them once they are created, 
//and is as simple as making an assignment using the = operator:
var array = ['January', 'March', 'March'];
console.log('before reassignment:', array); //logs before reassignment: ['January', 'March', 'March']

array[1] = 'February';
console.log('after reassignment:', array); //logs after reassignment: ['January', 'February', 'March']

//We can also do this with variables:
var marvelHeroes = ['Iron Man', 'Captain America', 'Thor', 'Batman'];
console.log('before reassignment:', marvelHeroes);

var indexToCorrect = 3;
var marvelHeroToBeAdded = 'Scarlet Witch';

marvelHeroes[indexToCorrect] = marvelHeroToBeAdded;
console.log('after reassignment:', marvelHeroes);

//challenges
function reassignAnElement(array, index, newValue) {
    // reassign the value in the array, located at the index, to the newValue parameter
    array[index] = newValue;
    return array;
    // return the input array
  }
//test cases:
var resultArray = reassignAnElement(['desk', 'lamp', 'chewtoy'], 2, 'textbook');
console.log('should replace "chewtoy" with "textbook":', resultArray);

//----------------------------------------------------------------------------------------------------

//Getting the Length of an Array
//Let us consider the case of wanting to get the length of an array

//We can do so using the .length property (not a method, although vaguely similar in appearance):
var lengthOfArray = [1, 2, 3, 4].length;
console.log('lengthOfArray', lengthOfArray);

//We can also do this with variables:
var legends = ["Alan Turing", "Ada Lovelace", "Al-Kwarizmi", "Edsger Dijkstra"];
var lengthOfLegendsArray = legends.length;
console.log('lengthOfLegendsArray:', lengthOfLegendsArray);

//challenge:
function getArrayLength(array) {
    // create a length variable
    // assign it to the length of the array
    var length = array.length;
    return length;
    // return the length variable
  }
//test cases:
var resultLength1 = getArrayLength([1, 3, 4, 5, 7]);
console.log('should log 5:', resultLength1);

var resultLength2 = getArrayLength(['a', 'b', 'c', 'd']);
console.log('should log 4:', resultLength2);

//----------------------------------------------------------------------------------------------------

//Getting the last element of an Array
//Let us consider the case of wanting to get the last character in an array
//Were we to attempt to use an actual number index, we will be unsuccessful for the general case
//This is because we may not automatically know how long the array in question is

//We can do so using the .length property and the fact that an array's index start at 0:
var lastElement = [1, 2, 3, 4, 5][[1, 2, 3, 4, 5].length - 1];
console.log('last element:', lastElement); //logs last element: 5

//We can also do this with variables:
var numberSequence = [1, 2, 3, 4, 5];
var lastIndex = numberSequence.length - 1;

var lastElement = numberSequence[lastIndex];
console.log('lastElement:', lastElement);
//challenge:
function getLastElement(array) {
    // create a lastIndex variable
    // assign it to the last index in the array
    var lastIndex = array.length - 1;
    // create a lastElement variable
    // assign it to the last element in the string (make use of lastIndex)
    var lastElement = array[lastIndex];
    return lastElement;
    // return the lastElement variable
  }
//test cases:
var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);

//----------------------------------------------------------------------------------------------------

//Adding an Element to the back of an Array
//Let us consider the case of wanting to add an element to the back of an existing array

//We can do so using the .push() method:
var array = [1, 2, 3, 4];
array.push(5); //adds new element(5) to array
console.log('array with newly added element:', array); //logs array with newly added element: [1, 2, 3, 4, 5]

//We can also do this with variables:
var messages = ['Hey', 'Sounds good', 'See you then'];
var newMessage = 'On my way!';
messages.push(newMessage);
console.log('list of messages with new message added:', messages);

//challenge:
function applyPush(array, element) {
    // add the element to the back of the array
    array.push(element);
    return array;
    // return the array
  }
//test cases:
var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2);

//----------------------------------------------------------------------------------------------------

//Removing an Element from the back of an Array:
//Let us consider the case of wanting to remove an element from the back of an existing array

//We can do so using the .pop() method:
var array = [1, 2, 3, 4];
var elementPopped = array.pop(); //array.pop() removes last element when left empty
console.log('array without removed element:', array);
console.log('element removed:', elementPopped);

//We can also do this with variables:
var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Sunday'];
var dayPopped = weekdays.pop(); //array.pop() removes last element when left empty
console.log('week days with last element removed:', weekdays);
console.log('last day removed:', dayPopped);
//challenge:
function applyPop(array) {
    // create a popped variable
    // assign it to an expression removing the last element from the array
    var popped = array.pop(); //array.pop() removes last element when left empty
    return popped;
    // return the popped variable
  }
//test cases:
var resultElement1 = applyPop([1, 171, 129]);
console.log('should log 129:', resultElement1);

var resultElement2 = applyPop(['islands', 'peninsulas', 'pacific']);
console.log('should log pacific:', resultElement2);

//----------------------------------------------------------------------------------------------------

//Adding an Element to the front of an Array:
//Let us consider the case of wanting to add an element to the front of an existing array

//We can do so using the .unshift() method:
var array = [2, 3, 4];
array.unshift(1);
console.log('array with newly added element:', array);

//We can also do this with variables:
var places = ['Second', 'Third', 'Fourth'];
var firstPlace = 'First';
places.unshift(firstPlace);
console.log('list of places with new place added:', places);

//challenge:
function applyUnshift(array, element) {
    // add the element to the front of the array
    // return the array
  }
//test cases:
var resultArray1 = applyUnshift([7, 9, 4], 1);
console.log('should log [1, 7, 9, 4]:', resultArray1);

var resultArray2 = applyUnshift(['ef', 'hi'], 'bc');
console.log('should log ["bc", "ef", "hi"]:', resultArray2);

//----------------------------------------------------------------------------------------------------

//Adding an Element to the front of an Array:
//Let us consider the case of wanting to add an element to the front of an existing array

//We can do so using the .unshift() method:
var array = [2, 3, 4];
array.unshift(1); //array.unshift(1); adds 1 to beginning of array, so array = [2, 3, 4] -> array = [1, 2, 3, 4]
console.log('array with newly added element:', array);

//We can also do this with variables:
var places = ['Second', 'Third', 'Fourth'];
var firstPlace = 'First';
places.unshift(firstPlace);
console.log('list of places with new place added:', places);
//challenge:
function applyUnshift(array, element) {
    // add the element to the front of the array
    array.unshift(element);
    return array;
    // return the array
  }
//test cases:
var resultArray1 = applyUnshift([7, 9, 4], 1);
console.log('should log [1, 7, 9, 4]:', resultArray1);

var resultArray2 = applyUnshift(['ef', 'hi'], 'bc');
console.log('should log ["bc", "ef", "hi"]:', resultArray2);

//----------------------------------------------------------------------------------------------------

//Removing an Element from the front of an Array
//Let us consider the case of wanting to remove an element from the front of an existing array

//We can do so using the .shift() method:
var array = [1, 2, 3, 4];
var elementShifted= array.shift();
console.log('array without removed element:', array);
console.log('element removed:', elementShifted);

//We can also do this with variables:
var activities = ['running', 'hiking', 'dancing', 'singing'];
var activityShifted = activities.shift();
console.log('activities with first element removed:', activities);
console.log('first activity removed:', activityShifted);
//challenge:
function applyShift(array) {
    // create a shifted variable
    // assign it to an expression removing the first element from the array
    var shifted = array.shift();
    return shifted;
    // return the shifted variable
  }
//test cases:
var resultElement1 = applyShift([1, 171, 129]);
console.log('should log 1:', resultElement1);

var resultElement2 = applyShift(['islands', 'peninsulas', 'pacific']);
console.log('should log islands:', resultElement2);

//----------------------------------------------------------------------------------------------------

//Adding an Element in General(anywhere) (.splice (a))
//Let us consider the case of wanting to add an element, without replacing anything, to an existing array
//Let us further consider that we do not want to add the element to the back or the front, as we have done thus far

//We can do so using the .splice() method:
var array = [1, 2, 4];
array.splice(2, 0, 3); //first argument(2) = index where you want to perfom the splice, second argument(0) = how many elements you want to delete, all arguments after(3) = elements you want to add to index where you are splicing
console.log('array with newly added element:', array); //logs array with newly added element: [1, 2, 3, 4]

//We can also do this with variables:
var alphabeticallyOrderedItems = ['Bacon', 'Eggs', 'Yogurt'];
var newItem = 'Sausage';
var indexOfNewItem = 2;

alphabeticallyOrderedItems.splice(indexOfNewItem, 0, newItem);
console.log('list of alphabetically ordered items with new item added:', alphabeticallyOrderedItems);

//challenge:
function addAnElementInGeneral(array, index, element) {
    // add the element to the array at the index given
    // (be sure not to replace any existing elements)
    array.splice(index, 0, element);
    return array;
    // return the array
  }
//test cases:
var resultArray1 = addAnElementInGeneral([7, 9, 10], 1, 8);
console.log('should log [7, 8 , 9, 10]:', resultArray1);

var resultArray2 = addAnElementInGeneral(['q', 'r', 't'], 2, 's');
console.log('should log ["q", "r", "s", "t"]:', resultArray2);

//----------------------------------------------------------------------------------------------------

//Removing an Element in General(anywhere) (.splice (b))
//Let us consider the case of wanting to remove an element from an existing array
//Let us further consider that we do not want to remove the element from the back or the front, as we have done thus far

//We can do so using the .splice() method:
var array = [1, 2, 'mistake', 3];
array.splice(2, 1); //first argument(2) = index where you want to perfom the splice, second argument(1) = how many elements you want to delete
console.log('array with element removed:', array);

//We can also do this with variables:
var lunchItems = ['Turkey Sandwich', 'Falafel', 'Processor Speed', 'Gyro'];
var indexOfItemToBeRemoved = 2;

lunchItems.splice(indexOfItemToBeRemoved, 1);
console.log('list of lunch items with incorrect item removed:', lunchItems);

//challenge:
function removeAnElementInGeneral(array, index) {
    // remove the element from the array at the index given
    array.splice(index, 1);
    return array;
    // return the array
  }
//test cases:
var resultArray1 = removeAnElementInGeneral([8, 9, 10, 'bad entry', 11], 3);
console.log('should log [8, 9, 10, 11]:', resultArray1);

var resultArray2 = removeAnElementInGeneral(['one', 'two', 452, 'three'], 2);
console.log('should log ["one", "two", "three"]:', resultArray2);

//----------------------------------------------------------------------------------------------------

//Removing and Adding Elements in General (.splice (c))
//Let us consider the case of wanting to remove a certain number of elements from an index in an existing array, and add another certain number of elements, in the same place, to the same array

//We can do so using the .splice() method:
var array = [1, 2, 3, 'mistake1', 'mistake2', 6];
array.splice(3, 2, 4, 5); //first argument(3) = index where you want to perfom the splice, second argument(2) = how many elements you want to delete, all arguments after(4, 5) = elements you want to add to index where you are splicing
console.log('array with elements spliced:', array);

//We can also do this with variables:
var lunchItems = ['Turkey Sandwich', 'Falafel', 'Paella', 'Processor Speed', 'RAM', 'Gyro'];
var indexOfFirstItemToBeRemoved = 3;
var numberOfItemsToRemove = 2;
var itemToBeAdded1 = 'Fish Tacos';
var itemToBeAdded2 = 'Pizza';

lunchItems.splice(indexOfFirstItemToBeRemoved, numberOfItemsToRemove, itemToBeAdded1, itemToBeAdded2);
console.log('list of lunch items after splicing:', lunchItems);
//challenge:
function applySplice(array, index, item1, item2) {
    // remove two elements from the array at the index given, and adds item1 and item2 in their place
    array.splice(index, 2, item1, item2);
    return array;
    // return the array
  }
//test cases:
var resultArray1 = applySplice([8, 9, 10, 'bad entry1', 'bad entry2', 13], 3, 11, 12);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(['one', 'two', 452, 672, 'five'], 2, 'three', 'four');
console.log('should log ["one", "two", "three", "four", "five"]:', resultArray2);

//----------------------------------------------------------------------------------------------------

//Determining if a value is an Array
//Let us consider the case of wanting to determine if a value is an array

//We can do so using the Array.isArray() method:
var array = [0, 3, 4];
console.log('input is an array:', Array.isArray(array));

var name = 'Tovio';
console.log('input is an array:', Array.isArray(name));

//We can also do this with variables:
var holidays = ['Christmas', 'Memorial Day', 'Ramadan', 'Holi'];
var isHolidaysAnArray = Array.isArray(holidays);
console.log('holidays is an array:', isHolidaysAnArray);

var eventDate = 'May 25th, 1931';
var isEventDateAnArray = Array.isArray(eventDate);
console.log('eventDate is an array:', isEventDateAnArray);

//challenge:
function isAnArray(input) {
    // create a result variable
    // assign it to a call to the applicable method
    var result = Array.isArray(input);
    return result;
    // return the result variable
  }
//test cases:
var resultBoolean1 = isAnArray([1, 2, 3]);
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArray({name: 'Tom', friend: 'Jerry'});
console.log('should log false:', resultBoolean2);

//----------------------------------------------------------------------------------------------------

//Slicing a portion of an Array (and making a copy)
//Let us consider the case of wanting a specific section of an existing array, or:
//The case of wanting to make a copy of an existing array
//In both cases, let us further consider that we do not wish to alter the original array

//We can do so using the .slice() method:
var array = ['a', 'b', 'c', 'd', 'e'];

var sliceOfArray1 = array.slice(0, 2);
console.log('slicing a portion of the array from before index 0, to before index 2:', sliceOfArray1) //logs slicing a portion of the array from before index 0, to before index 2: [ 'a', 'b' ]
var array = ['a', 'b', 'c', 'd', 'e'];

var sliceOfArray2 = array.slice(2, 5); // OR array.slice(2); OR array.slice(2, array.length);
console.log('slicing a portion of the array from before index to, to before index 5 OR from index 2 to rest of array:', sliceOfArray2);

console.log('slicing the array does not affect the original array:', array);
var array = ['a', 'b', 'c', 'd', 'e'];

var copyOfArray = array.slice();
console.log('copy of array:', copyOfArray);

//We can also do this with variables:
var altitudesAlongHikingTrail = [20, 70, 110, 170, 120, 40];
var todaysHike = altitudesAlongHikingTrail.slice(1, 4);

console.log('altitudes for today\'s hike:', todaysHike);

console.log('original altitudes along trail is not affected by slice:', altitudesAlongHikingTrail);
var originalListOfVegatables = ['squash', 'bell pepper', 'artichoke', 'cucumber'];
var copyOfListOfVegatables = originalListOfVegatables.slice();

console.log('copy of list of vegatables:', copyOfListOfVegatables); //logs copy of list of vegatables: [ 'squash', 'bell pepper', 'artichoke', 'cucumber' ]

//challenge:
function applySlice(array, start, end) {
    // create a sliceOfArray variable
    // assign it to a portion of the array from before start, up to, but not including end
    var sliceOfArray = array.slice(start, end);
    return sliceOfArray;
    // return the sliceOfArray variable
  }
//test cases:
var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('should log ["u", "e", "u"]:', resultOfSlice1);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log('should log [2, 3, 4, 5, 6, 7]:', resultOfSlice2);

//challenge: Using .slice() to make a copy
function makeACopy(array) {
  // create a copyOfArray variable
  // assign it to a copy of the array
  var copyOfArray = array.slice();
  return copyOfArray;
  // return the copyOfArray variable
}
//test cases:
var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultCopy1 = makeACopy(array1);
console.log('should log ["Q", "u", "e", "u", "e"]:', resultCopy1);

var array2 = [0, 1, 2, 3, 4];
var resultCopy2 = makeACopy(array2);
console.log('should log [0, 1, 2, 3, 4]:', resultCopy2);

//----------------------------------------------------------------------------------------------------

//Adding the contents of an Array to another Array
//Let us consider the case of wanting to add the contents of one array to another array
//Let us further consider that we do not wish to affect either original array

//We can do so using the .concat() method
var array1 = [1, 2, 3];
var array2 = ['a', 'b', 'c'];
var array3 = ['do', 're', 'mi'];

var resultOfConcat1 = array1.concat(array2);
console.log('concatting array1 and array2 together:', resultOfConcat1); //[1,2,3,a,b,c]... each array by itself is not affected by the concat
console.log('-------------------------\n');
console.log('array1 is unaffected:', array1); //each array by itself is not affected by the concat
console.log('array2 is unaffected:', array2); //each array by itself is not affected by the concat

console.log('-------------------------\n');

var resultOfConcat2 = resultOfConcat1.concat(array3);
console.log('concatting array3 into our previous result:', resultOfConcat2);
console.log('-------------------------\n');
console.log('array1 is unaffected:', array1);
console.log('array2 is unaffected:', array2);
console.log('array3 is unaffected:', array3);
console.log('resultOfConcat1 is unaffected:', resultOfConcat1);

console.log('-------------------------\n');

var resultOfConcat3 = array1.concat(array2, array3); //[1,2,3,a,b,c,do,re,mi]
console.log('concatting multiple arrays:', resultOfConcat3);

//We can also do this with variables:
var breakfastItems = ['bacon', 'eggs', 'coffee', 'pancakes'];
var lunchItems = ['falafel', 'gyro', 'pad thai', 'sandwich'];
var dinnerItems = ['skirt steak', 'pork chops', 'lasagne', 'lamb shank'];

var brunchItems = breakfastItems.concat(lunchItems);
console.log('items for brunch:', brunchItems);

var happyHourItems = lunchItems.concat(dinnerItems);
console.log('items for happy hour:', happyHourItems);

var entireMenu = breakfastItems.concat(lunchItems, dinnerItems);
console.log('entire menu of items:', entireMenu);

//challenge:
function applyConcat(array1, array2) {
  // create a concattedArray variable
  // assign it to the contents of both array1 and array2
  var concattedArray = array1.concat(array2);
  return concattedArray;
  // return the concattedArray variable
}
//test cases:
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f']
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1);

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);

//----------------------------------------------------------------------------------------------------

//Transforming an Array into a String
//Let us consider the case of wanting to transform an array into a string

//We can do so using the .join() method
var joinedOnNothing = ["a", "b", "c"].join();
console.log('joined with no argument supplied:', joinedOnNothing);
var joinedOnEmptyString = ["a", "b", "c"].join("");
console.log('joined on an empty string:', joinedOnEmptyString);
var joinedOnAString = ["a", "b", "c"].join("-"); //.join("-") adds - in between each elements
console.log('joined on a string:', joinedOnAString); //joined on a string: a-b-c

//We can also do so with variables:
var listOfCountingSequence = [1, 2, 3, 4, 5];
var countingSequence = listOfCountingSequence.join();
console.log('counting sequence:', countingSequence);
var lettersInWord = ['M', 'e', 'r', 'g', 'e', 's', 'o', 'r', 't'];
var joiner = "";
var joinedWord = lettersInWord.join(joiner);
console.log('word after joining on empty string:', joinedWord);
var wordsInSentence = ['I', 'am', 'learning', 'to', 'code'];
var joiner = ' ';
var joinedSentece = wordsInSentence.join(joiner);
console.log('sentence after joining on a space:', joinedSentece);

//challenge:
function applyJoin(arrayOfStrings, string) {
  // create a joinedString variable
  // assign it to a string which is all of the strings in the input array separated by the input string
  var joinedString = arrayOfStrings.join(string);
  return joinedString;
  // return the joinedString variable
}
//test cases:
var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('should log joined string:', resultString1);

var resultString2 = applyJoin(['git', 'commit'], ' ');
console.log('should also log joined string:', resultString2);

//----------------------------------------------------------------------------------------------------

//Transforming a String into an Array
//Let us consider the case of wanting to transform a string into an array

//We can do so using the .split() method
var splitOnNothing = "abc".split();
console.log('split with no argument supplied:', splitOnNothing);
var splitOnEmptyString = "abc".split("")
console.log('split on an empty string:', splitOnEmptyString);
var splitOnAString = "a-b-c".split("-");
console.log('split on a string:', splitOnAString);

//We can also do so with variables:
var generatedID = 'a1d8b5q9';
var arrayVersionOfId = generatedID.split();
console.log('array with one ID:', arrayVersionOfId);
var word = 'Networking';
var separator = '';
var lettersInWord = word.split(separator);
console.log('letters in word:', lettersInWord);
var sentence = 'Approaching the end of operators and methods';
var separator = ' ';
var wordsInSentence = sentence.split(separator);
console.log('words in sentence:', wordsInSentence);

//challenge:
function applySplit(stringToBeSplit, splitter) {
  // create a splitString variable
  // assign it to an array which contains the elements in the stringToBeSplit separated by the splitter
  var splitString = stringToBeSplit.split(splitter);
  return splitString;
  // return the splitString variable
}
//test cases:
var resultArray1 = applySplit('first--second--third', '--');
console.log('should log split string:', resultArray1);

var resultArray2 = applySplit('git push origin master', ' ');
console.log('should also log split string:', resultArray2);

//----------------------------------------------------------------------------------------------------

//Using the indexOf Method on an Array
//Let us consider the case of wanting to determine where in an array we can find a particular element

//We can do so using the .indexOf() method for string
var indexOfElement1 = ['a', 'b', 'c', 'd'].indexOf('c');
console.log('index where element is first found:', indexOfElement1);

//If the element is not present, the call to indexOf will return -1:
var indexOfElement2 = ['a', 'b', 'c', 'd'].indexOf('q');
console.log('index if element is not found:', indexOfElement2);

//We say "first found" in the last example, because we can also tell our call to indexOf that it should begin searching after a certain index:
var indexOfElement = [1, 2, 3, 1, 5, 9].indexOf(1, 2);
console.log('index where element is found after index 2:', indexOfElement);

//We can also do this with variables:
var ingredients = ['butter', 'sugar', 'flour', 'chocolate chips'];
var searchIngredient = 'flour';
var indexOfIngredient = ingredients.indexOf(searchIngredient);
console.log('index where ingredient is found:', indexOfIngredient);

//And again, if the element is not present, the call to indexOf will return -1:
var ingredients = ['butter', 'sugar', 'flour', 'chocolate chips'];
var searchIngredient = 'pecans';
var indexOfIngredientNotFound = ingredients.indexOf(searchIngredient);
console.log('index if ingredient is not found:', indexOfIngredientNotFound);

//Finally, we can again search for an element beginning after a certain index in an array:
var workOrders = ['installation', 'repair', 'SYSTEM RESET', 'maintenance', 'repair'];
var indexOfSystemReset = workOrders.indexOf('SYSTEM RESET');
var indexOfFirstRepairAfterReset = workOrders.indexOf('repair', indexOfSystemReset + 1);
console.log('index of first repair order after reset:', indexOfFirstRepairAfterReset);

//challenge:
function applyIndexOfToArray(array, element) {
  // create an index variable
  // assign it to the index inside of array where element can be found
  var index = array.indexOf(element);
  return index;
  // return the index variable
}
//test cases:
var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('should log 1:', resultIndex1);

var array2 = ['size', 'color', 'cut', 'price'];
var element2 = 'style';
var resultIndex2 = applyIndexOfToArray(array2, element2);
console.log('should log -1:', resultIndex2);