/*
Self Assessment 0: Minimum Requirements
Instructions:
Create the functions as described in each exercise. Our tests will check your functions only if they adhere to the exact function name described — so double check what you implement.

For these exercises, please do not worry about arguments outside what’s described. For example, if a function should accept a number argument, do not worry about the possibility that its input is anything but a number. If it should expect different types of arguments, you can then assume so.

This is an open book assessment -- we encourage you to use MDN  if you need a reference. If you do not know what MDN is at this time, do not worry; it's simply a good go-to reference for a lot of Javascript content.

You will see passing tests as you go if you implemented your functions correctly.

Feel free to click "Run Tests" as many times as you would like to see if your code runs correctly against the built-in tests.

Happy Hacking!
*/

//Exercise 1 (strings and variables)
//Submitted on Today at 1:01 PM
//Write function helloPerson which takes in a name input and logs a greeting to the console. Note, this function should not have a return value.

//For example, if someone calls your function helloPerson(‘Petra’);

//It should log exactly: “Hello, Petra”

//Similarly, if your function were called with the argument “Juan”, it should log exactly: “Hello, Juan”

//And so on..
function helloPerson(name) {
    //implement this function
    console.log('Hello, ' + name);
  }

//----------------------------------------------------------------------------------------------------

//Exercise 2 (boolean values/conditional statements)
//Submitted on Today at 1:02 PM
//Write a function oppositeDay, which takes in a boolean value, and returns the opposite of that value.

//For example, oppositeDay(false) should return the boolean value true.
function oppositeDay(boolean) {
    //implement this function
    var opposite = !boolean;
    return opposite;
  }

//----------------------------------------------------------------------------------------------------

//Exercise 3 (strings)
//Submitted on Today at 1:03 PM
//Write a function get10thChar which returns, you guessed it, the 10th character of an input string. Assume all input strings will have at least 10 characters
function get10thChar(str) {
    //implement this function
    var char10 = str[9];
    return char10;
  }

//----------------------------------------------------------------------------------------------------

//Exercise 4 (using a loop, arrays, and array indexes):
//Submitted on Today at 1:17 PM
//Write a function indexesOnly which takes in an array, and replaces each element with their corresponding index values then returns that array.

//For example, if indexesOnly is called with the argument [“a”, “b”, “c”, 10, true], the return value should be [0,1,2,3,4];

//Your function should not create a new array, but replace the values of the original input array.

//Note: If you attempt to submit your code, and your browser freezes or stops responding, there's a good chance you've created an infinite loop in your code -- check and debug that! :-)
function indexesOnly(arr) {
    //implement this function
    for (var i = 0; i < arr.length; i++){
        arr[i] = i;
    }
    return arr;
  }

//----------------------------------------------------------------------------------------------------

//Exercise 5 (objects)
//Submitted on Today at 1:20 PM
//Write a function myLaptopInfo which takes in no input values, and returns an object with the properties “type”, “color”, and “yearPurchased”. The values of each property is up to you, and you can explicitly type out these values, but these three properties should exist within the object your function returns.

//For example, if myLaptopInfo were called, it would return:

//{ type : 'Macbook Air', color : 'Burgundy', yearPurchased : 2016 }
function myLaptopInfo() {
    //implement this function
    var obj = {
        type: 'gaming', color: 'red', yearPurchased: '2022'
    }
    return obj;
  }

//----------------------------------------------------------------------------------------------------

//Exercise 6 (parameters, object properties, and strings)
//Write a function sayFavoriteFood which takes in an object with a name and favoriteFood property. The function will return a string stating the person's name and favorite food. You can assume that the input object will always have these two properties.

//For example:

//var person = { name : "Kevin", favoriteFood : "tacos" };
//sayFavoriteFood(person);
//Will return: "Kevin's favorite food is tacos"

function sayFavoriteFood(person) {
    //implement this function
  return person.name + "'s favorite food is " + person.favoriteFood;
  }

//----------------------------------------------------------------------------------------------------

//Self Assessment 0: Additional Exercises
//Similar to the minimum requirements section, answer as many questions as you can.

//Exercise 1 (loops, accessing an array, numbers, variables)
//Submitted on Today at 1:55 PM
//Write a function addOdds which receives an array of numbers, and sums up only the odd numbers.

//For example:

//var numArray = [1, 11, 20, 21, 30];
//addOdds(numArray);
//Will return: 33 from adding 1, 11, and 21, the odd numbers of numArray.
function addOdds(numArray) {
  //implement this function
    var sum = 0;
    
  for (var i = 0; i < numArray.length; i++){
        
      if (numArray[i] % 2 !== 0){
          sum += numArray[i];
      }
  }
  return sum;
}